
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Produto Limpeza • Cozinha');
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Descartáveis • Salão');
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Produto Limpeza • Salão');
