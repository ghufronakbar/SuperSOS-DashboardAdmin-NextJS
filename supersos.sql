-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 09:42 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `supersos`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `fullname`, `phone`, `email`, `password`) VALUES
(1, 'Nama Admin RS', '6285156031385', 'email@adminrs.com', 'passwordrs'),
(2, 'Nama Admin Polisi', '621245361', 'email@adminpolisi.com', 'passwordpolisi'),
(3, 'Nama Admin Pemadam Kebakaran', '6222129419', 'email@adminpemadam.com', 'passwordpemadam');

-- --------------------------------------------------------

--
-- Table structure for table `calls`
--

CREATE TABLE `calls` (
  `id_call` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `applied_at` datetime DEFAULT NULL,
  `answered_at` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_instances` int(11) DEFAULT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `calls`
--

INSERT INTO `calls` (`id_call`, `message`, `latitude`, `longitude`, `applied_at`, `answered_at`, `status`, `id_user`, `id_instances`, `type`) VALUES
(1, 'Panggilan darurat kebakaran di Jl. Pahlawan No. 123', '-1.00000000', '107.00000000', '2024-05-01 08:00:00', '2024-05-01 08:15:00', 1, 2, 2, 2),
(2, 'Kecelakaan lalu lintas di Jl. Diponegoro No. 45', '-1.00000000', '107.00000000', '2024-05-01 09:30:00', '2024-05-04 23:04:50', 1, 2, 3, 3),
(3, 'Tindak kekerasan di Jl. Gajah Mada No. 56', '-1.00000000', '107.00000000', '2024-05-01 10:45:00', '2024-05-01 22:49:54', 1, 2, 2, 2),
(4, 'Panggilan darurat kesehatan di Jl. Gatot Subroto No. 78', '-1.00000000', '107.00000000', '2024-05-01 12:00:00', '2024-05-01 12:20:00', 1, 4, 1, 1),
(5, 'Panggilan darurat di Jl. Asia Afrika No. 34', '-1.00000000', '107.00000000', '2024-05-01 14:00:00', '2024-05-01 22:50:20', 1, 5, 2, 2),
(6, 'Kebakaran di Jl. Cendrawasih No. 67', '-1.00000000', '107.00000000', '2024-05-01 15:30:00', '2024-05-01 15:45:00', 1, 6, 3, 3),
(9, 'Tindak kekerasan di Jl. Dipatiukur No. 23', '-1.00000000', '107.00000000', '2024-05-01 19:15:00', '2024-05-01 23:21:26', 1, 9, 2, 2),
(10, 'Panggilan darurat kebakaran di Jl. Merdeka No. 123', '-1.00000000', '107.00000000', '2024-05-01 20:30:00', '2024-05-01 20:40:00', 1, 10, 3, 3),
(11, 'Kecelakaan lalu lintas di Jl. Diponegoro No. 45', '-1.00000000', '107.00000000', '2024-05-02 08:00:00', NULL, 1, 1, 3, 3),
(12, 'Panggilan darurat kesehatan di Jl. Gajah Mada No. 56', '-1.00000000', '107.00000000', '2024-05-02 09:30:00', '2024-05-02 09:45:00', 1, 2, 2, 2),
(13, 'Tindak kekerasan di Jl. Gatot Subroto No. 78', '-1.00000000', '107.00000000', '2024-05-02 11:00:00', NULL, 0, 3, NULL, 1),
(14, 'Panggilan darurat di Jl. Asia Afrika No. 34', '-1.00000000', '107.00000000', '2024-05-02 12:15:00', NULL, 0, 4, NULL, 3),
(15, 'Kebakaran di Jl. Cendrawasih No. 67', '-1.00000000', '107.00000000', '2024-05-02 14:00:00', '2024-05-02 14:20:00', 1, 5, 3, 3),
(16, 'Bantuan medis di Jl. Sudirman No. 89', '-1.00000000', '107.00000000', '2024-05-02 15:30:00', NULL, 0, 6, NULL, 1),
(17, 'Panggilan darurat di Jl. A. Yani No. 12', '-1.00000000', '107.00000000', '2024-05-02 17:00:00', NULL, 0, 7, NULL, 2),
(18, 'Tindak kekerasan di Jl. Dipatiukur No. 23', '-1.00000000', '107.00000000', '2024-05-02 18:30:00', NULL, 0, 8, NULL, 1),
(19, 'Panggilan darurat kebakaran di Jl. Merdeka No. 123', '-1.00000000', '107.00000000', '2024-05-02 20:00:00', '2024-05-02 20:15:00', 1, 9, 3, 3),
(20, 'Kecelakaan lalu lintas di Jl. Diponegoro No. 45', '-1.00000000', '107.00000000', '2024-05-03 08:00:00', NULL, 0, 10, NULL, 1),
(21, 'Panggilan darurat kesehatan di Jl. Gajah Mada No. 56', '-1.00000000', '107.00000000', '2024-05-03 09:30:00', '2024-05-03 09:40:00', 2, 1, 1, 1),
(22, 'Tindak kekerasan di Jl. Gatot Subroto No. 78', '-1.00000000', '107.00000000', '2024-05-03 11:15:00', NULL, 0, 2, NULL, 3),
(23, 'Panggilan darurat di Jl. Asia Afrika No. 34', '-1.00000000', '107.00000000', '2024-05-03 13:00:00', NULL, 0, 3, NULL, 3),
(24, 'Kebakaran di Jl. Cendrawasih No. 67', '-1.00000000', '107.00000000', '2024-05-03 14:45:00', '2024-05-03 15:00:00', 1, 4, 3, 3),
(25, 'Bantuan medis di Jl. Sudirman No. 89', '-1.00000000', '107.00000000', '2024-05-03 16:30:00', NULL, 0, 5, NULL, 2),
(26, 'Panggilan darurat di Jl. A. Yani No. 12', '-1.00000000', '107.00000000', '2024-05-03 18:15:00', NULL, 0, 6, NULL, 1),
(27, 'Tindak kekerasan di Jl. Dipatiukur No. 23', '-1.00000000', '107.00000000', '2024-05-03 19:45:00', NULL, 0, 7, NULL, 1),
(28, 'Panggilan darurat kebakaran di Jl. Merdeka No. 123', '-1.00000000', '107.00000000', '2024-05-03 21:30:00', '2024-05-03 21:50:00', 2, 8, 3, 0),
(29, 'Kecelakaan lalu lintas di Jl. Diponegoro No. 45', '-1.00000000', '107.00000000', '2024-05-04 08:30:00', NULL, 0, 9, NULL, 0),
(30, 'Panggilan darurat kesehatan di Jl. Gajah Mada No. 56', '-1.00000000', '107.00000000', '2024-05-04 10:00:00', '2024-05-04 10:10:00', 2, 10, 1, 1),
(31, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:25:22', NULL, 0, 11, 2, 0),
(32, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:26:00', NULL, 0, 11, 2, 0),
(33, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:29:11', '2024-05-02 02:44:53', 2, 11, 2, 0),
(34, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:30:04', '2024-05-02 02:45:28', 3, 11, 2, 0),
(35, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:30:19', NULL, 0, 11, 2, 0),
(36, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:31:05', NULL, 1, 11, 2, 0),
(37, 'Saya sackit', '1.00000000', '999.99999999', '2024-05-02 02:31:44', NULL, 0, 11, 2, 0),
(38, NULL, NULL, NULL, '2024-05-02 03:03:44', NULL, 1, NULL, NULL, 0),
(39, 'denjer parah, aku butuh rs', '-6.19312500', '106.82181000', '2024-05-05 00:14:48', NULL, 0, 12, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `instances`
--

CREATE TABLE `instances` (
  `id_instances` int(11) NOT NULL,
  `instances_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(80) NOT NULL,
  `phone` varchar(80) NOT NULL,
  `password` text NOT NULL,
  `status` int(11) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instances`
--

INSERT INTO `instances` (`id_instances`, `instances_name`, `address`, `email`, `phone`, `password`, `status`, `type`) VALUES
(1, 'RS Melati', 'Magelang', 'melati@gmail.com', '0812375391', '936bed245510a8da696bbf93309e7a2a', 1, 1),
(2, 'Polisi', 'Alamat Kantor Polisi', 'polisi@gmail.com', '08259247291246', '2e2a21d40a9d946a226fa0619c2ceb11', 1, 2),
(3, 'Pemadam Api', 'Monjali', 'damkar@gmail.com', '082594628435', 'fa9a04f5d73be004cf03977ac97a8a29', 1, 3),
(5, 'RS Melati2', 'Magelang2', 'melati@gmail.com2', '08123753912', '6b678e5012c852db6b9f17b0917d1460', 0, 1),
(6, 'RS Melati3', 'Magelang3', 'melati@gmail.com3', '08123753913', '98d555a80f7da5a6d7c81115f401cc55', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `fullname`, `address`, `phone`, `email`, `password`, `picture`, `status`) VALUES
(1, 'Agus Setiawan', 'Jl. Merdeka No. 123', '081234567890', 'agus.setiawan@example.com', 'password1', 'profile_picture1.jpg', 0),
(2, 'lans222', 'mgl', '085156031385222', 'lanstheprodigy@gmail.commm', 'c81e728d9d4c2f636f067f89cc14862c', 'xxx.jpg', 0),
(3, 'Budi Santoso', 'Jl. Diponegoro No. 78', '089012345678', 'budi.santoso@example.com', 'password3', 'profile_picture3.jpg', 0),
(4, 'Siti Rahayu', 'Jl. Gajah Mada No. 56', '082345678901', 'siti.rahayu@example.com', 'password4', 'profile_picture4.jpg', 0),
(5, 'Rudi Hermawan', 'Jl. Gatot Subroto No. 78', '081234567890', 'rudi.hermawan@example.com', 'password5', 'profile_picture5.jpg', 0),
(6, 'Ani Widarti', 'Jl. Asia Afrika No. 34', '085678901234', 'ani.widarti@example.com', 'password6', 'profile_picture6.jpg', 0),
(7, 'Andi Saputra', 'Jl. Cendrawasih No. 67', '089012345678', 'andi.saputra@example.com', 'password7', 'profile_picture7.jpg', 0),
(8, 'Rina Wijaya', 'Jl. Sudirman No. 89', '082345678901', 'rina.wijaya@example.com', 'password8', 'profile_picture8.jpg', 0),
(9, 'Faisal Rahman', 'Jl. A. Yani No. 12', '081234567890', 'faisal.rahman@example.com', 'password9', 'profile_picture9.jpg', 0),
(10, 'Lina Nurhayati', 'Jl. Dipatiukur No. 23', '085678901234', 'lina.nurhayati@example.com', 'password10', 'profile_picture10.jpg', 0),
(11, 'Satria Yoga Pratama2', 'Monjali2', '62884201122', 'funtastix@outlook.com2', '254f58b63f6a81858d3939632b3ea832', 'funtastix.jpg2', 1),
(12, 'Lans The Prodigy', 'Magelang', '085156031385', 'lanstheprodigy@gmail.com', 'd9f570a3cd58a9ce42dad64d73ed2cb0', 'lans.jpg', 1),
(13, 'LANS', 'MGL', '123456', 'lans@gmail.com', 'd9f570a3cd58a9ce42dad64d73ed2cb0', 'default.png', 0),
(14, 'LANS', 'MGL', '1234562', 'lans@gmail.com2', 'd9f570a3cd58a9ce42dad64d73ed2cb0', 'default.png', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `calls`
--
ALTER TABLE `calls`
  ADD PRIMARY KEY (`id_call`),
  ADD KEY `fk_call_instances` (`id_instances`),
  ADD KEY `fk_call_user` (`id_user`);

--
-- Indexes for table `instances`
--
ALTER TABLE `instances`
  ADD PRIMARY KEY (`id_instances`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `calls`
--
ALTER TABLE `calls`
  MODIFY `id_call` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `instances`
--
ALTER TABLE `instances`
  MODIFY `id_instances` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calls`
--
ALTER TABLE `calls`
  ADD CONSTRAINT `fk_call_instances` FOREIGN KEY (`id_instances`) REFERENCES `instances` (`id_instances`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_call_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
