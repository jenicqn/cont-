import { Hono } from "hono";
import { authMiddleware } from "@getmocha/users-service/backend";

const app = new Hono<{ Bindings: Env }>();

// Create user manually
app.post("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  const { email, role } = await c.req.json();
  
  try {
    await db
      .prepare(
        `INSERT INTO users (user_id, email, role, created_at, updated_at)
         VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
      )
      .bind(`manual_${Date.now()}`, email, role)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    return c.json({ error: "Failed to create user" }, 500);
  }
});

// Get all users
app.get("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  
  try {
    const result = await db
      .prepare("SELECT * FROM users ORDER BY created_at DESC")
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching users:", error);
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});

// Update user role
app.put("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  const { role } = await c.req.json();
  
  try {
    await db
      .prepare("UPDATE users SET role = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(role, id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error updating user:", error);
    return c.json({ error: "Failed to update user" }, 500);
  }
});

// Delete user
app.delete("/:id", authMiddleware, async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  
  try {
    await db
      .prepare("DELETE FROM users WHERE id = ?")
      .bind(id)
      .run();
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return c.json({ error: "Failed to delete user" }, 500);
  }
});

export default app;
