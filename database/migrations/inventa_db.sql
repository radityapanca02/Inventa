-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Sep 2025 pada 10.48
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventa_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `alat_bahans`
--

CREATE TABLE `alat_bahans` (
  `id_alat` bigint(20) UNSIGNED NOT NULL,
  `nama_alat` varchar(100) NOT NULL,
  `jenis` varchar(23) NOT NULL,
  `kondisi` enum('baik','baru','hilang','rusak') NOT NULL DEFAULT 'baik',
  `jumlah` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `alat_bahans`
--

INSERT INTO `alat_bahans` (`id_alat`, `nama_alat`, `jenis`, `kondisi`, `jumlah`, `created_at`, `updated_at`) VALUES
(1, 'Bola Basket', 'Alat Olahraga', 'baik', 5, '2025-09-05 05:43:50', '2025-09-05 05:43:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `feature`
--

CREATE TABLE `feature` (
  `id` int(11) NOT NULL,
  `ESP` varchar(10) NOT NULL,
  `Item` varchar(10) NOT NULL,
  `SilentAim` varchar(10) NOT NULL,
  `AIM` varchar(10) NOT NULL,
  `BulletTrack` varchar(10) NOT NULL,
  `Memory` varchar(10) NOT NULL,
  `Floating` varchar(10) NOT NULL,
  `Setting` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `feature`
--

INSERT INTO `feature` (`id`, `ESP`, `Item`, `SilentAim`, `AIM`, `BulletTrack`, `Memory`, `Floating`, `Setting`) VALUES
(1, 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(1, 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id_history` int(11) NOT NULL,
  `keys_id` varchar(33) DEFAULT NULL,
  `user_do` varchar(33) DEFAULT NULL,
  `info` mediumtext NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id_history`, `keys_id`, `user_do`, `info`, `created_at`, `updated_at`) VALUES
(1, '305', 'PRINCEAALYAN', 'PUBG|PUBG-|30|1', '2025-01-19 20:30:39', '2025-01-19 20:30:39'),
(2, '306', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-19 20:31:12', '2025-01-19 20:31:12'),
(3, '307', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-19 20:53:42', '2025-01-19 20:53:42'),
(4, '308', 'GOKUMOD', 'PUBG|PUBG-|1|1', '2025-01-19 22:42:54', '2025-01-19 22:42:54'),
(5, '309', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-20 13:53:40', '2025-01-20 13:53:40'),
(6, '314', 'MIJAN1', 'PUBG|1dayH|1|20', '2025-01-21 12:32:45', '2025-01-21 12:32:45'),
(7, '315', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 14:23:48', '2025-01-22 14:23:48'),
(8, '316', 'PRINCEAALYAN', 'PUBG|5|1|5', '2025-01-22 15:46:14', '2025-01-22 15:46:14'),
(9, '317', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 15:46:58', '2025-01-22 15:46:58'),
(10, '320', 'MIJAN1', 'PUBG|PUBG-|3|100', '2025-01-22 19:59:50', '2025-01-22 19:59:50'),
(11, '321', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-22 21:54:29', '2025-01-22 21:54:29'),
(12, '322', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 21:54:37', '2025-01-22 21:54:37'),
(13, '325', 'MIJAN1', 'PUBG|1day_|1|1', '2025-01-23 15:38:21', '2025-01-23 15:38:21'),
(14, '326', 'PRINCEAALYAN', 'PUBG|AMART|120|1', '2025-01-23 17:32:01', '2025-01-23 17:32:01'),
(15, '327', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-23 20:31:11', '2025-01-23 20:31:11'),
(16, '328', 'PRINCEAALYAN', 'PUBG|PUBG-|1|2', '2025-01-24 22:24:22', '2025-01-24 22:24:22'),
(17, '329', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-24 23:33:48', '2025-01-24 23:33:48'),
(18, '330', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-25 13:14:41', '2025-01-25 13:14:41'),
(19, '331', 'PRINCEAALYAN', 'PUBG|CROWO|1|1', '2025-01-25 14:25:01', '2025-01-25 14:25:01'),
(20, '332', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-25 15:41:04', '2025-01-25 15:41:04'),
(21, '333', 'MIJAN1', 'PUBG|3DAY |3|50', '2025-01-25 16:11:14', '2025-01-25 16:11:14'),
(22, '334', 'MIJAN1', 'PUBG|আ??|3|1', '2025-01-25 18:24:15', '2025-01-25 18:24:15'),
(23, '335', 'MIJAN1', 'PUBG|শ??|30|1', '2025-01-25 22:01:30', '2025-01-25 22:01:30'),
(24, '336', 'PRINCEAALYAN', 'PUBG|PUBG-|3|1', '2025-01-25 22:51:38', '2025-01-25 22:51:38'),
(25, '337', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-01-26 00:03:32', '2025-01-26 00:03:32'),
(26, '338', 'PRINCEAALYAN', 'PUBG|Beast|120|1', '2025-01-26 00:04:03', '2025-01-26 00:04:03'),
(27, '339', 'PRINCEAALYAN', 'PUBG|Loade|3|1', '2025-01-26 00:04:55', '2025-01-26 00:04:55'),
(28, '340', 'MIJAN1', 'PUBG|3day |3|1', '2025-01-26 00:38:03', '2025-01-26 00:38:03'),
(29, '341', 'MIJAN1', 'PUBG|30day|30|1', '2025-01-26 00:53:38', '2025-01-26 00:53:38'),
(30, '342', 'MIJAN1', 'PUBG|1 day|1|1', '2025-01-26 11:58:24', '2025-01-26 11:58:24'),
(31, '343', 'MIJAN1', 'PUBG|1dayh|1|100', '2025-01-26 12:51:35', '2025-01-26 12:51:35'),
(32, '344', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-26 16:43:44', '2025-01-26 16:43:44'),
(33, '345', 'PRINCEAALYAN', 'PUBG|PUBG-|3|1', '2025-01-26 18:00:44', '2025-01-26 18:00:44'),
(34, '346', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-01-26 18:17:11', '2025-01-26 18:17:11'),
(35, '347', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-26 18:40:22', '2025-01-26 18:40:22'),
(36, '348', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 18:43:57', '2025-01-26 18:43:57'),
(37, '349', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 18:46:36', '2025-01-26 18:46:36'),
(38, '350', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 23:15:46', '2025-01-26 23:15:46'),
(39, '351', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 23:18:16', '2025-01-26 23:18:16'),
(40, '355', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-27 11:44:42', '2025-01-27 11:44:42'),
(41, '356', 'PRINCEAALYAN', 'PUBG|PUBG-|90|1', '2025-01-27 11:45:00', '2025-01-27 11:45:00'),
(42, '357', 'MIJAN1', 'PUBG|PUBG-|3|1', '2025-01-27 11:57:57', '2025-01-27 11:57:57'),
(43, '358', 'MIJAN1', 'PUBG|PUBG-|7|100', '2025-01-27 12:10:34', '2025-01-27 12:10:34'),
(44, '360', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-27 13:32:50', '2025-01-27 13:32:50'),
(45, '362', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-27 16:40:59', '2025-01-27 16:40:59'),
(46, '363', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-28 00:08:16', '2025-01-28 00:08:16'),
(47, '364', 'Ramji', 'PUBG|PUBG-|30|1', '2025-01-28 00:34:42', '2025-01-28 00:34:42'),
(48, '365', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-28 01:49:52', '2025-01-28 01:49:52'),
(49, '366', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-28 22:36:41', '2025-01-28 22:36:41'),
(50, '367', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-29 12:28:41', '2025-01-29 12:28:41'),
(51, '368', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-29 14:35:23', '2025-01-29 14:35:23'),
(52, '369', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 16:21:38', '2025-01-29 16:21:38'),
(53, '370', 'PRINCEAALYAN', 'PUBG|Aalya|1|1', '2025-01-29 16:42:19', '2025-01-29 16:42:19'),
(54, '371', 'Jmd123', 'PUBG|Jmdmo|1|30', '2025-01-29 17:33:17', '2025-01-29 17:33:17'),
(55, '372', 'Ramji', 'PUBG|JMDOP|1|30', '2025-01-29 18:17:37', '2025-01-29 18:17:37'),
(56, '373', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-29 21:42:23', '2025-01-29 21:42:23'),
(57, '374', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 22:10:07', '2025-01-29 22:10:07'),
(58, '375', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 23:07:36', '2025-01-29 23:07:36'),
(59, '376', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-30 17:51:56', '2025-01-30 17:51:56'),
(60, '377', 'Ramji', 'PUBG|RAWAT|1|30', '2025-01-30 20:19:02', '2025-01-30 20:19:02'),
(61, '378', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-30 20:56:52', '2025-01-30 20:56:52'),
(62, '379', 'PRINCEAALYAN', 'PUBG|1|1|1', '2025-01-31 15:13:39', '2025-01-31 15:13:39'),
(63, '380', 'smsmpop', 'PUBG|PUBG-|1|1', '2025-01-31 23:32:50', '2025-01-31 23:32:50'),
(64, '381', 'kaayush7878', 'PUBG|Ak|1|1', '2025-01-31 23:44:16', '2025-01-31 23:44:16'),
(65, '382', 'kaayush7878', 'PUBG|aa|120|1', '2025-01-31 23:45:18', '2025-01-31 23:45:18'),
(66, '383', 'Hello8x', 'PUBG|PUBG-|1|1', '2025-01-31 23:45:25', '2025-01-31 23:45:25'),
(67, '384', 'txgmod', 'PUBG|1234|30|1', '2025-02-01 08:31:55', '2025-02-01 08:31:55'),
(68, '385', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-01 12:32:44', '2025-02-01 12:32:44'),
(69, '386', 'txgmod', 'PUBG|PUBG-|7|1', '2025-02-01 15:40:24', '2025-02-01 15:40:24'),
(70, '387', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-02-01 17:26:45', '2025-02-01 17:26:45'),
(71, '388', 'Tufanowner', 'PUBG|PUBG-|1|1', '2025-02-01 17:26:58', '2025-02-01 17:26:58'),
(72, '389', 'MIJAN1', 'PUBG|PUBG-|3|1', '2025-02-01 18:44:30', '2025-02-01 18:44:30'),
(73, '390', 'MIJAN1', 'PUBG|PUBG-|3|100', '2025-02-02 11:47:01', '2025-02-02 11:47:01'),
(74, '391', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 12:02:03', '2025-02-02 12:02:03'),
(75, '392', 'GOKUMODS99', 'PUBG|PUBG-|1|1', '2025-02-02 20:43:32', '2025-02-02 20:43:32'),
(76, '393', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 21:10:30', '2025-02-02 21:10:30'),
(77, '394', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 21:11:12', '2025-02-02 21:11:12'),
(78, '395', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-03 15:16:32', '2025-02-03 15:16:32'),
(79, '396', 'Amalamods', 'PUBG|1-DAY|1|1', '2025-02-04 00:50:07', '2025-02-04 00:50:07'),
(80, '397', 'MIJAN1', 'PUBG|PUBG-|7|500', '2025-02-04 11:34:17', '2025-02-04 11:34:17'),
(81, '398', 'PRINCEAALYAN', 'PUBG|PUBG-|3|5', '2025-02-04 14:04:57', '2025-02-04 14:04:57'),
(82, '399', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-05 17:00:16', '2025-02-05 17:00:16'),
(83, '400', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-06 00:58:45', '2025-02-06 00:58:45'),
(84, '401', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-02-06 01:28:45', '2025-02-06 01:28:45'),
(1, '305', 'PRINCEAALYAN', 'PUBG|PUBG-|30|1', '2025-01-19 20:30:39', '2025-01-19 20:30:39'),
(2, '306', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-19 20:31:12', '2025-01-19 20:31:12'),
(3, '307', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-19 20:53:42', '2025-01-19 20:53:42'),
(4, '308', 'GOKUMOD', 'PUBG|PUBG-|1|1', '2025-01-19 22:42:54', '2025-01-19 22:42:54'),
(5, '309', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-20 13:53:40', '2025-01-20 13:53:40'),
(6, '314', 'MIJAN1', 'PUBG|1dayH|1|20', '2025-01-21 12:32:45', '2025-01-21 12:32:45'),
(7, '315', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 14:23:48', '2025-01-22 14:23:48'),
(8, '316', 'PRINCEAALYAN', 'PUBG|5|1|5', '2025-01-22 15:46:14', '2025-01-22 15:46:14'),
(9, '317', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 15:46:58', '2025-01-22 15:46:58'),
(10, '320', 'MIJAN1', 'PUBG|PUBG-|3|100', '2025-01-22 19:59:50', '2025-01-22 19:59:50'),
(11, '321', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-22 21:54:29', '2025-01-22 21:54:29'),
(12, '322', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-22 21:54:37', '2025-01-22 21:54:37'),
(13, '325', 'MIJAN1', 'PUBG|1day_|1|1', '2025-01-23 15:38:21', '2025-01-23 15:38:21'),
(14, '326', 'PRINCEAALYAN', 'PUBG|AMART|120|1', '2025-01-23 17:32:01', '2025-01-23 17:32:01'),
(15, '327', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-23 20:31:11', '2025-01-23 20:31:11'),
(16, '328', 'PRINCEAALYAN', 'PUBG|PUBG-|1|2', '2025-01-24 22:24:22', '2025-01-24 22:24:22'),
(17, '329', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-24 23:33:48', '2025-01-24 23:33:48'),
(18, '330', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-25 13:14:41', '2025-01-25 13:14:41'),
(19, '331', 'PRINCEAALYAN', 'PUBG|CROWO|1|1', '2025-01-25 14:25:01', '2025-01-25 14:25:01'),
(20, '332', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-25 15:41:04', '2025-01-25 15:41:04'),
(21, '333', 'MIJAN1', 'PUBG|3DAY |3|50', '2025-01-25 16:11:14', '2025-01-25 16:11:14'),
(22, '334', 'MIJAN1', 'PUBG|আ??|3|1', '2025-01-25 18:24:15', '2025-01-25 18:24:15'),
(23, '335', 'MIJAN1', 'PUBG|শ??|30|1', '2025-01-25 22:01:30', '2025-01-25 22:01:30'),
(24, '336', 'PRINCEAALYAN', 'PUBG|PUBG-|3|1', '2025-01-25 22:51:38', '2025-01-25 22:51:38'),
(25, '337', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-01-26 00:03:32', '2025-01-26 00:03:32'),
(26, '338', 'PRINCEAALYAN', 'PUBG|Beast|120|1', '2025-01-26 00:04:03', '2025-01-26 00:04:03'),
(27, '339', 'PRINCEAALYAN', 'PUBG|Loade|3|1', '2025-01-26 00:04:55', '2025-01-26 00:04:55'),
(28, '340', 'MIJAN1', 'PUBG|3day |3|1', '2025-01-26 00:38:03', '2025-01-26 00:38:03'),
(29, '341', 'MIJAN1', 'PUBG|30day|30|1', '2025-01-26 00:53:38', '2025-01-26 00:53:38'),
(30, '342', 'MIJAN1', 'PUBG|1 day|1|1', '2025-01-26 11:58:24', '2025-01-26 11:58:24'),
(31, '343', 'MIJAN1', 'PUBG|1dayh|1|100', '2025-01-26 12:51:35', '2025-01-26 12:51:35'),
(32, '344', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-26 16:43:44', '2025-01-26 16:43:44'),
(33, '345', 'PRINCEAALYAN', 'PUBG|PUBG-|3|1', '2025-01-26 18:00:44', '2025-01-26 18:00:44'),
(34, '346', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-01-26 18:17:11', '2025-01-26 18:17:11'),
(35, '347', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-26 18:40:22', '2025-01-26 18:40:22'),
(36, '348', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 18:43:57', '2025-01-26 18:43:57'),
(37, '349', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 18:46:36', '2025-01-26 18:46:36'),
(38, '350', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 23:15:46', '2025-01-26 23:15:46'),
(39, '351', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-26 23:18:16', '2025-01-26 23:18:16'),
(40, '355', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-27 11:44:42', '2025-01-27 11:44:42'),
(41, '356', 'PRINCEAALYAN', 'PUBG|PUBG-|90|1', '2025-01-27 11:45:00', '2025-01-27 11:45:00'),
(42, '357', 'MIJAN1', 'PUBG|PUBG-|3|1', '2025-01-27 11:57:57', '2025-01-27 11:57:57'),
(43, '358', 'MIJAN1', 'PUBG|PUBG-|7|100', '2025-01-27 12:10:34', '2025-01-27 12:10:34'),
(44, '360', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-27 13:32:50', '2025-01-27 13:32:50'),
(45, '362', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-27 16:40:59', '2025-01-27 16:40:59'),
(46, '363', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-28 00:08:16', '2025-01-28 00:08:16'),
(47, '364', 'Ramji', 'PUBG|PUBG-|30|1', '2025-01-28 00:34:42', '2025-01-28 00:34:42'),
(48, '365', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-28 01:49:52', '2025-01-28 01:49:52'),
(49, '366', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-28 22:36:41', '2025-01-28 22:36:41'),
(50, '367', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-29 12:28:41', '2025-01-29 12:28:41'),
(51, '368', 'MIJAN1', 'PUBG|PUBG-|1|1', '2025-01-29 14:35:23', '2025-01-29 14:35:23'),
(52, '369', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 16:21:38', '2025-01-29 16:21:38'),
(53, '370', 'PRINCEAALYAN', 'PUBG|Aalya|1|1', '2025-01-29 16:42:19', '2025-01-29 16:42:19'),
(54, '371', 'Jmd123', 'PUBG|Jmdmo|1|30', '2025-01-29 17:33:17', '2025-01-29 17:33:17'),
(55, '372', 'Ramji', 'PUBG|JMDOP|1|30', '2025-01-29 18:17:37', '2025-01-29 18:17:37'),
(56, '373', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-01-29 21:42:23', '2025-01-29 21:42:23'),
(57, '374', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 22:10:07', '2025-01-29 22:10:07'),
(58, '375', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-29 23:07:36', '2025-01-29 23:07:36'),
(59, '376', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-30 17:51:56', '2025-01-30 17:51:56'),
(60, '377', 'Ramji', 'PUBG|RAWAT|1|30', '2025-01-30 20:19:02', '2025-01-30 20:19:02'),
(61, '378', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-01-30 20:56:52', '2025-01-30 20:56:52'),
(62, '379', 'PRINCEAALYAN', 'PUBG|1|1|1', '2025-01-31 15:13:39', '2025-01-31 15:13:39'),
(63, '380', 'smsmpop', 'PUBG|PUBG-|1|1', '2025-01-31 23:32:50', '2025-01-31 23:32:50'),
(64, '381', 'kaayush7878', 'PUBG|Ak|1|1', '2025-01-31 23:44:16', '2025-01-31 23:44:16'),
(65, '382', 'kaayush7878', 'PUBG|aa|120|1', '2025-01-31 23:45:18', '2025-01-31 23:45:18'),
(66, '383', 'Hello8x', 'PUBG|PUBG-|1|1', '2025-01-31 23:45:25', '2025-01-31 23:45:25'),
(67, '384', 'txgmod', 'PUBG|1234|30|1', '2025-02-01 08:31:55', '2025-02-01 08:31:55'),
(68, '385', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-01 12:32:44', '2025-02-01 12:32:44'),
(69, '386', 'txgmod', 'PUBG|PUBG-|7|1', '2025-02-01 15:40:24', '2025-02-01 15:40:24'),
(70, '387', 'PRINCEAALYAN', 'PUBG|PUBG-|120|1', '2025-02-01 17:26:45', '2025-02-01 17:26:45'),
(71, '388', 'Tufanowner', 'PUBG|PUBG-|1|1', '2025-02-01 17:26:58', '2025-02-01 17:26:58'),
(72, '389', 'MIJAN1', 'PUBG|PUBG-|3|1', '2025-02-01 18:44:30', '2025-02-01 18:44:30'),
(73, '390', 'MIJAN1', 'PUBG|PUBG-|3|100', '2025-02-02 11:47:01', '2025-02-02 11:47:01'),
(74, '391', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 12:02:03', '2025-02-02 12:02:03'),
(75, '392', 'GOKUMODS99', 'PUBG|PUBG-|1|1', '2025-02-02 20:43:32', '2025-02-02 20:43:32'),
(76, '393', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 21:10:30', '2025-02-02 21:10:30'),
(77, '394', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-02 21:11:12', '2025-02-02 21:11:12'),
(78, '395', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-03 15:16:32', '2025-02-03 15:16:32'),
(79, '396', 'Amalamods', 'PUBG|1-DAY|1|1', '2025-02-04 00:50:07', '2025-02-04 00:50:07'),
(80, '397', 'MIJAN1', 'PUBG|PUBG-|7|500', '2025-02-04 11:34:17', '2025-02-04 11:34:17'),
(81, '398', 'PRINCEAALYAN', 'PUBG|PUBG-|3|5', '2025-02-04 14:04:57', '2025-02-04 14:04:57'),
(82, '399', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-05 17:00:16', '2025-02-05 17:00:16'),
(83, '400', 'PRINCEAALYAN', 'PUBG|PUBG-|1|1', '2025-02-06 00:58:45', '2025-02-06 00:58:45'),
(84, '401', 'PRINCEAALYAN', 'PUBG|PUBG-|7|1', '2025-02-06 01:28:45', '2025-02-06 01:28:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `keys_code`
--

CREATE TABLE `keys_code` (
  `id_keys` int(11) NOT NULL,
  `game` varchar(32) NOT NULL,
  `user_key` varchar(32) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `expired_date` datetime DEFAULT NULL,
  `max_devices` int(11) DEFAULT NULL,
  `devices` mediumtext DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `registrator` varchar(32) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data untuk tabel `keys_code`
--

INSERT INTO `keys_code` (`id_keys`, `game`, `user_key`, `duration`, `expired_date`, `max_devices`, `devices`, `status`, `registrator`, `created_at`, `updated_at`) VALUES
(309, 'PUBG', 'PUBG-ywf95cKdb6', 120, '2025-05-20 13:54:16', 1, 'a59ac08a-3689-3948-9b47-c713eb62a970', 1, 'PRINCEAALYAN', '2025-01-20 13:53:40', '2025-02-01 23:41:22'),
(314, 'PUBG', '1dayHACKER_TEAM', 1, '2025-01-22 12:42:42', 20, NULL, 1, 'MIJAN1', '2025-01-21 12:32:45', '2025-01-31 15:22:51'),
(318, 'PUBG', 'PUBG-pOfKxceS3B', 3, NULL, 100, NULL, 1, 'MIJAN1', '2025-01-22 19:59:23', '2025-01-31 15:22:51'),
(325, 'PUBG', '1day_HACKER', 1, '2025-01-24 15:41:32', 1, NULL, 1, 'MIJAN1', '2025-01-23 15:38:21', '2025-01-31 15:22:51'),
(326, 'PUBG', 'AMARTYA-KEY', 120, '2025-05-23 17:32:43', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-23 17:32:01', '2025-01-31 15:22:51'),
(329, 'PUBG', 'PUBG-JKsUonMTQj', 120, '2025-05-24 23:34:00', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-24 23:33:48', '2025-01-31 15:22:51'),
(332, 'PUBG', 'PUBG-9pkYfz7wXG', 1, '2025-01-26 15:41:29', 1, NULL, 1, 'MIJAN1', '2025-01-25 15:41:04', '2025-01-31 15:22:51'),
(333, 'PUBG', '3DAY YOU HACKER ', 3, NULL, 50, NULL, 1, 'MIJAN1', '2025-01-25 16:11:14', '2025-01-31 15:22:51'),
(334, 'PUBG', 'আমি বাঙালি', 3, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-25 18:24:15', '2025-01-31 15:22:51'),
(335, 'PUBG', 'শুধু তোমার জন্য ৩০ দিন', 30, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-25 22:01:30', '2025-01-31 15:22:51'),
(340, 'PUBG', '3day hacker', 3, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-26 00:38:03', '2025-01-31 15:22:51'),
(341, 'PUBG', '30day_hacker_you', 30, '2025-02-25 01:00:18', 1, '516ac7a1-359f-396c-baa6-23d77626fadf', 1, 'MIJAN1', '2025-01-26 00:53:38', '2025-02-01 01:19:05'),
(342, 'PUBG', '1 day_hacker_you', 1, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-26 11:58:24', '2025-01-31 15:22:51'),
(343, 'PUBG', '1dayhackeryou', 1, '2025-01-27 13:10:08', 100, NULL, 1, 'MIJAN1', '2025-01-26 12:51:35', '2025-01-31 15:22:51'),
(344, 'PUBG', 'PUBG-T169oRxZny', 1, '2025-01-27 16:43:53', 1, NULL, 1, 'MIJAN1', '2025-01-26 16:43:44', '2025-01-31 15:22:51'),
(346, 'PUBG', 'PUBG-TVA8nCjOQg', 7, '2025-02-03 03:44:39', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-26 18:17:11', '2025-01-31 15:22:51'),
(347, 'PUBG', 'PUBG-iTm0KQzWfv', 1, '2025-01-27 18:40:50', 1, NULL, 1, 'MIJAN1', '2025-01-26 18:40:22', '2025-01-31 15:22:51'),
(356, 'PUBG', 'PUBG-MATlSxF9cX', 90, '2025-04-27 11:45:07', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-27 11:45:00', '2025-01-31 15:22:51'),
(357, 'PUBG', 'PUBG-OFpHfuJgVa', 3, '2025-01-30 12:07:26', 1, NULL, 1, 'MIJAN1', '2025-01-27 11:57:57', '2025-01-31 15:22:51'),
(358, 'PUBG', 'PUBG-zNSuYQrUwE', 7, '2025-02-03 12:16:47', 100, '98531b9d-7f95-34dd-87f7-2a11dae01bfb,347f8415-dad2-326e-9472-73832f327a78,d4ee7227-b6fd-38f9-9c4e-d156699ba9f0,327a6d2f-7332-31a2-ac15-bcf5230477cf,b1136eeb-bd85-3f4d-9247-be25ef9cff35,33616dc8-5a94-35f4-b7c7-bcbf61b34c42,4a870186-e8e7-3f28-b2e2-8f84c21c70bd', 1, 'MIJAN1', '2025-01-27 12:10:34', '2025-02-01 02:38:45'),
(360, 'PUBG', 'PUBG-SY6RzkDcbr', 120, '2025-05-27 13:46:16', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-27 13:32:50', '2025-01-31 15:22:51'),
(364, 'PUBG', 'PUBG-TmxGpysgQY', 30, '2025-02-27 00:47:05', 1, '82d3da52-071b-3618-8350-245dff053440', 1, 'Ramji', '2025-01-28 00:34:42', '2025-02-04 05:52:44'),
(365, 'PUBG', 'PUBG-54pFuQ8MIA', 120, '2025-05-28 01:51:08', 1, 'b9363ad3-ae8e-32de-bebe-a3c4a8f9f57a', 1, 'PRINCEAALYAN', '2025-01-28 01:49:52', '2025-01-31 22:32:36'),
(367, 'PUBG', 'SIgmaKey', 120, '2025-05-29 12:45:58', 100, '991aa0d8-2f1a-368e-8a27-93d56270bc7d,12a93207-f23f-33e6-8f31-0f2f3b491d38,3c475680-75c5-3a7b-b6fc-9bed201518ac,2d7a5f3d-3f84-36e5-a462-09084d990b53,9c694c08-ad95-33b9-9727-932de795dd00', 1, 'PRINCEAALYAN', '2025-01-29 12:28:41', '2025-02-04 20:01:44'),
(368, 'PUBG', 'PUBG-7cKqriUoxW', 1, '2025-01-30 14:35:39', 1, NULL, 1, 'MIJAN1', '2025-01-29 14:35:23', '2025-01-31 15:22:51'),
(371, 'PUBG', 'Jmdmod\'s46', 1, NULL, 30, NULL, 1, 'Jmd123', '2025-01-29 17:33:17', '2025-01-31 15:22:51'),
(372, 'PUBG', 'JMDOP', 1, '2025-01-30 18:18:20', 30, NULL, 1, 'Ramji', '2025-01-29 18:17:37', '2025-01-31 15:22:51'),
(373, 'PUBG', 'PUBG-T3nMrcEkCh', 120, '2025-05-29 21:44:17', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-29 21:42:23', '2025-01-31 15:22:51'),
(377, 'PUBG', 'RAWATOP-480', 1, NULL, 30, NULL, 1, 'Ramji', '2025-01-30 20:19:02', '2025-01-31 15:22:51'),
(380, 'PUBG', 'PUBG-rMwxhFH891', 1, NULL, 1, NULL, 1, 'smsmpop', '2025-01-31 23:32:50', '2025-01-31 23:32:50'),
(381, 'PUBG', 'Ak', 1, NULL, 1, NULL, 1, 'kaayush7878', '2025-01-31 23:44:16', '2025-01-31 23:44:16'),
(382, 'PUBG', 'aa', 120, '2025-06-01 10:43:25', 1, '0299a77d-3b0d-3c19-a695-078f8b308045', 1, 'kaayush7878', '2025-01-31 23:45:17', '2025-02-01 10:43:25'),
(383, 'PUBG', 'PUBG-GbQP1Km6rS', 1, NULL, 1, NULL, 1, 'Hello8x', '2025-01-31 23:45:25', '2025-01-31 23:45:25'),
(384, 'PUBG', '1234', 30, '2025-03-03 08:32:21', 1, '650b6646-5ece-3310-aa89-2de3fc211a5c', 1, 'txgmod', '2025-02-01 08:31:55', '2025-02-01 08:32:21'),
(386, 'PUBG', 'PUBG-DPYxK5SjpB', 7, '2025-02-08 15:47:42', 1, 'd9cc1e03-0ce4-3076-a562-150735a2f94b', 1, 'txgmod', '2025-02-01 15:40:24', '2025-02-01 15:47:42'),
(387, 'PUBG', 'PUBG-8WlFdjB0fq', 120, '2025-06-01 17:30:07', 1, 'e44f7e8b-2cab-3882-8711-a080075a929b', 1, 'PRINCEAALYAN', '2025-02-01 17:26:45', '2025-02-01 17:30:07'),
(388, 'PUBG', 'PUBG-tCculSBvVE', 1, '2025-02-04 04:24:57', 1, '2f210eb8-21a9-3c90-a08e-79c1f7ded31f', 1, 'Tufanowner', '2025-02-01 17:26:58', '2025-02-03 04:24:57'),
(389, 'PUBG', 'PUBG-tyE3UqXdlO', 3, '2025-02-04 18:44:49', 1, 'e924a9bc-74eb-3be8-8916-85f82ac6ddda', 1, 'MIJAN1', '2025-02-01 18:44:30', '2025-02-01 18:44:49'),
(390, 'PUBG', 'PUBG-DA3cEfJ846', 3, '2025-02-05 11:51:38', 100, 'f85fc624-2ac8-3136-97e0-90a367b43ac8,b16f04bd-1f53-3f6a-b28f-8cdddbf3769c,0fc10f41-7dfa-3a7e-9fec-3eb8ed67406f,d28d4ea9-2197-34a4-90d8-59d20ab29afa,1bf8bcd7-56af-383d-b759-8965714417e4,a9036e77-02f1-3d66-b4ef-5802d510c720,5ad1c5cb-3bdb-3ee5-b464-c2bdbdebec09,00c5ca7e-d5df-3b39-aa1e-d64dc6de952f,375a52ba-1a2c-3853-8697-786b0a1cde43,8488a32e-d3b2-36a4-8581-39073705c284,57d83974-7453-34c7-8ea7-3eab9436d0dc,c85b7394-1bdb-384d-9620-c57dc948ca80,2f78976a-7e44-30bb-b5f0-f66b5a22a2c7,145fd9d5-f4d0-3eb4-b452-3207d31c9f2d,28694126-23c2-3708-8c31-4d794400810e,d8b70ff7-39d9-3ea7-acfe-fe78e8ca28a8,a2eb3ae3-3c39-34ad-be38-1832db1a6325', 1, 'MIJAN1', '2025-02-02 11:47:01', '2025-02-04 23:04:57'),
(395, 'PUBG', 'PUBG-1yDSWrq0Tm', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-03 15:16:32', '2025-02-03 15:16:32'),
(396, 'PUBG', '1-DAY-TRAIL-KEY-AMALAMODZ', 1, '2025-02-05 00:50:46', 1, 'c9fa6279-5296-34a3-9276-6a4b2bfc3d94', 1, 'Amalamods', '2025-02-04 00:50:07', '2025-02-04 00:50:46'),
(397, 'PUBG', 'PUBG-hCeTYMgpU9', 7, '2025-02-11 11:52:45', 500, 'c7374cbd-2d8e-3199-9f5a-016ff9ab71c3,05e88de0-69c2-35af-b723-140cc50f045f,1896590b-a202-36f8-8422-5f3682afb877,da9a5350-aa9b-3766-a6f2-62838a589531,ba6e328d-fcef-3807-a22f-a40c79742e55', 1, 'MIJAN1', '2025-02-04 11:34:17', '2025-02-05 21:37:44'),
(398, 'PUBG', 'PUBG-UZOQ4LPWxa', 3, '2025-02-07 14:33:37', 5, '157dab47-f6d8-3daa-a691-b99d0742e1e0,27df1d0a-08ed-35bb-8885-4646abc4960f', 1, 'PRINCEAALYAN', '2025-02-04 14:04:57', '2025-02-04 16:41:59'),
(399, 'PUBG', 'PUBG-nhIg60PM1U', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-05 17:00:16', '2025-02-05 17:00:16'),
(400, 'PUBG', 'PUBG-DEk0RF2tKj', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-06 00:58:45', '2025-02-06 00:58:45'),
(401, 'PUBG', 'PUBG-yl7ciTGZWo', 7, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-06 01:28:45', '2025-02-06 01:28:45'),
(309, 'PUBG', 'PUBG-ywf95cKdb6', 120, '2025-05-20 13:54:16', 1, 'a59ac08a-3689-3948-9b47-c713eb62a970', 1, 'PRINCEAALYAN', '2025-01-20 13:53:40', '2025-02-01 23:41:22'),
(314, 'PUBG', '1dayHACKER_TEAM', 1, '2025-01-22 12:42:42', 20, NULL, 1, 'MIJAN1', '2025-01-21 12:32:45', '2025-01-31 15:22:51'),
(318, 'PUBG', 'PUBG-pOfKxceS3B', 3, NULL, 100, NULL, 1, 'MIJAN1', '2025-01-22 19:59:23', '2025-01-31 15:22:51'),
(325, 'PUBG', '1day_HACKER', 1, '2025-01-24 15:41:32', 1, NULL, 1, 'MIJAN1', '2025-01-23 15:38:21', '2025-01-31 15:22:51'),
(326, 'PUBG', 'AMARTYA-KEY', 120, '2025-05-23 17:32:43', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-23 17:32:01', '2025-01-31 15:22:51'),
(329, 'PUBG', 'PUBG-JKsUonMTQj', 120, '2025-05-24 23:34:00', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-24 23:33:48', '2025-01-31 15:22:51'),
(332, 'PUBG', 'PUBG-9pkYfz7wXG', 1, '2025-01-26 15:41:29', 1, NULL, 1, 'MIJAN1', '2025-01-25 15:41:04', '2025-01-31 15:22:51'),
(333, 'PUBG', '3DAY YOU HACKER ', 3, NULL, 50, NULL, 1, 'MIJAN1', '2025-01-25 16:11:14', '2025-01-31 15:22:51'),
(334, 'PUBG', 'আমি বাঙালি', 3, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-25 18:24:15', '2025-01-31 15:22:51'),
(335, 'PUBG', 'শুধু তোমার জন্য ৩০ দিন', 30, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-25 22:01:30', '2025-01-31 15:22:51'),
(340, 'PUBG', '3day hacker', 3, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-26 00:38:03', '2025-01-31 15:22:51'),
(341, 'PUBG', '30day_hacker_you', 30, '2025-02-25 01:00:18', 1, '516ac7a1-359f-396c-baa6-23d77626fadf', 1, 'MIJAN1', '2025-01-26 00:53:38', '2025-02-01 01:19:05'),
(342, 'PUBG', '1 day_hacker_you', 1, NULL, 1, NULL, 1, 'MIJAN1', '2025-01-26 11:58:24', '2025-01-31 15:22:51'),
(343, 'PUBG', '1dayhackeryou', 1, '2025-01-27 13:10:08', 100, NULL, 1, 'MIJAN1', '2025-01-26 12:51:35', '2025-01-31 15:22:51'),
(344, 'PUBG', 'PUBG-T169oRxZny', 1, '2025-01-27 16:43:53', 1, NULL, 1, 'MIJAN1', '2025-01-26 16:43:44', '2025-01-31 15:22:51'),
(346, 'PUBG', 'PUBG-TVA8nCjOQg', 7, '2025-02-03 03:44:39', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-26 18:17:11', '2025-01-31 15:22:51'),
(347, 'PUBG', 'PUBG-iTm0KQzWfv', 1, '2025-01-27 18:40:50', 1, NULL, 1, 'MIJAN1', '2025-01-26 18:40:22', '2025-01-31 15:22:51'),
(356, 'PUBG', 'PUBG-MATlSxF9cX', 90, '2025-04-27 11:45:07', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-27 11:45:00', '2025-01-31 15:22:51'),
(357, 'PUBG', 'PUBG-OFpHfuJgVa', 3, '2025-01-30 12:07:26', 1, NULL, 1, 'MIJAN1', '2025-01-27 11:57:57', '2025-01-31 15:22:51'),
(358, 'PUBG', 'PUBG-zNSuYQrUwE', 7, '2025-02-03 12:16:47', 100, '98531b9d-7f95-34dd-87f7-2a11dae01bfb,347f8415-dad2-326e-9472-73832f327a78,d4ee7227-b6fd-38f9-9c4e-d156699ba9f0,327a6d2f-7332-31a2-ac15-bcf5230477cf,b1136eeb-bd85-3f4d-9247-be25ef9cff35,33616dc8-5a94-35f4-b7c7-bcbf61b34c42,4a870186-e8e7-3f28-b2e2-8f84c21c70bd', 1, 'MIJAN1', '2025-01-27 12:10:34', '2025-02-01 02:38:45'),
(360, 'PUBG', 'PUBG-SY6RzkDcbr', 120, '2025-05-27 13:46:16', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-27 13:32:50', '2025-01-31 15:22:51'),
(364, 'PUBG', 'PUBG-TmxGpysgQY', 30, '2025-02-27 00:47:05', 1, '82d3da52-071b-3618-8350-245dff053440', 1, 'Ramji', '2025-01-28 00:34:42', '2025-02-04 05:52:44'),
(365, 'PUBG', 'PUBG-54pFuQ8MIA', 120, '2025-05-28 01:51:08', 1, 'b9363ad3-ae8e-32de-bebe-a3c4a8f9f57a', 1, 'PRINCEAALYAN', '2025-01-28 01:49:52', '2025-01-31 22:32:36'),
(367, 'PUBG', 'SIgmaKey', 120, '2025-05-29 12:45:58', 100, '991aa0d8-2f1a-368e-8a27-93d56270bc7d,12a93207-f23f-33e6-8f31-0f2f3b491d38,3c475680-75c5-3a7b-b6fc-9bed201518ac,2d7a5f3d-3f84-36e5-a462-09084d990b53,9c694c08-ad95-33b9-9727-932de795dd00', 1, 'PRINCEAALYAN', '2025-01-29 12:28:41', '2025-02-04 20:01:44'),
(368, 'PUBG', 'PUBG-7cKqriUoxW', 1, '2025-01-30 14:35:39', 1, NULL, 1, 'MIJAN1', '2025-01-29 14:35:23', '2025-01-31 15:22:51'),
(371, 'PUBG', 'Jmdmod\'s46', 1, NULL, 30, NULL, 1, 'Jmd123', '2025-01-29 17:33:17', '2025-01-31 15:22:51'),
(372, 'PUBG', 'JMDOP', 1, '2025-01-30 18:18:20', 30, NULL, 1, 'Ramji', '2025-01-29 18:17:37', '2025-01-31 15:22:51'),
(373, 'PUBG', 'PUBG-T3nMrcEkCh', 120, '2025-05-29 21:44:17', 1, NULL, 1, 'PRINCEAALYAN', '2025-01-29 21:42:23', '2025-01-31 15:22:51'),
(377, 'PUBG', 'RAWATOP-480', 1, NULL, 30, NULL, 1, 'Ramji', '2025-01-30 20:19:02', '2025-01-31 15:22:51'),
(380, 'PUBG', 'PUBG-rMwxhFH891', 1, NULL, 1, NULL, 1, 'smsmpop', '2025-01-31 23:32:50', '2025-01-31 23:32:50'),
(381, 'PUBG', 'Ak', 1, NULL, 1, NULL, 1, 'kaayush7878', '2025-01-31 23:44:16', '2025-01-31 23:44:16'),
(382, 'PUBG', 'aa', 120, '2025-06-01 10:43:25', 1, '0299a77d-3b0d-3c19-a695-078f8b308045', 1, 'kaayush7878', '2025-01-31 23:45:17', '2025-02-01 10:43:25'),
(383, 'PUBG', 'PUBG-GbQP1Km6rS', 1, NULL, 1, NULL, 1, 'Hello8x', '2025-01-31 23:45:25', '2025-01-31 23:45:25'),
(384, 'PUBG', '1234', 30, '2025-03-03 08:32:21', 1, '650b6646-5ece-3310-aa89-2de3fc211a5c', 1, 'txgmod', '2025-02-01 08:31:55', '2025-02-01 08:32:21'),
(386, 'PUBG', 'PUBG-DPYxK5SjpB', 7, '2025-02-08 15:47:42', 1, 'd9cc1e03-0ce4-3076-a562-150735a2f94b', 1, 'txgmod', '2025-02-01 15:40:24', '2025-02-01 15:47:42'),
(387, 'PUBG', 'PUBG-8WlFdjB0fq', 120, '2025-06-01 17:30:07', 1, 'e44f7e8b-2cab-3882-8711-a080075a929b', 1, 'PRINCEAALYAN', '2025-02-01 17:26:45', '2025-02-01 17:30:07'),
(388, 'PUBG', 'PUBG-tCculSBvVE', 1, '2025-02-04 04:24:57', 1, '2f210eb8-21a9-3c90-a08e-79c1f7ded31f', 1, 'Tufanowner', '2025-02-01 17:26:58', '2025-02-03 04:24:57'),
(389, 'PUBG', 'PUBG-tyE3UqXdlO', 3, '2025-02-04 18:44:49', 1, 'e924a9bc-74eb-3be8-8916-85f82ac6ddda', 1, 'MIJAN1', '2025-02-01 18:44:30', '2025-02-01 18:44:49'),
(390, 'PUBG', 'PUBG-DA3cEfJ846', 3, '2025-02-05 11:51:38', 100, 'f85fc624-2ac8-3136-97e0-90a367b43ac8,b16f04bd-1f53-3f6a-b28f-8cdddbf3769c,0fc10f41-7dfa-3a7e-9fec-3eb8ed67406f,d28d4ea9-2197-34a4-90d8-59d20ab29afa,1bf8bcd7-56af-383d-b759-8965714417e4,a9036e77-02f1-3d66-b4ef-5802d510c720,5ad1c5cb-3bdb-3ee5-b464-c2bdbdebec09,00c5ca7e-d5df-3b39-aa1e-d64dc6de952f,375a52ba-1a2c-3853-8697-786b0a1cde43,8488a32e-d3b2-36a4-8581-39073705c284,57d83974-7453-34c7-8ea7-3eab9436d0dc,c85b7394-1bdb-384d-9620-c57dc948ca80,2f78976a-7e44-30bb-b5f0-f66b5a22a2c7,145fd9d5-f4d0-3eb4-b452-3207d31c9f2d,28694126-23c2-3708-8c31-4d794400810e,d8b70ff7-39d9-3ea7-acfe-fe78e8ca28a8,a2eb3ae3-3c39-34ad-be38-1832db1a6325', 1, 'MIJAN1', '2025-02-02 11:47:01', '2025-02-04 23:04:57'),
(395, 'PUBG', 'PUBG-1yDSWrq0Tm', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-03 15:16:32', '2025-02-03 15:16:32'),
(396, 'PUBG', '1-DAY-TRAIL-KEY-AMALAMODZ', 1, '2025-02-05 00:50:46', 1, 'c9fa6279-5296-34a3-9276-6a4b2bfc3d94', 1, 'Amalamods', '2025-02-04 00:50:07', '2025-02-04 00:50:46'),
(397, 'PUBG', 'PUBG-hCeTYMgpU9', 7, '2025-02-11 11:52:45', 500, 'c7374cbd-2d8e-3199-9f5a-016ff9ab71c3,05e88de0-69c2-35af-b723-140cc50f045f,1896590b-a202-36f8-8422-5f3682afb877,da9a5350-aa9b-3766-a6f2-62838a589531,ba6e328d-fcef-3807-a22f-a40c79742e55', 1, 'MIJAN1', '2025-02-04 11:34:17', '2025-02-05 21:37:44'),
(398, 'PUBG', 'PUBG-UZOQ4LPWxa', 3, '2025-02-07 14:33:37', 5, '157dab47-f6d8-3daa-a691-b99d0742e1e0,27df1d0a-08ed-35bb-8885-4646abc4960f', 1, 'PRINCEAALYAN', '2025-02-04 14:04:57', '2025-02-04 16:41:59'),
(399, 'PUBG', 'PUBG-nhIg60PM1U', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-05 17:00:16', '2025-02-05 17:00:16'),
(400, 'PUBG', 'PUBG-DEk0RF2tKj', 1, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-06 00:58:45', '2025-02-06 00:58:45'),
(401, 'PUBG', 'PUBG-yl7ciTGZWo', 7, NULL, 1, NULL, 1, 'PRINCEAALYAN', '2025-02-06 01:28:45', '2025-02-06 01:28:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `lib`
--

CREATE TABLE `lib` (
  `id` int(11) NOT NULL,
  `file` varchar(255) NOT NULL,
  `file_type` varchar(255) NOT NULL,
  `file_size` varchar(32) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(8, '0001_01_01_000000_create_users_table', 1),
(9, '0001_01_01_000001_create_cache_table', 1),
(10, '0001_01_01_000002_create_jobs_table', 1),
(11, '2025_09_03_122454_create_alat_bahans_table', 1),
(12, '2025_09_03_122510_create_peminjams_table', 1),
(13, '2025_09_03_122528_create_transaksis_table', 1),
(14, '2025_09_03_131121_create_sessions_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `modname`
--

CREATE TABLE `modname` (
  `id` int(11) NOT NULL,
  `modname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `modname`
--

INSERT INTO `modname` (`id`, `modname`) VALUES
(1, 'AALYAN VIP MOD 64BIT'),
(1, 'AALYAN VIP MOD 64BIT');

-- --------------------------------------------------------

--
-- Struktur dari tabel `onoff`
--

CREATE TABLE `onoff` (
  `id` int(11) NOT NULL,
  `status` varchar(5) NOT NULL,
  `myinput` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `onoff`
--

INSERT INTO `onoff` (`id`, `status`, `myinput`) VALUES
(1, 'off', ''),
(1, 'off', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjams`
--

CREATE TABLE `peminjams` (
  `id_peminjam` bigint(20) UNSIGNED NOT NULL,
  `nama_peminjam` varchar(100) NOT NULL,
  `kontak` varchar(20) NOT NULL,
  `alasan` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `peminjams`
--

INSERT INTO `peminjams` (`id_peminjam`, `nama_peminjam`, `kontak`, `alasan`, `created_at`, `updated_at`) VALUES
(1, 'Dummy Test', '08xxxxxxxx', 'Keperluan Ekstrakulikuler', '2025-09-03 14:36:00', '2025-09-03 14:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `referral_code`
--

CREATE TABLE `referral_code` (
  `id_reff` int(11) NOT NULL,
  `code` varchar(128) NOT NULL,
  `Referral` varchar(25) NOT NULL,
  `level` int(11) NOT NULL,
  `set_saldo` int(11) NOT NULL DEFAULT 0,
  `used_by` varchar(66) NOT NULL,
  `created_by` varchar(66) NOT NULL DEFAULT 'Owner',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `acc_expiration` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data untuk tabel `referral_code`
--

INSERT INTO `referral_code` (`id_reff`, `code`, `Referral`, `level`, `set_saldo`, `used_by`, `created_by`, `created_at`, `updated_at`, `acc_expiration`) VALUES
(35, 'b9b19064f083b11c50e8ef00cbaad348', 'apbdgK', 2, 5, '', 'PRINCEAALYAN', '2025-02-05 18:09:43', '2025-02-05 18:09:43', '2025-02-20 18:09:43'),
(36, 'f6eb58c1adfa4673c3d55d9b5e7f3787', '5QJE0f', 1, 5, '', 'PRINCEAALYAN', '2025-02-05 18:09:54', '2025-02-05 18:09:54', '2025-02-06 18:09:54'),
(37, 'e7cc13d977a740bcb31952e125e26f5e', 'htEKpJ', 2, 50000, '1', 'PRINCEAALYAN', '2025-02-05 18:10:04', '2025-02-05 19:30:12', '2025-02-20 18:10:04'),
(35, 'b9b19064f083b11c50e8ef00cbaad348', 'apbdgK', 2, 5, '', 'PRINCEAALYAN', '2025-02-05 18:09:43', '2025-02-05 18:09:43', '2025-02-20 18:09:43'),
(36, 'f6eb58c1adfa4673c3d55d9b5e7f3787', '5QJE0f', 1, 5, '', 'PRINCEAALYAN', '2025-02-05 18:09:54', '2025-02-05 18:09:54', '2025-02-06 18:09:54'),
(37, 'e7cc13d977a740bcb31952e125e26f5e', 'htEKpJ', 2, 50000, '1', 'PRINCEAALYAN', '2025-02-05 18:10:04', '2025-02-05 19:30:12', '2025-02-20 18:10:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('6qakhcNe9t2GxQQ4DR6EhCKfpUNpKottRvckXNpi', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiY1VRZWZWQlhyVDdEZ1hINGFDMEh4N1NoME5uM2MwV2pkWWJBTlU5WSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1757053071);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksis`
--

CREATE TABLE `transaksis` (
  `id_transaksi` bigint(20) UNSIGNED NOT NULL,
  `id_peminjam` bigint(20) UNSIGNED NOT NULL,
  `id_alat` bigint(20) UNSIGNED NOT NULL,
  `jumlah_pinjam` int(11) NOT NULL,
  `tgl_pinjam` date NOT NULL,
  `tgl_kembali` date DEFAULT NULL,
  `status` enum('pinjam','kembali') NOT NULL DEFAULT 'pinjam',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_users` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_users`, `username`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@support.tech', '$2y$12$akePpgE0G5FJa9hNZDqlVOL.bwhbMDR2tNAjxlzD4H9QLMf41Tl4O', 'WedVsfCZEMXj3KWt409Od1scyKEEiDEiAQBa37kZakOrd8WyODAuNvb8k2zo', '2025-09-03 14:17:40', '2025-09-03 13:05:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `visitor_logs`
--

CREATE TABLE `visitor_logs` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `ip_location` varchar(255) NOT NULL,
  `timestamp` datetime NOT NULL,
  `visited_page` varchar(255) NOT NULL,
  `access_status` enum('Success','Failed','Unknown') DEFAULT NULL,
  `vpn_used` varchar(15) NOT NULL,
  `duration` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `_ftext`
--

CREATE TABLE `_ftext` (
  `id` int(11) NOT NULL,
  `_status` varchar(100) NOT NULL,
  `_ftext` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `_ftext`
--

INSERT INTO `_ftext` (`id`, `_status`, `_ftext`) VALUES
(1, 'Safe', 'Give Feedback else Keys off');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `alat_bahans`
--
ALTER TABLE `alat_bahans`
  ADD PRIMARY KEY (`id_alat`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `lib`
--
ALTER TABLE `lib`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `peminjams`
--
ALTER TABLE `peminjams`
  ADD PRIMARY KEY (`id_peminjam`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `transaksis_id_peminjam_foreign` (`id_peminjam`),
  ADD KEY `transaksis_id_alat_foreign` (`id_alat`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `visitor_logs`
--
ALTER TABLE `visitor_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `_ftext`
--
ALTER TABLE `_ftext`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `alat_bahans`
--
ALTER TABLE `alat_bahans`
  MODIFY `id_alat` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `lib`
--
ALTER TABLE `lib`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `peminjams`
--
ALTER TABLE `peminjams`
  MODIFY `id_peminjam` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `id_transaksi` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT untuk tabel `visitor_logs`
--
ALTER TABLE `visitor_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT untuk tabel `_ftext`
--
ALTER TABLE `_ftext`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD CONSTRAINT `transaksis_id_alat_foreign` FOREIGN KEY (`id_alat`) REFERENCES `alat_bahans` (`id_alat`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaksis_id_peminjam_foreign` FOREIGN KEY (`id_peminjam`) REFERENCES `peminjams` (`id_peminjam`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
