
-- Insert categories (skip if already exist)
INSERT OR IGNORE INTO categories (id, name, icon, display_order, is_active, created_at, updated_at) VALUES
(7, 'Cozinha Principal', '👨‍🍳', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Chapa', '🍳', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(12, 'Salão • Bebidas', '🥤', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(13, 'Descartáveis • Cozinha', '📦', 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(14, 'Produto Limpeza • Cozinha', '🧹', 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(15, 'Descartáveis • Salão', '🍽️', 6, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(16, 'Produto Limpeza • Salão', '🧼', 7, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Cozinha Principal (category 7)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(1, 'Pão', 'un', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Pão Australiano', 'un', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Bag catchup heinz', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Bag mostarda', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Catchup sachê heinz', 'cx', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'Mostarda sache', 'cx', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(7, 'Maionese verde', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Maionese de alho', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'Cebola Caramelizada', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(10, 'Cebola Crispy', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(11, 'Barbecue', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(12, 'Geleia de pimenta', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(13, 'Picles', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(14, 'Costela desfiada (pronta)', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(15, 'Molho cheddar', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(16, 'Ovo', 'un', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(17, 'Sal', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(18, 'Farinha panko', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(19, 'Farinha de trigo', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(20, 'Açucar mascavo', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(21, 'Amido de Milho', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(22, 'Pimenta calabresa', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(23, 'Páprica picante', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(24, 'Pimenta do reino', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(25, 'Peper lemon', 'lt', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(26, 'Oléo 900ml', 'lt', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(27, 'Leite', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(28, 'Café', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(29, 'Açúcar', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(30, 'Cebola Branca', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(31, 'Cebola roxa', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(32, 'Tomate', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(33, 'Cheiro Verde', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(34, 'Alho', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(35, 'Limão', 'kg', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(36, 'Alface', 'un', 7, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Chapa (category 8)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(53, 'Carne discada 90g', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(54, 'Bacon fatiado', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(55, 'Batata Palito', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(56, 'Cheddar fatiado', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(57, 'Queijo prato', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(58, 'Cream cheese', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(59, 'Requeijão', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(60, 'Gorgonzola', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(61, 'Gouda', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(62, 'Anel de cebola', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(63, 'Nuggets', 'kg', 8, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Salão • Bebidas (category 12)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(72, 'Coca cola', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(73, 'Coca zero', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(74, 'Guarana', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(75, 'Guarana zero', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(76, 'Sprite', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(77, 'Fanta uva', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(78, 'Fanta laranja', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(79, 'Guaraviton', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(80, 'Água sem gás', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(81, 'Água com gás', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(82, 'Guaravita', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(83, 'Heineken', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(84, 'Corona longneck', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(85, 'Suco dell vale uva', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(86, 'Suco dell vale pessego', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(87, 'Suco dell vale Maracuja', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(88, 'Suco dell vale Manga', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(89, 'H2o limão', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(90, 'H2o limoneto', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(91, 'Xarope Monin maçã verde', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(92, 'Xarope Monin morango', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(93, 'Xarope Monin CHá preto', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(94, 'Xarope Monin cramberry', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(95, 'Xarope Monin Maracujá', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(96, 'Xarope Monin Melancia', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(97, 'Xarope Monin KIWI', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(98, 'Xarope Monin Curaçao blue', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(99, 'Xarope Monin Le fruit kiwi', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(100, 'Vodca', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(101, 'Velho barreiro', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(102, 'Limão', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(103, 'AÇUCAR', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(104, 'Gelo', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(105, 'Mostarda bisnaga', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(106, 'Catchup bisnaga', 'un', 12, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Descartáveis • Cozinha (category 13)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(107, 'Kraft P G', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(108, 'Acoplado', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(109, 'Pote maionese', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(110, 'Guardanapo delivery', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(111, 'Papel manteiga', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(112, 'Copinho', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(113, 'Colher', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(114, 'Batata P', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(115, 'Batata G', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(116, 'Nome dos lanches', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(117, 'Grampo', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(118, 'Caneta', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(119, 'Canudo milkshake', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(120, 'Tampa Milkshake', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(121, 'Saquinho de batata', 'un', 13, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Produto Limpeza • Cozinha (category 14)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(122, 'Detergente', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(123, 'Sabão em pó', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(124, 'Bucha', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(125, 'Bucha da chapa', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(126, 'Água sanitaria', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(127, 'Àlcool', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(128, 'Produto chapa', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(129, 'Saco De lixo', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(130, 'Perfex', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(131, 'Papel toalha', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(132, 'Insulfime', 'un', 14, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Descartáveis • Salão (category 15)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(133, 'Guardanapo Mesa', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(134, 'Copo 300ml', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(135, 'Copo 180ml', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(136, 'Canudo bebida', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(137, 'Canudo Milkshake', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(138, 'Colher milk', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(139, 'Garfo batata', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(140, 'Saquinho de geladinho', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(141, 'Sache de sal', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(142, 'Sache de açúcar', 'un', 15, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert products for Produto Limpeza • Salão (category 16)
INSERT OR IGNORE INTO products (id, name, unit, category_id, minimum_stock, is_active, created_at, updated_at) VALUES
(143, 'Papel higienico', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(144, 'Papel toalha (banheiro)', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(145, 'Sabonete (banheiro)', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(146, 'Álcool em gel', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(147, 'Cheirinho do banheiro', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(148, 'Desinfetante', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(149, 'Saco de lixo banheiro', 'un', 16, 0.0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
