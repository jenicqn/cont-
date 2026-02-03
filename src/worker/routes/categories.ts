import { Hono } from "hono";
import { authMiddleware } from "@getmocha/users-service/backend";

const app = new Hono<{ Bindings: Env }>();

// Get all categories
app.get("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  
  try {
    const result = await db
      .prepare("SELECT id, name, icon, display_order FROM categories WHERE is_active = 1 ORDER BY display_order")
      .all();
    
    return c.json(result.results || []);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return c.json({ error: "Failed to fetch categories" }, 500);
  }
});

// Create category
app.post("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  const { name, icon, display_order } = await c.req.json();
  
  try {
    const result = await db
      .prepare(
        `INSERT INTO categories (name, icon, display_order, created_at, updated_at)
         VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
      )
      .bind(name, icon, display_order)
      .run();
    
    return c.json({ success: true, id: result.meta.last_row_id });
  } catch (error) {
    console.error("Error creating category:", error);
    return c.json({ error: "Failed to create category" }, 500);
  }
});

// Update category
app.put("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  const { name, icon, display_order } = await c.req.json();
  
  try {
    await db
      .prepare(
        `UPDATE categories
         SET name = ?, icon = ?, display_order = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`
      )
      .bind(name, icon, display_order, id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error updating category:", error);
    return c.json({ error: "Failed to update category" }, 500);
  }
});

// Delete category (soft delete)
app.delete("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  
  try {
    await db
      .prepare("UPDATE categories SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return c.json({ error: "Failed to delete category" }, 500);
  }
});

export default app;
