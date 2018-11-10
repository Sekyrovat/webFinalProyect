-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2018 a las 04:05:34
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'ID of the product',
  `pName` tinytext COMMENT 'Name of the product',
  `pDesccription` text COMMENT 'Description of the product ',
  `pPrice` int(10) UNSIGNED ZEROFILL DEFAULT NULL COMMENT 'Price in pesos of the product',
  `pPicture` tinytext COMMENT 'Link to the image in the filesystem',
  `category` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COMMENT='Table to contain the info of the products.';

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `idclient` int(10) UNSIGNED NOT NULL COMMENT 'Related to the client',
  `idproduct` int(10) UNSIGNED NOT NULL COMMENT 'Related to the product the client desires to buy'
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID of the current user';

--
-- AUTO_INCREMENT de la tabla `picsofproyects`
--
ALTER TABLE `picsofproyects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID of the product';

--
-- AUTO_INCREMENT de la tabla `proyect`
--
ALTER TABLE `proyect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id of the project';

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
