
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  icon TEXT,
  display_order INTEGER,
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, icon, display_order) VALUES 
  ('Carnes', '🥩', 1),
  ('Pães', '🍞', 2),
  ('Batata', '🥔', 3),
  ('Bebidas', '🥤', 4),
  ('Sobremesas', '🍰', 5),
  ('Embalagens', '📦', 6);
