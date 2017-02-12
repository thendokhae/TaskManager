-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2017 at 02:59 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `Id` int(6) UNSIGNED NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `User_id` varchar(30) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`Id`, `Name`, `User_id`, `Description`, `Status`, `Type`) VALUES
(1, 'Bug on UI', '1', 'There\'s an issue with rendering UI on devices of different sizes ', 'To Do', 'Bug'),
(2, 'Add new interface', NULL, 'Adding a new interface to the system', 'In Progress', 'Feature'),
(3, 'Bug on UI', '1', 'There\'s an issue with rendering UI on devices of different sizes ', 'To Do', 'Bug'),
(4, 'Add new interface', NULL, 'Adding a new interface to the system', 'In Progress', 'Feature'),
(5, 'undefined', '2', 'undefined', 'undefined', 'Bug'),
(6, 'Registration', '2', 'Add a new registration form ', 'Done', 'Feature'),
(7, 'Mobi site', '1', 'Create a mobile friendly version of the side', 'Testing', 'Feature'),
(10, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(11, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(13, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(14, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(15, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(16, 'undefined', '1', 'undefined', 'undefined', 'NewTask'),
(17, 'new task', '1', 'tasky', 'Testing', 'NewTask');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(6) UNSIGNED NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Surname` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `DateLastLogin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Username` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `Name`, `Surname`, `Email`, `Password`, `DateLastLogin`, `Username`) VALUES
(1, 'Thendokhae', 'Makahane', 'thendokhae18@gmail.com', 'admin', '2017-02-09 17:58:39', 'thendo'),
(2, 'Test', 'Mak', 'test@test.com', 'test', '2017-02-09 18:54:38', 'test'),
(3, 'Test', 'Mak', 'test@test.com', 'test', '2017-02-09 18:54:45', 'test'),
(4, 'Jane', 'Doe', 'jane@doe.com', 'jane', '2017-02-09 18:55:19', 'jane');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `Id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
