-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2021 at 12:11 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myherodev`
--

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `source` longtext DEFAULT NULL,
  `content` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`source`, `content`) VALUES
('Karim@gmail.com', NULL),
('Karim@gmail.com', 'Bibib'),
('Burberry74100@hotmail.fr', 'Salut');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `source` longtext DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `rate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`id`, `source`, `description`, `rate`) VALUES
(11, 'Ali@gmail.com', 'DSDd', 4);

-- --------------------------------------------------------

--
-- Table structure for table `refresh`
--

CREATE TABLE `refresh` (
  `a` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(100) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `tok_password` longtext DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `rate` int(10) DEFAULT 0,
  `xp` int(20) DEFAULT 0,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `tok_password`, `img`, `rate`, `xp`, `date_added`, `date_updated`) VALUES
(9, 'Karim', 'Karim@gmail.com', '$2a$10$2fnmvYnWcwNhxU2P2sgKmeDFF19KaJx4bLhg2ZEsmv5IBnjagEd4K', 'e254339e8155560ad945010abb85047b', NULL, 5, 0, '2020-11-23 13:31:05', '2021-03-28 09:14:29'),
(14, 'Saidat', 'burberry74100@hotmail.fr', '$2a$10$xzakh2YWHxplPnqMqnG8BeCoqPVkoQfYU2QlI2PERROnyB8vJMC8O', '', NULL, 0, 0, '2020-12-21 07:11:33', '2021-03-28 09:16:04'),
(15, 'Algerie74100', 'alibi74100@hotmail.fr', '$2a$10$MxgkNIZErjFawZhgxBcGnecijlmcMYuVicohmPSiqsDhXFADe5fLK', '3ba64517f457a39f6e323786cf1c2dd7', NULL, 0, 0, '2021-01-04 03:04:51', '2021-03-28 08:45:30'),
(16, 'Ali', 'Ali@gmail.com', '$2a$10$JsGi.Fgn1YKii7gnkSiXDud9FAGrH.XDc9S6HaPrSOmTd0DRHbjU2', NULL, NULL, 0, 0, '2021-01-08 10:06:33', '2021-01-08 10:06:33'),
(17, 'Hoyale', 'hoyame.pro@gmail.com', '$2a$10$JNmfUWpx8irYzKgSax3odOTe61vTo0/Kbj7sILaTKmg4MpcC6XAlW', '963ff5471f70c38f8fc2947c7a5135c4', NULL, 0, 0, '2021-03-28 08:55:05', '2021-03-28 09:01:38'),
(18, 'Joyame', 'joyame@gmail.com', '$2a$10$lyu3FGYXMmIw6mcwRrg72OdyRc7q0RljVbXTqjZlxLJ4k7ey0qkKG', NULL, NULL, 0, 140, '2021-04-17 13:18:47', '2021-04-17 13:18:47'),
(19, 'nadiasaidat', 'nadia.saidat@gmail.com', '$2a$10$B2S6Mdhb.iSWX1/ej5T0SuLZqtk/vUgM.zSauqNxkpnxWyK2nTdSy', NULL, NULL, 0, 0, '2021-04-18 07:02:42', '2021-04-18 07:02:42'),
(20, 'Ssqqaa', 'Abzsiebei@gmail.com', '$2a$10$O8GALsQCF5OABUCl6B2ZxuPzDGsM6d.Kv89tp0iMehWRoIY4KYmVK', NULL, NULL, 0, 0, '2021-04-18 07:38:16', '2021-04-18 07:38:16'),
(21, 'Azize', 'Azize@gmail.com', '$2a$10$E0IBuRsgd14d/LPiunf/V.2qAYcshmgEzPvhLdPvNbX/aEImoy2rG', NULL, NULL, 0, 0, '2021-04-18 07:47:31', '2021-04-18 07:47:31');

-- --------------------------------------------------------

--
-- Table structure for table `users_data`
--

CREATE TABLE `users_data` (
  `id` int(15) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `rate` int(15) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_data`
--

INSERT INTO `users_data` (`id`, `source`, `user`, `rate`, `description`) VALUES
(11, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(12, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(13, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(14, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(15, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(16, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(17, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(18, 'Karim@gmail.com', 'Karim', 2, 'Niif'),
(19, 'Burberry74100@hotmail.fr', 'nadiasaidat', 0, 'Super'),
(20, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(21, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(22, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(23, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(24, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(25, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(26, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(27, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(28, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(29, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(30, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(31, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(32, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(33, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(34, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(35, 'Burberry74100@hotmail.fr', 'nadiasaidat', 5, 'Super'),
(36, 'Burberry74100@hotmail.fr', 'Joyame', 1, 'Nul'),
(37, 'Burberry74100@hotmail.fr', 'Joyame', 1, 'Nul'),
(38, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(39, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(40, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(41, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(42, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(43, 'Joyame@gmail.com', 'Karim', 2, 'zebi'),
(44, 'Joyame@gmail.com', 'Karim', 5, 'zebi'),
(45, 'nadia.saidat@gmail.com', 'Saidat', 5, ''),
(46, 'Joyame@gmail.com', 'Karim', 5, 'sitterlan amonaguyem'),
(47, 'Joyame@gmail.com', 'Karim', 5, 'sitterlan amonaguyem'),
(48, 'Karim@gmail.com', 'Joyame', 2, 'N'),
(49, 'Karim@gmail.com', 'Joyame', 3, 'Dddd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_data`
--
ALTER TABLE `users_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users_data`
--
ALTER TABLE `users_data`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
