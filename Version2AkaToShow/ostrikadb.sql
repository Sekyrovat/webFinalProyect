-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2018 a las 11:04:12
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ostrikadb`
--
CREATE DATABASE IF NOT EXISTS `ostrikadb` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `ostrikadb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account`
--

CREATE TABLE `account` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'ID of the current user',
  `fName` tinytext COMMENT 'Fisrt name of the user',
  `lName` tinytext COMMENT 'Last name of the user',
  `Email` tinytext COMMENT 'Email of the user',
  `pwd` varchar(255) DEFAULT NULL COMMENT 'hashed password',
  `salt` varchar(255) DEFAULT NULL COMMENT 'Salt for the hash'
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COMMENT='Table containing the information for the user.';

--
-- RELACIONES PARA LA TABLA `account`:
--

--
-- Volcado de datos para la tabla `account`
--

INSERT INTO `account` (`id`, `fName`, `lName`, `Email`, `pwd`, `salt`) VALUES
(0, 'admin', 'admin', 'admin@ostrika.com', '$2y$10$HivmCYDo7MEm4beaZ4mnSeZ1ajOwHTFJDxol2oCr24Hc3gxRIHh7W', NULL),
(1, 'a', 'a', 'a@a.com', '$2y$10$H3nqYty0MYM1LHJdnUEWYOrVkbHioTzZSt1zwn15BjZjAi7D/vyNO', NULL),
(2, 'Denisse', 'Hernandez', 'denisse.hema@gmail.com', '$2y$10$3wcOHh6x4hz1a0q8Q8vbn.SVO1bdGOPh1Lnmu/Y3ZdJiJ474umnH.', NULL),
(3, 'Hector', 'Hernandez', 'hectorhm1596@gmail.com', '$2y$10$.meWQvXti7NvMZLekNXXx.jvLe.kQPzLKE3o1CkJEgKHxKMcHoDH.', NULL),
(4, 'Alfredo', 'Salazar', 'alfredosv08@gmail.com', '$2y$10$NaJn0zf6imNGjDhE4g/Ec.Pyqiq9.scrG6rHiCSIuuE2731IEzUC2', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `picsofproyects`
--

CREATE TABLE `picsofproyects` (
  `idproyect` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `type` varchar(5) NOT NULL COMMENT '''Alone'' single pics, ''Befor'' picture of before a proyect, and ''After'' picture after the proyect is done',
  `linkToPic` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COMMENT='Table to keep the link to images of all proyects.';

--
-- RELACIONES PARA LA TABLA `picsofproyects`:
--   `idproyect`
--       `proyect` -> `id`
--

--
-- Volcado de datos para la tabla `picsofproyects`
--

INSERT INTO `picsofproyects` (`idproyect`, `id`, `type`, `linkToPic`) VALUES
(1, 1, 'After', './images/IMG_5599.JPG'),
(1, 2, 'Befor', './images/IMG_0009.JPG'),
(1, 3, 'Befor', './images/IMG_3834.JPG'),
(1, 7, 'After', './images/IMG_5602.JPG'),
(1, 8, 'Befor', './images/IMG_3835.JPG'),
(1, 9, 'After', './images/IMG_4203.JPG'),
(10, 11, 'After', './images/IMG_3859.JPG'),
(10, 13, 'Befor', './images/IMG_3556.JPG'),
(10, 14, 'Befor', './images/IMG_2736.JPG'),
(10, 15, 'After', './images/IMG_3857.JPG'),
(10, 16, 'After', './images/IMG_5593.JPG'),
(10, 17, 'Befor', './images/06530057.JPG'),
(11, 19, 'After', './images/IMG_2871.JPG'),
(11, 21, 'Befor', './images/IMG_0360.JPG'),
(5, 22, 'Alone', './images/IMG_5044.JPG'),
(5, 23, 'Alone', './images/IMG_5046.JPG'),
(5, 24, 'Alone', './images/IMG_5047.JPG'),
(7, 26, 'After', './images/IMG_5795.JPG'),
(7, 27, 'Befor', './images/IMG_4908.JPG'),
(7, 28, 'Befor', './images/IMG_4909.JPG'),
(7, 29, 'Befor', './images/IMG_4910.JPG'),
(7, 30, 'After', './images/IMG_5793.JPG'),
(12, 32, 'After', './images/IMG_4239.JPG'),
(12, 33, 'After', './images/IMG_4236.JPG'),
(12, 34, 'After', './images/IMG_4235.JPG'),
(12, 35, 'Befor', './images/IMG_3994.JPG'),
(12, 36, 'Befor', './images/IMG_3995.JPG'),
(13, 37, 'Alone', './images/IMG_3936.JPG'),
(13, 38, 'Alone', './images/IMG_3941.JPG'),
(13, 39, 'Alone', './images/IMG_4240.JPG'),
(13, 40, 'Alone', './images/IMG_4241.JPG'),
(13, 41, 'Alone', './images/IMG_4242.JPG'),
(4, 42, 'Alone', './images/IMG_0338.JPG'),
(4, 43, 'Alone', './images/IMG_0339.JPG'),
(4, 44, 'Alone', './images/IMG_0340.JPG'),
(4, 45, 'Alone', './images/IMG_0343.JPG'),
(4, 46, 'Alone', './images/IMG_0345.JPG'),
(3, 48, 'Alone', './images/IMG_2730.JPG'),
(3, 49, 'Alone', './images/IMG_2732.JPG'),
(3, 50, 'Alone', './images/IMG_2735.JPG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'ID of the product',
  `pName` tinytext COMMENT 'Name of the product',
  `pDescription` text COMMENT 'Description of the product ',
  `pPrice` int(10) UNSIGNED ZEROFILL DEFAULT NULL COMMENT 'Price in pesos of the product',
  `pPicture` tinytext COMMENT 'Link to the image in the filesystem',
  `category` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COMMENT='Table to contain the info of the products.';

--
-- RELACIONES PARA LA TABLA `product`:
--

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `pName`, `pDescription`, `pPrice`, `pPicture`, `category`) VALUES
(1, 'Angelo Blanco ', '[Castel] Angelo 50 x 100 cm.', 0000000750, './images/angelo_blanco.png', 'Floor'),
(2, 'Argel Beige', '[Castel] Argel 33 x 55 cm.', 0000000650, './images/argel_beige.png', 'Floor'),
(3, 'Argel Gris', '[Castel] Argel 33 x 55 cm.', 0000000650, './images/argel_gris.png', 'Floor'),
(4, 'Balau Gris', '[Castel] Balau 22.7 x 208 cm.', 0000000700, './images/balau_gris.png', 'Floor'),
(5, 'Chelsea Carrara', '[Castel] Chelsea 40 x 120 cm.', 0000000700, './images/chelsea_carrara.png', 'Floor'),
(6, 'Chelsea Deco Carrara', '[Castel] Chelsea 40 x 120 cm.', 0000000720, './images/chelsea_deco_carrara.png', 'Floor'),
(7, ' Cypress Bronze', '[Castel] Cypress 22.7 x 208 cm.', 0000000730, './images/cypress_bronze.png', 'Floor'),
(8, 'Dash Wengue', '[Castel] Dash 23 x 120 cm.', 0000000630, './images/dash_wengue.png', 'Floor'),
(9, 'Dash Gris', '[Castel] Dash 23 x 120 cm.', 0000000600, './images/dash_gris.png', 'Floor'),
(10, 'Durban Blanco', '[Castel] Durban 33 x 55 cm.', 0000000600, './images/durban_blanco.png', 'Floor'),
(11, 'Durban Teja', '[Castel] Durban 33 x 55 cm.', 0000000600, './images/durban_teja.png', 'Floor'),
(12, 'Durban Gris', '[Castel] Durban 33 x 55 cm.', 0000000600, './images/durban_gris.png', 'Floor'),
(13, 'Excalibur Random', '[Castel] Excalibur 50 x 100 cm.', 0000000700, './images/excalibur_random.png', 'Floor'),
(14, 'Flagstone Gray Matte', '[Castel] Flagstone 60 x 120 cm.', 0000000600, './images/flagstone_gray_matte.png', 'Floor'),
(15, 'Flagstone Black Glossy', '[Castel] Flagstone 60 x 120 cm.', 0000000600, './images/flagstone_black_glossy.png', 'Floor'),
(16, 'Flagstone White Glossy', '[Castel] Flagstone 60 x 120 cm.', 0000000600, './images/flagstone_white_glossy.png', 'Floor'),
(17, 'Greco Antracita', '[Castel] Greco 50 x 100 cm.', 0000000700, './images/greco_antracita.png', 'Floor'),
(18, 'Luc Blanc', '[Castel] Luc 40 x 120 cm.', 0000000800, './images/luc_blanc.png', 'Floor'),
(19, 'Luc Deco Blanc', '[Castel] Luc 40 x 120 cm.', 0000000700, './images/luc_deco_blanc.png', 'Floor'),
(20, 'Natural Stone White', '[Castel] Natural Stone 60 x 120 cm.', 0000000800, './images/naturalstone_white.png', 'Floor'),
(21, 'Natural Stone Fossil', '[Castel] Natural Stone 60 x 120 cm.', 0000000800, './images/naturalstone_fossil.png', 'Floor'),
(22, 'Aged Natural Oak PSA Peel and Stick Veneer', '[Verolengo] 250cm x 30cm (98\" x 12\")', 0000000900, './images/hub_oak_peel.jpg', 'Veneer'),
(23, 'Teak Fleece Backed Veneer', '[Verolengo]  250cm x 60cm (98\" x 24\"), 250cm x 30cm (98\" x 12\") ', 0000001200, './images/hub_fleece_backed_teak.jpg', 'Veneer'),
(24, 'Aged Natural Oak PSA Peel and Stick Veneer', '[Verolengo] 250cm x 30cm (98\" x 12\")', 0000000800, './images/agednaturaloak.jpg', 'Veneer'),
(25, 'Obsidian', '[Kolorines]Tile Square\r\n(3/4\" x 3/4\")', 0000001500, './images/Obsidian.png', 'Mosaics'),
(26, 'Oro Amarillo', '[Kolorines] Tile Square (3/4\" x 3/4\")', 0000001200, './images/oro amarillo.png', 'Mosaics'),
(27, 'Miel Obscuro', '[Kolorines] Tile Square (3/4\" x 3/4\")', 0000001000, './images/miel obscuro.png', 'Mosaics'),
(28, 'Verde Aqua', '[Kolorines] Tile Square (3/4\" x 3/4\")', 0000001000, './images/verde Aqua.png', 'Mosaics'),
(29, 'Petra Iris', '[Kolorines] Tile Square (3/4\" x 3/4\")', 0000001300, './images/Petra Iris.png', 'Mosaics'),
(30, 'Mango Iris', '[Kolorines] Tile Square (3/4\" x 3/4\")', 0000000900, './images/Mango iris.png', 'Mosaics'),
(31, 'WC ONE PIECE 005', '[TecnoBath]Acabado: blanco. 4 a 6 Lt. Medidas: 37x70x79 cm.', 0000003200, './images/WC\'S ONE PIECE 005.png', 'Bathroom'),
(32, 'LAVABOS CERAMICOS Lc 001', '[TecnoBath]Acabado: Blanco. Medidas: 420 X 420 X 195 mm', 0000001600, './images/LAVABOS CERAMICOS Lc 001.png', 'Bathroom'),
(33, 'GABINETE CON LAVABO Y ESPEJO MBT 900B', '[TecnoBath]Mueble con espejo y lavabo. Espejo: 1200x100x400 mm, Lavabo: 900x480x50 mm, Gabinete: 900x550x70 mm', 0000003100, './images/GABINETE CON LAVABO Y ESPEJO MBT 900B.PNG', 'Bathroom'),
(34, 'CONJUNTOS Liberty TB16-221', '[TecnoBath] Acabado: Cromo Latón cromado, cartucho cerámico europeo, restrictor de flujo de 8.3 LPM', 0000001800, './images/Conjuntos Liberty TB16-221.png', 'Bathroom'),
(35, 'CONJUNTOS CTX TB10-221', '[TecnoBath] Acabado: cromo Latón cromado, componente europeos, cartuchos cerámico, sistema anti-calcáreo en ABS.', 0000002000, './images/Conjuntos CTX TB10-221.png', 'Bathroom'),
(36, 'Grifo de lavabo bimando ', '[Clever] Grifo de instalación en bateria 105mm Bimini', 0000001400, './images/GrifodeduchabimandoenbateriaBimini.png', 'Bathroom'),
(37, ' Grifo de lavabo monomando 85mm Ventu', '[Clever] Un grifo con un dise?o exclusivo de tipo diamante.', 0000001800, './images/GrifodeduchamonomandoSaonaSlim.png', 'Bathroom'),
(38, 'Grifo de ducha monomando', '[Clever] Grifo con empotracion de 1 via Bimin', 0000001950, './images/Grifodeduchamonomandoparaemotrar1viaBimin.png', 'Bathroom'),
(39, 'Columna Solo Ducha Lauter', '[Wasser]Combinación Solo Ducha. Color: Cromado. Material: Bronce Cromado. Medida: 20x38x129 cm.', 0000002100, './images/Combinacion-solo-ducha-LAUTER.png', 'Bathroom'),
(40, 'Columna Ducha Set', '[Wasser] Rociador 25×25 cm. Color: Cromado. Material: Bronce Cromado. Medida: 50x56x110 cm', 0000002400, './images/Columna-SET.png', 'Bathroom'),
(41, 'Columna Ducha Regen', '[Wasser] Hidromasaje con 8 Inyectores. Color: Blanco Material: Acrílico Blanco Medida: 24x47x150 cm', 0000004200, './images/Columna-REGEN.png', 'Bathroom'),
(42, 'Grifería Sólo Ducha Empotrado Lauter', '[Wasser] Mezclador Empotrado Sólo Ducha. Color: Cromado. Material: Bronce Cromado. Medida: 5x11.5 cm', 0000003000, './images/Mezclador-bide-LAUTER.png', 'Bathroom'),
(43, 'Grifería Bidé Lauter', '[Wasser]Mezclador Bidé. Color: Cromado. Material: Bronce. Cromado Medida: 13.5x13.5 cm', 0000005300, './images/Mezclador-Tina-Ducha-TIPPEN.png', 'Bathroom'),
(44, 'Grifería Lavamanos Empotrada Stern', '[Wasser]Mezclador Empotrado Lavabo. Color: Cromado. Material: Bronce Cromado. Medida:  20.5x27.5x8.9 cm', 0000003800, './images/Mezclador-empotrado-lavamanos-STERN.png', 'Bathroom'),
(45, 'Grifería Lavamanos Temporizada Bojen Mix ', '[Wasser]Mezclador Temporizado Lavabo / Aireador Antivandálico Color:  Cromado Material:  Bronce Cromado Medida:  5x15x14.2 cm', 0000003700, './images/Grifo-mezclador-Temporizado-BOJEN-MIX.png', 'Bathroom');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyect`
--

CREATE TABLE `proyect` (
  `id` int(11) NOT NULL COMMENT 'Id of the project',
  `name` tinytext COMMENT 'Name of the proyect',
  `description` text COMMENT 'Description of the proyect',
  `category` tinytext NOT NULL,
  `isBeforeAfter` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COMMENT='Table to contain the info of the proyects';

--
-- RELACIONES PARA LA TABLA `proyect`:
--

--
-- Volcado de datos para la tabla `proyect`
--

INSERT INTO `proyect` (`id`, `name`, `description`, `category`, `isBeforeAfter`) VALUES
(1, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas. Proin euismod erat ut erat tempor, sit amet semper ipsum volutpat. Sed turpis magna, egestas quis semper vel, maximus a quam. Vivamus ullamcorper dolor sed pellentesque ultrices.', 'Living', 1),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas. Proin euismod erat ut erat tempor, sit amet semper ipsum volutpat. Sed turpis magna, egestas quis semper vel, maximus a quam. Vivamus ullamcorper dolor sed pellentesque ultrices.', 'Bedroom', 0),
(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas. Proin euismod erat ut erat tempor, sit amet semper ipsum volutpat. Sed turpis magna, egestas quis semper vel, maximus a quam. Vivamus ullamcorper dolor sed pellentesque ultrices.', 'Living', 0),
(5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas. Proin euismod erat ut erat tempor, sit amet semper ipsum volutpat. Sed turpis magna, egestas quis semper vel, maximus a quam. Vivamus ullamcorper dolor sed pellentesque ultrices.', 'Kitchen', 0),
(7, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas', 'Bathroom', 1),
(10, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. ', 'Dinning', 1),
(11, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem', 'Bedroom', 1),
(12, 'LoremLoremIpsum', 'Lorem Ipsum', 'Living', 1),
(13, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex ut cursus pharetra, metus magna sollicitudin ligula, varius volutpat est tortor a sem. Mauris lacinia molestie libero, id iaculis dolor scelerisque ac. Maecenas dictum enim id ante consequat posuere. Vivamus viverra orci eget turpis pharetra, id commodo nisl egestas. Proin euismod erat ut erat tempor, sit amet semper ipsum volutpat. Sed turpis magna, egestas quis semper vel, maximus a quam. Vivamus ullamcorper dolor sed pellentesque ultrices.', 'Bathroom', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `idclient` int(10) UNSIGNED NOT NULL COMMENT 'Related to the client',
  `idproduct` int(10) UNSIGNED NOT NULL COMMENT 'Related to the product the client desires to buy'
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

--
-- RELACIONES PARA LA TABLA `shoppingcart`:
--   `idclient`
--       `account` -> `id`
--   `idproduct`
--       `product` -> `id`
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `picsofproyects`
--
ALTER TABLE `picsofproyects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idproyect` (`idproyect`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyect`
--
ALTER TABLE `proyect`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`idclient`,`idproduct`),
  ADD KEY `idproduct` (`idproduct`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `account`
--
ALTER TABLE `account`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID of the current user', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `picsofproyects`
--
ALTER TABLE `picsofproyects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID of the product', AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `proyect`
--
ALTER TABLE `proyect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id of the project', AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `picsofproyects`
--
ALTER TABLE `picsofproyects`
  ADD CONSTRAINT `picsofproyects_ibfk_1` FOREIGN KEY (`idproyect`) REFERENCES `proyect` (`id`);

--
-- Filtros para la tabla `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`idclient`) REFERENCES `account` (`id`),
  ADD CONSTRAINT `shoppingcart_ibfk_2` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
