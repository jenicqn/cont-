
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Chapa');
