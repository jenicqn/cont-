import { Hono } from "hono";
import { authMiddleware } from "@getmocha/users-service/backend";

const app = new Hono<{ Bindings: Env }>();

// Get all products
app.get("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  
  try {
    const result = await db
      .prepare("SELECT * FROM products WHERE is_active = 1 ORDER BY name")
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching products:", error);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Get products by category
app.get("/category/:categoryId", authMiddleware, async (c) => {
  const db = c.env.DB;
  const categoryId = c.req.param("categoryId");
  
  try {
    const result = await db
      .prepare("SELECT * FROM products WHERE category_id = ? AND is_active = 1 ORDER BY name")
      .bind(categoryId)
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching products:", error);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Create product
app.post("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  const { category_id, name, unit, minimum_stock } = await c.req.json();
  
  try {
    const result = await db
      .prepare(
        `INSERT INTO products (category_id, name, unit, minimum_stock, created_at, updated_at)
         VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
      )
      .bind(category_id, name, unit, minimum_stock)
      .run();
    
    return c.json({ success: true, id: result.meta.last_row_id });
  } catch (error) {
    console.error("Error creating product:", error);
    return c.json({ error: "Failed to create product" }, 500);
  }
});

// Update product
app.put("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  const { category_id, name, unit, minimum_stock } = await c.req.json();
  
  try {
    await db
      .prepare(
        `UPDATE products
         SET category_id = ?, name = ?, unit = ?, minimum_stock = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`
      )
      .bind(category_id, name, unit, minimum_stock, id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error updating product:", error);
    return c.json({ error: "Failed to update product" }, 500);
  }
});

// Delete product (soft delete)
app.delete("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  
  try {
    await db
      .prepare("UPDATE products SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return c.json({ error: "Failed to delete product" }, 500);
  }
});

export default app;
