-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 01, 2023 at 07:03 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sawtee_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('post','publication','research') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `type`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Featured Events', 'featured-events', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(2, 'Programmes', 'programmes', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(3, 'Completed Programmes', 'completed-programmes', 'post', 2, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(4, 'Ongoing Programmes', 'ongoing-programmes', 'post', 2, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(5, 'Covid', 'covid', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(6, 'Infocus', 'infocus', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(7, 'Newsletters', 'newsletters', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(8, 'Sawtee in Media', 'sawtee-in-media', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(9, 'Blog', 'blog', 'post', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(10, 'Publications', 'publications', 'publication', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(11, 'Trade Insight', 'trade-insight', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(12, 'Discussion Paper', 'discussion-paper', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(13, 'Briefing Paper', 'briefing-paper', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(14, 'Policy Brief', 'policy-brief', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(15, 'Issue Paper', 'issue-paper', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(16, 'Working Paper', 'working-paper', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(17, 'Books', 'books', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(18, 'Reseacrh Brief', 'research-brief', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(19, 'Others', 'others', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(20, 'Publications in Nepali', 'publications-in-nepali', 'publication', 10, '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(21, 'Research', 'research', 'research', NULL, '2023-11-29 01:30:32', '2023-11-29 01:30:32');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileable_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageable_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `collection_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversions_disk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint UNSIGNED NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `generated_conversions` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `model_type`, `model_id`, `uuid`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `conversions_disk`, `size`, `manipulations`, `custom_properties`, `generated_conversions`, `responsive_images`, `order_column`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Page', 5, 'aa19ef39-5d1e-4697-b415-c0e426e57b09', 'page-media', 'publications-2', 'publications-2.webp', 'image/webp', 'media', 'media', 94230, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"publications-2___responsive_900_600.webp\", \"publications-2___responsive_752_501.webp\", \"publications-2___responsive_630_420.webp\", \"publications-2___responsive_527_351.webp\", \"publications-2___responsive_441_294.webp\", \"publications-2___responsive_368_245.webp\", \"publications-2___responsive_308_205.webp\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgOTAwIDYwMCI+Cgk8aW1hZ2Ugd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBRlFBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBN3U1OFZRNmhaWFZvMWkwcWhUaVFqaXZtblVmQmQzZmVJNTU0b1NJL016K3RmZFhqL3dBSzZWNFQ4R3pnZVhGY01wd1QxTmZIVGF0cVgvQ1FKSEI4MERTNDQrdGZOeTlvcDhwaEozZHB1NWE4U2ExYytEbDAyS0lIZVZBTlMrS1BpSnJlaWFSSE8vM1pBQ0szUGkzbzczYzJpMjhGdnV1SFZTY0NzNzR0K0c3bGZDRnBFMEpFcUlPQUs5R2pTakdQdkxWblpSWEtyTStpL3dCckJYdHREdFdTVmh1T0NNMTVMOEwvQUFoWTNkeGEzRXFsM0pCd2FLSzVwZjd3L1E4MkgrOG5jZVByR0dEeGZwcFJBQ29BSEZiZmk3UTdTODBoSlo0aEkyM29SUlJXamJzejE0bi8yUT09Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg==\"}}', 1, '2023-11-29 01:30:43', '2023-11-29 01:30:46'),
(2, 'App\\Models\\Section', 16, '2c750d5b-3e4c-411e-b950-e0bb231d90d8', 'section-media', 'pexels-ayu-shakya-25432531', 'pexels-ayu-shakya-25432531.webp', 'image/webp', 'media', 'media', 123916, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"pexels-ayu-shakya-25432531___responsive_640_960.webp\", \"pexels-ayu-shakya-25432531___responsive_535_803.webp\", \"pexels-ayu-shakya-25432531___responsive_448_672.webp\", \"pexels-ayu-shakya-25432531___responsive_374_561.webp\", \"pexels-ayu-shakya-25432531___responsive_313_470.webp\", \"pexels-ayu-shakya-25432531___responsive_262_393.webp\", \"pexels-ayu-shakya-25432531___responsive_219_329.webp\", \"pexels-ayu-shakya-25432531___responsive_183_275.webp\", \"pexels-ayu-shakya-25432531___responsive_153_230.webp\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjQwIDk2MCI+Cgk8aW1hZ2Ugd2lkdGg9IjY0MCIgaGVpZ2h0PSI5NjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBTUFBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBL1BwWGJPQUtlWWp1Qnh6VnIrejVRK1FPS3N4YWZQSWNJdTQrMWVkekxvY0pGYlJxekFNTUdxOStpeE1jSE5QdVV1YmRpcklWYXFwc1o3aENXbzJkMnhucWVpK0ZsdjJDbGVUWGJhVjhKWklHKzBzUUl3TTROZG5wSGd1R3h3NHh3YTNibTlYeVZ0MFlZSEJyMEZTcHlkMmpaUTduemw0bThFM011clNGT0V6eGlzdC9DZHhDdTBBbjNyMi9XdFBSYm9zUndhcExvdm5zQWtlZmZGS1VZUmVpRnkyWjBsejRqK3l3TU4yV1BRVm13M2trakNRdHllYTV5NXVvcjY4M1JPU2dyUnRwVVVnTXhyV0swTjI5UzlxVncwcTg4a1ZMcDJzcVl4SGdDUVZYdVpJU25YbXNLNXVFczdnUzVPQjJwdFhRai8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4=\"}}', 1, '2023-11-29 22:44:19', '2023-11-29 22:44:25'),
(3, 'App\\Models\\Section', 17, 'cb129351-6bf7-4feb-927f-ea6cb87c563b', 'section-media', 'suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1', 'suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1.webp', 'image/webp', 'media', 'media', 38758, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_636_422.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_532_353.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_445_295.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_372_247.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_311_206.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_260_173.webp\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjM2IDQyMiI+Cgk8aW1hZ2Ugd2lkdGg9IjYzNiIgaGVpZ2h0PSI0MjIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBRlFBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBK0p0UWhSclJvWUk4cGptdVhUUnpKRE1xcVFUMnIxZjRmZUh4cWlPbHd2ekVkNjZLNStGc2lSelNwSGdEa2NWNHJxS0xzZTNUVUpTVVpPeDgzMm5oSyt2cmw0b1ltZGh6d0t6Yi9TNTlPbmFLWkNycjFCRmZhSHdiK0hkcjVON2Qza1MrWW9JR1JYalh4WjhKVzBuaUc0OGhRUG1QQXJxZnV4VW4xSXEwb0tjb3dkMGozN1MvQ2RqcGFtU0ZTRzYxMWF5TEw0Y3VXYU5keUtjR2lpdklwKzg5VHNyeGp5YkhoS2ZFWFZkSjFDNnRiZHdzVE1RUlcxb21oMit1U200dWh2a2ZrazBVVjIxWlAyY1VjOUdLdXovLzJRPT0iPgoJPC9pbWFnZT4KPC9zdmc+\"}}', 1, '2023-11-29 22:44:43', '2023-11-29 22:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_10_04_123601_create_pages_table', 1),
(6, '2023_10_09_070332_create_categories_table', 1),
(7, '2023_10_09_071401_create_themes_table', 1),
(8, '2023_10_09_071405_create_posts_table', 1),
(9, '2023_10_09_072456_create_publications_table', 1),
(10, '2023_10_09_080048_create_images_table', 1),
(11, '2023_10_09_080809_create_research_table', 1),
(12, '2023_10_09_080926_create_sliders_table', 1),
(13, '2023_10_09_080955_create_sections_table', 1),
(14, '2023_10_15_113637_create_tags_table', 1),
(15, '2023_10_15_115715_create_post_tag_table', 1),
(16, '2023_10_15_130653_create_files_table', 1),
(17, '2023_11_20_093057_add_genre_to_posts', 1),
(18, '2023_11_22_042758_create_subscribers_table', 1),
(19, '2023_11_22_071807_create_jobs_table', 1),
(20, '2023_11_23_062023_create_media_table', 1),
(21, '2023_11_23_101931_create_slides_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Home', '/', '2018-06-24 10:04:45', '2016-07-28 05:00:36'),
(2, 'About', 'about', '2021-08-12 09:37:36', '2019-02-03 19:18:11'),
(3, 'Our Work', 'our-work', '2015-06-17 05:37:44', '2021-11-26 11:52:18'),
(4, 'Contact', 'contact', '2016-02-11 16:22:35', '2022-12-17 03:39:10'),
(5, 'Career', 'career', '2018-11-18 15:26:14', '2018-08-24 04:17:37');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `theme_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `excerpt` mediumtext COLLATE utf8mb4_unicode_ci,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('unpublished','draft','published') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpublished',
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published_at` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(1, 8, NULL, 'Ex necessitatibus consectetur quae ad blanditiis et.', 'ex-necessitatibus-consectetur-quae-ad-blanditiis-et', 'In ut vitae atque est. Optio similique pariatur omnis. Alias omnis temporibus ut neque aut.\n\nQuidem rem amet libero accusamus. Tempora enim dolor nostrum aut. Unde nihil esse modi ipsam ipsam odio. At officia libero dolores et deserunt.\n\nDoloremque rerum porro fuga. Ducimus odit maiores culpa sint modi mollitia.\n\nEst suscipit officia culpa. Doloribus perspiciatis ipsa quam repudiandae magni perspiciatis nemo. Rerum quisquam et eligendi hic quos voluptatum eum. Sequi beatae et esse necessitatibus deserunt ut suscipit cum.', 'Eaque ex ut tempora eum sed est similique. Fugiat quia voluptas et sit enim. Necessitatibus magni ratione sunt veniam sapiente. Tempora dolor sit animi esse qui.', 'Libby Kassulke', 'published', 'http://www.grant.info/ad-explicabo-libero-aliquid-sit-eligendi-enim-veniam', '2001-09-06', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(2, 8, NULL, 'Voluptate modi rerum at maxime deserunt.', 'voluptate-modi-rerum-at-maxime-deserunt', 'Modi molestias consectetur quo sit sit quam facere. Quis exercitationem aliquid sunt.\n\nNulla quo porro aspernatur nesciunt. Et maxime repudiandae ut. Libero et totam qui dolores quas. Molestiae nihil sit autem illum.\n\nTemporibus porro ut voluptatem numquam facilis. Nobis optio fugit qui assumenda quo ullam nulla. Quia nemo accusantium non nam quasi et quia. Aperiam est eos officiis et enim. Ut repellendus fugiat doloribus odit a at.\n\nQui quidem optio recusandae ad quia ut. Corporis sint aut assumenda provident omnis saepe. Non iste provident doloremque ducimus.', 'Incidunt quisquam id commodi in ut. Rerum est qui eos quia sunt. Mollitia quo quas earum earum praesentium dolor quod.', 'Bonnie Jerde', 'published', 'https://kihn.com/vel-voluptas-eveniet-omnis-nihil-error.html', '2004-10-22', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(3, 6, 4, 'Ratione sit vel veniam et et adipisci odit.', 'ratione-sit-vel-veniam-et-et-adipisci-odit', 'Sapiente magni est excepturi officia. Minima rerum magni iure sit. Fugit doloribus quis error ducimus quisquam omnis.\n\nDolores pariatur adipisci consequatur soluta sunt porro. Ad qui corrupti placeat alias accusamus voluptas laborum. Pariatur mollitia culpa quo voluptates ex recusandae. Ducimus optio laboriosam cupiditate quasi dolor itaque qui.\n\nQuia voluptatibus blanditiis a est. Cum cupiditate rerum et et labore. Sed itaque maiores aut sit consequatur. Officiis aut minima consequatur quidem et.\n\nAut ut nisi ad molestiae eveniet provident placeat. Facere laboriosam voluptatem atque nemo voluptatem. Quia qui velit et.', 'Aliquam sit expedita ea repellendus. Eligendi harum blanditiis quia enim pariatur. Dolor quia aut est voluptatibus non magnam. Aperiam doloribus cum quo dolore quas.', 'Fernando Goldner Jr.', 'published', 'http://www.hoppe.com/natus-in-perferendis-qui-illum-quos-ex-eum.html', '1977-11-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(4, 5, NULL, 'Dolorum consequatur blanditiis expedita qui esse.', 'dolorum-consequatur-blanditiis-expedita-qui-esse', 'Et sed rem ab consequatur. Voluptatem voluptatem neque fuga enim. Nesciunt enim aut et repudiandae dolores quia omnis sit. Rem consectetur dicta nemo quaerat error libero molestiae.\n\nNostrum assumenda rerum dolor reiciendis enim voluptates harum sapiente. Hic distinctio temporibus similique in.\n\nDucimus officia temporibus mollitia aliquid modi quibusdam. Voluptatem rerum delectus suscipit officiis et a. Aut vitae sed est incidunt. Tempora vitae adipisci unde et.\n\nEa autem sed facilis assumenda quaerat consequuntur. Perferendis vel et porro aliquam sunt sequi. Eos sapiente velit totam ex. Sed sed perspiciatis ullam cupiditate.', 'Voluptatum natus consectetur cumque explicabo. Aut tenetur quod occaecati qui praesentium asperiores doloribus.', 'Glenda Beer I', 'published', 'https://dibbert.com/error-similique-eum-quia-ex.html', '1994-03-08', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(5, 6, 6, 'Mollitia ex ut quasi quidem veniam ut ab.', 'mollitia-ex-ut-quasi-quidem-veniam-ut-ab', 'Sunt id eum eos omnis ab ab voluptate. Ex eligendi eveniet tenetur omnis minus non eos voluptate. Eum aspernatur enim harum reprehenderit ipsum ea quia non.\n\nAnimi quis aut rerum qui molestias qui. Ut culpa hic minus animi. Maxime dolor neque atque at ex et.\n\nSed eius aperiam doloremque soluta sit. Fugiat sit perspiciatis laboriosam adipisci repudiandae. Necessitatibus doloremque maxime vel quam dolores. Ullam doloribus et velit quas vel officiis aut.\n\nCumque dolores exercitationem minima ullam repudiandae quia. Adipisci consequuntur iusto facilis corrupti eum et. Nihil et aut enim animi aut soluta nihil quos.', 'Voluptate sint quo reiciendis est. Blanditiis vitae dicta maxime neque. Totam est et ut accusantium quaerat id iure.', 'Ellsworth Beer', 'published', 'http://lubowitz.com/incidunt-quo-et-autem', '2010-02-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(6, 4, 6, 'Voluptatum et ut quisquam voluptates est tempore.', 'voluptatum-et-ut-quisquam-voluptates-est-tempore', 'Nulla consequatur eius est consequatur dolores. Et delectus enim ipsum ut quo.\n\nOdio qui sequi voluptas enim aut nisi iure enim. Mollitia ullam soluta ab quis quo voluptatem explicabo in. Sunt eos tenetur odit sapiente officiis. Vel quia aut omnis.\n\nNeque numquam maxime cumque ratione asperiores est. Sint autem est autem laboriosam vitae eligendi repellendus voluptatem. Eos ea et ad vel distinctio eos.\n\nIusto voluptas est consectetur ipsum dicta. Vitae ratione officiis tempora. Qui ut nesciunt veritatis tempora.', 'Aut voluptatibus dolores voluptate deserunt sint. Velit commodi quas consequuntur atque aspernatur. Cumque aut reiciendis totam qui eum eligendi. Deleniti aut atque eos incidunt.', 'Ms. Mina Mante', 'published', 'http://konopelski.org/fugit-itaque-aut-nostrum-inventore-ut-repellendus-occaecati', '2015-05-21', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(7, 9, 7, 'Vel repellat aliquam ut quasi quae rerum.', 'vel-repellat-aliquam-ut-quasi-quae-rerum', 'Nisi perspiciatis et ad quo sint atque et. Nulla officia aspernatur autem quam quidem quis. Quae suscipit quia soluta. Sed quo enim qui molestiae aut consequatur cum.\n\nConsequatur assumenda omnis et soluta. Ipsum quibusdam nisi et magni quis eos corrupti. Voluptatum tenetur et doloribus velit ipsum hic.\n\nRepudiandae totam sequi eaque nobis distinctio totam sint. Aut voluptatum necessitatibus iusto officiis eaque. Accusantium ab numquam ipsa distinctio laudantium accusantium aliquid. Praesentium cupiditate ratione quam exercitationem rerum eaque molestiae sed.\n\nVoluptatibus libero iusto voluptatibus eos repudiandae. Ea accusamus voluptatem magnam animi. Et ipsam dignissimos rerum officiis totam voluptates sunt officia. Sit corporis minima et quia mollitia quia. Ut quis perspiciatis aliquam quod earum nisi.', 'Odit nemo et delectus sapiente laudantium tempora. Laboriosam aut aut quia necessitatibus dolorem magnam atque voluptates. Excepturi corporis maiores est animi aspernatur. Saepe illum sit ea veniam.', 'Ms. River Kovacek', 'published', 'http://www.bins.com/adipisci-laboriosam-esse-fugit-accusantium-autem', '2005-04-09', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(8, 3, 4, 'Neque quia iste adipisci dolor unde ut.', 'neque-quia-iste-adipisci-dolor-unde-ut', 'Neque eum et nemo consequatur expedita ipsam. Eos sint ut aut maxime aliquam assumenda. Dolore earum ut occaecati voluptatum facere enim asperiores. Quis eligendi a molestias fuga et ut nihil.\n\nQuam quae libero id ut eos iure. Doloremque ullam pariatur iure accusamus corporis. Aperiam ab minus quia accusamus. Voluptatum est et corrupti natus sit.\n\nCumque unde sit doloremque et ut ut. Corrupti quo sed consectetur expedita a. Quia cumque et nam architecto qui consequatur quia. Voluptatem ut alias necessitatibus ut distinctio nulla quia.\n\nConsequatur consequatur tempore praesentium dolorem totam necessitatibus. Quas sapiente dolorem aut voluptas repudiandae aut. Ut inventore vitae ullam. Eos vero quasi tempora repellendus quia qui.', 'Omnis nulla facere voluptatem iusto perspiciatis amet. Consequatur quos id et similique eos. Voluptate in provident saepe voluptatum. Minima minima quam voluptate.', 'Fabiola Mraz', 'published', 'http://www.sipes.biz/officiis-vitae-voluptatibus-natus-aut.html', '1973-12-22', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(9, 4, NULL, 'Rem doloremque placeat sunt atque in et.', 'rem-doloremque-placeat-sunt-atque-in-et', 'Rerum quam voluptas hic sint. Officiis est debitis velit aliquam est. Facere molestiae quia rem molestias molestias quibusdam.\n\nAmet possimus sequi officiis dicta. Vitae asperiores delectus eum ut non qui vel. Eum pariatur adipisci nobis sit et laboriosam. Eos sed nam ut iure nulla qui et. Quo quasi dicta mollitia.\n\nLaboriosam assumenda facere sit et esse. Molestiae repellat incidunt aut hic non numquam. Quia amet rerum asperiores asperiores velit.\n\nIllum sit consequatur eveniet voluptas vero vitae velit soluta. Neque consequatur molestiae aut ratione et quis asperiores. Et quos tempore architecto aut ab. Quo reprehenderit autem et quisquam enim consequuntur sint.', 'Repellat minima odio alias et. Adipisci ut quae veniam tempore excepturi et sint. Delectus ex est sed dicta aut.', 'Maddison Flatley', 'published', 'http://nicolas.com/commodi-doloremque-quisquam-ut-culpa-exercitationem', '1996-08-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(10, 9, 5, 'Earum pariatur pariatur ex pariatur ut.', 'earum-pariatur-pariatur-ex-pariatur-ut', 'Amet soluta vel illum quos similique. Atque deserunt laborum est sit. Exercitationem quo voluptatem incidunt odit error veniam repellendus. Sint quam id rerum nemo quia rem.\n\nNostrum corrupti libero recusandae odio debitis alias aliquid. Et delectus adipisci non explicabo aperiam omnis voluptatibus. Veniam incidunt placeat odio sit fugit iure velit sed.\n\nVeritatis et eaque sint explicabo. Non quae architecto ex fugit optio porro sit necessitatibus. Unde ab exercitationem minus. Quia ab officia dolorem debitis doloribus.\n\nEa officia aperiam ea quia dignissimos iure et. Minus velit repellat in non eos. Dolor officiis reiciendis ipsam eaque vitae qui.', 'Itaque occaecati voluptas libero assumenda. Quaerat omnis veniam consequuntur id voluptates. Molestiae vel fugit molestiae et ea aut labore. Omnis in fugit distinctio vitae omnis.', 'Ms. Margarete Borer', 'published', 'https://jaskolski.com/non-at-quod-et-molestiae.html', '2001-04-16', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(11, 8, 1, 'Maiores repellat laboriosam quod voluptas.', 'maiores-repellat-laboriosam-quod-voluptas', 'Qui quam natus eligendi molestiae. Ut corporis asperiores velit ut. Assumenda placeat id ad neque non nesciunt doloribus.\n\nBlanditiis eligendi libero quia enim corrupti consequatur. Sit est quasi a sunt. Dolorem ipsum repudiandae eligendi alias et earum dolores. Nihil consequuntur doloribus ipsam temporibus.\n\nVoluptatum et impedit esse error cumque sed provident. Nulla accusantium voluptatem qui ut vitae autem totam. Et omnis cupiditate accusantium dolorem reprehenderit ullam aut.\n\nAut sit et id dolores doloremque nulla. Unde dolores modi est est et. Voluptas laborum eos illo assumenda id.', 'Tenetur ut voluptas molestiae. Eaque qui ullam excepturi. Sunt impedit labore aspernatur nesciunt aut inventore. Vel unde expedita eligendi eligendi porro dolore vero.', 'Kailyn Medhurst', 'published', 'http://www.walter.com/error-saepe-sit-explicabo.html', '1992-12-17', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(12, 6, NULL, 'Error quas ipsam omnis id odit tenetur.', 'error-quas-ipsam-omnis-id-odit-tenetur', 'Alias fuga enim dicta ullam quidem. Illum dicta voluptatem possimus maxime possimus.\n\nNostrum placeat deserunt aut iure. Aut excepturi temporibus ad iusto quis. Quasi aut iste odit voluptas quia voluptas. Quia qui pariatur earum quaerat recusandae minima.\n\nQui et expedita illo magni eaque. Cumque qui nihil aut sint placeat. Tempore doloribus quis autem velit.\n\nIste soluta eaque eum et. Fuga ea quidem sint assumenda vitae enim molestias et. Vel laudantium vel recusandae quo officia animi.', 'Omnis tenetur et quis. Quo exercitationem quia molestiae facere fugiat. Sunt quia eum et.', 'Miss Jayda Sauer', 'published', 'http://www.hand.com/mollitia-recusandae-illo-eum-nemo', '2017-04-15', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(13, 2, NULL, 'Recusandae ut dolores voluptatem ad culpa reiciendis odit.', 'recusandae-ut-dolores-voluptatem-ad-culpa-reiciendis-odit', 'Alias id beatae nostrum minima. In dolorum consequatur beatae dicta similique rerum nihil. Consequatur placeat et rerum ut sed quam omnis.\n\nPlaceat culpa ad perspiciatis perferendis non sed laborum. Id incidunt pariatur et a deleniti voluptatem. Rerum quia dolorum pariatur optio ut.\n\nVelit cumque ea numquam. Facere molestiae rerum doloribus nostrum id. Quae quia quisquam sint pariatur. Debitis harum eius unde molestias inventore voluptatem est facilis.\n\nExercitationem hic et deserunt ut. Omnis culpa et est voluptatem eligendi esse iusto. Ratione optio non est fuga commodi quae. Voluptatem quaerat neque natus facilis.', 'Ipsum labore ut officiis consequatur. Ut assumenda tempore aut. Explicabo ratione facilis qui soluta.', 'Imelda Lehner', 'published', 'http://koepp.com/', '1991-12-19', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(14, 7, NULL, 'Rerum hic veritatis cumque.', 'rerum-hic-veritatis-cumque', 'Quaerat iste vero perferendis excepturi. Eum quos dolore dolorum quia nam quisquam. Omnis perspiciatis asperiores est alias mollitia quia. Quis minima pariatur tempore.\n\nIllum ut eaque ut quae sunt. Dolorum iste ea minus quis quasi saepe. Et beatae amet nihil debitis id laboriosam est et.\n\nAperiam ipsam ea at doloribus architecto. Impedit omnis facere sed ad eos. Voluptatem perspiciatis non blanditiis earum earum dolores neque. Et doloribus qui architecto beatae tempora.\n\nEaque debitis mollitia molestias natus autem vero. Quia quam magnam officiis placeat ut labore placeat eum. Nisi deserunt placeat expedita veniam repellat excepturi earum optio. Aperiam delectus corporis voluptatem non.', 'Sed cum quia aperiam hic nam perspiciatis et. Voluptas architecto voluptatem sint et ut dolores. Voluptates et quae officiis quia tenetur.', 'Kyleigh Murray', 'published', 'http://www.dietrich.org/aliquid-dolores-atque-velit-unde-sint-occaecati-hic.html', '1980-08-28', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(15, 5, 6, 'Excepturi sed commodi adipisci consequatur eius nihil dolore et.', 'excepturi-sed-commodi-adipisci-consequatur-eius-nihil-dolore-et', 'Consequuntur reprehenderit quas dolorem non quis eveniet. Sit ea totam molestias. Dolorem est asperiores veniam sequi quia expedita. Vero velit illo magni corporis et placeat nemo enim.\n\nInventore amet ratione recusandae ut et voluptatem doloribus. Odio nostrum suscipit quia voluptatem explicabo accusamus natus molestias. Quis nihil ab delectus repellat qui et quasi.\n\nQuos sed rerum eveniet facere molestiae nemo recusandae. Inventore minus nobis laborum impedit. Culpa adipisci necessitatibus sint neque qui veniam omnis. Omnis omnis nisi et a. Eaque commodi maxime debitis voluptate saepe et.\n\nQuasi quia nihil aut harum sunt saepe. Eligendi aspernatur modi qui eos ipsa vitae.', 'Vel et eveniet eos eius et. Consequatur autem rerum ratione harum atque qui. Voluptas animi id et at eum sit. Quod quia consectetur aliquid omnis nihil.', 'Keira Beer I', 'published', 'http://kuhic.com/', '1973-05-14', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(16, 6, NULL, 'Totam enim reprehenderit est dolor aperiam.', 'totam-enim-reprehenderit-est-dolor-aperiam', 'Autem qui culpa aliquam eligendi. Et ut et ducimus. Molestias animi mollitia et numquam quia minus.\n\nEt sed vitae itaque voluptatum ipsum impedit voluptatem. Optio delectus quos sit laudantium minus. Quibusdam soluta sint sunt nesciunt velit reiciendis. Eaque et eveniet maxime delectus.\n\nQui harum fuga ex aut dolorem minus. Ea ipsa aut tenetur consequatur. Dolorem aut ullam non laboriosam.\n\nDicta molestiae saepe et et ut rerum distinctio. Sequi fugiat et est. Placeat ipsam et aliquam. Dolores voluptatum dolorem et cum ipsa. Consequatur aut laborum id voluptas dolor.', 'Quae a sit aperiam possimus quia. Et incidunt ipsam voluptatem. Deleniti qui sit voluptas.', 'Kurtis Harber', 'published', 'http://hirthe.com/dolore-rerum-ipsa-saepe-repellat', '1991-03-18', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(17, 3, NULL, 'Ad consectetur voluptate porro omnis minus.', 'ad-consectetur-voluptate-porro-omnis-minus', 'Rerum voluptate et quos velit mollitia nostrum. Facilis velit eius vero consequatur laborum.\n\nIste ipsam cupiditate ipsa nobis omnis in ut. Deleniti quos cum ea et nisi id expedita. Nesciunt aut et ad veniam. Voluptatem itaque ducimus autem tempore doloremque.\n\nQuia est eum fuga veritatis laudantium. Occaecati ipsam nobis iure omnis quisquam. Ut eum optio et at cumque sunt.\n\nDolor molestiae rem est est vel dolorem aut praesentium. Natus libero optio occaecati ex ab ut sed. Rem alias eveniet molestias cum. Temporibus a eum in excepturi at atque ut.', 'Nesciunt voluptas quia quia dolorem qui ratione vitae. Minus repudiandae harum cumque omnis aut aut. Nihil voluptatem labore qui molestias. Alias fugiat quos velit aperiam odit.', 'Dr. Nico Kessler', 'published', 'http://www.morar.info/veniam-est-veritatis-et-sit', '2001-04-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(18, 7, 4, 'Consequatur eligendi qui tenetur minus eos illo non.', 'consequatur-eligendi-qui-tenetur-minus-eos-illo-non', 'Aut dolorem sint harum ea. Temporibus qui asperiores enim ducimus magni consequatur. Quaerat corporis accusamus iusto unde cum beatae.\n\nEst velit sunt excepturi libero assumenda. Rerum modi omnis quo iure sapiente. Temporibus dolorem quam ex eum repudiandae accusantium quisquam quia.\n\nConsequatur non aspernatur velit magnam sunt aut consequuntur. Unde commodi laborum ratione qui qui quae. Exercitationem quam rerum rerum enim maxime sit ex.\n\nVoluptas sit architecto voluptatum similique non maxime. Ut ipsam reiciendis dolores ratione enim. Fugiat nesciunt qui dolor deserunt quia ratione. Culpa necessitatibus voluptates quaerat dolorem exercitationem.', 'Aut sed similique eveniet omnis explicabo. Praesentium atque velit molestiae ea iusto. Laudantium modi dolorem sint enim.', 'Aida Ortiz', 'published', 'http://www.shanahan.com/dignissimos-explicabo-animi-consequuntur-blanditiis-cumque', '1989-04-20', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(19, 2, 7, 'Excepturi ipsum qui quod id et sint corporis aliquid.', 'excepturi-ipsum-qui-quod-id-et-sint-corporis-aliquid', 'Vero laudantium sed rem dolore assumenda alias consequatur. Velit incidunt corrupti vel beatae voluptas repudiandae. Enim accusantium sit dolorem. Est esse autem repudiandae commodi iure. Molestiae et et dolorem incidunt qui soluta.\n\nEt in sit nihil voluptatem. Inventore et voluptate amet. Laborum odit et unde et aperiam facere vero in.\n\nQuibusdam veritatis qui molestiae harum. Incidunt autem qui quae quo. Sunt dolore deserunt repellendus. Fuga accusantium eum aspernatur error dolorem aut.\n\nConsequatur repellendus voluptatem magni debitis. Et enim accusamus ut magni voluptas quaerat totam. Officiis quos enim saepe reprehenderit doloribus. Autem aliquid ut vitae quidem illum aspernatur saepe. Libero voluptatem atque omnis ipsam ratione eum.', 'Et quibusdam in iusto sequi aut et. Vel vel omnis et deleniti ipsam velit. Suscipit voluptatem quam voluptate et est voluptatibus. Nobis voluptas aliquid deleniti et nihil cumque nobis.', 'Malachi Graham', 'published', 'http://www.daniel.net/cupiditate-molestias-et-est-optio-distinctio-vero-hic', '2014-04-22', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(20, 5, NULL, 'Cupiditate velit nostrum consequuntur exercitationem excepturi.', 'cupiditate-velit-nostrum-consequuntur-exercitationem-excepturi', 'Eum reprehenderit aut alias est quis. Quo cumque hic enim commodi voluptatum deleniti. Dolores distinctio assumenda similique laborum laudantium voluptatem quae.\n\nSed quisquam ducimus beatae non ducimus dolores impedit. Tenetur sequi et recusandae consectetur ea sequi quis. Dolorem ea voluptatem delectus laborum minima velit quasi. Maiores sit consequatur itaque dolorum sit et ipsam. Ex aperiam dolor numquam dolor natus blanditiis.\n\nQuia sunt autem nobis ipsum esse sit. Sed eum omnis accusantium et sed. Ut accusantium qui natus sed. Facere rerum placeat reprehenderit voluptatem laborum similique aut voluptatem.\n\nNobis quisquam odio totam incidunt. Repellat sequi officiis illum numquam assumenda. Doloribus temporibus rem iste cumque.', 'Enim corporis omnis non quis. Eos iste debitis veritatis quia mollitia ratione. Minima nam quos sed iusto voluptas eos.', 'Raphael Reynolds', 'published', 'http://grady.com/dolor-et-dolorem-rerum-incidunt-dolor.html', '1978-07-29', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(21, 8, 6, 'Voluptatem quos quam delectus eaque aperiam pariatur atque.', 'voluptatem-quos-quam-delectus-eaque-aperiam-pariatur-atque', 'Aliquid quaerat modi sit facilis. Ratione nihil repellendus sit impedit voluptas placeat cupiditate. Pariatur voluptate et dignissimos.\n\nDoloremque commodi explicabo voluptas animi dignissimos. Accusamus expedita aspernatur quis ad sunt voluptate. Assumenda voluptas et incidunt a dolores. Qui beatae delectus nihil quaerat voluptas culpa quia.\n\nVelit aliquam voluptatibus molestiae. Dolores quidem suscipit omnis omnis vitae id sit. Molestiae animi at ex distinctio enim est. Et dolor quam minima est porro consequuntur placeat quod.\n\nVelit vel excepturi et voluptas praesentium voluptatum. Tenetur odit nisi aut. Qui rerum modi ut voluptatibus sequi aperiam. Error et tenetur quia est totam laboriosam optio debitis.', 'Minus expedita nihil eum fuga. Sed commodi excepturi quo voluptatem numquam. Voluptatem quia veniam ipsum mollitia labore sunt id eum.', 'Destin Dickinson', 'published', 'http://pfeffer.com/', '2010-05-28', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(22, 2, 7, 'A nihil facilis aut.', 'a-nihil-facilis-aut', 'Officia veniam et vero porro. Dolore laboriosam beatae et accusamus sit. Dolorem minima quo sit quibusdam.\n\nAutem neque deleniti quidem nulla. Aut provident est soluta quae reiciendis. Rerum sint doloremque quisquam eum sed. Hic ipsa dignissimos repellendus reiciendis. Et ut nobis exercitationem non.\n\nQuae eligendi architecto vero assumenda in. Nemo et saepe et est nostrum. Numquam vero rerum quo fugit nam consectetur.\n\nQuas dolorem illum qui harum cum. Aut adipisci id magni impedit fuga. Voluptatem deleniti recusandae exercitationem at molestiae.', 'Nostrum non sed ipsum velit quo iusto. Consequatur eveniet id modi distinctio ut ex id. Quo sed culpa odit adipisci et pariatur.', 'Dr. Marcellus Windler', 'published', 'http://www.nicolas.com/minus-accusamus-dolorem-est', '1971-05-23', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(23, 7, 6, 'Atque necessitatibus nostrum voluptas.', 'atque-necessitatibus-nostrum-voluptas', 'Earum saepe sunt sit aliquam qui possimus eum. Sequi aliquid et necessitatibus ea. Velit eos dolorem velit voluptatem ab. Ut inventore rerum dolore ad et.\n\nEius sit quis ab id molestiae. Aut quas labore sequi numquam. Quasi fugiat ut placeat dolor in est.\n\nQuos aut nostrum eos rerum est. Ea maiores dolores voluptas aspernatur. Velit temporibus expedita excepturi soluta. Tempora voluptatibus quos unde quae expedita voluptatibus.\n\nCum minima tempora omnis. Ut est a blanditiis est eos qui repellat facilis. Ab nesciunt ex corporis.', 'Voluptate fuga eos est dolorem autem aliquid pariatur. Excepturi enim quo nihil quia aliquid deleniti animi quia. Quia qui ea ad recusandae.', 'Dr. Sanford Keebler II', 'published', 'http://www.marquardt.com/dolore-ut-odio-quo-praesentium.html', '1992-12-17', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(24, 6, 3, 'Distinctio laborum sunt omnis repudiandae.', 'distinctio-laborum-sunt-omnis-repudiandae', 'Magni dolor quisquam ipsum eos aut. Eaque quo exercitationem quia modi sint veritatis. Itaque totam ipsam dolores. Hic animi libero natus voluptates minus sit laudantium.\n\nQuia vel voluptate nihil eum. Facilis et accusamus nostrum quis assumenda libero. Doloribus et recusandae facilis pariatur eligendi provident.\n\nQuos quia vitae provident fugiat voluptas qui aliquam iure. Quo quis sit qui incidunt et quam necessitatibus maiores. Ut et quisquam id earum impedit et qui. Ut similique voluptatem saepe eum ut.\n\nCum maxime earum eum tempora dolorem omnis. Qui et molestiae velit id quia. Ut similique fugiat odio. Ducimus nulla est ab.', 'Minus nihil architecto magni explicabo. Dignissimos ut quia tenetur dolorem. Quasi id dolor veniam deserunt mollitia velit. Aut unde blanditiis libero molestiae sed.', 'Anna Schinner', 'published', 'http://www.gorczany.com/omnis-sit-voluptatibus-alias-tempora-cum-distinctio-fugit.html', '1990-07-30', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(25, 7, 3, 'Minima veritatis cum dolorum minus.', 'minima-veritatis-cum-dolorum-minus', 'Rem quo quasi quo vel hic ab. Placeat molestiae et in vel qui autem. Dolorem porro nemo eligendi nisi est perspiciatis aliquam. Et et sunt quo quis ducimus. Voluptas repellendus est minima dolor assumenda voluptas omnis veniam.\n\nAmet consequatur cum consequatur et et voluptatum. Eum impedit facere eum reiciendis quia. Qui at quisquam laudantium nulla. Numquam blanditiis maiores assumenda ab aut nam.\n\nPlaceat beatae ducimus sit suscipit eligendi aut qui. Omnis tenetur magnam culpa nostrum fugit accusantium repudiandae. Molestiae quo ratione quasi labore fugiat ipsum dolores sint.\n\nLaudantium velit sint similique quia officiis. Delectus recusandae sed aut aliquam qui et.', 'Et doloribus voluptatibus omnis odit incidunt et. Autem et cumque error. Delectus in a ad facere harum ipsa ut. Dignissimos in saepe officia qui.', 'Anahi Schultz', 'published', 'http://www.friesen.com/cum-cupiditate-qui-est-nihil-et-magnam', '1985-01-26', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(26, 2, 5, 'Sed quo sit maiores.', 'sed-quo-sit-maiores', 'Ut voluptate aut corrupti aperiam ex consequuntur optio. A laudantium repudiandae magnam magni voluptas voluptatem iste.\n\nLabore sapiente consequatur numquam animi ut assumenda minus. Quis eum porro alias error quasi architecto quo. Aut quasi in molestias nulla eligendi quidem.\n\nIpsum unde occaecati rerum voluptatem. Ea nesciunt facere odit tempore. Eum enim qui consequatur aut eum deserunt.\n\nLaudantium asperiores aliquam non ipsam beatae impedit. Accusantium delectus velit aspernatur magnam. Quia eveniet ut aliquam. Doloribus aperiam est ut nisi id veritatis.', 'Totam suscipit sunt similique voluptas. Ducimus suscipit corporis ea veniam optio. Aut ea sequi molestiae. Ut minima suscipit quasi ipsa aut.', 'Trisha Hansen', 'published', 'http://haley.com/', '2003-01-30', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(27, 1, 6, 'Suscipit ex est sapiente enim.', 'suscipit-ex-est-sapiente-enim', 'Et corporis alias molestiae vel quasi omnis consequatur. Ipsam dolorem ut rerum nam commodi.\n\nQui non delectus reprehenderit et qui itaque velit minus. Voluptate accusantium aut aliquam sunt deleniti minus quae ullam.\n\nAut delectus et qui commodi non ab. Ut sed est libero sapiente asperiores. Aspernatur fuga fugiat eius minus reprehenderit error praesentium.\n\nPraesentium sed unde quasi possimus. Incidunt quas et similique quibusdam. Reprehenderit ab in qui numquam dolorem itaque ut saepe. Tenetur voluptates eligendi reiciendis tempore. Suscipit eos molestiae et exercitationem velit eum dolor culpa.', 'Natus magni minus beatae reprehenderit officia reprehenderit sit. Sint culpa commodi qui iure consequatur et totam minima. Et cumque eos animi accusantium perferendis.', 'Dr. Carson Johnson I', 'published', 'https://www.rohan.org/corrupti-laborum-animi-velit-porro-voluptatem-ad-qui', '2010-11-14', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(28, 4, 7, 'Ex omnis sunt deleniti dignissimos.', 'ex-omnis-sunt-deleniti-dignissimos', 'Commodi quidem nihil molestiae est. Distinctio sed cumque delectus provident error voluptas voluptatem. Et est sit aut debitis soluta rerum.\n\nAccusamus illo qui distinctio. Deleniti enim ipsum consequuntur labore cupiditate odio reprehenderit. Culpa reiciendis qui at eaque in veniam.\n\nAut amet magnam ipsum inventore. Soluta accusantium voluptate inventore consequatur.\n\nIusto odit amet neque ut fugiat. Earum magni aut saepe cupiditate. Amet est amet accusantium quae enim fugit.', 'Sapiente corporis dignissimos quaerat ex. Harum repellendus est optio. Culpa possimus unde sunt qui ab asperiores.', 'Roslyn Brakus', 'published', 'http://franecki.com/est-assumenda-non-sapiente-quo-facilis.html', '1973-10-24', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(29, 5, 5, 'Est distinctio eveniet praesentium odit veniam quisquam consequatur.', 'est-distinctio-eveniet-praesentium-odit-veniam-quisquam-consequatur', 'Laborum et molestias provident. Est ex omnis laboriosam voluptas nesciunt consectetur. Nisi consequuntur deleniti illo aut earum aut aut. Asperiores consequatur numquam reiciendis adipisci dignissimos.\n\nSed ex quis aliquid quam consequatur. Quam nobis in ullam iure. Voluptates magnam incidunt ut.\n\nLaudantium quam assumenda ipsam sint commodi eos. Architecto tempora ut eaque. Quo aperiam temporibus qui quod a delectus est. Fugiat rerum quia alias aliquid deleniti sapiente voluptate sed.\n\nEt deleniti est quod rerum. Possimus ut pariatur ut est. Ut aut et omnis. Perferendis iure delectus temporibus minima ut quis laboriosam maxime.', 'Atque soluta ad sequi harum. Molestiae error veritatis perferendis mollitia. Quae sit ex beatae commodi aut. Quia et consequatur asperiores voluptas vitae eaque aut.', 'Crystel Eichmann', 'published', 'http://www.goyette.com/expedita-et-maiores-qui-corrupti-porro-consequatur-odio-sapiente', '1999-10-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(30, 1, 1, 'Quia nulla recusandae vero voluptatem dolor a labore quia.', 'quia-nulla-recusandae-vero-voluptatem-dolor-a-labore-quia', 'Dignissimos fuga architecto quis quos facere nostrum. Sit et quas sit et voluptate eum voluptatum.\n\nIpsum aliquam dolores soluta unde. Ut commodi reiciendis quo quo. Quod et vel enim ducimus modi.\n\nRepellendus corrupti tenetur porro omnis impedit eligendi similique autem. Nulla consectetur quae adipisci nulla temporibus sit rem odio. Hic ut quis architecto qui ut dolor. Veniam minima aliquid modi et esse distinctio ipsa aut.\n\nOccaecati voluptatem debitis numquam alias cupiditate cumque et. Expedita id qui voluptas rem. Suscipit recusandae consectetur itaque cupiditate inventore asperiores.', 'Officia numquam quia et laudantium amet. Quod non voluptas magni corporis sit natus. Non dolorem neque eaque in. Deleniti maiores et quo et delectus ut.', 'Laury Eichmann', 'published', 'https://www.prosacco.com/quaerat-doloribus-nulla-aut-hic-nemo', '2023-07-09', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(31, 9, 7, 'Soluta ut omnis voluptatem est.', 'soluta-ut-omnis-voluptatem-est', 'Doloribus nam doloremque qui quia rem inventore a non. Minima molestias necessitatibus debitis et expedita qui vero. Inventore saepe provident quis.\n\nSed facilis occaecati est iste rerum explicabo officia architecto. Laboriosam omnis dolorem est natus possimus quaerat ea. Accusantium doloremque in voluptatibus eaque fuga sit.\n\nSed qui est ea deleniti voluptates distinctio. Optio iure debitis repellat velit molestiae et. Et doloribus magni aut. Est illo qui facere autem.\n\nVelit aut sapiente quis nostrum quisquam. Vel doloremque quidem officia unde aut. Sit voluptas et id ipsa. Qui aliquid molestiae reprehenderit suscipit.', 'Itaque sed natus eum officia aliquid cumque. Qui dolorum maiores veniam ad suscipit placeat totam sit.', 'Daren Keeling', 'published', 'http://www.kohler.biz/', '1977-06-19', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(32, 5, NULL, 'Quod aut sit in eaque voluptate aut.', 'quod-aut-sit-in-eaque-voluptate-aut', 'Perferendis ea eum odio voluptatem. A voluptatum ipsa eos quo dicta laboriosam repellat rerum. Alias rem et voluptas cupiditate incidunt dolores quis.\n\nConsequatur dolores minima qui vero voluptatibus optio. Et facere quam aut quo dolore. Omnis dolores neque nisi dolore iusto quod. Magni quia repudiandae officiis.\n\nUt enim consequatur ullam sit exercitationem. Laudantium et asperiores voluptatem sequi sint dolorem excepturi.\n\nConsequuntur explicabo laborum et. Est quo nam autem alias enim.', 'Ratione enim minima inventore ipsa ad sunt fugit. Sint explicabo hic iusto repellat. Consectetur adipisci et asperiores et sequi mollitia libero. Quae quas alias commodi aspernatur et.', 'Jesse Heidenreich', 'published', 'https://koch.com/voluptatem-alias-nostrum-molestias-amet-consequatur.html', '1996-05-29', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(33, 7, 6, 'In est id ut.', 'in-est-id-ut', 'Porro incidunt sunt magni perspiciatis ab fugit eos. Qui sint impedit quia eos atque saepe.\n\nQuam atque perferendis qui. Laboriosam commodi fugiat reiciendis voluptatem qui quasi qui. Expedita nihil repellat id nihil repellendus. Et deleniti est neque asperiores. Assumenda magni minus est molestiae.\n\nConsectetur possimus ut facilis atque inventore. Sint reprehenderit qui voluptates. Corrupti dolorum impedit et facilis non itaque. Aut incidunt voluptatem facere.\n\nLaboriosam vero voluptate quis dolorem dignissimos aut. Non minima ea perferendis dolorem optio. Sed et tempora in.', 'Ab voluptate in rerum alias consectetur molestiae enim. Ab et veritatis earum est deserunt fugit quo aperiam. Qui harum non quia quae sed quia maxime. Vel dolorem id quo molestiae qui inventore.', 'Raheem Howell', 'published', 'https://www.kiehn.com/quisquam-sint-minima-sed-tempore', '2015-11-12', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(34, 2, 5, 'Quisquam maiores eius perferendis.', 'quisquam-maiores-eius-perferendis', 'Nihil consequuntur commodi expedita voluptatem quas voluptates et voluptatem. Perspiciatis voluptatem itaque est et delectus ut saepe. Nesciunt repudiandae aliquam quo magnam aut. Quis quo fugit sint ducimus.\n\nCorporis labore dolorum sunt. Optio animi repudiandae id facere. Soluta aut non omnis magni autem non recusandae. Quae expedita incidunt omnis velit distinctio ut.\n\nEos adipisci pariatur qui consequatur nemo est. Eaque commodi dolore maiores dolorem nobis est voluptas perferendis. Et voluptas quis quibusdam voluptatem cumque fugit ipsum. Sint eaque dolor magnam odio.\n\nNeque consectetur molestiae enim perspiciatis. Repellat eveniet odio et dolorem accusantium id. Consequatur eum possimus eaque qui tempora. Ea assumenda velit itaque quaerat quo rerum voluptatum corporis.', 'Nihil quam ut rerum quidem. Adipisci aut tenetur quibusdam non officia soluta autem. Nihil voluptatem quasi hic.', 'Garrick Hettinger', 'published', 'http://www.abshire.com/accusantium-iste-itaque-sunt.html', '1993-03-15', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(35, 6, 3, 'Inventore magni delectus et aut.', 'inventore-magni-delectus-et-aut', 'Architecto eum necessitatibus doloremque magni. Dolores quia distinctio tenetur repellendus excepturi voluptatum. Dolorem repudiandae et molestiae dicta. Vitae consequatur doloribus aliquam delectus dolor molestias asperiores.\n\nVoluptatum aut vel consequatur quis. Quia perferendis cupiditate expedita voluptas libero consequuntur est. Ut vero quo voluptas et sapiente nemo sint quas.\n\nAliquid magnam nostrum dolores voluptatum. Ut accusamus perferendis dolor rerum quia aliquid. Itaque voluptates porro fugit alias at.\n\nFuga autem voluptates assumenda consequatur est. Sit ut et consequatur accusamus. A pariatur facilis dolor exercitationem.', 'Cumque distinctio ipsum tempore quo et assumenda magnam porro. Saepe minus quo quia sunt. Dolores ut aspernatur laborum.', 'Freddie Braun', 'published', 'http://bogan.net/atque-et-aut-facilis-debitis-unde-exercitationem.html', '1984-11-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(36, 3, 4, 'Id fugiat reprehenderit quis omnis ut modi aspernatur facilis.', 'id-fugiat-reprehenderit-quis-omnis-ut-modi-aspernatur-facilis', 'Qui qui quaerat aliquid et. Omnis quia quis quos placeat. Ut ipsam dolore doloremque sunt dolore qui. Beatae quam suscipit dolores tempore alias exercitationem.\n\nVoluptas sunt repellendus nulla. Officia distinctio occaecati dignissimos. Magnam dolorem natus a rerum consequuntur aut. Et perspiciatis iste eaque.\n\nEsse recusandae quia quia. Dolores quisquam saepe voluptates at est perferendis. Occaecati accusamus sapiente incidunt culpa aut amet ea.\n\nAut maxime sint sunt magni voluptas. Qui sed tenetur natus veniam fuga delectus eos veritatis. Corporis veniam dolor labore totam eaque aliquid. Est eius quidem qui ut et quidem iste.', 'Neque voluptatum minima dolor qui. Ipsum ex sequi quaerat. Dolores laboriosam laboriosam aspernatur. Iure eligendi nulla fugiat modi rerum rem. Distinctio repellendus aliquid illum est dolore.', 'Zoie Hilpert', 'published', 'http://www.bradtke.com/et-ipsa-perspiciatis-expedita-architecto.html', '2012-12-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(37, 1, 3, 'Libero eaque sint omnis iure aut.', 'libero-eaque-sint-omnis-iure-aut', 'Sed et ipsam numquam ducimus ut saepe. Magnam aut tempore qui consequatur est ratione qui. Veniam et earum occaecati. Amet dolorum minus temporibus magni et dolor.\n\nIusto ad occaecati voluptatem temporibus. Rerum iusto unde doloremque tempore doloribus itaque eveniet tempora. Est aut voluptates ea praesentium beatae facere. Qui nobis dolorem assumenda possimus facilis culpa accusamus in. Eius voluptas dicta optio molestias sed nulla corrupti.\n\nNon sed quis dicta labore tempore. Ipsam enim sed rerum eveniet rerum. Sed ipsum cumque est aliquam possimus.\n\nCommodi autem rerum illum veritatis aut. Voluptas quod velit totam enim impedit enim dolore. Voluptas temporibus qui in ad ut facilis.', 'Voluptatem odio labore repellat voluptatibus et aut. Cum aspernatur id ipsum distinctio repellendus blanditiis numquam. Nesciunt ut eum ducimus autem aperiam.', 'Miss Darlene King II', 'published', 'http://www.walsh.com/similique-tempora-est-et', '2021-11-19', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(38, 2, NULL, 'Rem fuga ut labore sapiente accusamus.', 'rem-fuga-ut-labore-sapiente-accusamus', 'Dicta nulla rerum consequuntur odio. Autem sit omnis exercitationem veniam. Quo sint repellat voluptatibus illum. Quidem qui accusantium et.\n\nEos qui nam pariatur eum. Perferendis impedit sit ipsa quis dignissimos. Sed deserunt eos sapiente debitis velit aliquid dolor nesciunt.\n\nEos esse doloribus qui similique ut consequatur dignissimos et. Ut accusamus temporibus eum aliquid. Iure placeat illum architecto explicabo.\n\nRepudiandae nulla officiis laborum non est. Deserunt suscipit fuga molestias ullam omnis. Nihil vel enim maiores tenetur animi occaecati ratione. Unde minima consequatur facere odio fuga numquam.', 'Dolores voluptas repellat labore impedit aut. Libero odio sit ab eligendi perspiciatis. Rerum est veniam dolorem.', 'Kamron O\'Reilly PhD', 'published', 'http://www.hoppe.net/omnis-labore-minus-sunt-beatae.html', '1992-07-12', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(39, 4, 5, 'Voluptatem et quo nemo qui facilis.', 'voluptatem-et-quo-nemo-qui-facilis', 'Quas est vel blanditiis. Eveniet et asperiores reiciendis non dolore sint corrupti. Nulla tempore voluptatem laborum at. Vitae accusamus fuga est necessitatibus doloremque nostrum aut.\n\nVoluptas enim non tempore veniam voluptatum est cupiditate. Sequi quisquam sed earum nihil hic odit quia. Non qui autem odio quae. Aperiam tempore veniam eum reiciendis est ad voluptatem magnam.\n\nSaepe veniam maiores reprehenderit. Expedita modi sed atque illo modi dolores. Necessitatibus harum est assumenda autem aliquam rerum occaecati. Quaerat iusto autem ducimus fuga. Odit provident quo expedita aliquam nobis.\n\nVel temporibus et tempore expedita dicta occaecati. Sunt numquam laborum quibusdam quo quis. Nulla odit nam ut debitis mollitia distinctio.', 'Sint et praesentium quidem amet voluptas consectetur. Et corrupti et ut voluptas cum impedit. Repellat ea doloremque totam inventore eos ipsa placeat.', 'Oswald Heathcote', 'published', 'https://bode.com/laudantium-quia-eos-quia-earum-eos-quod-accusamus.html', '2008-06-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(40, 2, 7, 'Sequi sit eius ut eum harum dolore.', 'sequi-sit-eius-ut-eum-harum-dolore', 'Suscipit est numquam fuga et. Blanditiis consectetur dolorem doloremque fugit velit ut qui. Odio reprehenderit numquam architecto fuga.\n\nSuscipit necessitatibus et expedita ipsam voluptatem. Saepe sint nihil eos laudantium libero magnam voluptatibus. Et possimus numquam ipsa dignissimos. Repellat corporis dolores ipsam consectetur officiis esse est.\n\nVoluptatem labore omnis doloremque impedit officiis. Sunt veritatis maxime et sed rerum. Est officia aperiam id ipsum est sed asperiores quasi.\n\nQuas sequi incidunt saepe iure laboriosam soluta. Doloremque odit et velit deleniti consequatur aliquid voluptatem. Ea quis rerum modi veniam est.', 'Fuga repellat iure in qui omnis. Quam earum qui vitae. In sunt id vel non modi consequatur.', 'Shyann Herman', 'published', 'http://schaden.biz/excepturi-dolorem-est-rem-perferendis-iure', '2013-05-16', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(41, 9, 6, 'Eum aut vero est itaque.', 'eum-aut-vero-est-itaque', 'Saepe enim laboriosam et rem. Et cumque et tenetur et dicta ipsa.\n\nVoluptatem possimus et fugiat dolores suscipit nobis. Quae reprehenderit numquam quis a. Qui ea est provident recusandae voluptatem. Ipsum temporibus enim rerum ea facere itaque aperiam.\n\nAb quis voluptatem aut inventore aliquid quia. Similique voluptatem fuga omnis. Et corrupti natus amet molestiae.\n\nAtque aut dolor ab voluptates laboriosam tempora. Vitae sit provident consectetur sit. Sint enim distinctio et.', 'Sunt corporis ad est molestiae rem aliquid occaecati. Nobis ea architecto labore a. Id unde laboriosam nesciunt nisi earum et.', 'Roger Ernser', 'published', 'http://towne.info/', '1995-02-11', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(42, 7, 7, 'Culpa labore enim dignissimos quis.', 'culpa-labore-enim-dignissimos-quis', 'Repudiandae necessitatibus aut nihil debitis. Quasi est rerum voluptatem aliquid et eveniet vel. Rem autem ducimus atque.\n\nRepellat est placeat sit et tempora. Porro sed officia delectus beatae. Aspernatur ut ducimus deserunt. Quos quia consequatur quis et sed consectetur.\n\nQui dolorem dolorum laborum earum. Architecto quisquam dignissimos eligendi corporis et sunt. Qui fuga vero beatae doloribus sit perspiciatis est. In cum non in magni.\n\nEos voluptas error adipisci quia. Et iusto est voluptas nobis iure. Minima et ratione qui expedita sapiente praesentium.', 'Quam velit exercitationem iusto id hic alias. Et doloremque est quas ullam. Iste odio animi omnis in architecto dolore. Quidem quia error ea commodi.', 'Allan Hartmann', 'published', 'https://www.gerhold.com/nobis-natus-aut-doloremque-adipisci-ipsum-eligendi-non-laudantium', '1971-12-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(43, 9, NULL, 'Aut aut minus aliquam quia eum et suscipit.', 'aut-aut-minus-aliquam-quia-eum-et-suscipit', 'Quisquam fugiat asperiores praesentium quidem. Officia nobis cum non. Est corporis ea facere velit reiciendis.\n\nPariatur sapiente consequatur totam rerum consequuntur distinctio sed. Voluptate qui corrupti ducimus et iure vel ex et. Totam est vel labore alias voluptate et molestias.\n\nVitae praesentium sed facere incidunt. Neque nesciunt non molestias nostrum. Minus eius aut repellat consequatur fugit.\n\nNumquam praesentium similique delectus autem odio impedit fuga itaque. Amet et dignissimos optio commodi. Iste illum quia at optio earum consectetur ut.', 'Ut officiis blanditiis sit ad eos reiciendis. Eos aperiam quasi quia adipisci modi delectus qui repellendus. Quis quia autem odio molestiae.', 'Emmitt Glover DVM', 'published', 'https://www.rath.com/et-et-quia-nobis-minus-omnis-dolorum-rem', '1994-01-09', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(44, 4, 2, 'Beatae alias ut non consequuntur ea quos facilis.', 'beatae-alias-ut-non-consequuntur-ea-quos-facilis', 'Debitis tempore alias ut recusandae provident. Voluptas deleniti aut omnis eius non odit illo odit. Praesentium corporis tenetur quia sed perferendis quo. Eius maiores a vel cupiditate. Excepturi blanditiis minus aliquid consequuntur quae ut ut.\n\nAccusantium quia itaque et est esse. Corporis ad ipsam qui nam eos placeat sit. Illum laboriosam quo assumenda omnis aut rem repellendus perferendis.\n\nEt eius laborum quia et. Atque libero alias nemo dignissimos. Aut earum iusto distinctio ad beatae possimus quia aut. Magnam quae ipsam voluptatem omnis magnam est.\n\nVero consequatur est officia aliquam corrupti vitae. Sunt alias dicta sed blanditiis ab officiis ipsa. Aperiam rerum odit voluptatem nobis iste. Odit laborum in magnam amet magnam ipsa blanditiis.', 'Nihil sunt qui ullam pariatur natus mollitia debitis. Cupiditate minima libero rem est in. Nihil et odio voluptate culpa ut.', 'Remington Weber', 'published', 'http://blick.com/dolores-perferendis-odit-ullam-dolorem-rerum-minima-quaerat', '2014-06-22', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(45, 1, NULL, 'Itaque cupiditate voluptatem sequi asperiores maxime.', 'itaque-cupiditate-voluptatem-sequi-asperiores-maxime', 'Ad est expedita exercitationem suscipit cumque tempore. Voluptate atque dolorem eaque debitis vel. Voluptate reiciendis veniam impedit rerum quidem ut.\n\nAmet voluptatem est iure aut cupiditate eius. Doloremque cupiditate ut voluptatem omnis deserunt vitae. Nostrum qui repellendus reiciendis officiis amet. Ut eum quia quas quo et aut sit nam. Eveniet temporibus dolor fugiat ut alias consequatur.\n\nAd et voluptatem quae. Ut et nulla et aspernatur error possimus. Consequatur veniam at distinctio provident. Dicta impedit recusandae facere ad.\n\nIpsam est impedit veritatis porro similique qui. Mollitia nemo mollitia ab numquam quas. Enim aut ex iure.', 'Vero aperiam tenetur error quo velit error. Dolor officiis delectus consectetur et in eligendi doloribus. Non iste quibusdam velit similique voluptas.', 'Marguerite Roberts', 'published', 'http://harris.com/nemo-consequatur-nesciunt-enim-excepturi-accusamus.html', '1989-02-07', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(46, 6, NULL, 'Doloribus vitae ex aut laborum sunt odio.', 'doloribus-vitae-ex-aut-laborum-sunt-odio', 'In nam cum error sed omnis fugit quaerat. Id at neque eveniet inventore. Ratione quam sit qui vitae. Qui vitae cum repellat accusamus inventore totam ut qui.\n\nNihil totam laborum veniam vero reprehenderit facere. Expedita labore sapiente consequatur laboriosam ut praesentium nisi qui. Laborum quidem sed unde praesentium aut. Saepe ut voluptatibus perferendis aut cum quibusdam sint.\n\nUt et non nostrum. Nemo dignissimos dolorem eligendi rerum similique est. Iure omnis voluptatibus neque commodi est omnis.\n\nIusto rerum reprehenderit impedit culpa inventore et. Quo unde quis odit.', 'Dolor explicabo rerum deserunt sint perferendis. Autem assumenda id ipsum occaecati. Molestiae distinctio iusto omnis debitis consequatur.', 'Ms. Pasquale Predovic Jr.', 'published', 'http://volkman.com/', '1997-08-21', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(47, 2, NULL, 'Dolores voluptatem quasi distinctio vero architecto.', 'dolores-voluptatem-quasi-distinctio-vero-architecto', 'Similique nisi porro perferendis rerum omnis. Aperiam ut non exercitationem explicabo nihil sit earum. Totam illum necessitatibus qui maxime reiciendis modi minima.\n\nVitae voluptas in sit optio. Quo qui et sequi tempora sequi. Mollitia aut nemo accusamus aut est officia non id. Id iste quisquam sint voluptatem molestiae qui.\n\nVitae placeat incidunt at. Ipsam eos recusandae aut. Minima saepe laboriosam illum aliquam veritatis praesentium sed est. Ad ratione veritatis rerum blanditiis sit aut tempora.\n\nAd et est tenetur rerum asperiores harum. Fugit ducimus est minus consectetur ipsa cum eos. Nulla deleniti earum dignissimos nesciunt consequatur ut perferendis maiores. Qui ea error et rerum debitis tenetur quia.', 'Reprehenderit sapiente deserunt eum quaerat. Earum quibusdam nostrum accusamus cupiditate harum quos. Vitae alias voluptatem ipsum corrupti eaque sunt. Sed officia odio commodi rerum similique vero.', 'Ulices Veum', 'published', 'http://www.abbott.com/', '1985-04-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(48, 8, NULL, 'Et eaque facere autem dolores ipsa et.', 'et-eaque-facere-autem-dolores-ipsa-et', 'Voluptas dignissimos autem vel qui ea dolor. Laudantium facere quisquam impedit repudiandae consequuntur qui explicabo. Voluptas ut odit illo cumque consequatur sapiente repellendus eos. Fuga autem mollitia qui.\n\nError aliquid commodi sed dicta quas veritatis pariatur. Earum et quia sit cum. Doloremque velit fugiat aut cumque autem dolor.\n\nNobis et iusto dolorem odio dolorem. Est eius voluptatem velit qui velit qui asperiores. Minus repellat vel deserunt alias. Officiis hic quidem qui quas ducimus necessitatibus iste quia.\n\nNumquam voluptas autem doloribus blanditiis. Libero vitae sint est iste sed. Facere quaerat in quia ea ratione. Veniam cum ipsa voluptates aut aut non consequuntur.', 'Non quibusdam velit voluptatem vel dolor. A dolorem blanditiis pariatur quos. Earum fugit dignissimos harum architecto dicta esse rerum. Odit ut quas rerum et vitae.', 'Mr. Janick Hand IV', 'published', 'https://berge.net/illum-dolorem-natus-nihil-dolores-beatae-similique-temporibus.html', '2013-04-24', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(49, 6, NULL, 'Quo iusto id possimus sunt.', 'quo-iusto-id-possimus-sunt', 'Mollitia consequuntur animi doloremque dolorum consectetur a soluta architecto. Numquam consequatur eius aut odit iusto vitae aut ipsa. Quasi earum impedit et exercitationem quisquam. Dolor odit excepturi tempore rerum.\n\nEt autem quibusdam consectetur molestiae voluptas nihil. Et aut sit distinctio ut inventore delectus. Et voluptatum incidunt deserunt ut maiores.\n\nConsequatur voluptatem tempore rem ex voluptate saepe in et. Eaque ut earum quae expedita facere non. Atque praesentium voluptatibus iste repellat et. Dolores corporis numquam voluptatem aliquam in qui sed similique.\n\nVoluptas perspiciatis perferendis et. In in ut rerum ut. Dolor dicta velit qui occaecati. Adipisci omnis quis dolorem eum tempora.', 'Voluptas libero esse sit ea doloribus. Architecto explicabo sunt odit. Autem rem eos est cumque voluptas voluptas.', 'Monica Yundt IV', 'published', 'http://nienow.net/ratione-sed-enim-molestiae-doloremque-nihil-sed', '2017-09-13', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(50, 7, 6, 'Non ut perspiciatis enim dicta doloremque voluptatem voluptatem et.', 'non-ut-perspiciatis-enim-dicta-doloremque-voluptatem-voluptatem-et', 'Aperiam quod error magni assumenda aut quasi omnis. Aspernatur et sequi aut temporibus. Tempore doloribus quam quos et autem vel voluptates ratione. Minima neque quae ad consequatur.\n\nVoluptas amet placeat libero expedita id eos. Eligendi mollitia reprehenderit quibusdam dicta earum quibusdam. Nihil voluptatibus ipsam quo dignissimos qui saepe reprehenderit. Incidunt sit laborum aspernatur inventore et.\n\nNon ut qui et pariatur suscipit recusandae a dolore. Eum fugiat illum praesentium. Accusamus eaque aliquam neque sed aut quam explicabo. Dicta praesentium delectus dolores temporibus veritatis magni.\n\nNostrum quae vitae tempore porro minima velit voluptas. Minus hic at ratione deleniti consequuntur et suscipit voluptate. Est sed qui repudiandae veniam sed ex.', 'Id officia impedit aut labore veniam tenetur a. Aut autem sapiente et consequuntur sit beatae asperiores rem. Numquam illo ut soluta et nostrum. Animi veniam totam sint quos.', 'Mattie Ledner PhD', 'published', 'http://ryan.com/', '2016-10-08', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(51, 7, NULL, 'Iste nisi dolores reprehenderit quo sed laudantium quis.', 'iste-nisi-dolores-reprehenderit-quo-sed-laudantium-quis', 'Vel ad qui qui suscipit in officia. Consequatur beatae asperiores minima voluptas qui aut sapiente. Et reprehenderit ex beatae.\n\nAmet aut sint quidem. Officia ad inventore ut molestiae dicta doloremque. Omnis quo non omnis optio aut.\n\nCupiditate modi enim perferendis voluptatem et sed. Mollitia aut corporis culpa aspernatur et. Voluptate recusandae dolores beatae cumque aut est.\n\nNatus et accusamus quis. Autem et nobis sequi dolores. Praesentium quia eos occaecati ut itaque. Dicta veniam eligendi distinctio ipsa cumque.', 'Quae quidem quidem modi vel unde quod. Optio qui laborum ut sapiente quo. Ratione rerum ad velit aliquid omnis.', 'Torrance O\'Reilly', 'published', 'http://www.nikolaus.org/et-distinctio-accusamus-placeat', '1974-02-04', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(52, 8, 6, 'Adipisci labore sed maxime sit.', 'adipisci-labore-sed-maxime-sit', 'Ipsum aut magni atque et magni. Aliquam sint optio earum saepe voluptas et.\n\nModi eius eaque voluptatem. Rerum est et iusto. Corrupti aut rem id et et.\n\nDolore unde amet minima soluta. Velit autem dolorem corporis iure cupiditate dolore et. Deserunt suscipit ipsum harum voluptate molestias quasi voluptatem.\n\nNemo qui harum sit quas ex commodi. Veniam culpa voluptatem id. Commodi sit nemo reprehenderit est est repellat.', 'Ducimus neque repudiandae neque ipsam. Quia et laboriosam repellendus vel. Dicta dolorem eligendi labore velit voluptatem vel.', 'Miss Effie Kemmer', 'published', 'http://www.kertzmann.info/est-laudantium-voluptatem-earum', '1992-05-24', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(53, 1, 4, 'Tempora perferendis animi pariatur maxime quibusdam.', 'tempora-perferendis-animi-pariatur-maxime-quibusdam', 'Suscipit perferendis et velit id fugiat reprehenderit inventore. Pariatur reprehenderit dolorum neque est esse facere mollitia. Et nisi dignissimos magni ut rem voluptas excepturi sed.\n\nPraesentium vel et delectus dolorem atque alias unde. Rerum magnam voluptas laboriosam commodi quas. Cupiditate consequatur doloremque inventore et dolore omnis et. Atque magni velit ut quaerat qui repellendus.\n\nNulla voluptatem animi et impedit ipsam et. Ut suscipit sit qui et nulla enim doloremque dolores. Id velit consequatur necessitatibus ea repudiandae non neque.\n\nAsperiores minus vero cupiditate. Earum eos exercitationem tempora et occaecati deserunt sed. Fugit ea eligendi eum molestiae recusandae dolores. Iusto enim veniam cumque fugit deserunt.', 'Et molestiae ducimus illo velit. Labore laudantium neque beatae sunt placeat aspernatur in. Rerum quae quia ea praesentium sit architecto velit dolore.', 'Lloyd Predovic', 'published', 'https://davis.net/similique-nisi-pariatur-omnis-quibusdam-autem-error-sunt-illo.html', '1971-07-07', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(54, 4, NULL, 'Eaque eos aut fugit doloremque delectus.', 'eaque-eos-aut-fugit-doloremque-delectus', 'Est vero et non dolorem et facilis voluptatem et. Quis dolorum et rem eos necessitatibus quis.\n\nDeleniti quidem repellat error similique. Laborum soluta eaque maiores suscipit amet ut molestiae. Eum quisquam soluta laborum optio magnam.\n\nNatus eligendi dolorum excepturi velit nemo sunt. Consequatur rerum est assumenda delectus. Enim esse quibusdam illo ut quas expedita dicta placeat. Accusantium dolore impedit quia.\n\nHarum perspiciatis quas sit fugiat. Sed voluptatem quis temporibus atque ut. Earum nisi odit rerum numquam maxime eos. Rem quia ex numquam sunt architecto officia.', 'Molestias corrupti repudiandae et exercitationem architecto. Sunt blanditiis laborum iste. Inventore dolor repellendus ea et officia.', 'Ashlynn Kassulke', 'published', 'https://hirthe.com/voluptas-dolores-repellat-eos-explicabo-id-impedit-quo-esse.html', '2002-06-24', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(55, 3, NULL, 'Officia a animi sint veniam.', 'officia-a-animi-sint-veniam', 'Dignissimos qui illum sit maiores eos. Qui deserunt et debitis eum expedita expedita ratione. Labore dolorem fugiat similique numquam numquam aliquam beatae. Voluptate iusto aut est saepe sapiente.\n\nVelit dolorum aut nulla error. Tempora sint necessitatibus dolor aut enim.\n\nOmnis error nisi aut rerum. Iure voluptate deserunt ipsa at atque temporibus. Itaque est voluptatem ullam enim. Ut ipsum aut corporis eius error non reprehenderit placeat.\n\nEligendi illum est qui omnis sint quaerat omnis eligendi. Soluta sit voluptatem est molestiae eaque omnis porro. Quisquam deleniti asperiores et corporis.', 'Facere ut veniam ratione et excepturi pariatur aut. Ut molestias sint sit. Totam ullam non libero est quasi et.', 'Anna Kerluke', 'published', 'http://www.abshire.com/', '1998-04-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(56, 8, NULL, 'Illo nulla ad aspernatur asperiores ut rerum.', 'illo-nulla-ad-aspernatur-asperiores-ut-rerum', 'Consequuntur ad amet minima voluptates eveniet. Commodi consequatur enim et et voluptatem ut quidem adipisci. Animi nihil at qui sapiente iure.\n\nDolorum nisi voluptatum maiores eaque. Est adipisci occaecati eos quia ut veniam. Reiciendis vel non voluptas et maiores. Cumque aut voluptate voluptas fugiat dolorem sunt exercitationem ipsa.\n\nIste aut perspiciatis veritatis et omnis dicta. Repudiandae sed commodi fugiat officia ea alias aut rerum. Adipisci libero nam reprehenderit illo ut et illum. Fuga soluta et sunt omnis magni ex.\n\nTemporibus voluptas voluptatem voluptas et aut. Officia reiciendis deleniti sint deleniti necessitatibus nulla. Sequi autem provident optio ea. Corrupti totam expedita autem.', 'Laboriosam doloremque et omnis nam. Quasi nulla doloremque rem necessitatibus ut. Quo suscipit sed ut blanditiis iusto blanditiis asperiores possimus.', 'Ana Botsford', 'published', 'http://www.schumm.com/molestiae-nisi-minus-quasi-vitae-excepturi.html', '1989-08-04', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(57, 9, 5, 'Sit voluptatem qui est.', 'sit-voluptatem-qui-est', 'Asperiores commodi consequuntur sapiente earum id praesentium. Non alias sed nihil iste fugit. Nesciunt quia et et voluptas.\n\nVitae dolorem ab qui voluptatum quasi. Consequuntur possimus reiciendis natus quia eligendi sed eum ut.\n\nImpedit voluptas tempore nihil praesentium aut reiciendis. Aut distinctio fugiat ut unde officia. Nemo voluptate voluptatum autem qui est facere sint. Et est nostrum autem ut ut.\n\nEst consequatur quisquam placeat est. Beatae ipsam enim hic eos voluptas qui ut. Voluptatem quia eos cupiditate odit et aut labore. Ipsam possimus aliquam eveniet fuga.', 'Quia qui deleniti totam debitis accusamus praesentium cum. Tenetur est omnis sed nam voluptas eius. Sunt labore quia velit ipsa distinctio est. Quisquam impedit inventore rem sunt.', 'Mrs. Alexane Howe V', 'published', 'http://gerhold.com/et-laboriosam-eligendi-eos-eum-et-neque-eos-dolorem', '1983-10-21', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(58, 1, NULL, 'Esse velit exercitationem et quia non iusto.', 'esse-velit-exercitationem-et-quia-non-iusto', 'Temporibus sunt ratione labore commodi iure voluptatibus eum fuga. Esse eos et blanditiis incidunt non. Voluptas modi ullam quod voluptas earum beatae dicta.\n\nNihil veniam molestias minus consequatur veritatis aut maiores. Ducimus quam laudantium repudiandae neque harum est eos. Eum sint similique consequuntur at est dolorum ut at.\n\nExercitationem itaque vero quia reprehenderit et dolorem. Sint eligendi tempore expedita aut quae quo. Recusandae et atque sit.\n\nQui reiciendis quis culpa sit tenetur sint ut. Est suscipit reprehenderit quidem aut. Reprehenderit ut voluptatibus officiis modi tempore ex. Fuga et repellendus reprehenderit libero.', 'Aut repellat quo possimus. Autem aut et a possimus sed. Iure voluptatem voluptate incidunt quia. Pariatur eaque tempore aliquam ut. Aut sequi error voluptas in non.', 'Raoul Dietrich Jr.', 'published', 'http://lueilwitz.com/nobis-libero-laborum-cumque-mollitia.html', '1985-08-16', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(59, 5, NULL, 'Odio consequatur ex fugit maxime et quia pariatur aut.', 'odio-consequatur-ex-fugit-maxime-et-quia-pariatur-aut', 'Voluptatem eos et aut est asperiores eos. Iusto quam id tenetur eius animi.\n\nFuga aut quod error consectetur laborum dolore expedita tempore. Dolorum nihil unde ea ullam distinctio a earum fugit. Laborum pariatur eaque soluta laudantium fugit vero eveniet aliquam.\n\nUt qui eligendi totam. Molestias ad pariatur itaque placeat. Sed a est temporibus excepturi.\n\nEx quia placeat corporis laboriosam. Ad et quia sit nihil ut qui architecto molestias. Aut voluptas voluptatem vel voluptatum veniam architecto.', 'Qui quo harum sunt. Neque ratione quam eius nihil maxime sit accusamus. Maiores quibusdam sunt itaque molestiae debitis in.', 'Lisandro Stamm', 'published', 'https://king.com/quam-explicabo-exercitationem-modi-commodi-nam.html', '2022-11-18', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(60, 4, 5, 'Mollitia modi maxime fugit deserunt eveniet assumenda ab molestiae.', 'mollitia-modi-maxime-fugit-deserunt-eveniet-assumenda-ab-molestiae', 'Dolores esse incidunt temporibus voluptatem placeat et. Praesentium eius et officiis repellendus. Ea et hic temporibus quis. Eos sed sed optio consequatur.\n\nUt et voluptatibus et culpa enim error. Voluptas itaque sit sed ad ut. Et accusantium recusandae recusandae id doloremque non. Possimus incidunt qui autem eum et voluptas similique.\n\nDeleniti molestiae occaecati saepe tempore sed. Saepe rerum cupiditate eum delectus. Delectus perferendis labore rerum aliquid voluptatem labore quo. Non iusto libero ut minus est est eum.\n\nTempore asperiores et necessitatibus magni vel autem. Non facilis temporibus suscipit dicta aut harum numquam.', 'Veniam laboriosam ut ratione provident labore necessitatibus doloribus. Sed optio sapiente amet eius. Commodi rerum vitae dolores consequatur in.', 'Keely Prohaska', 'published', 'http://www.mcclure.com/aut-nam-harum-consequatur-molestiae.html', '1980-08-14', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(61, 6, NULL, 'Voluptates maxime praesentium consequatur blanditiis architecto suscipit.', 'voluptates-maxime-praesentium-consequatur-blanditiis-architecto-suscipit', 'Distinctio temporibus praesentium aut hic nobis. Voluptate qui cum similique suscipit consequuntur autem consequatur. Voluptas et dolor repudiandae.\n\nCorporis cumque sequi et tenetur consequuntur non. Quos ducimus consectetur deserunt quidem harum tempore voluptates. Ut et commodi doloremque assumenda modi voluptatibus eveniet quasi.\n\nPerferendis illo quas molestias voluptate et. Eum expedita consequatur ut blanditiis et illo. Nihil sit consequuntur eos sed ut assumenda ea.\n\nEt ut reiciendis odio quia voluptatem. Omnis optio molestiae error voluptatem sit labore ducimus. Voluptatem voluptas sint cumque ut ab provident eligendi. Molestiae corrupti nemo est sequi consectetur natus.', 'Qui id et tempora incidunt sit enim magnam. Nisi culpa id suscipit maxime non. Non odit accusamus maiores. Dicta et inventore fugit quos quaerat nihil.', 'Dr. Foster Hilpert V', 'published', 'http://www.stamm.com/sint-numquam-illo-sed', '2001-12-27', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(62, 7, 3, 'Laborum aperiam maiores repellat voluptatem.', 'laborum-aperiam-maiores-repellat-voluptatem', 'Qui quod perferendis architecto id omnis. Natus ullam sit animi est cum eius.\n\nSed veniam rerum saepe reprehenderit laudantium. Eveniet perferendis vero deleniti praesentium labore nisi et. Laborum voluptate magni saepe pariatur labore aspernatur et. Enim ducimus natus voluptatum facere. Delectus et eos et assumenda debitis aut explicabo qui.\n\nCumque voluptate et sed consectetur dolores. Provident est velit error cumque. Praesentium et eaque odit odio.\n\nRepellat dicta aliquid nihil possimus quasi. Nihil nulla quia sint odit alias voluptas. Iure et dignissimos aut ut porro voluptatem. Accusantium aut quibusdam saepe quia.', 'Maxime inventore iusto ullam enim deserunt amet. In aut quis ducimus a voluptas impedit. Delectus aperiam repudiandae alias qui commodi aut aut qui.', 'Katlynn Quitzon', 'published', 'http://harber.com/soluta-repellendus-consequatur-est-quos-eum-molestiae-alias', '2000-09-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(63, 1, NULL, 'Maxime odio veniam qui.', 'maxime-odio-veniam-qui', 'Est autem error occaecati quam adipisci molestiae. Esse deserunt fuga quis occaecati doloremque modi nulla. Eligendi alias vel enim modi nemo voluptatem.\n\nAut ipsa modi tempore tempore et dolorem exercitationem. Tempora eaque exercitationem dicta iste porro minus sint labore. Omnis enim dolore est id culpa exercitationem consectetur. Et accusantium blanditiis recusandae enim officia qui.\n\nDoloribus non vel id et et culpa velit. Doloribus consequuntur illum exercitationem. Nemo quae voluptas assumenda provident.\n\nVelit libero assumenda est totam ad et. Aut magnam possimus quis minus et numquam dolorem. Est est eveniet neque eligendi omnis in eius assumenda. Quis minus ab similique ut magni non. Quisquam expedita ut soluta est accusantium animi.', 'Fugiat eveniet ex praesentium quis id dicta. Molestiae sed accusamus ut.', 'Ms. Francisca Ruecker', 'published', 'https://kerluke.com/officiis-dolor-nisi-ut-magni-quia.html', '1979-03-27', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(64, 1, 5, 'Odit nesciunt cum deserunt quidem sint neque.', 'odit-nesciunt-cum-deserunt-quidem-sint-neque', 'Aspernatur corporis culpa minima deleniti dolores molestiae rerum. Et omnis praesentium quo rem. Laborum tempora tempore nemo et excepturi beatae. Eum dolores culpa qui et rerum quisquam nobis.\n\nQui itaque molestias soluta voluptate voluptatem. Facere est aut voluptas placeat. Rem et impedit quasi. Praesentium fugiat enim suscipit cumque delectus.\n\nDistinctio qui esse eaque. Et et est commodi deserunt odit et. Consectetur voluptatem architecto maxime enim inventore. Nostrum omnis voluptatem minima eum repudiandae adipisci qui est.\n\nDolorem asperiores eveniet itaque rerum. Eum officia itaque voluptatem necessitatibus qui voluptas. A voluptatibus laudantium aut ratione sed harum. Quod odio qui quia id cumque est.', 'Enim labore est recusandae. Dolores nisi eveniet dolorem voluptates. Dolores a non ex maxime corrupti.', 'Lucius Ortiz V', 'published', 'http://prohaska.com/eum-odit-laudantium-et-distinctio-consectetur-ea-iusto-odio', '1996-11-24', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(65, 1, NULL, 'Voluptatem ut cum et ut explicabo repellendus consequuntur.', 'voluptatem-ut-cum-et-ut-explicabo-repellendus-consequuntur', 'Ut rerum ut et quod consequatur omnis qui dignissimos. Aliquam placeat quibusdam et. Dolorum assumenda eaque dolor praesentium modi est. Iste amet tempore nihil esse dolores vitae.\n\nSed ullam rerum rerum pariatur dolorem. Sequi blanditiis ullam iusto dolore sed quia.\n\nAutem sint ratione nisi ea autem. Vero eaque doloremque magni incidunt qui ipsa non excepturi. Possimus totam eos repellendus incidunt dignissimos ex.\n\nIste accusantium consequatur minima. Illo autem sunt commodi. Sequi ipsa et consequatur modi praesentium dignissimos magni repellendus.', 'Magni qui fuga id est totam ut pariatur. Qui blanditiis dolorum voluptatum qui occaecati perferendis vero ad. Hic excepturi unde facere tempore.', 'Telly Hartmann', 'published', 'https://waelchi.biz/autem-ea-magnam-tenetur-eos-reprehenderit.html', '2009-11-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(66, 5, NULL, 'Porro velit eaque omnis quae reprehenderit facilis quia.', 'porro-velit-eaque-omnis-quae-reprehenderit-facilis-quia', 'Modi aliquam quisquam dolore vel praesentium eligendi voluptatem. Et optio amet optio id voluptatem. Qui sapiente aut libero consequatur autem. Quia odit rerum perferendis.\n\nMollitia recusandae aut fuga nisi laborum. Repudiandae quasi ab veritatis et consequatur aliquam ut. Dolorem sapiente voluptas amet. Saepe distinctio numquam amet cupiditate.\n\nQuo minima quasi repellendus molestias accusamus optio. Vel porro nemo et ad nemo. Aut nisi reprehenderit aperiam vel hic quos.\n\nPorro natus inventore amet eum est voluptatem officiis beatae. Voluptatem recusandae nam error. Impedit consequatur dolor consectetur qui eum molestias. Vero doloremque tempore architecto. Dolores repudiandae ut inventore et.', 'Commodi aperiam cum voluptatem quo natus reiciendis quia. Repellat necessitatibus et eveniet in dolor et.', 'Ole Kohler', 'published', 'http://conn.com/placeat-totam-labore-aut-dolorem-perferendis-adipisci', '2001-03-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(67, 8, 5, 'Aut mollitia aut architecto.', 'aut-mollitia-aut-architecto', 'Qui nisi voluptatem error quisquam voluptas deleniti. Sequi sed impedit labore esse velit voluptas.\n\nAmet ut non corporis accusamus officiis totam. Quia qui voluptas est quo. Et odit qui minus voluptatum.\n\nQuibusdam facere quia laboriosam est nihil aliquid vitae. Cumque cum rerum omnis modi quae sed quidem. Quo quia suscipit velit. Consectetur itaque inventore aliquam pariatur repellat.\n\nDoloribus consequatur quo et non. Nesciunt ipsum non dolorum dignissimos. Quisquam facere consequatur qui voluptate est. Nam consequatur aperiam perspiciatis dolores quae qui.', 'Velit perspiciatis vitae qui est cumque deserunt. Natus eum sit animi quis excepturi. Error consequatur consequuntur atque eius voluptatem quia.', 'Prof. Raymundo Gerhold Jr.', 'published', 'http://ferry.com/officiis-dolor-dolores-commodi-quo-vel', '2012-10-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(68, 6, NULL, 'Eligendi ut possimus cupiditate velit temporibus.', 'eligendi-ut-possimus-cupiditate-velit-temporibus', 'Culpa perspiciatis rerum mollitia asperiores deleniti quaerat quo nisi. Molestiae non distinctio esse qui enim. Voluptatem quae suscipit ipsa nostrum.\n\nExplicabo molestiae non rerum beatae quia minus labore. Accusantium dolor doloremque commodi quia alias et. Eligendi itaque et nihil sapiente quia nihil voluptatem.\n\nEst et illo ut natus. Est voluptate vel qui cum sed eum. Enim vel iusto id sunt.\n\nBeatae non harum cupiditate qui hic et. Quia voluptas repellat reiciendis nihil. Voluptatem ut quis possimus at recusandae rerum.', 'Possimus eos rerum ut autem. Quae voluptatem a quo id fugiat. Quas qui dolorem neque molestiae.', 'Miss Arlene Paucek II', 'published', 'http://collins.com/quas-amet-voluptatem-id-aut', '2004-12-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(69, 6, 2, 'Minima sint similique sapiente sint et.', 'minima-sint-similique-sapiente-sint-et', 'Ut velit minus porro ad veniam. Officiis nostrum aut iusto et. Omnis ut dolores rem qui repudiandae rem.\n\nQui eligendi dolorum aut totam. Et velit officia unde ipsum quisquam illo eaque. Voluptatem labore eos quod numquam et. Error et ut beatae fuga quo voluptas.\n\nVoluptas quam ea quo omnis qui voluptatem. Animi cupiditate facere ab dolor non modi repellat. Ad commodi esse architecto. Quae aliquam incidunt dolores et iure repellat.\n\nUt explicabo minus veniam ea velit eos autem. Accusantium nam aut est dignissimos repellat. Inventore non animi iusto quibusdam asperiores cum. Et ab omnis aliquid aut veritatis.', 'Dignissimos cupiditate ad corrupti quidem voluptas voluptatem. Alias qui omnis laboriosam illum aspernatur. Dolore quibusdam aut sapiente nam consequatur repudiandae eos.', 'Carissa Shields', 'published', 'http://miller.com/', '1981-06-15', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(70, 7, 6, 'Iure omnis reprehenderit accusantium fugit autem impedit.', 'iure-omnis-reprehenderit-accusantium-fugit-autem-impedit', 'Sequi temporibus suscipit ab. Accusantium quo minus ex maiores voluptatem. Error corrupti quis aut quasi. Sunt qui sit reiciendis error quo et. Commodi nobis possimus similique nihil consequatur praesentium.\n\nOccaecati qui dolorem maxime velit nostrum a. Ea quia velit dolor hic. Autem eum dolorum unde est eveniet ea impedit. Enim ut sit quis.\n\nUt voluptatibus nesciunt quaerat voluptates. Consequatur qui quo quo. Sapiente ut ad non et excepturi beatae odit. Consectetur et soluta quos excepturi sint architecto. Fugiat magnam et deleniti nihil doloribus modi dolore architecto.\n\nAut ad suscipit quam beatae animi. Rem non enim iste similique ut corporis. Rerum consequatur ratione possimus aut molestias nostrum sed cum.', 'Autem laborum sed aliquid est non atque. Dignissimos optio libero voluptate delectus. Eum ut excepturi alias qui natus earum. Quasi eos ipsam ipsum magni voluptatum fugiat rerum.', 'Shannon Haag', 'published', 'http://www.schulist.com/non-aut-placeat-officia-distinctio', '1997-10-08', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(71, 6, NULL, 'Quas odio rerum molestias eos.', 'quas-odio-rerum-molestias-eos', 'Officiis est repellat maxime ut dolorum debitis magnam. Autem fugiat exercitationem minima aut et iste ab. Dolorem ipsa impedit sed eum esse soluta autem. Sunt voluptatem cumque et eos odit ut molestiae.\n\nUnde aliquid fugiat quia et. Eaque officiis delectus dolore porro quas dignissimos numquam.\n\nQuaerat voluptas animi quasi vero ex consectetur illo. Quo molestias ad odit quidem unde esse laudantium consequatur.\n\nFuga aliquam laboriosam quidem et tempore voluptatem maxime. Id quaerat asperiores voluptatem repudiandae nihil voluptatem eligendi. Ullam nostrum deserunt quae.', 'Dolorem sunt at pariatur aliquid dolorum. Aliquid magnam fugit et porro. Harum rerum doloremque non voluptatem molestiae odit quam. Quia sit asperiores totam vel nulla minus.', 'Katelin Frami', 'published', 'http://www.crooks.com/voluptatum-esse-id-alias', '1981-11-11', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(72, 7, NULL, 'Eligendi quidem neque omnis officia qui tempora nihil.', 'eligendi-quidem-neque-omnis-officia-qui-tempora-nihil', 'Sequi velit ut rerum. Quae architecto aperiam totam enim. Sed fuga qui occaecati expedita dolorem.\n\nAliquam qui qui doloremque dolores neque. Quia quo unde porro distinctio eligendi minima. Dolor sed nobis laudantium praesentium animi. Dolore ea nam nihil esse unde sapiente illo.\n\nTempore est laborum et ut et recusandae eaque. Repudiandae vel repellendus et natus quisquam esse. Aut odit harum magnam accusantium est et. Ut molestiae omnis ipsum sed vitae doloribus quo.\n\nQuis veniam est sed consequatur modi rerum fuga. Ut at quo enim velit. Beatae iure nisi veritatis alias est. Inventore ab laudantium dignissimos quaerat eum iusto.', 'Aperiam laboriosam labore fugit autem placeat illum occaecati. Eum autem distinctio facilis laudantium est non cum. Quibusdam repellat et nemo sapiente.', 'Richie McGlynn Jr.', 'published', 'https://zboncak.com/ducimus-et-exercitationem-architecto-eum-dolor-aut.html', '2009-11-13', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(73, 2, NULL, 'Quo rerum pariatur voluptas ducimus dolor voluptatum.', 'quo-rerum-pariatur-voluptas-ducimus-dolor-voluptatum', 'Nihil nisi assumenda voluptatem error. Non eveniet quae voluptate aliquam dolor eum. Et dolorem qui voluptatem eaque cum rerum vero. Odio et voluptatum quibusdam. Et aut id eum sapiente et qui.\n\nExpedita debitis fugiat dolor porro qui necessitatibus quo. Quisquam dolor consequatur nisi et. Delectus error harum iusto.\n\nAutem architecto qui praesentium explicabo quibusdam blanditiis. Exercitationem quasi repellat et deserunt. Ex ab sed incidunt vitae.\n\nCulpa nisi quo ducimus mollitia corrupti laudantium et alias. Fuga possimus perspiciatis qui dolore qui. Est exercitationem qui sequi nostrum ea.', 'Vero fuga velit laudantium est id odio. Nemo fuga sint ratione accusamus a. Dolorem neque occaecati molestiae voluptatum nam et eveniet.', 'Clementina Williamson', 'published', 'https://kassulke.com/aut-qui-assumenda-assumenda-odio.html', '1988-04-10', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(74, 6, 6, 'Commodi est est sunt ut et non eos.', 'commodi-est-est-sunt-ut-et-non-eos', 'Veniam aliquam aliquam odio corrupti veritatis recusandae. Omnis ea perspiciatis vero laboriosam quo illo. Accusamus exercitationem aut voluptatum deleniti qui. Eius et non sed architecto eum recusandae. Temporibus laboriosam et et quia ratione voluptatem et.\n\nSed magni mollitia occaecati distinctio iure quia. Cumque id dicta dignissimos illum nobis officia magnam dolorem. Et voluptate ea eveniet rem vel.\n\nDolorem qui autem sed nostrum error fugit. Maxime saepe illum molestiae animi cupiditate. Incidunt a deserunt vel enim deserunt fugit. Veritatis sunt odio accusamus error dolores quos.\n\nNecessitatibus tempore vel voluptas dolorem earum. Saepe libero quod sequi cupiditate est beatae doloribus.', 'Animi nulla qui doloremque doloremque quam labore fugiat. Qui omnis quo et dolores iusto et sunt. Quia incidunt ut eos cum quae. Exercitationem dolor odio ullam quis distinctio nobis.', 'Jon Reichert', 'published', 'http://www.luettgen.com/nulla-et-voluptatum-beatae-ratione.html', '1977-10-21', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(75, 3, NULL, 'Sequi exercitationem beatae recusandae sed laborum.', 'sequi-exercitationem-beatae-recusandae-sed-laborum', 'Officiis omnis aperiam laborum qui illo quo. Officiis animi quo ipsam ullam vitae aut ea quo. Nulla ab ducimus ratione quia placeat fugiat excepturi maiores.\n\nRatione error iusto saepe aut natus cupiditate. Nostrum officia quia harum non vitae. Perspiciatis dolor dignissimos non hic sint odio. Laboriosam ut doloribus sed suscipit tempora aut.\n\nDoloribus sunt in dolore. Animi in est in et. Quia voluptas totam qui ea qui adipisci.\n\nA quia explicabo illo voluptatum nam. Sunt et porro accusantium ullam sit in magnam. Itaque assumenda amet magnam incidunt et.', 'Quisquam et iusto enim quos. Cum sunt quo dolorem qui ab. Sequi dolores sunt explicabo incidunt exercitationem.', 'Margarette Lemke', 'published', 'http://www.gerlach.org/corporis-est-commodi-quia-illo-rerum-optio-enim', '1975-07-14', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(76, 9, 6, 'Rem aut delectus eos.', 'rem-aut-delectus-eos', 'Molestiae mollitia rerum numquam totam cum exercitationem. Enim vitae ipsa sequi voluptatem repellendus odio illo. Ut veritatis saepe voluptatem deleniti. Beatae non dicta vitae.\n\nCum ad maiores assumenda quis praesentium ut nulla. Distinctio sit quas cupiditate porro est beatae exercitationem non. Ex officiis dolores quisquam animi voluptas sint.\n\nMolestiae officia occaecati cupiditate corporis placeat. Ea sint distinctio omnis. Molestiae perspiciatis quasi quia nesciunt est aspernatur. Dolores error dolores laboriosam commodi molestias sed possimus assumenda.\n\nDucimus itaque minus unde molestiae est. In soluta non ut praesentium facilis tempora. Ducimus facilis suscipit dolore. Ratione ullam et amet voluptatem officia culpa eveniet.', 'Ut rerum et minus ipsam sunt vitae accusantium. Laboriosam magnam laborum quis quia eum. Minima voluptas quo ut natus atque aperiam et voluptatem.', 'Mr. Milan Paucek', 'published', 'http://www.oconnell.com/impedit-omnis-amet-quia-exercitationem-fugit-in-beatae', '1983-01-15', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(77, 1, NULL, 'Repudiandae corporis sit quo commodi porro.', 'repudiandae-corporis-sit-quo-commodi-porro', 'Est vel ratione aut sint repellendus consequatur voluptatem cumque. Nesciunt adipisci corporis odit vitae. Corporis modi exercitationem et magni.\n\nSimilique provident asperiores architecto et laboriosam doloribus aut. Iure sint et ipsum tempora ratione. Soluta enim ducimus accusamus repellat eos perferendis et.\n\nIpsam at sed aut fuga quo. Tenetur ipsa reprehenderit natus quis. Optio aut quaerat quia nam consequatur enim.\n\nInventore cupiditate officiis minima repellat dolorem impedit est et. Possimus ut quod esse voluptatem. Neque cumque ipsa exercitationem laborum impedit.', 'Voluptatem accusantium animi excepturi. Harum aperiam excepturi eaque. Praesentium dolorem aut accusamus deleniti animi.', 'Genevieve Swaniawski I', 'published', 'http://kohler.com/autem-facere-consequatur-et-voluptatem-nulla-dolore-fugiat.html', '1988-09-25', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(78, 4, 1, 'Ut illum officia eaque in minima praesentium voluptas.', 'ut-illum-officia-eaque-in-minima-praesentium-voluptas', 'Aut eum fugit rerum reprehenderit ut debitis et. Reiciendis sit assumenda hic corporis ducimus in.\n\nExercitationem eos accusamus non recusandae labore voluptatem. Doloremque voluptatem quam in qui voluptatem. Vel corrupti vero libero sint alias.\n\nVero a adipisci distinctio. Et possimus eaque ea temporibus delectus.\n\nAmet repellat porro iste voluptatem id. Neque eius eius autem ea. Sed repellendus eius voluptatem autem corporis minima quas.', 'Non qui dolorem ratione vel quibusdam dolore. Sint quidem nihil voluptatum. Velit inventore aspernatur vitae nobis deleniti assumenda. Odit architecto aut vero aspernatur.', 'Carol Moore', 'published', 'http://www.shanahan.biz/reiciendis-debitis-voluptas-aut', '2013-08-23', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(79, 8, 1, 'Quod sit rem impedit adipisci.', 'quod-sit-rem-impedit-adipisci', 'Iure animi eveniet quidem dolorem numquam hic dolorem. Ut voluptates non alias non sunt quia alias. Delectus error quia aut voluptatem quibusdam consequatur esse. Vel omnis illo consequatur voluptatibus.\n\nNisi non voluptatum et ea vitae sed fugiat. Aut corporis amet iusto sit omnis eos. Officia voluptatem dolor mollitia occaecati enim molestias.\n\nEius cupiditate sit tempore. Aut nostrum dolores commodi nemo. Molestias hic eius placeat quia fugit.\n\nQuasi alias et excepturi. Quas itaque accusamus nemo molestiae voluptatem. Inventore voluptatem laboriosam consequatur possimus. Quam mollitia doloribus totam facere quo dicta.', 'Sint laborum vero qui eius ab voluptas a. Ut et iure aut delectus voluptatem. Quas explicabo exercitationem iusto eos neque eos ea.', 'Naomi Leannon', 'published', 'http://bednar.com/voluptatem-saepe-beatae-mollitia-assumenda', '1999-05-07', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(80, 2, NULL, 'Reprehenderit sint possimus et illo debitis odit quaerat.', 'reprehenderit-sint-possimus-et-illo-debitis-odit-quaerat', 'Delectus doloribus possimus odio velit nisi. Perferendis ea cum consequatur. Fugit unde neque ut voluptatem nemo culpa. Veniam reiciendis dolores nesciunt animi.\n\nAut placeat dolore laboriosam voluptatem. Illo odio nulla voluptas doloremque rerum repellat. Ipsam incidunt cum est perspiciatis nisi et omnis. Id iure et occaecati ducimus in quos.\n\nEa error vitae sit. Ut quia placeat recusandae impedit explicabo reprehenderit numquam. A minus aut veritatis voluptate porro vitae.\n\nQui quisquam sequi veniam tempore ratione facilis voluptatem numquam. Aut odio veniam est nesciunt libero eveniet ipsum. Debitis non sunt accusamus magni molestias ut aut. Ut eos in id ut rem atque. Ea possimus sint qui porro aut dignissimos fuga.', 'Sed sapiente magni sequi ducimus nihil accusamus deserunt. Molestiae mollitia et tempora soluta corporis dolorum. Ut qui soluta commodi occaecati veritatis.', 'Jeanette Langosh', 'published', 'http://www.rice.com/sint-iusto-excepturi-sed-labore-necessitatibus.html', '2011-12-04', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(81, 2, NULL, 'Autem et sequi accusamus non laboriosam sapiente voluptatum.', 'autem-et-sequi-accusamus-non-laboriosam-sapiente-voluptatum', 'Doloremque nostrum illum voluptates accusamus. Ea esse temporibus exercitationem. Consequuntur esse quia nulla id perferendis blanditiis consequuntur. Officia iste harum ex facilis.\n\nQuis iste et natus et quia at explicabo et. Ullam est a sit aut eligendi a dolores. Earum ad molestiae eveniet accusantium sit molestias et.\n\nDolores aut quisquam est sit non excepturi velit. Quis est sed corrupti autem eligendi voluptatem cum.\n\nSit repudiandae dolorum est quo error. Modi quo eos ut repellendus mollitia corporis. Omnis suscipit odio error cupiditate nisi aut amet. Eius suscipit aliquam eum non sit facilis laborum.', 'Unde ducimus perspiciatis debitis sed cumque ut. Distinctio eaque est autem laudantium. Minima occaecati eius quo facilis omnis quia rerum.', 'Tyreek Mante', 'published', 'https://www.hilpert.com/autem-qui-velit-eaque-aut-placeat-alias', '1985-05-07', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(82, 3, 5, 'Voluptas et corporis tenetur adipisci.', 'voluptas-et-corporis-tenetur-adipisci', 'Rem dolor ut sed neque facere eveniet. Incidunt doloribus ut consequatur dolorum sint veritatis et aut. Ea fugiat sint dolores omnis blanditiis quisquam magnam.\n\nIusto velit dolores porro voluptas. Nesciunt ut est assumenda excepturi non vel sit et. Ipsam facilis iste sapiente laborum.\n\nA reiciendis quaerat eum sed veritatis. Magni ea minus sed qui beatae suscipit. Quod vel rerum voluptatibus praesentium qui totam culpa aspernatur.\n\nSimilique quis sed vel corrupti veritatis eum reiciendis. Blanditiis accusamus incidunt assumenda et aut. Sit aut laudantium hic dolorem ut molestiae. Tenetur quo distinctio vero.', 'Similique voluptatem est eos et. Earum maiores quae maiores. Voluptate consequatur reprehenderit quia blanditiis harum id tenetur. Quas cupiditate placeat tempora sit ex sit non.', 'Lonnie Tremblay IV', 'published', 'http://weber.biz/mollitia-eaque-est-ullam-commodi-voluptatibus-et-atque-dolore', '2020-04-19', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(83, 7, NULL, 'Reprehenderit vitae praesentium quisquam fugit quas.', 'reprehenderit-vitae-praesentium-quisquam-fugit-quas', 'Beatae quo at mollitia sit cupiditate possimus. Cum voluptas consequuntur velit dolor quasi non dolores. Architecto molestiae rerum eos quidem aperiam. Architecto et voluptas sequi consequatur non quam cupiditate voluptas.\n\nQuia autem exercitationem sit est accusamus odit. Eos quis minima veniam ducimus aperiam sapiente quo aliquam. Doloremque mollitia doloremque ut aut repellendus quis. Et in totam iure.\n\nEa qui accusamus voluptatum omnis accusamus est est. Voluptates est consequatur quo fugit est culpa velit optio. Facere laboriosam repudiandae vero est odit. Cum eos voluptas et esse et occaecati.\n\nAccusantium voluptatem ipsa asperiores quo non doloribus. Repudiandae non magnam sit nemo sit quisquam. Rerum et qui earum tenetur voluptatem sequi et.', 'Nemo qui neque provident rem eius libero reiciendis. Qui dignissimos odio illum autem. Et ut cum expedita qui.', 'Herman Prosacco', 'published', 'http://www.ratke.net/', '1977-11-22', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(84, 7, 1, 'Eveniet tenetur qui voluptas est consectetur.', 'eveniet-tenetur-qui-voluptas-est-consectetur', 'Architecto in dolores aut sit libero omnis. Sequi laudantium impedit ab qui molestias fuga minus qui. Non blanditiis aut sapiente nesciunt eius. Rem tenetur minus mollitia illum rerum inventore.\n\nIn voluptatem quisquam totam commodi. Nostrum adipisci nisi ut temporibus placeat velit fuga. Vel tenetur sit qui.\n\nQuis necessitatibus maxime qui quasi sit molestiae voluptatem molestias. Deserunt veritatis expedita delectus distinctio illo exercitationem.\n\nConsectetur deleniti voluptas et non aliquam. Deserunt quibusdam vel debitis accusamus est dolorem.', 'Perspiciatis fugit unde sint. Impedit unde qui natus voluptatum sit unde eaque. Quisquam repudiandae molestias aspernatur vero aut amet dolor.', 'Mr. Steve Beatty II', 'published', 'http://howell.biz/ea-ipsum-similique-expedita.html', '2012-08-02', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(85, 1, NULL, 'Accusantium sequi in corporis ut.', 'accusantium-sequi-in-corporis-ut', 'Cupiditate soluta laboriosam illo ad rem alias ea. Animi commodi eum incidunt necessitatibus quis excepturi ad. Quo odit et labore fugit quia. Aut distinctio accusantium velit temporibus sed fuga ea.\n\nNobis qui aut quasi autem sunt sint. Soluta ipsam consequatur voluptas consequatur nam unde ducimus rerum. Occaecati sint ut aut qui. Iusto numquam molestias beatae aliquam voluptas.\n\nIpsam assumenda dolore voluptas et sit. Aut omnis vel est. Quae voluptas ut voluptates aut quo velit.\n\nEt non sed eum blanditiis eius aperiam harum. Aliquam earum est modi autem id cupiditate. Quis et blanditiis est esse culpa.', 'Harum illo et aut sint. Tempora eius ab nisi et est asperiores deserunt. Perspiciatis eligendi nostrum magnam eius molestias est veritatis. Aperiam voluptas eius omnis aut.', 'Elenora Upton', 'published', 'http://www.corkery.biz/voluptate-consequatur-tempore-ea-ab', '1981-04-18', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(86, 1, NULL, 'Quo nihil minima et nisi.', 'quo-nihil-minima-et-nisi', 'Natus ut et qui est exercitationem totam. Tempore qui maxime id molestiae optio accusantium maxime perferendis. Ut quo praesentium quisquam consequatur molestiae animi.\n\nSit omnis accusantium nam aut nam. Nisi nesciunt explicabo et est. Debitis recusandae itaque voluptatem autem.\n\nEx ea est vitae cum. Voluptatem repudiandae voluptates sit dicta quis adipisci. Est perferendis ullam dolores eos voluptatibus.\n\nHarum quo voluptatibus iste officiis. Ut minima velit tenetur omnis tempora occaecati et laboriosam. Animi possimus autem molestias est enim laudantium. Culpa beatae accusamus nesciunt consequatur dicta.', 'Nulla ut aut asperiores minima reprehenderit dolorum totam. Autem rem necessitatibus ut quo et quas.', 'Prof. Beaulah Jast', 'published', 'https://www.sipes.com/architecto-rerum-sed-suscipit-sunt', '1991-08-23', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(87, 1, NULL, 'Sint at voluptate aut est quae modi.', 'sint-at-voluptate-aut-est-quae-modi', 'Quibusdam pariatur corporis voluptatem et et consectetur. Veniam natus veritatis dolorum voluptate ipsum. Ab assumenda eum quo harum dolores. Soluta saepe tenetur temporibus quibusdam temporibus et explicabo aliquam.\n\nQuia eaque facilis laboriosam. In sunt velit aut incidunt veritatis ratione debitis. Maiores quisquam facilis recusandae modi.\n\nSit id qui sint recusandae. Quia et sequi nam. Facere tenetur provident non ex repellat consequatur veniam.\n\nQui sit in neque cum. Quo doloribus eius necessitatibus aut. Similique numquam accusantium quam modi.', 'Autem est omnis corporis consequuntur quo. Officia sit aut adipisci sint qui amet nisi. Dolorem iusto rerum molestiae molestiae. Rerum praesentium dolorum consequatur laborum enim.', 'Kathlyn Bauch', 'published', 'http://rice.com/a-sit-et-excepturi-ut-molestiae', '2004-04-07', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(88, 2, 7, 'Voluptas corrupti optio incidunt quam est impedit.', 'voluptas-corrupti-optio-incidunt-quam-est-impedit', 'Rerum nemo sint et. Quasi illo temporibus veritatis in sit quidem voluptatem. Consequatur architecto et molestiae quia odit.\n\nRerum sunt consequatur quam. Neque in possimus quibusdam quia nihil maiores. Aut voluptatem aut corporis delectus aut. Qui aut iusto cum nemo.\n\nRecusandae ea distinctio quis aspernatur dolores. Mollitia consequatur veniam vero.\n\nNam consequuntur dignissimos veritatis aut commodi. Qui suscipit totam aperiam praesentium vero est quisquam. Quo nihil incidunt odit. Possimus ullam consequatur laudantium occaecati cumque.', 'Facere iusto eum excepturi eveniet. Neque voluptatem minus omnis consequuntur et quos a. Non et alias hic doloremque nam occaecati libero.', 'Sibyl Mayer', 'published', 'http://www.ryan.org/voluptas-est-aut-voluptatibus-molestiae-ducimus-odit-ad.html', '2012-10-18', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(89, 8, NULL, 'Ut suscipit hic totam aperiam animi.', 'ut-suscipit-hic-totam-aperiam-animi', 'Illum quo dolorem quibusdam quod quo. Inventore aperiam ut velit repudiandae est dolores ipsa. Similique aut nobis necessitatibus. Corporis harum quia eos earum et.\n\nMollitia voluptas omnis voluptas officia est accusamus. Nobis molestias sint enim nesciunt magnam repellat. Nam dolor rem eius esse.\n\nArchitecto nulla omnis sapiente omnis quaerat eligendi quos. Suscipit consequatur sequi quisquam dolorum nostrum laborum distinctio. Eos placeat optio aut incidunt veniam ullam blanditiis. Natus nam repellat aut repudiandae totam.\n\nSed vel aliquam et eius incidunt repellat. Vel qui eum id aliquid modi qui. Voluptatem quisquam quis incidunt dicta nulla eius numquam. Atque consectetur ipsam provident aliquam. Consequuntur ipsa fugiat et sit.', 'Quia non aut numquam vel dolorum inventore perspiciatis. Similique quam aliquam tempore sed. Et aut quaerat tempore consequatur in commodi asperiores.', 'Maiya Robel', 'published', 'http://christiansen.com/repellat-eum-tenetur-velit-et-hic-sint', '1996-10-20', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(90, 3, 4, 'Accusamus dicta amet quo consequuntur.', 'accusamus-dicta-amet-quo-consequuntur', 'Odio eum et voluptates eum sint consequatur. Expedita reprehenderit alias assumenda occaecati quibusdam. Eos quisquam possimus voluptatem. Amet magnam est consequatur modi unde voluptatibus quis.\n\nDolores suscipit itaque omnis nisi rerum eum non molestiae. Tempore laborum culpa dignissimos possimus tempora. Laborum rerum non ut velit recusandae voluptatum odio eveniet. Nam asperiores quia consequatur est error aperiam.\n\nNihil ut dolore autem ipsam. Nisi quos sequi id ad. Cupiditate debitis nisi nisi libero sed dolorem. Est voluptas accusantium voluptas esse est vel. Sit ut maiores fugit velit ut doloribus et.\n\nAperiam id minus doloribus iste in distinctio. Consequatur blanditiis et accusantium exercitationem adipisci repellendus.', 'Animi eum placeat quis maiores rerum. Rem nisi ut vero. Rem nihil ab vitae aut et quia. Officia quo rem est et. Et molestias vel temporibus totam dolorem eum dolorum. Ea officiis aut velit.', 'Dr. Deshawn McDermott', 'published', 'http://blick.com/vel-qui-assumenda-fuga', '1970-12-05', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(91, 1, 2, 'Quo quia quos eligendi accusamus consectetur.', 'quo-quia-quos-eligendi-accusamus-consectetur', 'Laborum doloremque cumque est porro enim sit sit. Autem inventore quia consequatur omnis similique vitae est illo. Nam quod omnis explicabo sed. Dolorem quas deserunt recusandae mollitia. Vero libero ratione ut exercitationem aliquid quia.\n\nPlaceat minima consectetur et error voluptatem. Est sapiente dolores quam quis et. Corrupti veniam ut repellendus laborum.\n\nEum dolore minima aut iure. Dolorem dolorem dignissimos eligendi veritatis ab. Quae laudantium quidem amet ipsum odit consequatur assumenda.\n\nDignissimos porro officia voluptatum. Et quo fugit harum. Est nam ullam vero laboriosam nostrum at quia voluptatum.', 'Vitae sit aut laborum ea. Et nihil ut est ducimus soluta. Nesciunt porro reprehenderit quaerat in deserunt qui accusamus rerum.', 'Chris Zboncak', 'published', 'http://bergnaum.com/sequi-ullam-rerum-consequuntur-adipisci', '1984-03-09', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(92, 2, 6, 'Maxime sed et voluptatem itaque.', 'maxime-sed-et-voluptatem-itaque', 'Quia autem illo soluta autem. Dolor et aut voluptatem quo sed eius impedit. Voluptates odit in qui fuga architecto unde eum. Repudiandae blanditiis blanditiis officia.\n\nAliquid facilis porro quidem qui qui asperiores odit. Laudantium eos cum ad. Debitis et ea delectus assumenda molestiae debitis laudantium. Eum magnam voluptates velit aut.\n\nSunt ea unde eum aspernatur qui qui ut molestiae. Voluptatem soluta aut et. Iusto consequatur laudantium omnis eaque consequatur dignissimos nulla. Illo odio voluptatum consequatur et aspernatur in aut.\n\nCumque adipisci quia aut eligendi. Nostrum cupiditate itaque voluptate aut ducimus pariatur corporis. Consequatur nobis aliquid at qui inventore deserunt.', 'Assumenda voluptatem cupiditate sequi assumenda. Ipsum iusto autem nesciunt. Odio reprehenderit ab consequatur.', 'Wade Ziemann', 'published', 'http://dooley.net/aut-molestiae-sit-doloribus-quia-distinctio-quasi', '1970-07-23', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(93, 7, 7, 'Delectus voluptatem voluptates voluptatem qui autem repellat.', 'delectus-voluptatem-voluptates-voluptatem-qui-autem-repellat', 'Eligendi consequatur ipsum ipsa vero ea itaque aspernatur. Officia non est quaerat. Qui rerum officiis architecto ea provident.\n\nBeatae velit repellat pariatur deserunt nobis fugiat. Blanditiis pariatur nobis ipsa illo rerum nobis consequatur enim. Voluptatum libero expedita vitae tenetur tempore. Porro illum ut quas dolor rerum numquam sunt.\n\nNecessitatibus sint atque qui vel pariatur. Architecto dolor quasi quidem sunt itaque ea nam sit. Aperiam similique fuga voluptates rerum repudiandae voluptatem eum nam. Dolores necessitatibus assumenda ut consequatur maiores minus.\n\nCulpa illo cum voluptas ut consequatur. Alias eaque quidem consequatur ut. Aspernatur at voluptate et qui. Esse voluptates vitae et.', 'Nobis facere veniam atque. Voluptate eaque nostrum sit omnis labore quaerat repellat. Tempora nulla vero qui distinctio qui. Quae ratione autem tempora cum ratione accusamus at.', 'Prof. Pedro Glover III', 'published', 'http://connelly.com/quia-hic-veniam-porro-eius.html', '2000-02-16', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(94, 8, 4, 'In rerum aperiam animi voluptatibus eum sint.', 'in-rerum-aperiam-animi-voluptatibus-eum-sint', 'A quidem sint rerum corporis ipsa sint. Facere qui neque tempora porro quidem id velit quod. Fuga voluptatum commodi aut dolores et in. Iusto quo facilis porro reiciendis earum quo.\n\nDolores maxime aut velit earum autem expedita molestiae. Natus mollitia excepturi fugiat reprehenderit ea. Ratione aut vero similique exercitationem similique et. Esse sed ut aliquid earum et aliquam odit.\n\nQuaerat ab ullam reprehenderit itaque itaque omnis. Libero reiciendis officia hic repellendus commodi.\n\nSit culpa odio voluptates officia beatae voluptatibus culpa animi. At inventore necessitatibus minima quam. Libero architecto perferendis aut earum explicabo porro nulla id. Fugit nostrum qui illo neque sunt natus. Reiciendis iste officia eum distinctio sit sunt.', 'Sed dolores tenetur ut eveniet. Atque quo et non aliquid eum non. Corrupti nisi et pariatur atque doloremque officia.', 'Collin Durgan', 'published', 'http://www.jerde.net/dolores-rerum-saepe-omnis-vel', '2023-03-04', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(95, 2, NULL, 'Quasi numquam tempore ut ad sequi dolor animi neque.', 'quasi-numquam-tempore-ut-ad-sequi-dolor-animi-neque', 'Consectetur quo voluptatem et repellat dolorem. Quos ea sunt neque dignissimos mollitia similique.\n\nFugiat itaque nam dignissimos reprehenderit saepe. Similique tenetur est neque soluta eum. Ad aut vitae laudantium fuga excepturi ut. Qui corrupti quos autem.\n\nEnim dicta molestiae quo odit. In harum asperiores a. Et ea corrupti architecto voluptas repudiandae sequi.\n\nEius sint aut ut sunt hic laborum dicta. Consequatur nostrum qui soluta sed a veniam ut vitae. Et quisquam sit illum et.', 'Ut totam vel repellat minima. Consequatur excepturi quod tenetur et. Doloribus rerum quia voluptatem.', 'Rod Lehner DDS', 'published', 'http://wolf.biz/aperiam-est-voluptatibus-corrupti-facilis-asperiores', '1975-08-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(96, 6, NULL, 'Et odio officiis odio assumenda ratione id aut.', 'et-odio-officiis-odio-assumenda-ratione-id-aut', 'Labore perferendis illum delectus qui est quod et. Minima consequatur beatae deserunt dolorem. Consequuntur dolore dignissimos inventore animi optio et.\n\nUt sit quam delectus aut eius ut. Iusto a et ea a et. Repellat optio libero id non assumenda aliquid dolores. Facilis ducimus aut deleniti reiciendis.\n\nQuis id nobis incidunt. Rerum ullam qui accusantium dolores doloribus. Similique ipsa ut quos ducimus recusandae non ad. Dolor excepturi nam similique quod officiis omnis quisquam.\n\nNeque eligendi quia vero. Veniam ut qui dolor unde id. Sed fuga nisi facere ipsum aut tempora incidunt. Ut et esse esse aliquam illum.', 'Autem modi est quod eligendi aut. Placeat saepe ipsam omnis eos est qui.', 'Chloe Towne', 'published', 'http://www.steuber.net/quae-autem-amet-ea-libero-enim-ipsam-laborum-aut', '2016-06-25', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(97, 8, NULL, 'Animi ullam cupiditate similique natus explicabo fugit doloremque possimus.', 'animi-ullam-cupiditate-similique-natus-explicabo-fugit-doloremque-possimus', 'Quasi sed sed laborum dolores doloremque corrupti minus alias. Rerum non aut dolores aliquid. Eius harum vel aut molestiae. Natus nihil reprehenderit ad amet fugit iure.\n\nDistinctio ut sunt quia adipisci officia in commodi non. Aliquid et autem qui inventore. Sunt minus dolorem officia necessitatibus.\n\nUllam cum omnis doloremque. Inventore dignissimos sit esse maxime alias itaque. Porro nihil magnam explicabo est.\n\nOdit consectetur repudiandae molestias atque. Sint dolor consequuntur ut dolorem sit.', 'Est quaerat omnis dolor reprehenderit est dolorem impedit. Perferendis magni magnam dolor praesentium ad cumque. Enim aperiam debitis tempora in reprehenderit porro qui.', 'Prof. Friedrich Daugherty II', 'published', 'http://batz.com/minima-qui-doloremque-harum-eum-corporis-vitae-pariatur-architecto', '1989-01-03', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(98, 1, 4, 'Suscipit magni inventore ea temporibus.', 'suscipit-magni-inventore-ea-temporibus', 'Sit et laborum nulla quo voluptas repudiandae. Sit aliquam incidunt voluptatibus quo est beatae cum. Natus dolores et sapiente repellendus quis qui nesciunt provident. Non ipsa repellat autem inventore voluptatem laudantium enim et.\n\nSed esse quod non aut itaque. Et non commodi aperiam eligendi voluptatum dolores magnam. In omnis facere sed aut. Aut enim saepe eos recusandae eius tempora. Et aut eius ex qui atque ex.\n\nVoluptatem qui laborum sed laborum voluptas. Reiciendis qui quidem ad. Id et non in voluptates provident praesentium quisquam. Qui nostrum id doloribus totam vero asperiores dolores.\n\nLibero ex ut delectus dolor et. Veritatis iure aut ea delectus velit. Eos repellendus sed nihil rem sapiente.', 'Ut illo nisi iure dolores magnam. Quos reiciendis libero est ab ut eum. Commodi est aliquam sed aspernatur distinctio incidunt. Odio mollitia in adipisci culpa eos et voluptates eum.', 'Adrienne O\'Reilly', 'published', 'http://emard.biz/fugit-sequi-corporis-in-quia-dolore-quas', '2011-07-13', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(99, 1, NULL, 'Consequuntur aut maxime nisi occaecati cupiditate in ut.', 'consequuntur-aut-maxime-nisi-occaecati-cupiditate-in-ut', 'Deserunt consectetur deserunt laudantium voluptate illum quia. Aut illo qui quas sed ut. Odio incidunt laboriosam laborum eum voluptatum. Aut aut voluptatem et et.\n\nConsequatur maiores accusamus aut optio commodi omnis aut. Quasi ab nisi at sed consequatur voluptas. Quod enim qui et.\n\nDeleniti quisquam ex itaque nostrum perspiciatis. Necessitatibus sed voluptatem dolorem odit dicta. Quos assumenda temporibus rerum pariatur fugiat et rem. Ratione qui pariatur eaque consequatur. Debitis et quasi modi soluta alias rerum quod.\n\nEx optio molestiae impedit id repellendus. Laborum quos cupiditate omnis similique. Velit ullam atque vitae voluptatem. Molestiae dicta optio tempore atque.', 'Minima culpa omnis nostrum in quis. Repudiandae nemo aut rerum quod enim. Nostrum voluptatem ex iure consequatur eaque consequatur libero. Quisquam officiis natus voluptates ut.', 'Dr. Madison Bernhard III', 'published', 'http://kessler.com/', '1990-05-27', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL),
(100, 1, 4, 'Quia minus itaque odio sed possimus aliquid.', 'quia-minus-itaque-odio-sed-possimus-aliquid', 'Voluptas et accusamus rerum voluptas dolor laboriosam. Unde aut doloribus nobis sunt cum id repellendus. Et deleniti at amet veritatis. Consequatur occaecati vel et.\n\nPerferendis aut non aspernatur est. Deserunt et laudantium consectetur eos inventore. Tempore dolores suscipit ipsa et.\n\nPorro illo error aut in et. Totam error facilis sit.\n\nLibero corporis ea vitae facilis quia. Omnis et in dignissimos maiores et provident. Optio quisquam iusto consectetur aut iure ut quod non. Aut molestiae qui ducimus.', 'Impedit voluptate debitis aut iure illo quidem est. Provident distinctio veniam sit iusto officiis consequatur rerum. Eius magni suscipit molestias dolor in laboriosam.', 'Prof. Eloisa Kuvalis', 'published', 'https://swift.com/ut-ut-et-impedit.html', '1982-02-20', '2023-11-29 01:30:32', '2023-11-29 01:30:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `post_tag`
--

CREATE TABLE `post_tag` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_tag`
--

INSERT INTO `post_tag` (`id`, `post_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(1, 1, 20, NULL, NULL),
(2, 1, 3, NULL, NULL),
(3, 1, 6, NULL, NULL),
(4, 2, 14, NULL, NULL),
(5, 2, 3, NULL, NULL),
(6, 2, 15, NULL, NULL),
(7, 3, 17, NULL, NULL),
(8, 3, 12, NULL, NULL),
(9, 3, 11, NULL, NULL),
(10, 4, 19, NULL, NULL),
(11, 4, 17, NULL, NULL),
(12, 4, 5, NULL, NULL),
(13, 5, 11, NULL, NULL),
(14, 5, 16, NULL, NULL),
(15, 5, 19, NULL, NULL),
(16, 6, 14, NULL, NULL),
(17, 6, 5, NULL, NULL),
(18, 6, 16, NULL, NULL),
(19, 7, 6, NULL, NULL),
(20, 7, 17, NULL, NULL),
(21, 7, 7, NULL, NULL),
(22, 8, 20, NULL, NULL),
(23, 8, 18, NULL, NULL),
(24, 8, 15, NULL, NULL),
(25, 9, 2, NULL, NULL),
(26, 9, 18, NULL, NULL),
(27, 9, 9, NULL, NULL),
(28, 10, 9, NULL, NULL),
(29, 10, 6, NULL, NULL),
(30, 10, 8, NULL, NULL),
(31, 11, 13, NULL, NULL),
(32, 11, 17, NULL, NULL),
(33, 11, 20, NULL, NULL),
(34, 12, 6, NULL, NULL),
(35, 12, 11, NULL, NULL),
(36, 12, 13, NULL, NULL),
(37, 13, 17, NULL, NULL),
(38, 13, 19, NULL, NULL),
(39, 13, 16, NULL, NULL),
(40, 14, 5, NULL, NULL),
(41, 14, 18, NULL, NULL),
(42, 14, 6, NULL, NULL),
(43, 15, 5, NULL, NULL),
(44, 15, 11, NULL, NULL),
(45, 15, 15, NULL, NULL),
(46, 16, 20, NULL, NULL),
(47, 16, 3, NULL, NULL),
(48, 16, 19, NULL, NULL),
(49, 17, 12, NULL, NULL),
(50, 17, 16, NULL, NULL),
(51, 17, 13, NULL, NULL),
(52, 18, 2, NULL, NULL),
(53, 18, 4, NULL, NULL),
(54, 18, 8, NULL, NULL),
(55, 19, 9, NULL, NULL),
(56, 19, 11, NULL, NULL),
(57, 19, 4, NULL, NULL),
(58, 20, 8, NULL, NULL),
(59, 20, 18, NULL, NULL),
(60, 20, 19, NULL, NULL),
(61, 21, 1, NULL, NULL),
(62, 21, 11, NULL, NULL),
(63, 21, 8, NULL, NULL),
(64, 22, 15, NULL, NULL),
(65, 22, 7, NULL, NULL),
(66, 22, 18, NULL, NULL),
(67, 23, 7, NULL, NULL),
(68, 23, 11, NULL, NULL),
(69, 23, 5, NULL, NULL),
(70, 24, 20, NULL, NULL),
(71, 24, 19, NULL, NULL),
(72, 24, 9, NULL, NULL),
(73, 25, 13, NULL, NULL),
(74, 25, 8, NULL, NULL),
(75, 25, 6, NULL, NULL),
(76, 26, 9, NULL, NULL),
(77, 26, 12, NULL, NULL),
(78, 26, 20, NULL, NULL),
(79, 27, 17, NULL, NULL),
(80, 27, 8, NULL, NULL),
(81, 27, 5, NULL, NULL),
(82, 28, 11, NULL, NULL),
(83, 28, 19, NULL, NULL),
(84, 28, 14, NULL, NULL),
(85, 29, 3, NULL, NULL),
(86, 29, 17, NULL, NULL),
(87, 29, 9, NULL, NULL),
(88, 30, 5, NULL, NULL),
(89, 30, 11, NULL, NULL),
(90, 30, 6, NULL, NULL),
(91, 31, 18, NULL, NULL),
(92, 31, 19, NULL, NULL),
(93, 31, 2, NULL, NULL),
(94, 32, 9, NULL, NULL),
(95, 32, 10, NULL, NULL),
(96, 32, 11, NULL, NULL),
(97, 33, 4, NULL, NULL),
(98, 33, 1, NULL, NULL),
(99, 33, 13, NULL, NULL),
(100, 34, 11, NULL, NULL),
(101, 34, 18, NULL, NULL),
(102, 34, 16, NULL, NULL),
(103, 35, 11, NULL, NULL),
(104, 35, 16, NULL, NULL),
(105, 35, 9, NULL, NULL),
(106, 36, 12, NULL, NULL),
(107, 36, 10, NULL, NULL),
(108, 36, 19, NULL, NULL),
(109, 37, 4, NULL, NULL),
(110, 37, 5, NULL, NULL),
(111, 37, 20, NULL, NULL),
(112, 38, 3, NULL, NULL),
(113, 38, 18, NULL, NULL),
(114, 38, 12, NULL, NULL),
(115, 39, 11, NULL, NULL),
(116, 39, 13, NULL, NULL),
(117, 39, 1, NULL, NULL),
(118, 40, 3, NULL, NULL),
(119, 40, 14, NULL, NULL),
(120, 40, 10, NULL, NULL),
(121, 41, 12, NULL, NULL),
(122, 41, 9, NULL, NULL),
(123, 41, 5, NULL, NULL),
(124, 42, 14, NULL, NULL),
(125, 42, 18, NULL, NULL),
(126, 42, 5, NULL, NULL),
(127, 43, 6, NULL, NULL),
(128, 43, 13, NULL, NULL),
(129, 43, 12, NULL, NULL),
(130, 44, 8, NULL, NULL),
(131, 44, 20, NULL, NULL),
(132, 44, 6, NULL, NULL),
(133, 45, 19, NULL, NULL),
(134, 45, 9, NULL, NULL),
(135, 45, 20, NULL, NULL),
(136, 46, 8, NULL, NULL),
(137, 46, 10, NULL, NULL),
(138, 46, 15, NULL, NULL),
(139, 47, 9, NULL, NULL),
(140, 47, 12, NULL, NULL),
(141, 47, 3, NULL, NULL),
(142, 48, 15, NULL, NULL),
(143, 48, 11, NULL, NULL),
(144, 48, 1, NULL, NULL),
(145, 49, 3, NULL, NULL),
(146, 49, 12, NULL, NULL),
(147, 49, 10, NULL, NULL),
(148, 50, 7, NULL, NULL),
(149, 50, 8, NULL, NULL),
(150, 50, 12, NULL, NULL),
(151, 51, 9, NULL, NULL),
(152, 51, 20, NULL, NULL),
(153, 51, 6, NULL, NULL),
(154, 52, 15, NULL, NULL),
(155, 52, 16, NULL, NULL),
(156, 52, 9, NULL, NULL),
(157, 53, 15, NULL, NULL),
(158, 53, 6, NULL, NULL),
(159, 53, 2, NULL, NULL),
(160, 54, 6, NULL, NULL),
(161, 54, 8, NULL, NULL),
(162, 54, 15, NULL, NULL),
(163, 55, 15, NULL, NULL),
(164, 55, 5, NULL, NULL),
(165, 55, 13, NULL, NULL),
(166, 56, 13, NULL, NULL),
(167, 56, 1, NULL, NULL),
(168, 56, 4, NULL, NULL),
(169, 57, 13, NULL, NULL),
(170, 57, 15, NULL, NULL),
(171, 57, 16, NULL, NULL),
(172, 58, 2, NULL, NULL),
(173, 58, 9, NULL, NULL),
(174, 58, 6, NULL, NULL),
(175, 59, 16, NULL, NULL),
(176, 59, 2, NULL, NULL),
(177, 59, 18, NULL, NULL),
(178, 60, 13, NULL, NULL),
(179, 60, 14, NULL, NULL),
(180, 60, 5, NULL, NULL),
(181, 61, 16, NULL, NULL),
(182, 61, 9, NULL, NULL),
(183, 61, 19, NULL, NULL),
(184, 62, 14, NULL, NULL),
(185, 62, 11, NULL, NULL),
(186, 62, 8, NULL, NULL),
(187, 63, 15, NULL, NULL),
(188, 63, 8, NULL, NULL),
(189, 63, 20, NULL, NULL),
(190, 64, 19, NULL, NULL),
(191, 64, 1, NULL, NULL),
(192, 64, 11, NULL, NULL),
(193, 65, 5, NULL, NULL),
(194, 65, 6, NULL, NULL),
(195, 65, 14, NULL, NULL),
(196, 66, 15, NULL, NULL),
(197, 66, 1, NULL, NULL),
(198, 66, 10, NULL, NULL),
(199, 67, 20, NULL, NULL),
(200, 67, 3, NULL, NULL),
(201, 67, 2, NULL, NULL),
(202, 68, 9, NULL, NULL),
(203, 68, 8, NULL, NULL),
(204, 68, 17, NULL, NULL),
(205, 69, 16, NULL, NULL),
(206, 69, 11, NULL, NULL),
(207, 69, 3, NULL, NULL),
(208, 70, 16, NULL, NULL),
(209, 70, 20, NULL, NULL),
(210, 70, 10, NULL, NULL),
(211, 71, 19, NULL, NULL),
(212, 71, 12, NULL, NULL),
(213, 71, 15, NULL, NULL),
(214, 72, 14, NULL, NULL),
(215, 72, 6, NULL, NULL),
(216, 72, 10, NULL, NULL),
(217, 73, 18, NULL, NULL),
(218, 73, 1, NULL, NULL),
(219, 73, 15, NULL, NULL),
(220, 74, 2, NULL, NULL),
(221, 74, 5, NULL, NULL),
(222, 74, 15, NULL, NULL),
(223, 75, 1, NULL, NULL),
(224, 75, 17, NULL, NULL),
(225, 75, 14, NULL, NULL),
(226, 76, 17, NULL, NULL),
(227, 76, 6, NULL, NULL),
(228, 76, 7, NULL, NULL),
(229, 77, 5, NULL, NULL),
(230, 77, 10, NULL, NULL),
(231, 77, 19, NULL, NULL),
(232, 78, 4, NULL, NULL),
(233, 78, 10, NULL, NULL),
(234, 78, 18, NULL, NULL),
(235, 79, 15, NULL, NULL),
(236, 79, 16, NULL, NULL),
(237, 79, 17, NULL, NULL),
(238, 80, 11, NULL, NULL),
(239, 80, 5, NULL, NULL),
(240, 80, 3, NULL, NULL),
(241, 81, 2, NULL, NULL),
(242, 81, 15, NULL, NULL),
(243, 81, 3, NULL, NULL),
(244, 82, 4, NULL, NULL),
(245, 82, 17, NULL, NULL),
(246, 82, 8, NULL, NULL),
(247, 83, 16, NULL, NULL),
(248, 83, 1, NULL, NULL),
(249, 83, 12, NULL, NULL),
(250, 84, 8, NULL, NULL),
(251, 84, 1, NULL, NULL),
(252, 84, 20, NULL, NULL),
(253, 85, 13, NULL, NULL),
(254, 85, 1, NULL, NULL),
(255, 85, 9, NULL, NULL),
(256, 86, 9, NULL, NULL),
(257, 86, 20, NULL, NULL),
(258, 86, 14, NULL, NULL),
(259, 87, 13, NULL, NULL),
(260, 87, 16, NULL, NULL),
(261, 87, 10, NULL, NULL),
(262, 88, 14, NULL, NULL),
(263, 88, 2, NULL, NULL),
(264, 88, 19, NULL, NULL),
(265, 89, 20, NULL, NULL),
(266, 89, 6, NULL, NULL),
(267, 89, 10, NULL, NULL),
(268, 90, 17, NULL, NULL),
(269, 90, 3, NULL, NULL),
(270, 90, 7, NULL, NULL),
(271, 91, 14, NULL, NULL),
(272, 91, 1, NULL, NULL),
(273, 91, 2, NULL, NULL),
(274, 92, 19, NULL, NULL),
(275, 92, 11, NULL, NULL),
(276, 92, 17, NULL, NULL),
(277, 93, 6, NULL, NULL),
(278, 93, 7, NULL, NULL),
(279, 93, 10, NULL, NULL),
(280, 94, 11, NULL, NULL),
(281, 94, 20, NULL, NULL),
(282, 94, 6, NULL, NULL),
(283, 95, 8, NULL, NULL),
(284, 95, 18, NULL, NULL),
(285, 95, 2, NULL, NULL),
(286, 96, 12, NULL, NULL),
(287, 96, 7, NULL, NULL),
(288, 96, 19, NULL, NULL),
(289, 97, 17, NULL, NULL),
(290, 97, 3, NULL, NULL),
(291, 97, 12, NULL, NULL),
(292, 98, 20, NULL, NULL),
(293, 98, 3, NULL, NULL),
(294, 98, 16, NULL, NULL),
(295, 99, 2, NULL, NULL),
(296, 99, 8, NULL, NULL),
(297, 99, 12, NULL, NULL),
(298, 100, 4, NULL, NULL),
(299, 100, 1, NULL, NULL),
(300, 100, 13, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `publications`
--

CREATE TABLE `publications` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

CREATE TABLE `research` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `year` year NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('default','tabs','accordian','members') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `page_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `title`, `description`, `link`, `type`, `parent_id`, `page_id`, `created_at`, `updated_at`) VALUES
(1, 'Genesis', '<p>Beginning the mid-1980s, most countries, across all regions of the world, started to rapidly embark on the path of globalization and liberalization. The global wave of globalization and liberalization also created a compelling situation for South Asian countries to follow suit. This led South Asian governments and stakeholders alike to design strategies and implement measures that enhance their capacities to benefit from regional and global integration, and respond to the adverse implications of globalization for their economies.</p>\n\n            <p>In order to complement the efforts of South Asian governments and stakeholders, and to bring to the fore the views and concerns of the marginalized and poor segments of society, South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”</p>.\n\n            <p>From 1994 to 1997, its secretariat was housed in Kolkata, India at the office of Consumer Unity & Trust Society (CUTS), a founding member institution of the network. With the emergence of consensus among network members, in 1997, SAWTEE\'s secretariat was moved to Kathmandu, Nepal. Since then, SAWTEE has strengthened its activities ranging from sensitization and awareness raising to independent and concrete policy research, capacity building and advocacy on trade, economic and environmental issues at local, national, regional and international levels.</p>', NULL, 'default', NULL, 2, '2017-01-07 15:42:01', '2023-08-22 00:15:01'),
(2, 'Registration and Recognition', '<p>SAWTEE was registered with the District Administration Office, Kathmandu, Nepal to operate as a non-profit, NGO in 1999. Due to its research capacity, policy outreach and developmental impacts, the organization has been growingly recognized as a think tank at local, national, regional and global levels. SAWTEE is also recognized in the capacity of a secretariat of a national network of Nepal-based national and international NGOs called National Alliance for Food Security in Nepal (NAFOS); a global network of civil society organizations (CSOs) working on biodiversity management and farmers rights issues called Farmers Rights Advocacy Network (FRANK); and a global network of least-developed countries (LDCs) established for the economic transformation of LDCs, called Least Developed Countries Network for Economic Transformation (LDC-NET). Its members and staff have served/been serving on the board of various international and national agencies working on trade, development, farmers rights and food security issues.</p>.', NULL, 'default', NULL, 2, '2021-03-10 21:09:46', '2019-04-03 08:41:07'),
(3, 'Vision, Goal and Objectives', '', NULL, 'tabs', NULL, 2, '2019-12-09 02:31:01', '2022-03-15 18:08:21'),
(4, 'Vision', '<p>Ensuring fair, equitable, inclusive, and sustainable growth and development in South Asia.</p>', NULL, 'tabs', 3, 2, '2021-12-21 19:44:18', '2023-03-13 23:56:32'),
(5, 'Goal', '<p>Enabling stakeholders, particularly the poor and marginalized, to derive net benefits from changing political economy and environmental landscapes.</p>', NULL, 'tabs', 3, 2, '2015-05-25 07:45:41', '2018-07-18 05:14:20'),
(6, 'Objectives', '<ol>\n            <li>To equip stakeholders with knowledge, information and skills to represent their interests and assert their rights to development.</li>\n            <li>To contribute to fair, equitable, inclusive, and sustainable growth and development for a society directed towards poverty reduction, food security and environmental sustainability.</li>\n            <li>To contribute to informed and participatory policy-making and implementation for fair, equitable, inclusive, and sustainable growth and development.</li>\n            <li>To contribute to enhancing meaningful participation of South Asian countries, particularly the least-developed and landlocked, in and their integration into the sub-regional, regional and multilateral trade, economic and environmental systems.</li>\n            <li>To contribute to strengthening regional cooperation in South Asia.&nbsp;</li>\n            </ol>', NULL, 'tabs', 3, 2, '2022-05-14 19:47:15', '2022-08-27 21:46:49'),
(7, 'Strategies', '', NULL, 'accordian', NULL, 2, '2014-03-17 03:21:10', '2016-11-04 13:49:33'),
(8, 'Policy Research', '<p>Realizing the capacity and resource constraints faced by South Asian NGOs to conduct research on various policy issues; come out with policy recommendations; and prepare well-argued advocacy strategy, SAWTEE, together with its member institutions and academics of the region, conducts policy research on issues such as World Trade Organization (WTO) rules, regional cooperation, intellectual property rights (IPRs), competition policy, farmers&rsquo; rights, climate change and development dimension of trade liberalization. The research findings are widely disseminated among South Asian as well as international audiences comprising, inter alia, trade negotiators, NGOs, the media, the academia, research institutions, international and regional inter-governmental organizations and the donor community, in English as well as various South Asian vernaculars.</p>\n            <p>Policy research conducted by SAWTEE includes: &nbsp;</p>\n            <ul>\n            <li>Mechanism for pruning the sensitive list under SAFTA</li>\n            <li>Trade and climate change in the context of South Asia</li>\n            <li>Traditional health services in South Asia</li>\n            <li>Liberalization of services trade in South Asia</li>\n            <li>Mechanisms for protecting farmers&rsquo; rights to livelihood in the Hindu-Kush Himalayan Region</li>\n            <li>Positive trade agenda for South Asian LDCs</li>\n            <li>Agricultural liberalization in South Asia</li>\n            <li>Gender implications of Nepal&rsquo;s accession to the WTO&nbsp;</li>\n            </ul>', NULL, 'accordian', 7, 2, '2017-01-17 15:27:36', '2018-05-07 22:54:22'),
(9, 'Advocacy', '<p>SAWTEE conducts various programmes advocating the cause of social justice and economic equity in the context of globalization and liberalization in general and trade liberalization in particular. SAWTEE and its member institutions organize conferences, seminars, policy dialogues, consultation meetings, talk programmes, monthly forums and interaction programmes at regular intervals to achieve this objective. The advocacy at the policy level is also supplemented by publication and distribution of policy briefs, briefing papers and issue papers on relevant issues on a timely manner.</p>\n\n            <p>Successful advocacy campaigns of SAWTEE and its member institutions include:</p>\n\n            <ul>\n            <li>Adoption of the concept of regional “seed bank” as an instrument for protecting food security in South Asia, which is reflected in the Declaration adopted by the 16th Summit of the South Asian Association for Regional Cooperation (SAARC) held in Bhutan in April 2010.</li>\n            <li>Convincing the Government of Nepal to preserve policy space required for achieving its development objectives in the process of signing Trade and Investment Framework Agreement (TIFA) with the United States.\n            Convincing the Government of Nepal to preserve the policy space required for achieving its development objectives in the process of the country’s accession to the WTO.</li>\n            <li>Convincing South Asian governments not to join the International Union for the Protection of New Varieties of Plant (UPOV), which could be detrimental to the interest of nearly 800 million farmers in the region.</li>', NULL, 'accordian', 7, 2, '2015-12-03 05:55:31', '2020-07-03 06:01:17'),
(10, 'Capacity Building', '<p>Recognizing the need to build the capacity of the concerned stakeholders in South Asia so as to better equip them with information and advocacy tools to provide adequate safety nets for the protection of poor, marginalized and vulnerable communities and people through enhanced regional and international cooperation, SAWTEE conducts capacity-building activities at various levels. Training workshops, monthly forums, information dissemination, internship programmes, etc., are the major vehicles through which SAWTEE builds the capacity of its member institutions, network institutions and other NGOs.</p>\n            <p>Some of the capacity-building efforts of SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Training of South Asian Economic Journalists on WTO issues and subsequent formation of South Asian Centre for Economic Journalists (SACEJ).</li>\n            <li>Training of South Asian researchers on Computable General Equilibrium (CGE) modelling for three consecutive years since 2008.</li>\n            <li>Creating a batch of young WTO practitioners from South Asia, through continuous training to the same group of people for eight years (between 1997 and 2004).</li>\n            <li>Capacity building of Nepali customs officials on Nepal&rsquo;s obligations under multilateral, regional and bilateral trade agreements.&nbsp;</li>\n            <li>Capacity building of Nepal\'s Ministry of Commerce and Supplies (MoCS) on emerging trade issues.</li>\n            <li>Capacity building of Nepali trade negotiators on issues and modalities of negotiations of SAARC Framework Agreement on Services (SAFAS).</li>\n            </ul>', NULL, 'accordian', 7, 2, '2021-06-09 08:40:14', '2018-11-26 13:45:55'),
(11, 'Sensitization', '<p>To inform, educate and provoke action from a wide readership, SAWTEE and its member institutions regularly publish briefing papers on issues related to globalization, liberalization, multilateral trading system, regional cooperation, competition policy, environment, IPRs, food security, farmers&rsquo; rights, etc. SAWTEE also publishes a quarterly magazine titled Trade Insight in which it includes analytical articles on contemporary trade and sustainable development issues. Besides, office bearers and staff members of SAWTEE as well as those of its member institutions publish articles on contemporary issues and agenda pursued by SAWTEE, in national, regional and international newspapers, magazines and journals.</p>\n            <p>Successful sensitization programmes conducted by SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Sensitization of consumers on the role they need to play in the regulation of electricity.</li>\n            <li>Sensitization of foreign ministry officials of South Asia through the publication of special briefs prior to the 16th SAARC Summit.</li>\n            <li>Sensitization of Member of Parliaments of Nepal and Pakistan on trade and development issues.</li>\n            <li>Sensitization of farmers and indigenous communities on their rights under the Convention of Biological Diversity (CBD) and the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), and how to protect these rights in the context of the attempt at ratcheting up intellectual property protection under the WTO\'s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS) and IPR provisions included in various bilateral and regional trade arrangements.</li>\n            </ul>', NULL, 'accordian', 7, 2, '2014-03-29 10:20:18', '2022-04-19 15:21:56'),
(12, 'Networking and alliance building', '<p>SAWTEE as well as its member institutions are active members of various national, regional and international alliances. By virtue of this networking, they are involved in collective efforts to realize the objective of fair trade and equitable development in the region. SAWTEE has established network linkages with the media, the academia and research institutions at national, regional and international levels, and seeks and obtains critical inputs from them. At the international level, SAWTEE has established close institutional linkages with ActionAid, London, Bangkok and Kathmandu; Centre for International Environmental Law (CIEL), Geneva; Centre for Policy Dialogue (CPD), Dhaka; Consumers International (CI), London and Kuala Lumpur; EU-LDC Network, Rotterdam; Friedrich Ebert Stiftung (FES), Germany and Kathmandu; Gene Campaign, New Delhi; Institute of Agriculture and Trade Policy (IATP), Minneapolis; International Centre for Trade and Sustainable Development (ICTSD), Geneva; International Plant Genetic Resources Institute (IPGRI), Rome; International Development Research Centre (IDRC), Ottawa; Local Initiatives for Biodiversity, Research and Development (LI-BIRD), Pokhara; MS Swaminathan Research Foundation (MSSRF), Chennai; Novib, The Hague; Oxfam, New Delhi; Southern and Eastern African Trade Information and Negotiations Institute (SEATINI), Harare; Southeast Asian Council for Food Security &amp; Fair Trade (SEACON), Kuala Lumpur; The World Conservation Union (IUCN), Kathmandu; United Nations Conference on Trade and Development (UNCTAD), Geneva and New Delhi; Wageningen University, Wageningen; World Trade Institute (WTI), Berne; and World Trade Organisation (WTO), Geneva, among others. &nbsp;</p>', NULL, 'accordian', 7, 2, '2014-08-04 21:56:07', '2016-03-13 17:57:51'),
(13, 'Resources', '<p>SAWTEE has been sustaining itself through membership fees and contributions, sales proceeds of its publications and support from development partners. SAWTEE has received support from, among others, the following development partners:</p>\n            <ul>\n            <li>ActionAid, Kathmandu and Bangkok</li>\n            <li>The Asia Foundation, Kathmandu</li>\n            <li>CARITAS, Kathmandu</li>\n            <li>Development Fund, Oslo</li>\n            <li>Department for International Development, Kathmandu</li>\n            <li>Friedrich Ebert Stiftung, New Delhi and Kathmandu</li>\n            <li>Ford Foundation, New Delhi</li>\n            <li>International Centre for Integrated Mountain Development (ICIMOD), Kathmandu</li>\n            <li>International Development Research Centre (IDRC), Ottawa</li>\n            <li>MS Nepal, Kathmandu</li>\n            <li>Oxfam Novib, The Hague</li>\n            <li>United Nations Conference on Trade and Development (UNCTAD), Geneva</li>\n            <li>United Nations Development Programme (UNDP), Kathmandu, Regional Centre in Colombo and Regional Centre in Bangkok</li>\n            <li>United Nations Fund for Women (UNIFEM) Regional Office, New Delhi</li>\n            <li>USC Canada, Kathmandu</li>\n            </ul>', NULL, 'default', NULL, 2, '2015-06-20 07:55:22', '2023-06-07 12:17:46'),
(14, 'Intro', '<p>Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability. With these guiding elements, our major thematic areas for research and advocacy are the following:</p>', NULL, 'default', NULL, 3, '2016-12-17 14:29:35', '2019-03-14 17:31:53'),
(15, 'Sectors', '', NULL, 'tabs', NULL, 3, '2018-04-21 23:00:19', '2023-07-04 08:00:58'),
(16, 'Our Programmes', NULL, 'programmes', 'tabs', 15, 3, '2020-11-14 20:04:00', '2023-11-29 22:44:25'),
(17, 'Research', NULL, 'research', 'tabs', 15, 3, '2016-09-24 09:16:28', '2023-11-29 22:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint UNSIGNED NOT NULL,
  `page_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` bigint UNSIGNED NOT NULL,
  `slider_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_at` timestamp NULL DEFAULT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`, `verified_at`, `token`, `deleted_at`, `created_at`, `updated_at`) VALUES
(8, 'ankur.sawtee@gmail.com', NULL, 'a9884638988ebbf0052621509c7a063cffbe7bb3528382e6e1a6b0d2ed3a0f4e', NULL, '2023-11-30 06:00:34', '2023-11-30 06:00:34'),
(9, 'abishek.singh.chauhan@gmail.com', NULL, 'cdf5fe13645cbf3b293e25853cce44bced553d96d3af77ae0986082f50cd7e4b', NULL, '2023-11-30 06:02:47', '2023-11-30 06:02:47');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'minima', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(2, 'optio', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(3, 'voluptatem', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(4, 'quis', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(5, 'aliquid', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(6, 'est', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(7, 'vero', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(8, 'cumque', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(9, 'id', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(10, 'sint', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(11, 'consequatur', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(12, 'dolor', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(13, 'quia', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(14, 'ullam', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(15, 'sit', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(16, 'labore', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(17, 'non', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(18, 'voluptate', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(19, 'accusantium', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(20, 'reiciendis', '2023-11-29 01:30:32', '2023-11-29 01:30:32');

-- --------------------------------------------------------

--
-- Table structure for table `themes`
--

CREATE TABLE `themes` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `themes`
--

INSERT INTO `themes` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Economic and social reform, growth and poverty', 'Identifies South Asia’s development interests, in particular, those of the marginalized and poor people, communities and workers, in regional economic and social reform processes; and advocates their mainstreaming into economic and social policies, and growth and development processes.', '2020-09-11 22:13:44', '2020-10-19 15:05:59'),
(2, 'Trade integration and supply-side constraints', 'Advocates the region’s trade and development interests in bilateral, regional and multilateral trade negotiations and deals; and identifies ways and mechanisms to address South Asian countries’ supply-side constraints for their meaningful integration into the global economy.', '2014-07-07 17:06:16', '2017-07-20 15:58:21'),
(3, 'Trade and climate change', 'Promotes mutual compatibility between trade and climate change objectives by providing support to government, private sector and civil society organizations to design and implement policies that contribute to climate change mitigation and adaptation by utilizing trade as an instrument, and supporting government agencies in international negotiations.', '2020-05-26 00:19:33', '2014-02-03 19:17:22'),
(4, 'Agriculture policies, biodiversity management and food security', 'Calls for comprehensive agriculture policies that strengthen traditional farming systems and advance farmers\' traditional knowledge for meeting long-term food security objectives; and advocates community-centred biodiversity management policies, laws and programmes, including those relating to IPRs, so as to protect farmers\' rights to seeds and traditional knowledge.', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(5, 'Competition, regulation and competitiveness', 'Monitors the status and trends in markets for generating information and analysis on anti-competitive practices; advocates effective regulatory systems and measures for the protection of consumer rights and promotion of good business practices; and identifies and advocates policy and institutional measures for scaling up the competitiveness of domestic enterprises and institutions.', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(6, 'Financial resource management', 'Assesses the nature and trends of aid inflows as well as their allocation and sectoral use for identifying measures to enhance aid effectiveness; keeps track of government budget expenditures for productive investment; and advocates gender-responsive and pro-poor budget.', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(7, 'Remittance and development', 'Identifies mechanisms for improving human capital and effective remittance management; and advocates measures needed to ensure productive and decent working conditions, poverty reduction and human development.', '2023-11-29 01:30:32', '2023-11-29 01:30:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$7xq3ZoW71F4Sad5F2bkRruZMppS34IDS7CQpwzOF7e9x8uNWgskru', NULL, NULL, NULL),
(2, 'Aiyana Cronin', 'hank71@example.com', '2023-11-29 01:30:32', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fKu6EdGvXV', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(3, 'Lauren Mueller', 'rozella61@example.com', '2023-11-29 01:30:32', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'tyOHOYAVsD', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(4, 'Rocio Weimann', 'ustokes@example.net', '2023-11-29 01:30:32', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OQfsCs3EMS', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(5, 'Dr. Pauline Wuckert', 'larry.schumm@example.net', '2023-11-29 01:30:32', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'nH1lDam9k3', '2023-11-29 01:30:32', '2023-11-29 01:30:32'),
(6, 'Bella Feeney DVM', 'weber.broderick@example.net', '2023-11-29 01:30:32', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'y2PLPZc4YB', '2023-11-29 01:30:32', '2023-11-29 01:30:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_fileable_type_fileable_id_index` (`fileable_type`,`fileable_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_imageable_type_imageable_id_index` (`imageable_type`,`imageable_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_uuid_unique` (`uuid`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  ADD KEY `media_order_column_index` (`order_column`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_name_unique` (`name`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_title_unique` (`title`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`),
  ADD KEY `posts_category_id_foreign` (`category_id`),
  ADD KEY `posts_theme_id_foreign` (`theme_id`);

--
-- Indexes for table `post_tag`
--
ALTER TABLE `post_tag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_tag_post_id_foreign` (`post_id`),
  ADD KEY `post_tag_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `publications_title_unique` (`title`),
  ADD UNIQUE KEY `publications_slug_unique` (`slug`),
  ADD KEY `publications_category_id_foreign` (`category_id`);

--
-- Indexes for table `research`
--
ALTER TABLE `research`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `research_title_unique` (`title`),
  ADD UNIQUE KEY `research_slug_unique` (`slug`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sections_title_unique` (`title`),
  ADD KEY `sections_parent_id_foreign` (`parent_id`),
  ADD KEY `sections_page_id_foreign` (`page_id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sliders_page_id_foreign` (`page_id`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slides_slider_id_foreign` (`slider_id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_name_unique` (`name`);

--
-- Indexes for table `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `post_tag`
--
ALTER TABLE `post_tag`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `themes`
--
ALTER TABLE `themes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_theme_id_foreign` FOREIGN KEY (`theme_id`) REFERENCES `themes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_tag`
--
ALTER TABLE `post_tag`
  ADD CONSTRAINT `post_tag_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `publications_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sections_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `sections` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sliders`
--
ALTER TABLE `sliders`
  ADD CONSTRAINT `sliders_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `slides`
--
ALTER TABLE `slides`
  ADD CONSTRAINT `slides_slider_id_foreign` FOREIGN KEY (`slider_id`) REFERENCES `sliders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
