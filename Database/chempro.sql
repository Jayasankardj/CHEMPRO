-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2025 at 02:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chempro`
--

-- --------------------------------------------------------

--
-- Table structure for table `atomic_weights`
--

CREATE TABLE `atomic_weights` (
  `id` int(11) NOT NULL,
  `element` varchar(50) NOT NULL,
  `symbol` varchar(5) NOT NULL,
  `atomic_weight` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `atomic_weights`
--

INSERT INTO `atomic_weights` (`id`, `element`, `symbol`, `atomic_weight`) VALUES
(1, 'Hydrogen', 'H', 1.00794),
(2, 'Helium', 'He', 4.0026),
(3, 'Lithium', 'Li', 6.94),
(4, 'Beryllium', 'Be', 9.0122),
(5, 'Boron', 'B', 10.81),
(6, 'Carbon', 'C', 12.011),
(7, 'Nitrogen', 'N', 14.007),
(8, 'Oxygen', 'O', 15.999),
(9, 'Fluorine', 'F', 18.998),
(10, 'Neon', 'Ne', 20.18),
(11, 'Sodium', 'Na', 22.9898),
(12, 'Magnesium', 'Mg', 24.305),
(13, 'Aluminum', 'Al', 26.9815),
(14, 'Silicon', 'Si', 28.085),
(15, 'Phosphorus', 'P', 30.9738),
(16, 'Sulfur', 'S', 32.06),
(17, 'Chlorine', 'Cl', 35.45),
(18, 'Argon', 'Ar', 39.948),
(19, 'Potassium', 'K', 39.0983),
(20, 'Calcium', 'Ca', 40.078),
(21, 'Scandium', 'Sc', 44.9559),
(22, 'Titanium', 'Ti', 47.867),
(23, 'Vanadium', 'V', 50.9415),
(24, 'Chromium', 'Cr', 51.9961),
(25, 'Manganese', 'Mn', 54.938),
(26, 'Iron', 'Fe', 55.845),
(27, 'Cobalt', 'Co', 58.9332),
(28, 'Nickel', 'Ni', 58.6934),
(29, 'Copper', 'Cu', 63.546),
(30, 'Zinc', 'Zn', 65.38),
(31, 'Gallium', 'Ga', 69.723),
(32, 'Germanium', 'Ge', 72.63),
(33, 'Arsenic', 'As', 74.9216),
(34, 'Selenium', 'Se', 78.971),
(35, 'Bromine', 'Br', 79.904),
(36, 'Krypton', 'Kr', 83.798),
(37, 'Rubidium', 'Rb', 85.4678),
(38, 'Strontium', 'Sr', 87.62),
(39, 'Yttrium', 'Y', 88.9058),
(40, 'Zirconium', 'Zr', 91.224),
(41, 'Niobium', 'Nb', 92.9064),
(42, 'Molybdenum', 'Mo', 95.95),
(43, 'Technetium', 'Tc', 98),
(44, 'Ruthenium', 'Ru', 101.07),
(45, 'Rhodium', 'Rh', 102.906),
(46, 'Palladium', 'Pd', 106.42),
(47, 'Silver', 'Ag', 107.868),
(48, 'Cadmium', 'Cd', 112.414),
(49, 'Indium', 'In', 114.818),
(50, 'Tin', 'Sn', 118.71),
(51, 'Antimony', 'Sb', 121.76),
(52, 'Tellurium', 'Te', 127.6),
(53, 'Iodine', 'I', 126.904),
(54, 'Xenon', 'Xe', 131.293),
(55, 'Cesium', 'Cs', 132.905),
(56, 'Barium', 'Ba', 137.327),
(57, 'Lanthanum', 'La', 138.905),
(58, 'Cerium', 'Ce', 140.116),
(59, 'Praseodymium', 'Pr', 140.908),
(60, 'Neodymium', 'Nd', 144.242),
(61, 'Promethium', 'Pm', 145),
(62, 'Samarium', 'Sm', 150.36),
(63, 'Europium', 'Eu', 151.964),
(64, 'Gadolinium', 'Gd', 157.25),
(65, 'Terbium', 'Tb', 158.925),
(66, 'Dysprosium', 'Dy', 162.5),
(67, 'Holmium', 'Ho', 164.93),
(68, 'Erbium', 'Er', 167.259),
(69, 'Thulium', 'Tm', 168.934),
(70, 'Ytterbium', 'Yb', 173.045),
(71, 'Lutetium', 'Lu', 174.967),
(72, 'Hafnium', 'Hf', 178.49),
(73, 'Tantalum', 'Ta', 180.948),
(74, 'Tungsten', 'W', 183.84),
(75, 'Rhenium', 'Re', 186.207),
(76, 'Osmium', 'Os', 190.23),
(77, 'Iridium', 'Ir', 192.217),
(78, 'Platinum', 'Pt', 195.084),
(79, 'Gold', 'Au', 196.967),
(80, 'Mercury', 'Hg', 200.592),
(81, 'Thallium', 'Tl', 204.38),
(82, 'Lead', 'Pb', 207.2),
(83, 'Bismuth', 'Bi', 208.98),
(84, 'Polonium', 'Po', 209),
(85, 'Astatine', 'At', 210),
(86, 'Radon', 'Rn', 222),
(87, 'Francium', 'Fr', 223),
(88, 'Radium', 'Ra', 226),
(89, 'Actinium', 'Ac', 227),
(90, 'Thorium', 'Th', 232.038),
(91, 'Protactinium', 'Pa', 231.036),
(92, 'Uranium', 'U', 238.029),
(93, 'Neptunium', 'Np', 237),
(94, 'Plutonium', 'Pu', 244),
(95, 'Americium', 'Am', 243),
(96, 'Curium', 'Cm', 247),
(97, 'Berkelium', 'Bk', 247),
(98, 'Californium', 'Cf', 251),
(99, 'Einsteinium', 'Es', 252),
(100, 'Fermium', 'Fm', 257),
(101, 'Mendelevium', 'Md', 258),
(102, 'Nobelium', 'No', 259),
(103, 'Lawrencium', 'Lr', 262),
(104, 'Rutherfordium', 'Rf', 267),
(105, 'Dubnium', 'Db', 270),
(106, 'Seaborgium', 'Sg', 271),
(107, 'Bohrium', 'Bh', 270),
(108, 'Hassium', 'Hs', 277),
(109, 'Meitnerium', 'Mt', 278),
(110, 'Darmstadtium', 'Ds', 281),
(111, 'Roentgenium', 'Rg', 282),
(112, 'Copernicium', 'Cn', 285),
(113, 'Nihonium', 'Nh', 286),
(114, 'Flerovium', 'Fl', 289),
(115, 'Moscovium', 'Mc', 290),
(116, 'Livermorium', 'Lv', 293),
(117, 'Tennessine', 'Ts', 294),
(118, 'Oganesson', 'Og', 294);

-- --------------------------------------------------------

--
-- Table structure for table `elements`
--

CREATE TABLE `elements` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `atomic_number` int(11) NOT NULL,
  `mass` decimal(10,5) NOT NULL,
  `electronic_configuration` text DEFAULT NULL,
  `electrons` int(11) DEFAULT NULL,
  `protons` int(11) DEFAULT NULL,
  `neutrons` int(11) DEFAULT NULL,
  `melting_point` decimal(10,2) DEFAULT NULL,
  `boiling_point` decimal(10,2) DEFAULT NULL,
  `valence` int(11) DEFAULT NULL,
  `ionization_energy` decimal(10,5) DEFAULT NULL,
  `electronegativity` decimal(10,5) DEFAULT NULL,
  `thermal_conductivity` decimal(10,5) DEFAULT NULL,
  `phase_of_matter` varchar(50) DEFAULT NULL,
  `speed_of_index` decimal(10,5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `elements`
--

INSERT INTO `elements` (`id`, `name`, `symbol`, `atomic_number`, `mass`, `electronic_configuration`, `electrons`, `protons`, `neutrons`, `melting_point`, `boiling_point`, `valence`, `ionization_energy`, `electronegativity`, `thermal_conductivity`, `phase_of_matter`, `speed_of_index`) VALUES
(1, 'Hydrogen', 'H', 1, 1.00794, '1s1', 1, 1, 0, -259.00, -252.87, 1, 13.59000, 2.20000, 0.18000, 'gas', 1270.00000),
(2, 'Helium', 'He', 2, 4.00260, '1s2', 2, 2, 2, -272.20, -268.93, 0, 24.58700, 0.00000, 0.15130, 'Gas', 4.00260),
(3, 'Lithium', 'Li', 3, 6.94000, '[He] 2s1', 3, 3, 4, 453.69, 1615.00, 1, 5.39100, 0.98000, 84.80000, 'Solid', 6.94000),
(4, 'Beryllium', 'Be', 4, 9.01220, '[He] 2s2', 4, 4, 5, 1560.00, 2742.00, 2, 9.32200, 1.57000, 200.00000, 'Solid', 9.01220),
(5, 'Boron', 'B', 5, 10.81000, '[He] 2s2 2p1', 5, 5, 6, 2349.00, 4200.00, 3, 8.29800, 2.04000, 27.00000, 'Solid', 10.81000),
(6, 'Carbon', 'C', 6, 12.01100, '[He] 2s2 2p2', 6, 6, 6, 3800.00, 4300.00, 4, 11.26000, 2.55000, 119.00000, 'Solid', 12.01100),
(7, 'Nitrogen', 'N', 7, 14.00700, '[He] 2s2 2p3', 7, 7, 7, 63.15, 77.36, 3, 14.53400, 3.04000, 0.02583, 'Gas', 14.00700),
(8, 'Oxygen', 'O', 8, 15.99900, '[He] 2s2 2p4', 8, 8, 8, 54.36, 90.20, 2, 13.61800, 3.44000, 0.02658, 'Gas', 15.99900),
(9, 'Fluorine', 'F', 9, 18.99800, '[He] 2s2 2p5', 9, 9, 10, 53.48, 85.03, 1, 17.42300, 3.98000, 0.02591, 'Gas', 18.99800),
(10, 'Neon', 'Ne', 10, 20.18000, '[He] 2s2 2p6', 10, 10, 10, 24.56, 27.07, 0, 21.56400, 0.00000, 0.04910, 'Gas', 20.18000),
(11, 'Sodium', 'Na', 11, 22.99000, '[Ne] 3s1', 11, 11, 12, 370.87, 1156.00, 1, 5.13900, 0.93000, 142.00000, 'Solid', 22.99000),
(12, 'Magnesium', 'Mg', 12, 24.30500, '[Ne] 3s2', 12, 12, 12, 923.00, 1363.00, 2, 7.64600, 1.31000, 156.00000, 'Solid', 24.30500),
(13, 'Aluminium', 'Al', 13, 26.98200, '[Ne] 3s2 3p1', 13, 13, 14, 933.47, 2792.00, 3, 5.98600, 1.61000, 235.00000, 'Solid', 26.98200),
(14, 'Silicon', 'Si', 14, 28.08500, '[Ne] 3s2 3p2', 14, 14, 14, 1687.00, 3538.00, 4, 8.15100, 1.90000, 149.00000, 'Solid', 28.08500),
(15, 'Phosphorus', 'P', 15, 30.97400, '[Ne] 3s2 3p3', 15, 15, 16, 317.30, 550.00, 3, 10.48700, 2.19000, 0.23500, 'Solid', 30.97400),
(16, 'Sulfur', 'S', 16, 32.06000, '[Ne] 3s2 3p4', 16, 16, 16, 388.36, 717.80, 2, 10.36000, 2.58000, 0.26900, 'Solid', 32.06000),
(17, 'Chlorine', 'Cl', 17, 35.45000, '[Ne] 3s2 3p5', 17, 17, 18, 171.60, 239.11, 1, 12.96800, 3.16000, 0.00890, 'Gas', 35.45000),
(18, 'Argon', 'Ar', 18, 39.94800, '[Ne] 3s2 3p6', 18, 18, 22, 83.81, 87.30, 0, 15.75900, 0.00000, 0.01772, 'Gas', 39.94800),
(19, 'Potassium', 'K', 19, 39.09800, '[Ar] 4s1', 19, 19, 20, 63.50, 759.00, 1, 4.34000, 0.82000, 102.00000, 'Solid', 39.09800),
(20, 'Calcium', 'Ca', 20, 40.07800, '[Ar] 4s2', 20, 20, 20, 842.00, 1484.00, 2, 6.11300, 1.00000, 156.00000, 'Solid', 40.07800),
(21, 'Scandium', 'Sc', 21, 44.95600, '[Ar] 3d1 4s2', 21, 21, 24, 1541.00, 2836.00, 3, 6.56100, 1.36000, 16.00000, 'Solid', 44.95600),
(22, 'Titanium', 'Ti', 22, 47.86700, '[Ar] 3d2 4s2', 22, 22, 26, 1668.00, 3287.00, 4, 6.82800, 1.54000, 21.00000, 'Solid', 47.86700),
(23, 'Vanadium', 'V', 23, 50.94200, '[Ar] 3d3 4s2', 23, 23, 28, 1910.00, 3380.00, 5, 6.74600, 1.63000, 30.00000, 'Solid', 50.94200),
(24, 'Chromium', 'Cr', 24, 52.00000, '[Ar] 3d5 4s1', 24, 24, 28, 1907.00, 2671.00, 6, 6.76600, 1.66000, 93.90000, 'Solid', 52.00000),
(25, 'Manganese', 'Mn', 25, 54.93800, '[Ar] 3d5 4s2', 25, 25, 30, 1244.00, 2095.00, 7, 7.43400, 1.55000, 7.81000, 'Solid', 54.93800),
(26, 'Iron', 'Fe', 26, 55.84500, '[Ar] 3d6 4s2', 26, 26, 30, 1538.00, 2861.00, 8, 7.90200, 1.83000, 80.40000, 'Solid', 55.84500),
(27, 'Cobalt', 'Co', 27, 58.93300, '[Ar] 3d7 4s2', 27, 27, 32, 1495.00, 2927.00, 9, 7.88100, 1.88000, 100.00000, 'Solid', 58.93300),
(28, 'Nickel', 'Ni', 28, 58.69300, '[Ar] 3d8 4s2', 28, 28, 31, 1455.00, 2913.00, 10, 7.63600, 1.91000, 90.90000, 'Solid', 58.69300),
(29, 'Copper', 'Cu', 29, 63.54600, '[Ar] 3d10 4s1', 29, 29, 35, 1084.62, 2562.00, 11, 7.72600, 1.90000, 398.00000, 'Solid', 63.54600),
(30, 'Zinc', 'Zn', 30, 65.38000, '[Ar] 3d10 4s2', 30, 30, 35, 419.58, 907.00, 12, 9.39400, 1.65000, 116.00000, 'Solid', 65.38000),
(31, 'Gallium', 'Ga', 31, 69.72300, '[Ar] 3d10 4s2 4p1', 31, 31, 39, 29.78, 2204.00, 13, 5.99900, 1.81000, 40.00000, 'Solid', 69.72300),
(32, 'Germanium', 'Ge', 32, 72.63000, '[Ar] 3d10 4s2 4p2', 32, 32, 41, 938.25, 2833.00, 4, 7.89900, 2.01000, 60.30000, 'Solid', 72.63000),
(33, 'Arsenic', 'As', 33, 74.92200, '[Ar] 3d10 4s2 4p3', 33, 33, 42, 817.00, 614.00, 5, 9.78800, 2.18000, 50.20000, 'Solid', 74.92200),
(34, 'Selenium', 'Se', 34, 78.97100, '[Ar] 3d10 4s2 4p4', 34, 34, 45, 221.00, 685.00, 6, 9.75200, 2.55000, 20.40000, 'Solid', 78.97100),
(35, 'Bromine', 'Br', 35, 79.90400, '[Ar] 3d10 4s2 4p5', 35, 35, 45, -7.20, 58.80, 1, 11.81400, 2.96000, 0.00036, 'Liquid', 79.90400),
(36, 'Krypton', 'Kr', 36, 83.79800, '[Ar] 3d10 4s2 4p6', 36, 36, 48, -157.36, -153.22, 0, 14.00000, 3.00000, 0.00300, 'Gas', 83.79800),
(37, 'Rubidium', 'Rb', 37, 85.46800, '[Kr] 5s1', 37, 37, 48, 39.31, 688.00, 1, 4.17700, 0.82000, 73.00000, 'Solid', 85.46800),
(38, 'Strontium', 'Sr', 38, 87.62000, '[Kr] 5s2', 38, 38, 50, 777.00, 1382.00, 2, 5.69400, 0.95000, 141.00000, 'Solid', 87.62000),
(39, 'Yttrium', 'Y', 39, 88.90600, '[Kr] 4d1 5s2', 39, 39, 50, 1526.00, 3338.00, 3, 6.21700, 1.22000, 17.00000, 'Solid', 88.90600),
(40, 'Zirconium', 'Zr', 40, 91.22400, '[Kr] 4d2 5s2', 40, 40, 51, 1855.00, 4377.00, 4, 6.63400, 1.33000, 22.70000, 'Solid', 91.22400),
(41, 'Niobium', 'Nb', 41, 92.90600, '[Kr] 4d4 5s1', 41, 41, 52, 2477.00, 4744.00, 5, 6.75800, 1.60000, 53.00000, 'Solid', 92.90600),
(42, 'Molybdenum', 'Mo', 42, 95.95000, '[Kr] 4d5 5s1', 42, 42, 54, 2623.00, 4639.00, 6, 7.09200, 2.16000, 138.00000, 'Solid', 95.95000),
(43, 'Technetium', 'Tc', 43, 98.00000, '[Kr] 4d5 5s2', 43, 43, 55, 2157.00, 4265.00, 7, 7.28000, 1.90000, 50.60000, 'Solid', 98.00000),
(44, 'Ruthenium', 'Ru', 44, 101.07000, '[Kr] 4d7 5s1', 44, 44, 57, 2334.00, 4136.00, 8, 7.36000, 2.20000, 117.00000, 'Solid', 101.07000),
(45, 'Rhodium', 'Rh', 45, 102.91000, '[Kr] 4d8 5s1', 45, 45, 58, 1964.00, 3695.00, 9, 7.45800, 2.28000, 150.00000, 'Solid', 102.91000),
(46, 'Palladium', 'Pd', 46, 106.42000, '[Kr] 4d10', 46, 46, 60, 1554.00, 2963.00, 10, 8.33700, 2.20000, 71.80000, 'Solid', 106.42000),
(47, 'Silver', 'Ag', 47, 107.86800, '[Kr] 4d10 5s1', 47, 47, 61, 961.78, 2162.00, 11, 7.57600, 1.93000, 429.00000, 'Solid', 107.86800),
(48, 'Cadmium', 'Cd', 48, 112.41000, '[Kr] 4d10 5s2', 48, 48, 64, 321.00, 767.00, 12, 8.99300, 1.69000, 96.30000, 'Solid', 112.41000),
(49, 'Indium', 'In', 49, 114.82000, '[Kr] 4d10 5s2 5p1', 49, 49, 66, 156.60, 2072.00, 3, 5.78600, 1.78000, 81.00000, 'Solid', 114.82000),
(50, 'Tin', 'Sn', 50, 118.71000, '[Kr] 4d10 5s2 5p2', 50, 50, 69, 231.90, 2270.00, 4, 7.34400, 1.96000, 66.00000, 'Solid', 118.71000),
(51, 'Antimony', 'Sb', 51, 121.76000, '[Kr] 4d10 5s2 5p3', 51, 51, 71, 630.63, 1587.00, 5, 8.64000, 2.05000, 23.30000, 'Solid', 121.76000),
(52, 'Tellurium', 'Te', 52, 127.60000, '[Kr] 4d10 5s2 5p4', 52, 52, 76, 449.51, 988.00, 6, 9.00900, 2.10000, 19.30000, 'Solid', 127.60000),
(53, 'Iodine', 'I', 53, 126.90000, '[Kr] 4d10 5s2 5p5', 53, 53, 74, 113.70, 184.30, 1, 10.45100, 2.66000, 0.00011, 'Solid', 126.90000),
(54, 'Xenon', 'Xe', 54, 131.29000, '[Kr] 4d10 5s2 5p6', 54, 54, 77, -111.80, -108.10, 0, 12.12900, 2.60000, 0.00570, 'Gas', 131.29000),
(55, 'Cesium', 'Cs', 55, 132.91000, '[Xe] 6s1', 55, 55, 78, 28.44, 671.00, 1, 3.89300, 0.79000, 54.30000, 'Solid', 132.91000),
(56, 'Barium', 'Ba', 56, 137.33000, '[Xe] 6s2', 56, 56, 81, 727.00, 1630.00, 2, 5.21100, 0.89000, 180.00000, 'Solid', 137.33000),
(57, 'Lanthanum', 'La', 57, 138.91000, '[Xe] 5d1 6s2', 57, 57, 82, 920.00, 3464.00, 3, 5.57600, 1.10000, 23.00000, 'Solid', 138.91000),
(58, 'Cerium', 'Ce', 58, 140.12000, '[Xe] 4f1 5d1 6s2', 58, 58, 82, 798.00, 3426.00, 4, 5.53800, 1.12000, 14.40000, 'Solid', 140.12000),
(59, 'Praseodymium', 'Pr', 59, 140.91000, '[Xe] 4f3 6s2', 59, 59, 82, 931.00, 3520.00, 5, 5.47300, 1.13000, 11.30000, 'Solid', 140.91000),
(60, 'Neodymium', 'Nd', 60, 144.24000, '[Xe] 4f4 6s2', 60, 60, 84, 1021.00, 3074.00, 3, 5.52500, 1.14000, 14.20000, 'Solid', 144.24000),
(61, 'Promethium', 'Pm', 61, 145.00000, '[Xe] 4f5 6s2', 61, 61, 84, 1047.00, 3000.00, 6, 5.58200, 1.13000, 5.00000, 'Solid', 145.00000),
(62, 'Samarium', 'Sm', 62, 150.36000, '[Xe] 4f6 6s2', 62, 62, 88, 1074.00, 1794.00, 7, 5.64300, 1.17000, 10.30000, 'Solid', 150.36000),
(63, 'Europium', 'Eu', 63, 151.98000, '[Xe] 4f7 6s2', 63, 63, 89, 1095.00, 1800.00, 8, 5.67000, 1.20000, 6.40000, 'Solid', 151.98000),
(64, 'Gadolinium', 'Gd', 64, 157.25000, '[Xe] 4f7 5d1 6s2', 64, 64, 93, 1313.00, 3273.00, 9, 6.15000, 1.20000, 35.00000, 'Solid', 157.25000),
(65, 'Terbium', 'Tb', 65, 158.93000, '[Xe] 4f9 6s2', 65, 65, 94, 1629.00, 3230.00, 10, 5.86300, 1.20000, 11.00000, 'Solid', 158.93000),
(66, 'Dysprosium', 'Dy', 66, 162.50000, '[Xe] 4f10 6s2', 66, 66, 97, 1680.00, 2840.00, 11, 5.93900, 1.22000, 13.50000, 'Solid', 162.50000),
(67, 'Holmium', 'Ho', 67, 164.93000, '[Xe] 4f11 6s2', 67, 67, 98, 1474.00, 2720.00, 12, 6.02200, 1.23000, 16.20000, 'Solid', 164.93000),
(68, 'Erbium', 'Er', 68, 167.26000, '[Xe] 4f12 6s2', 68, 68, 99, 1529.00, 2868.00, 13, 5.46400, 1.24000, 16.80000, 'Solid', 167.26000),
(69, 'Thulium', 'Tm', 69, 168.93000, '[Xe] 4f13 6s2', 69, 69, 100, 1818.00, 2223.00, 14, 6.11000, 1.25000, 15.00000, 'Solid', 168.93000),
(70, 'Ytterbium', 'Yb', 70, 173.04000, '[Xe] 4f14 6s2', 70, 70, 103, 824.00, 1469.00, 15, 6.25400, 1.10000, 13.00000, 'Solid', 173.04000),
(71, 'Lutetium', 'Lu', 71, 175.00000, '[Xe] 4f14 5d1 6s2', 71, 71, 104, 1663.00, 3396.00, 16, 5.42500, 1.27000, 13.10000, 'Solid', 175.00000),
(72, 'Hafnium', 'Hf', 72, 178.49000, '[Xe] 4f14 5d2 6s2', 72, 72, 106, 2233.00, 4603.00, 4, 6.82500, 1.30000, 23.00000, 'Solid', 178.49000),
(73, 'Tantalum', 'Ta', 73, 180.95000, '[Xe] 4f14 5d3 6s2', 73, 73, 108, 3017.00, 5458.00, 5, 7.62600, 1.50000, 57.50000, 'Solid', 180.95000),
(74, 'Wolfram', 'W', 74, 183.84000, '[Xe] 4f14 5d4 6s2', 74, 74, 110, 3422.00, 5555.00, 6, 7.86400, 2.36000, 173.00000, 'Solid', 183.84000),
(75, 'Rhenium', 'Re', 75, 186.21000, '[Xe] 4f14 5d5 6s2', 75, 75, 111, 3186.00, 5869.00, 7, 7.83300, 1.90000, 48.00000, 'Solid', 186.21000),
(76, 'Osmium', 'Os', 76, 190.23000, '[Xe] 4f14 5d6 6s2', 76, 76, 114, 3033.00, 5027.00, 8, 8.43800, 2.20000, 130.00000, 'Solid', 190.23000),
(77, 'Iridium', 'Ir', 77, 192.22000, '[Xe] 4f14 5d7 6s2', 77, 77, 115, 2446.00, 4130.00, 9, 8.96700, 2.20000, 147.00000, 'Solid', 192.22000),
(78, 'Platinum', 'Pt', 78, 195.08000, '[Xe] 4f14 5d9 6s1', 78, 78, 117, 1768.00, 3825.00, 10, 8.95800, 2.28000, 71.60000, 'Solid', 195.08000),
(79, 'Gold', 'Au', 79, 196.97000, '[Xe] 4f14 5d10 6s1', 79, 79, 118, 1064.00, 2856.00, 11, 9.22500, 2.54000, 315.00000, 'Solid', 196.97000),
(80, 'Mercury', 'Hg', 80, 200.59000, '[Xe] 4f14 5d10 6s2', 80, 80, 121, -38.83, 356.73, 12, 10.43700, 2.00000, 8.30000, 'Liquid', 200.59000),
(81, 'Thallium', 'Tl', 81, 204.38000, '[Xe] 4f14 5d10 6s2 6p1', 81, 81, 123, 304.00, 1473.00, 3, 6.10800, 1.62000, 46.00000, 'Solid', 204.38000),
(82, 'Lead', 'Pb', 82, 207.20000, '[Xe] 4f14 5d10 6s2 6p2', 82, 82, 125, 327.46, 1749.00, 4, 7.41600, 2.33000, 35.30000, 'Solid', 207.20000),
(83, 'Bismuth', 'Bi', 83, 208.98000, '[Xe] 4f14 5d10 6s2 6p3', 83, 83, 126, 271.40, 1560.00, 5, 7.28900, 2.02000, 7.97000, 'Solid', 208.98000),
(84, 'Polonium', 'Po', 84, 209.98000, '[Xe] 4f14 5d10 6s2 6p4', 84, 84, 126, 254.00, 962.00, 6, 8.41700, 2.00000, 6.30000, 'Solid', 209.98000),
(85, 'Astatine', 'At', 85, 210.00000, '[Xe] 4f14 5d10 6s2 6p5', 85, 85, 125, 302.00, 337.00, 7, 9.32000, 2.20000, 0.00015, 'Solid', 210.00000),
(86, 'Radon', 'Rn', 86, 222.00000, '[Xe] 4f14 5d10 6s2 6p6', 86, 86, 136, -71.00, -61.70, 0, 10.74800, 2.20000, 0.00013, 'Gas', 222.00000),
(87, 'Francium', 'Fr', 87, 223.00000, '[Rn] 7s1', 87, 87, 136, 27.00, 677.00, 1, 4.07200, 0.70000, 40.00000, 'Solid', 223.00000),
(88, 'Radium', 'Ra', 88, 226.03000, '[Rn] 7s2', 88, 88, 138, 700.00, 1413.00, 2, 5.27800, 0.90000, 40.00000, 'Solid', 226.03000),
(89, 'Actinium', 'Ac', 89, 227.03000, '[Rn] 6d1 7s2', 89, 89, 138, 1050.00, 3190.00, 3, 5.97900, 1.10000, 11.30000, 'Solid', 227.03000),
(90, 'Thorium', 'Th', 90, 232.04000, '[Rn] 6d2 7s2', 90, 90, 142, 1750.00, 5061.00, 4, 6.30600, 1.30000, 54.00000, 'Solid', 232.04000),
(91, 'Protactinium', 'Pa', 91, 231.04000, '[Rn] 5f2 6d1 7s2', 91, 91, 140, 1568.00, 4131.00, 5, 6.41700, 1.50000, 50.00000, 'Solid', 231.04000),
(92, 'Uranium', 'U', 92, 238.03000, '[Rn] 5f3 6d1 7s2', 92, 92, 146, 1135.00, 4131.00, 6, 6.19400, 1.38000, 27.00000, 'Solid', 238.03000),
(93, 'Neptunium', 'Np', 93, 237.00000, '[Rn] 5f4 6d1 7s2', 93, 93, 144, 644.00, 4175.00, 7, 6.26500, 1.36000, 18.00000, 'Solid', 237.00000),
(94, 'Plutonium', 'Pu', 94, 244.00000, '[Rn] 5f6 6d1 7s2', 94, 94, 150, 640.00, 3235.00, 8, 6.06500, 1.28000, 6.90000, 'Solid', 244.00000),
(95, 'Americium', 'Am', 95, 243.00000, '[Rn] 5f7 6d1 7s2', 95, 95, 148, 1176.00, 2880.00, 9, 5.97300, 1.30000, 8.60000, 'Solid', 243.00000),
(96, 'Curium', 'Cm', 96, 247.00000, '[Rn] 5f7 6d1 7s2', 96, 96, 151, 1340.00, 3110.00, 10, 5.99100, 1.30000, 12.00000, 'Solid', 247.00000),
(97, 'Berkelium', 'Bk', 97, 247.00000, '[Rn] 5f9 6s2', 97, 97, 150, 986.00, 2470.00, 11, 6.18500, 1.30000, 4.00000, 'Solid', 247.00000),
(98, 'Californium', 'Cf', 98, 251.00000, '[Rn] 5f10 6s2', 98, 98, 153, 900.00, 1470.00, 12, 6.28000, 1.30000, 7.70000, 'Solid', 251.00000),
(99, 'Einsteinium', 'Es', 99, 252.00000, '[Rn] 5f11 6s2', 99, 99, 153, 1133.00, 1269.00, 13, 6.42000, 1.30000, 6.40000, 'Solid', 252.00000),
(100, 'Fermium', 'Fm', 100, 257.00000, '[Rn] 5f12 6s2', 100, 100, 157, 1527.00, 1815.00, 14, 6.53000, 1.30000, 9.50000, 'Solid', 257.00000),
(101, 'Mendelevium', 'Md', 101, 258.00000, '[Rn] 5f13 6s2', 101, 101, 157, 1100.00, 1500.00, 15, 6.58000, 1.30000, 6.00000, 'Solid', 258.00000),
(102, 'Nobelium', 'No', 102, 259.00000, '[Rn] 5f14 6s2', 102, 102, 157, 827.00, 1750.00, 16, 6.65000, 1.30000, 5.30000, 'Solid', 259.00000),
(103, 'Lawrencium', 'Lr', 103, 262.00000, '[Rn] 5f14 6d1 7s2', 103, 103, 159, 1627.00, 3327.00, 3, 6.32800, 1.30000, 10.00000, 'Solid', 262.00000),
(104, 'Rutherfordium', 'Rf', 104, 267.00000, '[Rn] 5f14 6d2 7s2', 104, 104, 163, 2100.00, 3500.00, 4, 6.33000, 1.30000, 11.00000, 'Solid', 267.00000),
(105, 'Dubnium', 'Db', 105, 270.00000, '[Rn] 5f14 6d3 7s2', 105, 105, 165, 2844.00, 3500.00, 5, 6.13000, 1.30000, 12.00000, 'Solid', 270.00000),
(106, 'Seaborgium', 'Sg', 106, 271.00000, '[Rn] 5f14 6d4 7s2', 106, 106, 165, 2280.00, 5000.00, 6, 6.18000, 1.30000, 13.00000, 'Solid', 271.00000),
(107, 'Bohrium', 'Bh', 107, 270.00000, '[Rn] 5f14 6d5 7s2', 107, 107, 163, 3000.00, 5000.00, 7, 6.23000, 1.30000, 14.00000, 'Solid', 270.00000),
(108, 'Hassium', 'Hs', 108, 277.00000, '[Rn] 5f14 6d6 7s2', 108, 108, 169, 2600.00, 5000.00, 8, 6.31000, 1.30000, 15.00000, 'Solid', 277.00000),
(109, 'Meitnerium', 'Mt', 109, 278.00000, '[Rn] 5f14 6d7 7s2', 109, 109, 169, 2800.00, 5000.00, 9, 6.39000, 1.30000, 16.00000, 'Solid', 278.00000),
(110, 'Darmstadtium', 'Ds', 110, 281.00000, '[Rn] 5f14 6d8 7s2', 110, 110, 171, 2800.00, 5000.00, 10, 6.47000, 1.30000, 17.00000, 'Solid', 281.00000),
(111, 'Roentgenium', 'Rg', 111, 280.00000, '[Rn] 5f14 6d9 7s2', 111, 111, 169, 3600.00, 5000.00, 11, 6.59000, 1.30000, 18.00000, 'Solid', 280.00000),
(112, 'Copernicium', 'Cn', 112, 285.00000, '[Rn] 5f14 6d10 7s2', 112, 112, 173, 356.00, 4100.00, 12, 6.77000, 1.30000, 19.00000, 'Solid', 285.00000),
(113, 'Nihonium', 'Nh', 113, 284.00000, '[Rn] 5f14 6d10 7p1', 113, 113, 171, 700.00, 1800.00, 13, 6.69000, 1.30000, 20.00000, 'Solid', 284.00000),
(114, 'Flerovium', 'Fl', 114, 289.00000, '[Rn] 5f14 6d10 7p2', 114, 114, 175, 500.00, 1200.00, 14, 6.87000, 1.30000, 21.00000, 'Solid', 289.00000),
(115, 'Moscovium', 'Mc', 115, 288.00000, '[Rn] 5f14 6d10 7p3', 115, 115, 173, 300.00, 1000.00, 15, 7.03000, 1.30000, 22.00000, 'Solid', 288.00000),
(116, 'Livermorium', 'Lv', 116, 293.00000, '[Rn] 5f14 6d10 7p4', 116, 116, 177, 500.00, 1000.00, 16, 7.22000, 1.30000, 23.00000, 'Solid', 293.00000),
(117, 'Tennessine', 'Ts', 117, 294.00000, '[Rn] 5f14 6d10 7p5', 117, 117, 177, 300.00, 800.00, 17, 7.31000, 1.30000, 24.00000, 'Solid', 294.00000),
(118, 'Oganesson', 'Og', 118, 294.00000, '[Rn] 5f14 6d10 7p6', 118, 118, 176, -218.00, -123.70, 18, 7.42000, 1.30000, 25.00000, 'Gas', 294.00000),
(119, 'Hydrogen', 'H', 1, 1.00794, '1s1', 1, 1, 0, -259.00, -252.87, 1, 13.59000, 2.20000, 0.18000, 'gas', 1270.00000);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `choice` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `correct_answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `text`, `choice`, `answer`, `correct_answer`) VALUES
(1, 'How many periods are in the Periodic Table?', '7 Periods', 'Correct', 'Yes, 7 periods exist'),
(2, 'What is the atomic number of Oxygen?', '9', 'Wrong', 'Oxygen has atomic number 8'),
(3, 'What is the atomic number of Carbon?', '6', 'Correct', 'Yes, Carbon has atomic number 6'),
(4, 'Which group does Noble gases belong to?', 'Group 17', 'Wrong', 'Noble gases are in Group 18'),
(5, 'What is the chemical symbol of Oxygen?', 'O', 'Correct', 'Yes, Oxygen\'s symbol is O'),
(6, 'Which element is a noble gas?', 'Neon', 'Correct', 'Yes, Neon is a noble gas'),
(7, 'What is the state of Bromine at room temperature?', 'Gas', 'Wrong', 'Bromine is a liquid at room temperature'),
(8, 'Which element is known as the King of Chemicals?', 'Sulfur', 'Wrong', 'Sulfuric acid is called the King of Chemicals'),
(9, 'What is the lightest element?', 'Hydrogen', 'Correct', 'Yes, Hydrogen is the lightest element'),
(10, 'How many blocks are present in the Periodic Table?', '5 blocks', 'Wrong', 'Periodic Table has 4 blocks');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `current_study` varchar(255) DEFAULT NULL,
  `otp` int(11) DEFAULT NULL,
  `confirm_password` varchar(255) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `date_of_birth`, `gender`, `current_study`, `otp`, `confirm_password`, `profile_image`) VALUES
(12, 'John Doe', 'johndoe@example.com', 'securepassword123', '2025-02-18 04:22:45', '2000-05-10', 'Male', 'B.tech', NULL, 'securepassword123', NULL),
(13, 'jaya', 'jaya@example.com', 'secure123', '2025-02-24 04:13:07', NULL, NULL, NULL, NULL, '', NULL),
(14, 'Siri', 'siri@gmail.com', '123', '2025-02-26 06:19:33', NULL, NULL, NULL, NULL, '123', NULL),
(15, 'Jayasankar', 'jayasankar@gmail.com', '12345', '2025-02-28 03:11:49', NULL, NULL, NULL, NULL, '12345', NULL),
(16, 'Sankar', 'sankar@gmail.com', '12345', '2025-03-18 06:10:02', NULL, NULL, NULL, NULL, '12345', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atomic_weights`
--
ALTER TABLE `atomic_weights`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `symbol` (`symbol`);

--
-- Indexes for table `elements`
--
ALTER TABLE `elements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atomic_weights`
--
ALTER TABLE `atomic_weights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `elements`
--
ALTER TABLE `elements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
