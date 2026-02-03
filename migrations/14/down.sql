
-- Remove all products
DELETE FROM products WHERE id >= 1 AND id <= 149;

-- Remove all categories
DELETE FROM categories WHERE id IN (7, 8, 12, 13, 14, 15, 16);
