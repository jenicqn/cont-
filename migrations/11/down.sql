
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Salão • Bebidas') AND name IN ('Xarope Monin KIWI', 'Xarope Monin Curaçao blue', 'Xarope Monin Le fruit kiwi', 'Vodca', 'Velho barreiro', 'Limão', 'AÇUCAR', 'Gelo', 'Mostarda bisnaga', 'Catchup bisnaga');
DELETE FROM products WHERE category_id = (SELECT id FROM categories WHERE name = 'Descartáveis • Cozinha');
