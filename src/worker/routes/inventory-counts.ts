import { Hono } from "hono";
import { authMiddleware } from "@getmocha/users-service/backend";

const app = new Hono<{ Bindings: Env }>();

// Get all inventory counts
app.get("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  
  try {
    const result = await db
      .prepare(`
        SELECT ic.*, p.name as product_name, p.unit, c.name as category_name
        FROM inventory_counts ic
        JOIN products p ON ic.product_id = p.id
        JOIN categories c ON p.category_id = c.id
        ORDER BY ic.created_at DESC
      `)
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching inventory counts:", error);
    return c.json({ error: "Failed to fetch inventory counts" }, 500);
  }
});

// Get inventory counts by date range
app.get("/range", authMiddleware, async (c) => {
  const db = c.env.DB;
  const startDate = c.req.query("start_date");
  const endDate = c.req.query("end_date");
  
  try {
    const result = await db
      .prepare(`
        SELECT ic.*, p.name as product_name, p.unit, c.name as category_name
        FROM inventory_counts ic
        JOIN products p ON ic.product_id = p.id
        JOIN categories c ON p.category_id = c.id
        WHERE ic.count_date BETWEEN ? AND ?
        ORDER BY ic.created_at DESC
      `)
      .bind(startDate, endDate)
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching inventory counts:", error);
    return c.json({ error: "Failed to fetch inventory counts" }, 500);
  }
});

// Create inventory count
app.post("/", authMiddleware, async (c) => {
  const db = c.env.DB;
  const {
    product_id,
    user_id,
    employee_name,
    quantity_closed,
    quantity_open,
    total_quantity,
    unit,
    count_date,
    count_time,
  } = await c.req.json();
  
  try {
    const result = await db
      .prepare(`
        INSERT INTO inventory_counts (
          product_id, user_id, employee_name, quantity_closed, quantity_open,
          total_quantity, unit, count_date, count_time, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `)
      .bind(
        product_id,
        user_id,
        employee_name,
        quantity_closed,
        quantity_open,
        total_quantity,
        unit,
        count_date,
        count_time
      )
      .run();
    
    return c.json({ success: true, id: result.meta.last_row_id });
  } catch (error) {
    console.error("Error creating inventory count:", error);
    return c.json({ error: "Failed to create inventory count" }, 500);
  }
});

// Get inventory counts by product
app.get("/product/:productId", authMiddleware, async (c) => {
  const db = c.env.DB;
  const productId = c.req.param("productId");
  
  try {
    const result = await db
      .prepare(`
        SELECT * FROM inventory_counts
        WHERE product_id = ?
        ORDER BY created_at DESC
      `)
      .bind(productId)
      .all();
    
    return c.json(result.results);
  } catch (error) {
    console.error("Error fetching inventory counts:", error);
    return c.json({ error: "Failed to fetch inventory counts" }, 500);
  }
});

export default app;
