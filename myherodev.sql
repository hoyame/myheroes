-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2020 at 04:16 PM
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
  `img` varchar(255) DEFAULT NULL,
  `rate` int(10) DEFAULT 5,
  `xp` int(20) DEFAULT 0,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `img`, `rate`, `xp`, `date_added`, `date_updated`) VALUES
(3, 'Goyave', 'Hoyame@gmail.com', '$2a$10$Tic1/9FqdYKiL91fe5b3G.b.ANiiLPk740S2Ziusz/ke/Q8wIQXmG', NULL, 5, 0, '2020-11-11 03:09:33', '2020-11-11 03:09:33'),
(4, 'Goyave la chiche', 'Goyave@gmail.com', '$2a$10$6aIM8CrwW4bqifSZJAdcZel2DwQkrq6vIt4UFa8apQjR1bE/ZgslG', NULL, 5, 0, '2020-11-11 03:27:39', '2020-11-11 03:27:39'),
(5, 'Jibril ', 'Jibril@gmail.com', '$2a$10$u.NXiaQ2o5x8ap4a0c2MGuV0ZcQdt0NMFJrZe5e1RkHPxjN2HLmia', NULL, 5, 0, '2020-11-11 03:36:51', '2020-11-11 03:36:51'),
(6, 'Psef ', 'Psef@gmail.com', '$2a$10$JsH/dqEiMnXZUskcNvb4MO98hOl538M0cWxlm5onWXADU..NVLZrm', NULL, 5, 0, '2020-11-11 03:42:19', '2020-11-11 03:42:19'),
(7, 'Adeplot', 'Adeplot@gmail.com', '$2a$10$TU7JMwrSHFl6VOjnet/4/uisw0WPiJWBH1hMb.PcNoONo7NlszcLK', NULL, 5, 0, '2020-11-11 06:36:34', '2020-11-11 06:36:34'),
(8, 'Kiruu', 'Kiruu@gmail.com', '$2a$10$t4TnH8ILBSu3fiZQcBtVjOLbWhiP2FPBYYDmPnfCIP4f4hBJ.eZMi', NULL, 5, 0, '2020-11-11 07:25:43', '2020-11-11 07:25:43'),
(9, 'Karim', 'Karim@gmail.com', '$2a$10$e.pY2e3mmL5Pyrl7rAHJTOm2LmzzRdDU1olNlcn5tGX5oKz1JWOUe', NULL, 5, 0, '2020-11-23 13:31:05', '2020-11-23 13:31:05');

-- --------------------------------------------------------

--
-- Table structure for table `users_data`
--

CREATE TABLE `users_data` (
  `id` int(15) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `rate` int(15) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_data`
--

INSERT INTO `users_data` (`id`, `user`, `rate`, `description`) VALUES
(1, 'fenoeinge', 5, '511515411'),
(2, 'fenoeinge', 5, '511515411'),
(3, 'dddd', 4, '534'),
(4, 'dddd', 4, '534'),
(5, 'dddd', 4, '534'),
(6, 'dddd', 4, '534');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users_data`
--
ALTER TABLE `users_data`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
