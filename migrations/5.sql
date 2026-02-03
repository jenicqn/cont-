
CREATE TABLE inventory_counts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  employee_name TEXT NOT NULL,
  quantity_closed REAL,
  quantity_open REAL,
  total_quantity REAL NOT NULL,
  unit TEXT NOT NULL,
  count_date DATE NOT NULL,
  count_time TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_inventory_counts_product_id ON inventory_counts(product_id);
CREATE INDEX idx_inventory_counts_user_id ON inventory_counts(user_id);
CREATE INDEX idx_inventory_counts_count_date ON inventory_counts(count_date);
