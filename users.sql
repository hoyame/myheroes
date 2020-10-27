-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2020 at 05:49 PM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(100) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `rate` int(10) DEFAULT NULL,
  `xp` int(20) DEFAULT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `img`, `rate`, `xp`, `date_added`, `date_updated`) VALUES
(1, 'Aslam', 'aslam.doctor@gmail.com', '$2a$10$.sRS3.C.WbF2yi7EoLnPV.ssU3F8PU06qdwaAYqyo2.rWVoS5O2HW', NULL, NULL, NULL, '2020-09-06 18:45:24', '2020-09-06 18:45:24'),
(2, 'Jahn', 'john@doe.com', '$2a$10$j6uBZwjHapoFRHcSFB0I7.twuGSRGTdwVc6H9n9xTC7jXFvrEItj2', NULL, NULL, NULL, '2020-09-06 20:15:20', '2020-09-06 20:15:20'),
(3, NULL, 'horymy@doe.com', '$2a$10$6vvoRWBePoRFWU7kNJU0ZuKrzZzV4kbXFTVwWIspsiAJpdUun7DMO', NULL, NULL, NULL, '2020-10-15 22:11:54', '2020-10-15 22:11:54'),
(4, NULL, 'hoyame@gmail.com', '$2a$10$qZoj5HfJgpq8XA2ojyvfReyRsSluMlrj4KRUFCEbm6QM6mFEfePhi', NULL, NULL, NULL, '2020-10-15 22:15:43', '2020-10-15 22:15:43'),
(5, 'Jibril', 'jibril.cisse@gmail.com', '$2a$10$ljosWUwm66Fmzs.ixfyhfet5FUXIIm.mEvwqYpvNTwJIWiezIrLRm', NULL, NULL, NULL, '2020-10-26 15:10:02', '2020-10-26 15:10:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
