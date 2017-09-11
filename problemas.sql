-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Xerado en: 27 de Mar de 2013 ás 16:11
-- Versión do servidor: 5.5.27
-- Versión do PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `problemas`
--

-- --------------------------------------------------------

--
-- Estrutura da táboa `aulas`
--

CREATE TABLE IF NOT EXISTS `aulas` (
  `codigo` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `situacion` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- A extraer datos da táboa `aulas`
--

INSERT INTO `aulas` (`codigo`, `nome`, `situacion`) VALUES
(1, 'Baratheon', 'Segundo Andar'),
(2, 'Lannister', 'Primeiro Andar'),
(3, 'Targaryen', 'Primeiro Andar'),
(4, 'Tyrrel', 'Segundo Andar'),
(5, 'Stark', 'Primeiro Andar');

-- --------------------------------------------------------

--
-- Estrutura da táboa `incidencias`
--

CREATE TABLE IF NOT EXISTS `incidencias` (
  `codigo` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `aula` varchar(30) NOT NULL,
  `profeComunica` varchar(30) NOT NULL,
  `profeResolve` varchar(30) NOT NULL,
  `descricion` varchar(255) NOT NULL,
  `resolta` char(1) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

-- --------------------------------------------------------

--
-- Estrutura da táboa `profesores`
--

CREATE TABLE IF NOT EXISTS `profesores` (
  `codigo` tinyint(2) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `apelidos` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alcume` varchar(30) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- A extraer datos da táboa `profesores`
--

INSERT INTO `profesores` (`codigo`, `nome`, `apelidos`, `email`, `alcume`) VALUES
(1, 'Eddard', 'Stark', 'eddard@stark.gt', 'ned'),
(2, 'Daenerys', ' Targaryen', 'daenerys@targaryen.gt', 'dany'),
(3, 'Tyrion', 'Lannister', 'tyrion@lannister.gt', 'gnomo'),
(4, 'Jon', 'Nieve', 'jon@stark.gt', 'snow');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
