-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2023 at 11:43 AM
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
(1, 'Featured Events', 'featured-events', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(2, 'Programmes', 'programmes', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(3, 'Completed Programmes', 'completed-programmes', 'post', 2, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(4, 'Ongoing Programmes', 'ongoing-programmes', 'post', 2, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(5, 'Covid', 'covid', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(6, 'Infocus', 'infocus', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(7, 'Newsletters', 'newsletters', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(8, 'Sawtee in Media', 'sawtee-in-media', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(9, 'Blog', 'blog', 'post', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(10, 'Publications', 'publications', 'publication', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(11, 'Trade Insight', 'trade-insight', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(12, 'Discussion Paper', 'discussion-paper', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(13, 'Briefing Paper', 'briefing-paper', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(14, 'Policy Brief', 'policy-brief', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(15, 'Issue Paper', 'issue-paper', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(16, 'Working Paper', 'working-paper', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(17, 'Books', 'books', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(18, 'Reseacrh Brief', 'research-brief', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(19, 'Others', 'others', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(20, 'Publications in Nepali', 'publications-in-nepali', 'publication', 10, '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(21, 'Research', 'research', 'research', NULL, '2023-12-03 23:40:04', '2023-12-03 23:40:04');

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

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `path`, `fileable_type`, `fileable_id`, `created_at`, `updated_at`) VALUES
(1, 'Trade-Insight-1.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\publications\\Trade-Insight-1.pdf', 'App\\Models\\Publication', 1, '2023-12-04 05:11:19', '2023-12-04 05:11:19'),
(2, 'Trade-Insight-2.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\publications\\Trade-Insight-2.pdf', 'App\\Models\\Publication', 2, '2023-12-04 05:11:40', '2023-12-04 05:11:40'),
(3, 'Trade-Insight-3.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\publications\\Trade-Insight-3.pdf', 'App\\Models\\Publication', 3, '2023-12-04 05:11:57', '2023-12-04 05:11:57'),
(4, 'R2001-01.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\Research_Reports\\R2001-01.pdf', 'App\\Models\\Research', 1, '2023-12-04 05:16:32', '2023-12-04 05:16:32'),
(5, 'R2002-01.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\Research_Reports\\R2002-01.pdf', 'App\\Models\\Research', 2, '2023-12-04 05:17:17', '2023-12-04 05:17:17'),
(6, 'R2002-02.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\Research_Reports\\R2002-02.pdf', 'App\\Models\\Research', 3, '2023-12-04 05:17:50', '2023-12-04 05:17:50'),
(7, 'Trade-Insight-4.pdf', 'C:\\laragon\\www\\sawtee-laravel\\public\\publications\\Trade-Insight-4.pdf', 'App\\Models\\Publication', 4, '2023-12-11 05:22:51', '2023-12-11 05:22:51');

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
(1, 'App\\Models\\Slide', 1, 'bbe7897c-b4e3-42c0-8e94-bb133b35947e', 'slides', 'DSC_0397', 'DSC_0397.webp', 'image/webp', 'media', 'media', 689186, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 00:22:14', '2023-12-04 00:22:16'),
(2, 'App\\Models\\Slide', 2, 'fa14d8cc-2b7d-4be1-923e-1071c40eb8e6', 'slides', 'fishing-resized', 'fishing-resized.webp', 'image/webp', 'media', 'media', 201348, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 03:29:39', '2023-12-04 03:29:40'),
(3, 'App\\Models\\Slide', 3, '792a230c-3d71-4505-b349-40dfa3bfbb6b', 'slides', 'climate-change-resized', 'climate-change-resized.webp', 'image/webp', 'media', 'media', 193152, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 03:30:43', '2023-12-04 03:30:43'),
(4, 'App\\Models\\Publication', 1, 'a274859d-2773-4453-b1fa-57f8b9be3ae4', 'publication_featured_image', 'Trade-Insight-1', 'Trade-Insight-1.jpg', 'image/jpeg', 'media', 'media', 122572, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 05:11:18', '2023-12-04 05:11:19'),
(5, 'App\\Models\\Publication', 2, '1296a4a2-48fe-4f31-a9ac-13cf5dcde90e', 'publication_featured_image', 'Trade-Insight-2', 'Trade-Insight-2.jpg', 'image/jpeg', 'media', 'media', 53623, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 05:11:40', '2023-12-04 05:11:40'),
(6, 'App\\Models\\Publication', 3, '4721bc9e-4d97-4e3e-b394-ad58466da531', 'publication_featured_image', 'Trade-Insight-3', 'Trade-Insight-3.jpg', 'image/jpeg', 'media', 'media', 63748, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-04 05:11:57', '2023-12-04 05:11:57'),
(7, 'App\\Models\\Post', 97, '0292a17e-18c7-4fd4-9af0-9cc17c057951', 'post-featured-image', 'thumbnail_Attachment-2', 'thumbnail_Attachment-2.jpg', 'image/jpeg', 'media', 'media', 619999, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"thumbnail_Attachment-2___responsive_1920_1440.jpg\", \"thumbnail_Attachment-2___responsive_1606_1205.jpg\", \"thumbnail_Attachment-2___responsive_1344_1008.jpg\", \"thumbnail_Attachment-2___responsive_1124_843.jpg\", \"thumbnail_Attachment-2___responsive_940_705.jpg\", \"thumbnail_Attachment-2___responsive_787_590.jpg\", \"thumbnail_Attachment-2___responsive_658_494.jpg\", \"thumbnail_Attachment-2___responsive_550_413.jpg\", \"thumbnail_Attachment-2___responsive_460_345.jpg\", \"thumbnail_Attachment-2___responsive_385_289.jpg\", \"thumbnail_Attachment-2___responsive_322_242.jpg\", \"thumbnail_Attachment-2___responsive_269_202.jpg\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxNDQwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxNDQwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUdBQWdBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTgvMW40YVIyMTRxUU0wU01lUlh0ZmdiNFFXOW5wRU04Rjc1Y3JMbm1zWDRqeTIybTZsd3lxcTgxeGQ3OGVKZE5nVzNoWTdVT01nMStTWkhpOHd3bGVwVHF4NXJIN0s4dHdHSnd0S1U1OHI3bnJtby9EYlVyWm11WVpGa0s4NUZjaHJ2aW1IU0xjaThQbHlLY0d1ZnNQMmpydVhFTzE5aEdDYTR2NGo2MmRZMHMzR0NOeHpYM0VNYzZ6Y1hGcjFQQXgyR2pnb3FWS29wSjlqdi9BSXNlRzdueEhxSmEwa0lUdlhNZUcvaFBIY1hFY0Z5bTlpZVNhS0s5REJRaTZjWmRXZlBacXZadWNZdlJiSHBHbGZBdTBpdUZRb3BCUHBXeDhSZmd4WXhlQzM4cEFKRkhHS0tLK2Z4VWVXdTdONkh5MUhFVkpjcWJQLy9aIj4KCTwvaW1hZ2U+Cjwvc3ZnPg==\"}}', 1, '2023-12-05 00:32:28', '2023-12-05 00:32:38'),
(8, 'App\\Models\\Section', 16, '230cbd1a-e71c-4107-b5cf-e72281ebf37f', 'section-media', 'pexels-ayu-shakya-25432531', 'pexels-ayu-shakya-25432531.webp', 'image/webp', 'media', 'media', 123916, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"pexels-ayu-shakya-25432531___responsive_640_960.webp\", \"pexels-ayu-shakya-25432531___responsive_535_803.webp\", \"pexels-ayu-shakya-25432531___responsive_448_672.webp\", \"pexels-ayu-shakya-25432531___responsive_374_561.webp\", \"pexels-ayu-shakya-25432531___responsive_313_470.webp\", \"pexels-ayu-shakya-25432531___responsive_262_393.webp\", \"pexels-ayu-shakya-25432531___responsive_219_329.webp\", \"pexels-ayu-shakya-25432531___responsive_183_275.webp\", \"pexels-ayu-shakya-25432531___responsive_153_230.webp\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjQwIDk2MCI+Cgk8aW1hZ2Ugd2lkdGg9IjY0MCIgaGVpZ2h0PSI5NjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBTUFBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBL1BwWGJPQUtlWWp1Qnh6VnIrejVRK1FPS3N4YWZQSWNJdTQrMWVkekxvY0pGYlJxekFNTUdxOStpeE1jSE5QdVV1YmRpcklWYXFwc1o3aENXbzJkMnhucWVpK0ZsdjJDbGVUWGJhVjhKWklHKzBzUUl3TTROZG5wSGd1R3h3NHh3YTNibTlYeVZ0MFlZSEJyMEZTcHlkMmpaUTduemw0bThFM011clNGT0V6eGlzdC9DZHhDdTBBbjNyMi9XdFBSYm9zUndhcExvdm5zQWtlZmZGS1VZUmVpRnkyWjBsejRqK3l3TU4yV1BRVm13M2trakNRdHllYTV5NXVvcjY4M1JPU2dyUnRwVVVnTXhyV0swTjI5UzlxVncwcTg4a1ZMcDJzcVl4SGdDUVZYdVpJU25YbXNLNXVFczdnUzVPQjJwdFhRai8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4=\"}}', 1, '2023-12-05 23:56:04', '2023-12-05 23:56:09'),
(9, 'App\\Models\\Section', 17, '183088b8-4004-4b16-b3b2-fe2fd5717e69', 'section-media', 'suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1', 'suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1.webp', 'image/webp', 'media', 'media', 38758, '[]', '[]', '{\"preview\": true, \"responsive\": true}', '{\"responsive\": {\"urls\": [\"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_636_422.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_532_353.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_445_295.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_372_247.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_311_206.webp\", \"suraj-shakya-3LAWAWKFZ4s-unsplash-636x422-1___responsive_260_173.webp\"], \"base64svg\": \"data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjM2IDQyMiI+Cgk8aW1hZ2Ugd2lkdGg9IjYzNiIgaGVpZ2h0PSI0MjIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBRlFBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBK0p0UWhSclJvWUk4cGptdVhUUnpKRE1xcVFUMnIxZjRmZUh4cWlPbHd2ekVkNjZLNStGc2lSelNwSGdEa2NWNHJxS0xzZTNUVUpTVVpPeDgzMm5oSyt2cmw0b1ltZGh6d0t6Yi9TNTlPbmFLWkNycjFCRmZhSHdiK0hkcjVON2Qza1MrWW9JR1JYalh4WjhKVzBuaUc0OGhRUG1QQXJxZnV4VW4xSXEwb0tjb3dkMGozN1MvQ2RqcGFtU0ZTRzYxMWF5TEw0Y3VXYU5keUtjR2lpdklwKzg5VHNyeGp5YkhoS2ZFWFZkSjFDNnRiZHdzVE1RUlcxb21oMit1U200dWh2a2ZrazBVVjIxWlAyY1VjOUdLdXovLzJRPT0iPgoJPC9pbWFnZT4KPC9zdmc+\"}}', 1, '2023-12-05 23:56:26', '2023-12-05 23:56:28'),
(10, 'App\\Models\\Publication', 4, '76d83661-5664-40e6-bc81-782304751c68', 'publication_featured_image', '91trade_insight2', '91trade_insight2.jpg', 'image/jpeg', 'media', 'media', 30452, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-12-11 05:22:50', '2023-12-11 05:22:51');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `title`, `location`, `content`, `created_at`, `updated_at`) VALUES
(2, 'Primary Menu', 'primary', NULL, '2023-12-06 22:56:13', '2023-12-06 22:56:13'),
(3, 'Footer Menu', 'footer', NULL, '2023-12-06 22:56:32', '2023-12-06 22:56:32'),
(4, 'Social Menu', 'footer-social', NULL, '2023-12-06 23:18:03', '2023-12-06 23:18:03');

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint UNSIGNED NOT NULL,
  `menu_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `name`, `url`, `parent_id`, `order`, `created_at`, `updated_at`) VALUES
(7, 2, 'Featured Events', 'Featured Events', '/category/featured-events', NULL, 5, '2023-12-08 00:50:20', '2023-12-08 05:05:18'),
(8, 2, 'Publications', 'Publications', '/category/publications', NULL, 4, '2023-12-08 00:50:20', '2023-12-08 05:05:32'),
(9, 2, 'About', 'Know Us', 'about', NULL, 2, '2023-12-08 01:29:05', '2023-12-08 05:06:13'),
(10, 2, 'Our Work', 'Our Work', 'our-work', NULL, 3, '2023-12-08 01:29:05', '2023-12-08 05:06:31'),
(11, 2, 'Home', 'Home', '/', NULL, 1, '2023-12-08 05:34:15', '2023-12-08 05:54:11'),
(12, 2, 'Genesis', 'Genesis', '/about#genesis', 9, 1, '2023-12-08 05:36:44', '2023-12-08 05:54:59');

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
(21, '2023_11_23_101931_create_slides_table', 1),
(22, '2023_12_01_070053_create_menus_table', 1),
(23, '2023_12_01_070124_create_menu_items_table', 1);

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
(1, 'About', 'about', '2014-11-14 17:57:25', '2022-03-22 09:37:25'),
(2, 'Our Work', 'our-work', '2014-02-19 04:50:30', '2015-01-24 19:54:42'),
(3, 'Contact', 'contact', '2014-03-19 13:01:01', '2016-11-16 06:28:10'),
(4, 'Career', 'career', '2016-09-27 23:13:52', '2018-09-30 20:31:48');

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
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(1, 5, NULL, 'Molestiae fuga qui aspernatur consequuntur.', 'molestiae-fuga-qui-aspernatur-consequuntur', 'Debitis iure quia error quasi reprehenderit sed consequatur ducimus. Et iure deserunt iure voluptatibus qui sit quidem. Aperiam eius qui rerum sunt sint ex vel. Non et tenetur suscipit alias occaecati harum.\n\nAut consequuntur natus cupiditate dolores ex ut. Deserunt necessitatibus quas consequuntur consectetur in ut quo aut. Qui aut aspernatur et asperiores.\n\nExercitationem voluptas suscipit distinctio et omnis. Beatae aperiam ullam vel et rerum. Fuga ullam dolorum totam quis.\n\nEius dolores dolor consequatur laborum assumenda ab unde. Cum enim est magni. Vero et hic maiores aut mollitia ut ea ab. Distinctio neque voluptas dolore omnis.', 'Molestiae qui quod quam doloremque accusamus voluptas ab. Nesciunt repudiandae eos et illo ut magni odit. Molestiae odio fuga illum eveniet. Nisi eligendi hic aut quis voluptas laborum.', 'Ms. Myah Bayer', 'published', 'http://mitchell.com/neque-vel-est-pariatur-omnis-ut-maiores', '2006-01-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(2, 7, 3, 'Et unde ullam velit beatae maiores nisi.', 'et-unde-ullam-velit-beatae-maiores-nisi', 'Repellat ratione numquam repellat officiis ratione neque consequuntur. Est ullam nesciunt repellendus totam perferendis error. Quaerat voluptate facere voluptates corrupti tempore.\n\nLibero rerum nisi earum in pariatur vel. Quia quasi aspernatur quae sit qui. At et et vitae autem pariatur.\n\nRerum voluptas recusandae error quas possimus. Dolorum recusandae expedita nihil optio. Qui magni ullam qui iusto. Fugiat dolor recusandae ipsa tempora harum incidunt.\n\nDeserunt dolorem ullam quia quas est. Autem eligendi doloribus quas earum voluptas. Occaecati ipsum molestias doloremque molestiae veritatis facilis voluptatem.', 'Quae ea dolorem dolorum nam vel. Voluptatem iure recusandae et enim. Minima nihil non soluta. Autem aspernatur aspernatur mollitia earum et modi et.', 'Victor Roberts', 'published', 'http://harvey.org/nulla-voluptatibus-a-nesciunt-accusamus-et-unde', '1997-06-08 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(3, 5, NULL, 'Ducimus recusandae est tempore earum autem ut modi.', 'ducimus-recusandae-est-tempore-earum-autem-ut-modi', 'Vitae non odit et sit exercitationem. Aperiam architecto impedit pariatur dolores. Ut ipsum suscipit quos consequatur deserunt.\n\nVoluptas voluptas et et totam esse. Qui saepe pariatur beatae nesciunt iusto consequatur consectetur. Et quam eius voluptatem dignissimos ut quasi.\n\nAutem similique velit excepturi autem omnis facere. Aut perspiciatis reprehenderit ut reiciendis consectetur. Eaque deserunt sint in numquam illum. Rerum incidunt beatae deserunt fugiat fugiat corrupti et.\n\nCumque esse eveniet at non harum sed saepe. Earum consequatur est consequatur sed sunt. Delectus aut qui nesciunt recusandae.', 'Fugiat sequi et deleniti eveniet. Qui et voluptas cupiditate rerum ea sit vitae aperiam.', 'Daisha Langosh', 'published', 'http://www.harris.com/ea-id-beatae-repellendus-non-ut-assumenda-eveniet.html', '1996-07-03 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(4, 1, NULL, 'Quis ut numquam sunt adipisci facere culpa ut.', 'quis-ut-numquam-sunt-adipisci-facere-culpa-ut', 'Dolorem eos tempora et dolore quam veniam. Vero sed qui eos quis. Nihil deserunt qui enim atque aut consectetur quo. Consequuntur laudantium repellat in laborum aperiam consectetur ut repellat. Accusantium sit natus dicta inventore magnam.\n\nVoluptatem delectus enim molestias dolor nemo laudantium quod. Et qui aliquid est. Doloremque nulla voluptatibus rerum rerum impedit blanditiis.\n\nAtque voluptas aut vel sed quos non occaecati. Totam ab est atque alias dolorum accusantium harum ut. Dicta eum qui sed at eum ipsam.\n\nEt laborum corporis labore in ab. Et ratione adipisci architecto. At sed repellat earum.', 'Culpa consequuntur dicta ut soluta quos sed hic eos. Aliquid veniam quibusdam ad est. Eum illum autem ut dolores sed assumenda. Velit nemo laboriosam sed et dolor quis.', 'Meghan Brown', 'published', 'http://www.rodriguez.com/', '2018-06-07 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(5, 3, NULL, 'Est unde impedit cum quasi.', 'est-unde-impedit-cum-quasi', 'Cupiditate saepe qui dolores aut. Beatae est autem dolorem vel et aspernatur dolorum. Adipisci est et magnam odio. Et asperiores blanditiis enim praesentium doloremque est.\n\nLabore ut pariatur nostrum ullam adipisci. Aut aut aut qui enim similique dolor. Perferendis et vel sit aliquam illo.\n\nOmnis aliquam quia fuga accusamus esse nulla sapiente. Voluptas iste beatae doloribus labore rerum nihil. Molestiae nihil quaerat expedita.\n\nMolestiae ipsa veniam atque hic quas esse. Voluptas debitis perferendis sunt dignissimos quod autem. Ut architecto expedita natus.', 'Doloremque ea nesciunt in fuga autem delectus. Occaecati at ratione doloremque voluptas. Eligendi est facilis possimus maxime dolores reiciendis.', 'Yasmin Muller V', 'published', 'https://blanda.com/ut-excepturi-minus-accusantium-explicabo-in-officiis.html', '2012-06-21 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(6, 6, 3, 'Inventore ex iste facere sint blanditiis.', 'inventore-ex-iste-facere-sint-blanditiis', 'Illum ullam architecto incidunt provident. Quasi quasi commodi odit asperiores dolor. Dicta voluptatem alias harum et vero dolor soluta. Aliquid officia tempore voluptatem inventore ut deleniti ad.\n\nQui atque qui sunt voluptatibus quo nam eveniet. Quod et non qui. Quasi dolor explicabo eius.\n\nNatus adipisci ut et voluptatem rerum reprehenderit. Eos ex sint quia pariatur et et corrupti. Aperiam dolor temporibus magni repellat consectetur totam. Aperiam sit voluptatibus officia delectus ea.\n\nSaepe quas quidem quia et. Qui est adipisci voluptatem ut eum aliquid. Saepe est aut vel.', 'Fugit inventore autem architecto asperiores quidem est. Facilis voluptatem at molestiae officiis error quis. Nemo fugit nisi ab iusto.', 'Marcelle Satterfield', 'published', 'https://ohara.info/et-vel-vitae-ipsam-soluta-voluptas.html', '1986-10-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(7, 7, 2, 'Consequatur explicabo alias quis quos est modi.', 'consequatur-explicabo-alias-quis-quos-est-modi', 'Dolor perferendis corporis sit dicta eaque at. Nihil illo vero dolores repellendus amet aliquam et. Quae maxime illum quaerat qui.\n\nEt sint perferendis quae debitis eos expedita. Dolores mollitia at tempora minus. Voluptatum provident natus nostrum culpa architecto. Dicta dolorem velit nesciunt sed iste fugit et.\n\nQui voluptates provident incidunt soluta laudantium asperiores. Omnis qui voluptas velit architecto accusantium. Natus et non accusantium error quia sed. Quae accusantium voluptatem enim sed est pariatur.\n\nOmnis sed cum explicabo quaerat error ratione. Dolores et est numquam sunt voluptatem odit. Omnis quam dolores et repudiandae quae. Saepe est voluptatibus aperiam consequuntur nihil sunt ea.', 'Eum in quo voluptas iure voluptatem nisi veritatis. At possimus qui sint quia quia. Dolores deleniti beatae architecto reiciendis. Neque ut illo architecto molestiae omnis ut.', 'Laurie Barrows II', 'published', 'https://hoeger.com/ut-reprehenderit-enim-voluptas-qui-illo.html', '2015-01-20 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(8, 2, NULL, 'Dolor rerum commodi perspiciatis rerum.', 'dolor-rerum-commodi-perspiciatis-rerum', 'Nisi beatae dicta eveniet aliquam recusandae eius. Dolores necessitatibus et explicabo praesentium enim ut. Sed maxime animi placeat sint quis laboriosam.\n\nVoluptatibus hic nulla mollitia suscipit natus aliquid. Voluptate laboriosam quia omnis voluptatibus voluptatem occaecati possimus. Consectetur nulla ut qui officiis qui. Quia exercitationem voluptatem recusandae sed id consequatur in.\n\nError dolorem voluptatem officiis molestiae et aliquam. Porro aspernatur autem magnam eum. Praesentium unde porro sint officia.\n\nUt quo est quia omnis. Consequatur aliquam libero iste maxime. Eligendi quae aut nihil sint ducimus officiis voluptas.', 'Excepturi voluptas ut dolorem. Neque repellat hic nihil autem placeat asperiores maiores. Eos et animi id voluptatem ea dolorem. Eius amet error dolores.', 'Akeem Heaney DVM', 'published', 'https://harris.com/harum-quidem-porro-rerum-est-accusantium-consectetur-ratione.html', '1999-10-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(9, 7, 5, 'Aut consequuntur veniam rem sed accusamus.', 'aut-consequuntur-veniam-rem-sed-accusamus', 'Sit esse cumque blanditiis consectetur est dolorem. Quo laboriosam ut voluptatem perspiciatis suscipit sit. Rerum qui modi dignissimos nemo rerum dolor impedit. Qui sed mollitia officiis nesciunt sapiente. Saepe quis qui tempore suscipit dolorem ut.\n\nLaborum quam facilis magni quod. Facilis odit expedita labore et maxime commodi eveniet. Quis corrupti aut laboriosam voluptatem laborum necessitatibus et quibusdam.\n\nVoluptatem illum rerum voluptas dolorem. Quidem dolor laborum quia eligendi rem. Hic illum autem sint odit.\n\nError voluptatem quia dicta libero distinctio. Tenetur sit voluptatem et voluptas sed. Qui suscipit sit amet dignissimos excepturi. Omnis aut modi reiciendis aut.', 'Autem modi explicabo qui quo in ab. Quia ab odio illo accusantium ullam magni at. Sint rerum est quia ut et ut. Officiis est qui voluptas et laudantium consequatur qui.', 'Prof. Samson Gusikowski PhD', 'published', 'http://www.rath.org/quia-neque-quo-fugiat', '2013-11-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(10, 7, NULL, 'Voluptate deserunt ut repellat.', 'voluptate-deserunt-ut-repellat', 'Praesentium voluptas quia beatae. Consequatur voluptate odit omnis deserunt nulla quam. Maxime molestiae esse facilis amet et id autem. Repellendus repudiandae saepe fugiat doloremque et.\n\nLibero qui voluptates totam praesentium. Eius vel possimus facere et unde debitis. Sint ut quos fuga voluptas velit dolorem. Ut quasi nihil voluptatem quia.\n\nQuod et perferendis sit voluptatem ipsam voluptatem. Sequi sit facilis architecto a similique cum eos consequatur. Incidunt mollitia est consequatur sed. Ea sunt aut laudantium minima.\n\nLaboriosam beatae iure aut animi quod ducimus molestias laudantium. Molestias et quod animi veritatis molestiae tempora officia nam. Dicta quo quisquam et maxime explicabo autem voluptatibus et. Recusandae vitae qui dolore consequatur nihil.', 'Ab ipsam et quibusdam asperiores rem. Corrupti illum et sit ut ut. Deleniti provident qui sed culpa amet.', 'Dr. Alvena Witting', 'published', 'http://kessler.com/reiciendis-et-sed-magnam-est-ut-unde-quia.html', '2011-01-27 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(11, 6, 3, 'Ab cum quis deserunt ut.', 'ab-cum-quis-deserunt-ut', 'Nobis labore molestias quis. In quam voluptatum dolorum asperiores magni odio ullam. Commodi officia ut molestiae est impedit. Non ut occaecati est dolorem rem assumenda.\n\nNam provident fugiat et dolore laborum quidem. Blanditiis debitis expedita est quidem sed. Accusamus et minima voluptatem quia perspiciatis. Autem hic nemo sed accusamus nihil omnis consequatur quasi.\n\nUnde repellat vel unde perferendis. Ab doloribus hic fugiat quasi repudiandae. Quo rem est et laborum molestias delectus rerum totam.\n\nConsequatur totam iste voluptatem repellat necessitatibus et. Numquam nam est quasi aut vel voluptas.', 'Quibusdam optio consequatur quia tempora minus. Laboriosam illum ad sint. Est sed quo iure vel consectetur odio.', 'Tillman Johnston', 'published', 'http://funk.com/quidem-fuga-non-ut-exercitationem-odit-possimus-atque', '2011-11-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(12, 7, NULL, 'Vero facilis eaque ut distinctio eligendi quae qui tenetur.', 'vero-facilis-eaque-ut-distinctio-eligendi-quae-qui-tenetur', 'Sapiente molestiae enim omnis qui ut ex molestiae. Eaque omnis eaque impedit.\n\nEst consequatur omnis dolorem. Dicta velit facilis voluptas debitis. Sed ea nobis sunt.\n\nIpsum dolor fuga est voluptate ratione. Delectus ratione adipisci recusandae. Reprehenderit rerum aut consequatur qui explicabo laudantium consequuntur. Qui numquam assumenda nemo ut explicabo.\n\nHic et sint veniam non. Et voluptates et eius natus vero laboriosam quo. Hic sint et doloribus similique sed consequatur temporibus sunt. Quia beatae similique dolorum sint voluptas dolore qui.', 'Molestiae sequi praesentium sint illum veritatis corporis quia. Officiis et aut ex illo sint. Vero dolore pariatur officia quos eum.', 'Herminio Kulas PhD', 'published', 'http://cummings.net/velit-neque-quam-architecto-rem-corrupti-quae-sit', '2002-01-17 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(13, 8, 2, 'Nesciunt nobis voluptatem sit magnam et maiores.', 'nesciunt-nobis-voluptatem-sit-magnam-et-maiores', 'Et esse voluptatibus sunt placeat. Minus nemo voluptatum iure quisquam necessitatibus quo minima. Quam eveniet eligendi veniam consequuntur sit optio.\n\nEnim quibusdam accusantium autem odit illo. Tenetur reprehenderit sapiente iure quo libero cum mollitia sit. Omnis laudantium neque aut provident.\n\nId saepe et qui impedit enim animi et. In ea consequuntur eaque odit sunt unde aspernatur.\n\nQuaerat omnis ad est nulla aut maiores officia. Velit maiores quos libero ullam similique aut. Cumque animi nisi at. Quis inventore aut minus enim soluta soluta.', 'Qui qui sunt similique corrupti et deserunt aperiam. Ducimus est quisquam autem ipsum dolorem occaecati. Rem delectus recusandae nisi enim et eius vero. Blanditiis ut ipsam voluptatibus rerum.', 'Prof. Lowell Murray', 'published', 'http://www.herzog.com/eos-ut-tempore-est-consequatur.html', '1996-02-19 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(14, 6, NULL, 'Et dolor rerum quibusdam magni.', 'et-dolor-rerum-quibusdam-magni', 'Perspiciatis neque id eius quia facere quibusdam. Dolor id beatae ipsum neque explicabo id. Nisi voluptatem dolores sunt officiis adipisci vel.\n\nAperiam voluptatibus et dolor. Tenetur aut voluptas rerum corporis laborum et. Illo ut rerum qui iusto aut.\n\nQuidem ea nihil repellat vel. Aperiam ut perferendis totam dignissimos vitae tempore. Hic voluptas odit totam nisi. Exercitationem consectetur dolore est et quibusdam quo.\n\nSit aliquid voluptas est unde optio occaecati. Cupiditate sit ut facere. Adipisci sunt voluptatem eaque quis quis dolores delectus. Consequuntur aspernatur quas placeat qui soluta.', 'Sit ipsum aspernatur reprehenderit rem quia a. Quas dolor reiciendis magni veniam consequatur. Iure nobis nostrum aut facere fugiat.', 'Tracey Aufderhar', 'published', 'http://www.lesch.com/maxime-eaque-quasi-deserunt-suscipit-at.html', '1977-11-19 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(15, 3, NULL, 'Sequi sit iusto ipsam quia vero velit illum.', 'sequi-sit-iusto-ipsam-quia-vero-velit-illum', 'Ea temporibus dolores excepturi et. Nam sint possimus voluptate voluptates aut nobis. Fuga sed similique enim odit voluptas maxime porro eos.\n\nCupiditate et omnis non delectus cumque. Dolor suscipit quibusdam commodi illo ut ut. Sapiente quaerat velit distinctio quia. Nulla iure qui nulla et. Fugit recusandae natus ad ullam totam in.\n\nCumque qui sit quae nam quisquam. Fuga et iste consectetur repudiandae quia. Aliquam aut reiciendis rerum iusto quasi.\n\nQuod est sit numquam aut ab et et. Tempore delectus impedit est est. Sed doloribus voluptas dolor qui atque.', 'Iure voluptas eaque explicabo dolores perferendis. Quas qui sint eos velit dolor.', 'Jany Feil', 'published', 'https://www.quigley.biz/aut-dignissimos-amet-qui-iure-aut-mollitia-consectetur', '1984-04-17 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(16, 6, 1, 'Omnis doloribus culpa dolor est rerum.', 'omnis-doloribus-culpa-dolor-est-rerum', 'Quas libero qui occaecati deleniti minus asperiores. Porro rerum ea asperiores maxime aut dolor. Temporibus corrupti blanditiis possimus ad voluptas ut dolor.\n\nOdio ut qui qui. Voluptas sapiente nobis sed dolorum. Et placeat alias et quia atque. Voluptas aut ex pariatur sapiente voluptas omnis.\n\nQuasi aspernatur officiis numquam porro doloribus tempore. Perferendis ut vero minima et eius rerum placeat voluptas.\n\nQuis aut fugiat deserunt exercitationem distinctio vel expedita. Nemo nam cupiditate cupiditate laborum tempore nemo. Eum odit aut ea numquam iusto.', 'Voluptas omnis ratione enim omnis fuga. Inventore quisquam aliquam optio. Deleniti assumenda alias dignissimos doloribus consequatur.', 'Alexane Kemmer', 'published', 'https://hagenes.net/excepturi-vero-hic-dolor-fuga-vel-quis-sed.html', '1988-09-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(17, 5, NULL, 'Praesentium velit necessitatibus non ut doloremque.', 'praesentium-velit-necessitatibus-non-ut-doloremque', 'Nesciunt eos dolor sed adipisci enim commodi. Et qui repudiandae eos nemo optio voluptatum. Nulla adipisci eos neque dolorem.\n\nOmnis velit est tempora libero quia ut. Rerum quasi asperiores mollitia architecto cum nostrum. Explicabo ut consequatur dolor aut. Iusto autem eligendi sint cum harum cupiditate.\n\nIure rerum unde fugit reiciendis numquam quasi. Reiciendis nisi nihil et laboriosam autem sed aspernatur amet. Sint sit fugiat corporis qui. Est rerum eum et consequatur.\n\nAutem ducimus iste enim. Culpa error amet qui perspiciatis. Et temporibus suscipit voluptatem cupiditate facere officia ut.', 'In ut dolor porro hic molestias aperiam. Ut dignissimos officiis mollitia occaecati voluptate dolores sint. Exercitationem asperiores rerum qui illum molestiae.', 'Wendell Armstrong', 'published', 'http://schneider.com/ipsam-consequatur-deleniti-tenetur-maiores-accusamus-aut-asperiores.html', '2019-04-12 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(18, 9, 4, 'Impedit aut et veritatis ut dolor ipsam.', 'impedit-aut-et-veritatis-ut-dolor-ipsam', 'Facilis laborum aut amet consequatur laboriosam qui. Voluptates ipsum excepturi qui magni sint. Ut eligendi provident facilis facere reiciendis. Aspernatur et laborum animi nobis in qui omnis ut.\n\nMaiores dolorem aut aut aspernatur facilis ipsa ipsum. Nihil ipsum est repudiandae eligendi rem quos. Cupiditate voluptatum sunt repellendus. Repellendus inventore dolor numquam quia et ea dolor ex.\n\nQui dicta deserunt quo est omnis porro earum quia. Voluptas dolor minus possimus est voluptatum at perferendis. Eaque consequatur enim consequatur eum laboriosam vel voluptas. Consectetur magnam vitae voluptatibus rerum. Deleniti nemo error modi eum consequuntur at aut.\n\nEt quae molestias et animi dolorem ut. Nobis excepturi eum reprehenderit omnis. Quam animi porro hic omnis ad consectetur.', 'Placeat omnis rerum ut. Quisquam asperiores est incidunt aut eos esse. Corrupti aliquid quis nihil dolores dolorum voluptatem et deserunt. Molestias sit quaerat adipisci qui eaque.', 'Sunny Johnson', 'published', 'http://www.moore.com/est-sint-quia-qui.html', '2018-12-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(19, 9, 6, 'Dolores non pariatur quis necessitatibus iure id harum.', 'dolores-non-pariatur-quis-necessitatibus-iure-id-harum', 'Omnis doloribus quis et molestiae id maiores illum voluptatibus. Consectetur voluptas doloremque quo. Non ut consequatur repellendus non.\n\nQui repellat maiores occaecati nobis nam dolorum unde. Quibusdam hic perferendis enim et iste illum et. Omnis voluptas recusandae sunt sint est facere quia.\n\nEaque exercitationem mollitia non expedita aliquam corporis. Quas autem qui consequatur esse minima quisquam et. Voluptas ut id quis illum. Architecto ipsa ut totam qui optio.\n\nModi enim non odit nobis qui commodi enim. Non optio temporibus quis tenetur.', 'Veritatis debitis id sunt eveniet. Rerum illo qui ea. Eum fugit dicta dolores omnis laboriosam. Laudantium voluptates facere voluptas placeat explicabo harum maxime.', 'Dr. Hayley Champlin II', 'published', 'http://www.champlin.com/beatae-quo-vero-est-natus', '2021-06-18 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(20, 1, NULL, 'Et non totam ut repellat aut asperiores libero voluptatem.', 'et-non-totam-ut-repellat-aut-asperiores-libero-voluptatem', 'Quam iure aut accusamus dolores porro ipsam reprehenderit. Ducimus est rerum est sit ut.\n\nRecusandae ipsa nobis vitae. Et iste quam facere voluptatem voluptas aut. Ut voluptatibus voluptatem veritatis dolorem nulla. Ut quo voluptas enim eius rerum. Reiciendis dolore similique iusto sunt.\n\nQuae voluptatum ut nihil a voluptatem voluptatem. Rerum repellat iusto doloremque animi sit velit. Cum vitae quaerat animi non.\n\nOmnis animi aut veniam sit voluptatem. Neque dolores quo perspiciatis enim enim quia eaque aut. Soluta soluta doloremque cupiditate.', 'Et et odio nesciunt doloribus. Qui placeat quo quae sunt dolores laborum.', 'Ubaldo Kuphal', 'published', 'http://www.wiza.com/', '2023-02-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(21, 1, NULL, 'Numquam labore laudantium sit non sunt labore officia.', 'numquam-labore-laudantium-sit-non-sunt-labore-officia', 'Itaque perferendis accusamus ad. Quo et aut et sint et sequi. Inventore qui inventore veniam nisi sequi rerum sapiente.\n\nTotam occaecati qui dolor quam. Quis modi voluptatum consequatur numquam iure.\n\nTempora eius quos earum quisquam minus cumque. Maiores qui expedita debitis quasi. Dolorem voluptates alias sed. Molestiae eaque sit saepe corrupti consequatur.\n\nUt nihil corrupti ducimus sit et eos quasi. Excepturi omnis quos aut corrupti commodi. Id sed qui saepe nesciunt voluptatem veritatis. Quisquam blanditiis aut fugit odio dicta repudiandae.', 'Aperiam optio blanditiis dolorem sed blanditiis cumque. Quae blanditiis eos accusantium dolorum neque.', 'Avis Russel Jr.', 'published', 'http://raynor.com/voluptates-voluptatem-modi-quam-iste.html', '2003-01-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(22, 1, NULL, 'Cupiditate aut nam est mollitia iusto ea eum.', 'cupiditate-aut-nam-est-mollitia-iusto-ea-eum', 'Provident quasi praesentium iusto eos magni. Optio maxime ducimus officiis necessitatibus dolore velit ut. Aut ad eaque consectetur atque molestiae corrupti. Dolor dicta quis dignissimos eveniet soluta.\n\nVel voluptatem non numquam aut aspernatur excepturi repudiandae. Soluta et qui possimus repellendus incidunt deleniti. Accusantium id nihil consequatur corporis. Dolores doloremque deserunt repudiandae minima quisquam.\n\nMaiores molestiae aut iure rem. Ut dolore necessitatibus quis. Ex ut molestiae et tempora.\n\nUllam aspernatur ea reiciendis voluptatum minima rerum. Eum libero vero ipsam ut laboriosam rem perferendis. Minus quaerat dolorem incidunt necessitatibus dolorum.', 'Voluptatum molestias et dicta fugiat voluptatum nam. Sit soluta omnis commodi voluptas. Autem cumque ut itaque laudantium.', 'Miss Giovanna Kiehn DDS', 'published', 'https://www.weissnat.com/tenetur-rerum-corporis-voluptatum-fugit-sit-soluta-odio', '2013-07-07 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(23, 8, NULL, 'Autem velit illum et veniam ducimus libero ea.', 'autem-velit-illum-et-veniam-ducimus-libero-ea', 'Quam sit mollitia maxime ad omnis et repudiandae. Adipisci et tempore ad illo. Temporibus consequatur nobis cumque temporibus alias. A illo quo earum blanditiis porro.\n\nQuos veritatis dolore minus fuga necessitatibus ipsum error nulla. Iste consequatur et iste numquam aut. Autem qui porro amet ipsa.\n\nExcepturi sed odit perferendis in molestiae. Corporis ut officiis fuga soluta ad occaecati sit. Doloremque consequatur nostrum fugiat laborum quis distinctio. Voluptatum dolores iure est odit.\n\nEt fugit dicta quidem est unde labore dicta dolorem. Facere incidunt ea non qui.', 'Quae voluptatem temporibus autem nulla ut est. Corporis non alias adipisci voluptate ab. Deserunt cumque optio quia itaque.', 'Irwin Bartoletti', 'published', 'http://www.walter.com/', '1973-11-18 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(24, 1, NULL, 'Quis aut explicabo praesentium assumenda et.', 'quis-aut-explicabo-praesentium-assumenda-et', 'Sapiente iusto sequi cum quo qui incidunt. Quod dolor voluptate quae natus. Suscipit a at debitis ratione. Quis perferendis repudiandae accusamus est numquam ut. Dolore voluptatum et consequuntur.\n\nSint illum reiciendis et dicta. Debitis eaque magni saepe rerum. Modi inventore quidem voluptates sequi neque et.\n\nBlanditiis nam doloribus adipisci magni quam sed. Autem non qui corporis repellendus error. Tenetur quia sint excepturi praesentium. Cumque accusamus repudiandae quaerat omnis voluptatem non id.\n\nSimilique et ut nostrum placeat sit. Voluptatem odio laudantium enim laudantium deserunt unde iusto. Placeat maxime quam est cumque eaque accusamus nulla sed. Aliquam aperiam sed ex eaque amet.', 'Quis aut omnis omnis voluptatibus et dolor. Suscipit voluptatibus rem modi corporis ut. Maxime fugiat vel in ipsa quo iure. Tempora harum eius sunt sapiente eos.', 'Elena Bartoletti', 'published', 'https://bogisich.com/vitae-ad-qui-ea-totam-et-quod.html', '1975-02-02 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(25, 4, 7, 'Accusantium et quia odit quam mollitia rerum.', 'accusantium-et-quia-odit-quam-mollitia-rerum', 'Aliquid architecto perferendis pariatur molestiae ab deserunt facere. Nisi ratione eum excepturi omnis. Et dignissimos amet delectus voluptas repellendus. Voluptatem sed consectetur suscipit ut iusto quia libero.\n\nAut qui ducimus occaecati cupiditate sequi ducimus eos dolorum. Cum omnis quia itaque cum. Excepturi deleniti corporis fugiat et non necessitatibus ducimus.\n\nLabore et sed in necessitatibus qui. Occaecati expedita quos quos vitae quas consectetur. Quasi aut et ex illo et voluptatem. Veritatis eum labore voluptatibus est ex officia.\n\nReiciendis eaque perspiciatis fugit alias. Cumque facere natus tenetur rerum voluptate culpa qui. Facilis mollitia ipsam impedit sed veritatis sit.', 'Magni autem incidunt unde ullam consequuntur commodi ratione. Ut natus ducimus et sapiente earum dolorem.', 'Randall Kautzer V', 'published', 'http://www.herman.biz/quam-rerum-mollitia-repudiandae-quisquam-nihil-deserunt-consequuntur.html', '2012-10-30 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(26, 4, 2, 'Iure iste qui consectetur velit voluptatibus.', 'iure-iste-qui-consectetur-velit-voluptatibus', 'Sequi iusto praesentium quod qui. Voluptas et doloremque qui consectetur. Voluptatem eveniet voluptatem autem eaque suscipit ut numquam. Est laudantium quisquam eligendi nihil porro beatae omnis.\n\nEarum eum officiis ut voluptates. Esse non tenetur quis dolorem. Reiciendis repellat odit cum aut. Mollitia nobis molestias rerum fuga distinctio doloremque impedit.\n\nRepudiandae repellat aut voluptate dolorem. Nihil quia consequatur qui voluptatibus officia occaecati. Temporibus qui inventore corrupti eum quis doloremque. Vero assumenda iure et ducimus pariatur.\n\nTemporibus ab illum sit repellendus quasi sed asperiores tempore. Sit ut ab voluptas iure. Placeat dolore cumque ut eaque vero.', 'Dolorem natus voluptatem maxime ea. Accusantium est enim porro voluptatem voluptatem non porro. Consequatur eum earum sunt fugit. Harum eum sint molestiae sed optio.', 'Bernice Wisozk', 'published', 'http://keeling.com/', '2007-02-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(27, 6, 6, 'Impedit fugiat rerum blanditiis voluptatem accusamus sequi.', 'impedit-fugiat-rerum-blanditiis-voluptatem-accusamus-sequi', 'Velit ut exercitationem ut placeat. Voluptas reprehenderit omnis voluptas dignissimos sit labore esse. Nemo fugiat facilis voluptas et. Pariatur est voluptas similique dignissimos beatae.\n\nDolorem soluta consequuntur voluptatem repudiandae ducimus. Hic asperiores occaecati qui repudiandae. Deserunt harum vero quae nisi commodi commodi.\n\nCumque nesciunt voluptas asperiores et qui. Esse error eveniet ratione modi beatae tempore molestiae ut. Quisquam modi excepturi sed velit ut. Non ut omnis dolor aut.\n\nIncidunt veritatis repellat ducimus error. Corrupti reiciendis labore ipsam. Explicabo sed maiores accusantium at adipisci. Et consequatur ut voluptatem dolorum soluta omnis.', 'Et corrupti et repellat inventore. Rerum vitae error cum quia. Quia eos ut neque quo mollitia asperiores.', 'Bridie Schuster Sr.', 'published', 'https://yundt.com/et-laborum-officiis-sunt-soluta.html', '1982-09-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(28, 6, 4, 'Nesciunt quia laborum et.', 'nesciunt-quia-laborum-et', 'Accusamus quod asperiores aperiam inventore nulla voluptas non quia. Exercitationem iure porro ut qui ea voluptatem et. Commodi suscipit dolores dolore accusantium minus voluptates architecto qui. Impedit et voluptas dignissimos molestiae sunt fuga ut sed.\n\nMinima perspiciatis deserunt aut officia ea doloremque molestiae. Rem ut mollitia eum quasi repellendus velit porro. Quis labore repudiandae ipsa quaerat. Itaque quidem sed quis doloremque recusandae soluta ut.\n\nDoloremque natus impedit exercitationem ullam. Nesciunt aspernatur odio cupiditate inventore. Voluptatibus est magnam voluptas maiores. Natus molestias ut enim quis neque est autem.\n\nVoluptas et eos mollitia asperiores. Harum excepturi ut minus et accusantium.', 'Vitae corporis non atque itaque. Ea inventore dignissimos dolor quam deserunt ut sit. Ut mollitia autem totam dicta nemo labore.', 'Pietro Block', 'published', 'http://moen.com/a-doloribus-et-magnam-qui-eligendi-harum.html', '1993-09-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(29, 8, NULL, 'Autem distinctio quasi dolore.', 'autem-distinctio-quasi-dolore', 'Non nesciunt voluptatem deleniti esse alias. Velit mollitia placeat qui et. Et et doloribus qui magni maxime. Deserunt beatae itaque dignissimos consequatur tempora saepe minima rerum.\n\nPerspiciatis perspiciatis et non voluptates qui. Sunt illum cum laborum et nihil sint. Ut quos quo atque et enim beatae rerum.\n\nMolestiae rerum reiciendis excepturi. Odio facilis eaque consequatur qui odit. Aut numquam architecto mollitia aut ea. Explicabo harum optio ducimus quia commodi voluptatibus.\n\nPossimus ut laboriosam dicta ea quam. Alias accusantium consequatur dolorem quia voluptatem. Voluptates sunt repellendus ducimus velit facere ut. Cum et accusantium maiores unde accusantium ut.', 'Assumenda perferendis dolorem et. Maiores doloribus molestias molestiae voluptatibus aut est. Hic rerum ut repudiandae ab sit omnis et ut.', 'Trenton Stiedemann DDS', 'published', 'http://www.bartoletti.biz/tempore-id-eos-exercitationem-nisi-consequatur-porro', '2011-10-30 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(30, 7, 2, 'Quaerat corrupti consequatur est aut distinctio.', 'quaerat-corrupti-consequatur-est-aut-distinctio', 'Asperiores et non totam commodi magni. Maiores excepturi deserunt earum in in necessitatibus et. Eveniet a ut numquam sunt.\n\nNam nihil ullam dolores soluta. Sit aut in voluptas aut aut ullam in. Rerum quia vel nihil facere eius.\n\nNihil atque quia neque dolorem et architecto magnam. Iste ratione blanditiis cupiditate.\n\nSequi voluptas sit culpa laboriosam sit est odio. Accusamus quis sed aut quia sapiente est.', 'Est qui voluptatum facere eius aut nobis. Qui quod tempore dignissimos blanditiis ullam. Quia natus ipsam voluptas nihil aut. Nam assumenda mollitia illo quaerat.', 'Dr. Marcia Marvin IV', 'published', 'http://www.reynolds.com/assumenda-veniam-expedita-et-quaerat', '1992-05-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(31, 8, NULL, 'Unde nostrum repellendus consequatur debitis ipsam quasi sed.', 'unde-nostrum-repellendus-consequatur-debitis-ipsam-quasi-sed', 'Natus accusantium voluptas optio quis fugit veritatis alias ducimus. Aut non unde eaque voluptatibus quam. Voluptas necessitatibus praesentium tempora sit dolorum.\n\nReprehenderit error voluptas a sit eligendi quibusdam. Quisquam eligendi eaque similique animi blanditiis sit. Dolorum voluptas corrupti aliquid autem.\n\nDebitis sequi enim recusandae. Rerum voluptas eveniet quia quas corporis optio magni perspiciatis. Non magni et nulla et. Hic ut et placeat accusantium et expedita magnam.\n\nQui et sint sequi et debitis. Voluptatibus animi incidunt provident velit inventore dolores et. Ducimus voluptatum quo odit similique unde corrupti magni nesciunt.', 'Officia nemo velit eos consequatur saepe. Voluptatem voluptates et eos reprehenderit velit. Non nemo magnam animi deserunt aut id asperiores. Molestiae iure iusto quam soluta.', 'Kaci Doyle', 'published', 'http://lowe.com/', '1986-03-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(32, 3, 4, 'Consectetur est expedita quis nisi.', 'consectetur-est-expedita-quis-nisi', 'Consequatur deleniti vero aut culpa a. Fugiat libero nobis sit ut atque eum tenetur. Est aut consequuntur deleniti. Distinctio vel culpa veniam sit.\n\nVitae voluptatum voluptatem nisi nulla sequi. Ut consequatur qui et suscipit. Facilis et assumenda ipsa. Tempora sequi suscipit exercitationem cupiditate laborum impedit.\n\nEa sed asperiores temporibus quaerat. Suscipit expedita praesentium blanditiis recusandae asperiores dolores. Libero impedit nesciunt quos minus reiciendis ut voluptatibus.\n\nVitae vero sed repellendus ipsa ipsam in. Est et quo deserunt et. Et rem qui laboriosam dolorum assumenda. Deserunt accusantium voluptas et quae animi.', 'Molestiae quod est ipsa aut unde inventore. Consequatur explicabo at odio doloremque nostrum minus maxime. Repudiandae qui voluptas dignissimos. Quo tempore sint praesentium ex.', 'Prof. Preston Kirlin', 'published', 'http://abbott.info/occaecati-dolor-sint-quos-illum-sed-alias', '1982-04-13 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(33, 7, 7, 'Quas reiciendis est saepe reiciendis.', 'quas-reiciendis-est-saepe-reiciendis', 'Molestiae consequatur harum eaque tenetur delectus ducimus neque. Dolorem consequatur quia numquam sed et voluptas. Laborum alias ut dolor et quasi corrupti rerum.\n\nExercitationem in in saepe velit minima alias. Quis est porro eius ut distinctio reprehenderit illum.\n\nNemo pariatur sint dolor deleniti molestias. Veritatis molestias voluptates eius assumenda quis fugiat.\n\nQuibusdam doloribus asperiores exercitationem. Consequuntur ut totam ut sed atque id minus. Omnis quisquam reprehenderit est. Quas nihil nam est aut omnis tempora. Asperiores quis quis est dolores.', 'Delectus velit exercitationem quam nihil quos aut. Sit sit libero amet qui temporibus ut non voluptas. Ducimus sed illum esse eum sapiente tenetur. Vitae mollitia illo aperiam distinctio sed qui.', 'Jarrett Schaden', 'published', 'http://www.will.info/et-distinctio-non-sunt-excepturi-aut-est.html', '2003-12-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(34, 5, 5, 'Consequatur ducimus ipsa ut vel dolore ea.', 'consequatur-ducimus-ipsa-ut-vel-dolore-ea', 'Sunt assumenda blanditiis qui. Aspernatur ut voluptas ab ut. Sunt reprehenderit repudiandae impedit officiis omnis dolor eligendi.\n\nRepudiandae ipsam ab sunt perferendis ea atque quibusdam. Omnis ut nobis ullam dolor. Et aut reiciendis laborum dolorem. Tempore qui quo quis sed maxime et.\n\nSuscipit assumenda velit dolorem harum sit. Impedit et quam voluptas eum. Sint in doloremque nisi qui ut.\n\nDicta sunt rem temporibus corporis omnis sint expedita. Quibusdam optio sit quae sed tempore quod corrupti. Consequatur earum voluptates maxime voluptatem distinctio sunt impedit. Alias laudantium animi incidunt qui voluptas et qui. Minima tempore et sunt accusamus aut.', 'Cumque neque dolorem quia et et. Numquam consequuntur et voluptatum laudantium. Dolor hic enim hic enim voluptatem in.', 'Sim Littel', 'published', 'https://www.marquardt.org/ullam-nobis-quaerat-et-nam', '1996-03-27 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(35, 2, NULL, 'Qui veritatis voluptatem vero quia rem inventore tempore.', 'qui-veritatis-voluptatem-vero-quia-rem-inventore-tempore', 'Non facere velit soluta odio iusto. Vel in vel sequi. Qui porro nisi aut voluptas. Pariatur officiis voluptas saepe.\n\nMolestiae ut sint esse laudantium et porro blanditiis. Corporis magnam est sequi tempore. Molestias et consequuntur alias occaecati et.\n\nMaiores et in porro quas et amet. Reprehenderit minima enim dolor quia necessitatibus est repellendus. A facilis quo amet illum officiis. Nisi rem deleniti ea et.\n\nOmnis nulla rerum iure rem. Aut dolore delectus iure odit ullam. Blanditiis odit aut repellat laudantium illo esse cumque. Ex dolor reiciendis qui odio ea et recusandae.', 'Facilis rerum voluptate nesciunt sint officia harum et. Ut et laboriosam qui repellat. Dolorum qui magnam occaecati vel dolores. Quo cumque vel quaerat pariatur libero.', 'Birdie Cartwright', 'published', 'https://rempel.info/aliquam-consequatur-aut-eveniet.html', '1972-02-18 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(36, 4, 7, 'Occaecati dicta blanditiis dolor voluptatem.', 'occaecati-dicta-blanditiis-dolor-voluptatem', 'Aut ut quaerat magni culpa debitis quod. Similique qui sit molestiae tempora magnam. Placeat fugiat a asperiores earum et a. Magnam aut non non amet delectus aperiam facere. Ut non vel officia soluta molestiae rerum.\n\nOdit dolores doloribus cupiditate repellendus similique iste deserunt. Est ut quam ut quod. Ad aut aspernatur eum vel voluptas non.\n\nUt repudiandae officia ex et mollitia corporis. Recusandae soluta qui et rerum accusamus distinctio. Itaque placeat nihil dicta voluptatem.\n\nExplicabo consequatur aliquid sequi ipsa suscipit. Dolores qui aperiam fuga consequatur. Repellendus quis laboriosam praesentium cum ipsum similique ut. Ut facere ipsa et et nihil aut.', 'Debitis officia saepe deserunt adipisci. Nostrum officiis nostrum cum a sunt quis. Sapiente qui ut et incidunt. Placeat consequatur asperiores impedit.', 'Shannon Koch PhD', 'published', 'http://www.wisoky.com/', '1977-11-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(37, 5, NULL, 'Cumque magnam rerum inventore.', 'cumque-magnam-rerum-inventore', 'Aut qui aliquid non dolorum aut velit. Dolor omnis impedit qui necessitatibus. Voluptas sit dolorem labore dolore possimus sit rerum ducimus.\n\nOmnis nulla tempora vitae error sed quibusdam non dolorem. Iste eligendi dolores neque voluptas. Et autem sunt eum doloremque est repudiandae. Ex accusamus ut sint et ad officiis.\n\nAut quia qui et eum fugit voluptatum. Earum itaque placeat itaque eveniet ea rerum. Voluptas qui quae qui asperiores sequi.\n\nEnim iusto voluptatem qui officia ipsum soluta. Quas voluptatem expedita hic exercitationem ea eligendi. Deleniti et perspiciatis veritatis odio. Fuga hic sint temporibus quis sit quia.', 'Et placeat repellendus architecto et ducimus corrupti. Cumque repudiandae non illum quo temporibus. Hic eaque iusto ullam asperiores.', 'Miss Gwen Smitham III', 'published', 'http://schaden.com/', '1996-02-08 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(38, 2, NULL, 'Iusto voluptatem est fugiat quas aperiam modi totam.', 'iusto-voluptatem-est-fugiat-quas-aperiam-modi-totam', 'Velit temporibus odit dolor voluptas nostrum officiis. Vitae earum placeat quo esse reprehenderit tenetur. Dolorem temporibus aut qui autem.\n\nIure rem rerum nam sequi. Eveniet soluta aut quibusdam. Distinctio et quae voluptatem omnis. Laborum sequi cum soluta ipsa ut.\n\nQui quis et veniam excepturi accusamus id. Voluptatem ex impedit minima. Porro accusantium dolorem at rerum a itaque repellendus.\n\nEst est cupiditate officia tempora molestias deserunt. Maiores harum voluptatibus ad ea. Sit praesentium vel ipsa voluptate. Porro inventore sapiente non ad qui.', 'Aut qui cum eum. Animi dolor voluptatem consequatur voluptatem aspernatur dolorum. Nulla quasi sit esse distinctio at. Quidem id exercitationem recusandae dolores ut qui dolorem.', 'Prof. Deanna Deckow', 'published', 'http://www.hermann.com/', '2015-07-27 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(39, 1, 6, 'Velit quasi odio asperiores mollitia vel.', 'velit-quasi-odio-asperiores-mollitia-vel', 'Aut nihil temporibus odit. Eos et cumque id ut aut. Omnis perferendis nam exercitationem atque et.\n\nAutem odit ut enim architecto architecto veniam. Laboriosam necessitatibus voluptas et rerum porro minus. Incidunt saepe recusandae excepturi fugit doloribus sit eum deleniti. Nihil sed voluptates est id.\n\nEt sunt modi placeat natus. Et quod sit tempore. Doloremque harum et culpa reprehenderit dignissimos repudiandae. Eveniet eos nam placeat voluptatem quia. Aliquam modi blanditiis quis voluptatum voluptatem et ut.\n\nDolores in perferendis laboriosam atque facilis et. Excepturi magni ut laborum commodi. Accusamus qui beatae qui odit dolorum consectetur. Harum reiciendis tempora dolorum ut similique.', 'Culpa veniam ducimus et libero perferendis. Voluptas rerum doloribus omnis iste est iste et. Reiciendis molestiae sed deleniti laudantium.', 'Mrs. Winona Larkin MD', 'published', 'http://lindgren.net/adipisci-vitae-consequatur-quia', '1970-02-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(40, 6, NULL, 'Est dolorem ab voluptates expedita aut.', 'est-dolorem-ab-voluptates-expedita-aut', 'Ut molestias in quia et ut et neque. Facere tempore quia praesentium facilis. Omnis incidunt autem magnam minima consequuntur et saepe. Sit sequi quasi eos placeat aut beatae.\n\nQuaerat fuga sunt accusantium praesentium labore rerum. Incidunt cumque voluptas deleniti tempore. Reprehenderit vel deserunt tempore porro sint. Ab molestiae eveniet voluptatem ex sapiente illo vitae.\n\nSequi ad itaque aut autem quod. Autem et tempore unde eum. Beatae velit voluptate optio dolore.\n\nNisi est ex est voluptas voluptatibus et nihil. Unde aut quis eius repellat maxime libero velit. Distinctio rerum alias consectetur delectus est. Repudiandae vel odio dolore a quis.', 'Vel quis earum hic architecto quis quo. Repellat maxime voluptate voluptas consequatur quia. Est nobis molestiae et voluptatem recusandae sed.', 'Alvina Hirthe', 'published', 'https://reichel.com/officia-non-perspiciatis-porro-expedita-odit.html', '1971-10-12 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(41, 4, 1, 'Repudiandae qui iusto aut enim rerum.', 'repudiandae-qui-iusto-aut-enim-rerum', 'Et iusto architecto hic. Sed necessitatibus culpa aut perferendis nobis laudantium nisi. Asperiores aperiam nulla et necessitatibus fugiat.\n\nNeque at aut nemo eius. Atque accusantium voluptates quibusdam accusantium consequatur voluptas. Aliquid error soluta sed aut.\n\nAccusamus quaerat molestiae quam iusto incidunt. Dolores velit tempore et eum quis. Cupiditate debitis labore quas ducimus autem. Quo eveniet inventore qui qui. Ut aperiam eius deleniti voluptatem necessitatibus iusto autem.\n\nDignissimos totam eum earum aut odio ut quos. Beatae recusandae voluptate tempore est dolore. Impedit nobis vitae provident minima et et adipisci rerum. Eius hic inventore eaque numquam.', 'Aspernatur tempore saepe magnam consequuntur et ea iure provident. Quae ratione corporis quod commodi et eum deserunt. Qui enim modi laborum accusantium omnis.', 'Luz VonRueden', 'published', 'http://www.reilly.info/inventore-aut-voluptate-velit-quia-unde-occaecati', '1998-09-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(42, 2, 7, 'Minus facere quia nisi.', 'minus-facere-quia-nisi', 'Porro quidem cumque beatae corrupti. Molestiae nobis natus alias. Nobis facilis expedita laudantium in sed recusandae.\n\nDolor pariatur nulla excepturi distinctio. Sed ut aliquam cupiditate officia eos. Ipsam sunt vel dolor quasi aperiam. Magnam dolores consequuntur quia esse omnis.\n\nDolorem quidem sed nesciunt recusandae soluta ut. Quidem porro reprehenderit iure sit consequatur et. Quisquam iure quibusdam minus.\n\nNobis natus qui a illo dolores ea. Omnis temporibus unde et et.', 'Velit dolore pariatur id sunt soluta amet. Earum iusto qui repudiandae voluptas. Sint sint repellendus accusantium atque iste in animi.', 'Brett Schmitt', 'published', 'http://www.greenfelder.com/omnis-quas-ex-ipsum-minima-ab-deleniti-dicta', '2004-06-24 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(43, 7, NULL, 'Aut explicabo quo deserunt mollitia quas minima optio ab.', 'aut-explicabo-quo-deserunt-mollitia-quas-minima-optio-ab', 'Iusto ipsum voluptas delectus autem quisquam delectus. Doloribus qui sint et delectus eos et magni. Eaque voluptatem aperiam enim non. Voluptatem numquam et eligendi numquam.\n\nBlanditiis cupiditate consequatur rerum dolor blanditiis eligendi. Possimus porro qui dolores et saepe ea itaque. Esse omnis quaerat sapiente ea et explicabo unde saepe.\n\nQui nostrum quia excepturi. Dolores libero quis ullam voluptas. Sunt quaerat itaque consectetur dolores. Et nobis ipsam voluptas qui debitis ullam quibusdam. Optio repellat in est amet repellat.\n\nDolores corporis delectus temporibus. Quia doloremque voluptatem aut odio. Delectus occaecati blanditiis veritatis fugiat. Cupiditate et reprehenderit in distinctio qui culpa. At voluptas iste fuga quis consequatur rerum.', 'Id omnis ut dolorem ullam corporis minus. Libero aspernatur delectus asperiores quia voluptatibus distinctio.', 'Hosea Wintheiser', 'published', 'http://www.sawayn.com/', '1987-12-06 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(44, 3, 5, 'Enim id recusandae voluptas voluptas occaecati magni.', 'enim-id-recusandae-voluptas-voluptas-occaecati-magni', 'Unde est rerum neque voluptatem odio. Rerum est maiores consectetur minus est. Sapiente aliquam quo quisquam ut animi. Sint nam accusantium voluptas rerum iusto. Officia provident explicabo et unde commodi numquam.\n\nAut velit corrupti et velit sit. Iusto mollitia est perspiciatis numquam. Aut earum odio suscipit expedita et distinctio non. Voluptas sapiente sunt esse commodi.\n\nCumque omnis recusandae sit vel. Voluptatem odit nihil porro et ad. Totam odit a non ipsum.\n\nEt repellendus eaque ratione quidem. Reiciendis commodi voluptas corrupti rerum laboriosam. Accusantium aspernatur est tenetur veritatis quia molestiae. Omnis cum ipsam voluptatem eligendi quod ab fugiat.', 'Nesciunt reprehenderit libero et. Distinctio molestiae suscipit est veritatis incidunt. Culpa doloremque molestias eveniet harum temporibus.', 'Jeffrey Rippin', 'published', 'http://www.schuster.com/', '1987-03-03 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(45, 8, 1, 'Delectus animi facere quibusdam est.', 'delectus-animi-facere-quibusdam-est', 'Consequatur mollitia ipsa vero excepturi assumenda quisquam magni nulla. Vero rem officiis molestiae molestiae. Perspiciatis asperiores voluptatem cum praesentium velit reiciendis.\n\nUt sint rem iure optio aut aliquid. Itaque ipsum dolor aut suscipit. Numquam reprehenderit voluptatem id quis rem.\n\nTotam aut sed sed vel officiis consequatur. Voluptatem velit suscipit nihil eos commodi labore enim. Asperiores optio provident consequuntur dolores velit ut quae cumque. Tenetur iste sequi sapiente aspernatur praesentium.\n\nOmnis assumenda reprehenderit harum aliquam voluptas excepturi optio. Amet nemo sint ad totam impedit magni aut tempora. Qui totam quos natus ea pariatur deleniti et aut.', 'Ut ipsa sunt repellat et voluptates. Molestiae voluptas consequatur ipsam id pariatur. Architecto nostrum et nihil cupiditate magni. Et maxime aut recusandae esse similique vitae.', 'Prof. Mateo Koss II', 'published', 'http://borer.net/cumque-ut-ducimus-tempora-fugiat-labore-repellat', '1981-06-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(46, 6, 2, 'Culpa perspiciatis sint numquam in.', 'culpa-perspiciatis-sint-numquam-in', 'Voluptatem occaecati sit ea eveniet. Sint minima omnis aut officia quia. Consequatur labore ea temporibus dolorum. Natus eos dicta minus eum fugiat optio illo.\n\nDignissimos qui repellat eius nulla ipsa quod voluptatem. Id sit harum minus qui at maiores aut. Aliquam et itaque occaecati iusto.\n\nQuos aut a magnam optio aliquid rerum nulla. Delectus tempore illum id debitis dolorum. Totam natus deserunt enim velit. Itaque consequatur saepe quas et.\n\nEt non voluptatibus sunt eligendi. Consectetur explicabo voluptas pariatur qui aliquid quidem unde.', 'Officiis aut vel suscipit ut at cum officiis. Omnis et eaque nobis laborum quis. Tenetur aliquam et nostrum et atque omnis.', 'Brent Ebert', 'published', 'http://www.walker.com/', '1990-03-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(47, 4, NULL, 'Eaque ad doloribus optio dolore sit alias.', 'eaque-ad-doloribus-optio-dolore-sit-alias', 'Aut esse dolor voluptatem culpa veniam in qui. Eos labore sint provident. Ullam quia dolorum nobis in. Non asperiores non adipisci ut labore.\n\nTempora totam sint fuga delectus et dolores cupiditate. Quia hic delectus mollitia quibusdam impedit ratione. Et ut quaerat repellendus corrupti incidunt eum accusantium. Sed quo minima at temporibus fugiat fugit. Ut facilis repudiandae enim et.\n\nDolore deleniti quibusdam sed voluptas nobis iusto sit. Ut nam sint aut eius error et aliquam. Beatae eligendi tenetur occaecati.\n\nOdio magnam cumque perferendis dolor modi tempore tempora enim. Dolore a earum beatae omnis voluptas velit dolor. Est maiores et maxime eligendi voluptas dolorum.', 'Omnis natus necessitatibus ex ea delectus. Assumenda consectetur quo nemo inventore.', 'Milton Kling', 'published', 'http://kertzmann.com/omnis-occaecati-officia-error-nulla-voluptatibus-adipisci-in', '2011-03-31 18:15:00', '2023-12-03 23:40:05', NULL, NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(48, 9, NULL, 'Neque voluptatibus cum non ipsa sunt aut ea.', 'neque-voluptatibus-cum-non-ipsa-sunt-aut-ea', 'Ea est officiis quisquam voluptatem labore architecto accusamus tempore. Consequatur unde et excepturi sit fugiat. Rerum aperiam voluptatem maiores veritatis. Dolorum deleniti magni rerum.\n\nEt aut ut debitis quis sint. Eum facilis provident esse iste. Exercitationem iusto vero tempore sint dignissimos reprehenderit autem. Amet recusandae laborum sint rem consequatur ab.\n\nQui qui et consequatur accusamus inventore explicabo. Vel sunt aut cupiditate doloremque enim. Qui adipisci possimus non id est. Velit voluptatum consequuntur nemo iste dolorem vitae eligendi.\n\nSunt et aut quia et. Reiciendis enim dolores quasi possimus voluptatem impedit. Eaque id vel vitae suscipit. Odio eius rerum mollitia dolore aliquid modi. Itaque eum eum rerum perspiciatis vitae ipsa.', 'Consequatur corrupti esse rerum vero. Soluta delectus incidunt iste perspiciatis iure reprehenderit. Esse iste sint doloribus ut. Consequatur reiciendis ea at in rerum quia.', 'Earnestine Gottlieb', 'published', 'http://www.wiza.org/aut-voluptas-perferendis-et-eius-magni-aut-possimus', '1970-06-06 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(49, 8, NULL, 'Quaerat aut dolores asperiores.', 'quaerat-aut-dolores-asperiores', 'Dignissimos ducimus et architecto. Commodi assumenda non voluptatibus perspiciatis voluptas. Et fuga natus totam rerum eum dolorem ad velit.\n\nEligendi dolor eos doloribus velit dolores dicta. Qui harum totam soluta nulla eaque iure blanditiis et. Quidem aspernatur non repellendus eveniet.\n\nMolestiae omnis sunt odio optio amet hic. Ab aut repellendus ad officiis nemo saepe omnis. Quae magnam vel debitis similique dolores facilis.\n\nAdipisci doloremque et quidem ex aliquid aut reprehenderit. Dolor autem cum quasi facilis eveniet est eum. Natus rerum et praesentium consequatur earum ut laborum. Eius aut ut doloremque nihil dolorem quis quibusdam.', 'Ut autem rerum dolorum nam. Voluptatem aperiam odio atque. Aliquid expedita sapiente et quaerat voluptas. Quae tenetur exercitationem voluptate quidem.', 'Nola Fisher', 'published', 'https://www.mccullough.org/sit-est-ipsa-ea-aspernatur-porro-non', '2016-01-22 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(50, 5, NULL, 'Ea aut repellendus tempore amet atque sunt.', 'ea-aut-repellendus-tempore-amet-atque-sunt', 'Nobis eligendi est id. Adipisci excepturi ut officiis. Quo beatae dolore ab voluptas consequatur.\n\nExpedita quidem quis at voluptatem ipsam facere aperiam. Corporis illo consequatur vero eveniet officia. Inventore voluptas praesentium voluptatem.\n\nA sint ut officiis pariatur rerum repudiandae. Corporis vel ut et ratione quia quis omnis. Eum consectetur veniam sed.\n\nMolestiae sequi nobis ut et assumenda. Autem quae ratione et nihil. Qui ut illo facilis quisquam. Dignissimos qui libero minus eum blanditiis ad similique. Fugiat doloremque eum voluptas enim non excepturi.', 'Est ut reiciendis molestiae repellendus cum aut recusandae. Aut aperiam voluptas vero eligendi aut ipsa. Deserunt vel est quo quibusdam est sed laudantium.', 'Hassan Miller III', 'published', 'http://www.kiehn.com/', '1986-08-05 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(51, 3, 6, 'Ipsum dolore esse et.', 'ipsum-dolore-esse-et', 'Nihil veniam voluptates molestiae impedit laborum. Officia ratione fuga temporibus. Aut esse placeat voluptas eum. Ea aut ut tempore nobis dolores autem et soluta.\n\nQuas tempora qui qui voluptatem vel id. Et eos voluptatem fuga sint. Qui nobis quia id animi enim blanditiis neque nostrum. Maiores recusandae consequatur vel autem sunt corrupti.\n\nPossimus voluptatem temporibus libero molestiae aut earum qui consequuntur. Omnis eligendi corporis sequi quisquam molestiae. Suscipit qui dolor eius sequi perferendis eveniet eos. Expedita deserunt soluta voluptatem eum non ut in.\n\nAmet quod impedit nesciunt soluta qui. Dicta est est beatae hic laboriosam quas nam. Dolores itaque pariatur natus facilis quod eius. Distinctio voluptatem aut optio natus assumenda. Nesciunt est amet quia.', 'Et aut ipsam qui in explicabo. Dolorum magni rerum illum exercitationem inventore. Sed quos ex esse eum quo molestias neque.', 'Tyrel Roberts', 'published', 'http://www.robel.com/voluptas-commodi-repudiandae-alias-quia-rerum-et-qui-debitis.html', '2004-11-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(52, 9, NULL, 'Facilis atque explicabo ipsum voluptatum ut enim nulla.', 'facilis-atque-explicabo-ipsum-voluptatum-ut-enim-nulla', 'Enim maxime animi consequuntur voluptatibus sequi quisquam. Sed quam exercitationem quibusdam voluptates. Maxime dignissimos cupiditate autem occaecati et accusantium. Ullam fuga repellat soluta corporis atque voluptas. Unde fugiat dolor ipsum.\n\nLaudantium dolorum dolores eos et voluptatem. Quasi fuga et expedita est suscipit. Vitae qui sapiente tempore quaerat modi dolorem.\n\nCommodi quam itaque nobis aperiam et quaerat quis. Explicabo rerum ipsum aut voluptatibus. Consequatur iste adipisci qui quia.\n\nQuaerat facilis at sint ab ullam dolores maxime. Iusto dolorum aut facilis excepturi. Quos aut expedita iste vel dolor aut maxime. Voluptatum amet velit repellat ex sequi.', 'Sit et illum ut error tenetur. Soluta inventore dolor in qui soluta in distinctio tempore. Et quasi ipsam est at. Molestias odio modi ut voluptatem sit ad. Est velit assumenda temporibus.', 'Josianne Yost', 'published', 'http://www.hane.biz/', '1988-01-05 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(53, 3, NULL, 'Ipsa et est maxime mollitia deleniti consectetur saepe.', 'ipsa-et-est-maxime-mollitia-deleniti-consectetur-saepe', 'Aut vero nostrum voluptate earum a et. Blanditiis numquam minus veritatis asperiores corrupti explicabo adipisci. Numquam quia vel sequi dolores cumque non. Dignissimos est odio nisi.\n\nIpsum eos facilis maiores quis sunt qui. Perferendis cumque et distinctio aspernatur dolor maiores. Magnam voluptatem quidem vel facere facilis dolores modi consectetur. Corrupti blanditiis dolorum ut qui qui optio repellendus et.\n\nVoluptatum in et molestiae est esse repellendus laborum. Dicta voluptate beatae qui cumque doloremque vero atque autem. Rerum explicabo rerum et debitis reprehenderit. Rem blanditiis occaecati itaque ex consequatur recusandae inventore a.\n\nQui necessitatibus magnam sint ducimus. Enim quas numquam eos aut exercitationem in. Et illo tenetur eum quibusdam ea numquam distinctio. Excepturi aut quia excepturi dolores et quidem.', 'Tenetur ut et veritatis voluptas. Ducimus corporis et debitis vitae qui dolorem corporis nemo. Accusamus culpa tenetur suscipit recusandae voluptas aliquid. Aliquam aliquid eos enim eos natus eos.', 'Emelia Weissnat', 'published', 'https://bartoletti.org/fuga-dolor-facilis-veniam-et-dicta-eius-praesentium.html', '1991-07-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(54, 9, NULL, 'Nihil non sunt et fugit fugiat velit accusantium voluptatem.', 'nihil-non-sunt-et-fugit-fugiat-velit-accusantium-voluptatem', 'Delectus labore aliquam nihil ut. Dolor aut et quisquam voluptas qui ratione.\n\nNumquam expedita alias blanditiis et molestiae. Ut reprehenderit quia explicabo omnis sit consectetur velit. Voluptas repellat corrupti dicta quod alias sapiente.\n\nUt officia quam deserunt cum voluptates ea corporis labore. Ullam facilis eos temporibus dignissimos nulla. Ea perferendis consequatur totam at quibusdam. Ab pariatur eveniet possimus est non animi repellat reiciendis.\n\nIllo commodi aspernatur et suscipit sed voluptas aliquid labore. Aut quaerat dolorem eos adipisci laboriosam modi. Omnis veniam aut voluptatem molestiae quo. Id perspiciatis aut omnis in.', 'Repudiandae et quidem autem placeat enim expedita. Eum nihil illo delectus suscipit. Quod repellendus amet iure et odit doloribus.', 'Armand Dicki', 'published', 'http://graham.net/quia-magni-inventore-corrupti-quod-itaque', '1986-04-16 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(55, 7, 3, 'Voluptatibus cum ut asperiores fuga ut tempora unde.', 'voluptatibus-cum-ut-asperiores-fuga-ut-tempora-unde', 'Quia id neque et. A odit sint velit molestias suscipit suscipit atque occaecati. Maxime et doloremque autem.\n\nNobis rerum dolore quis adipisci consequatur corporis. Vel esse et voluptas. Placeat nobis quibusdam veniam sunt qui sit et ad.\n\nEnim beatae debitis soluta vel repellendus. Fugit exercitationem animi aliquid dicta. Expedita nemo sit nesciunt et sequi autem qui. Consequatur ea aut possimus veritatis voluptatem similique quaerat.\n\nFugit aut sit perspiciatis velit fugiat quia. Ipsa repellat et at aut quae. Numquam eaque mollitia laborum culpa quia nihil. Eaque dolor dolore ut amet aliquid et dolor enim.', 'Architecto odio aliquid dolorum illum. Eius aut nulla corporis rerum repellat enim. Porro quo dolor quibusdam consectetur delectus.', 'Eve Jerde', 'published', 'http://oberbrunner.org/tenetur-voluptas-enim-aut-ut-ut-eligendi-laudantium.html', '1974-12-18 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(56, 4, 7, 'Eos sapiente provident accusantium est et voluptate ex fugit.', 'eos-sapiente-provident-accusantium-est-et-voluptate-ex-fugit', 'Nostrum cum unde molestias non sit. Nihil esse iusto molestiae corrupti. Similique repellat est odio.\n\nNumquam magnam velit id cumque. Pariatur voluptatem voluptates dolorum id velit consequatur. Ut ut aliquam laudantium exercitationem voluptatum odio quisquam sed. Inventore error fugiat veritatis suscipit et et ex. Sint modi aliquam aut quis quas voluptas consectetur.\n\nNihil odio beatae qui delectus. Quo fugiat dolore tempora corporis. Aut dignissimos et ipsum amet. Velit excepturi alias ex temporibus consectetur.\n\nUt consectetur eos voluptas est aut. Consectetur exercitationem occaecati ut provident.', 'Iste iusto maiores quo quia sed distinctio molestias. Qui ex laborum omnis quo. Aperiam voluptates praesentium officiis. Et earum occaecati autem voluptatem velit dolor aspernatur.', 'Rossie Dach', 'published', 'http://klein.biz/ipsum-nostrum-est-autem-explicabo-animi-eveniet', '1985-01-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(57, 1, NULL, 'Commodi et mollitia nihil qui molestiae modi quo.', 'commodi-et-mollitia-nihil-qui-molestiae-modi-quo', 'Iste iure mollitia minus tenetur repellat maiores. Dolor et molestiae rerum beatae ut quam sed. Nesciunt dolorem sequi voluptatem et et.\n\nEsse aut sunt quasi. Ipsa sunt dolorem omnis pariatur. Quia accusamus consequuntur sint inventore voluptatibus ea odio. Voluptate dolorum ad dolor adipisci aspernatur eius voluptas.\n\nNon maiores qui expedita qui. Occaecati illo molestiae impedit vel reprehenderit commodi debitis facilis. Maiores eaque voluptatem voluptate. Aut quis rem aut excepturi in dolor ex.\n\nLaboriosam voluptas vero rerum rem quae et distinctio. Fuga vel aut natus et tempora nostrum. Velit rerum ex praesentium odio ad qui non.', 'Omnis saepe iure aspernatur. Repellat debitis soluta eaque quo ut. Et perferendis officia modi velit.', 'Keely Lebsack PhD', 'published', 'http://grady.com/dolore-molestias-rerum-consequatur-sit-enim-excepturi-tenetur', '1997-02-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(58, 9, NULL, 'Voluptatem id magnam quam ipsam.', 'voluptatem-id-magnam-quam-ipsam', 'Porro sed rerum voluptas cum eos sint ipsum harum. Dolorum placeat magnam voluptatibus veniam aut. In veritatis unde dolorum reprehenderit. Magnam et voluptatem non molestiae occaecati quam veritatis.\n\nEst laboriosam vero porro numquam veritatis. Placeat occaecati facilis nulla illum. Voluptatem cumque non aut ad et exercitationem ipsum. Ipsam vitae vel assumenda maiores.\n\nAutem velit velit quidem ut aperiam quam excepturi. Sed sit amet at exercitationem aut ut earum. Tempore voluptatum ut nostrum id reiciendis. Expedita a voluptas deserunt ipsum. Corrupti doloremque praesentium laudantium atque asperiores architecto aut.\n\nNecessitatibus qui sint quia explicabo nobis error eius explicabo. Officia aut laudantium ipsa nemo recusandae. Officia atque voluptatem similique voluptates blanditiis.', 'Et voluptatem quo voluptates delectus ut ipsa. Voluptatem possimus voluptas molestiae illum perferendis quod. Aut voluptas officiis in quibusdam nam sint. Rem et quia atque velit culpa accusamus.', 'Dr. Barton Rohan II', 'published', 'http://www.doyle.com/iste-laudantium-id-alias-molestiae.html', '1971-04-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(59, 4, 4, 'Veniam quasi et iste consequatur voluptatem.', 'veniam-quasi-et-iste-consequatur-voluptatem', 'Et in ducimus voluptatem sit ipsam saepe autem. Atque fugit omnis doloremque. Debitis consequatur voluptatibus ut et. Mollitia aut et temporibus dicta incidunt molestiae est qui.\n\nSapiente at voluptates consequatur nemo. Vel doloribus expedita rerum doloribus eaque ab corporis. Sed est suscipit corrupti nam. Velit perferendis sed fugit qui totam et amet.\n\nCumque at eos dicta deleniti dolor earum aut. Delectus ullam nemo aut perferendis rerum explicabo omnis ducimus. Sunt provident quod commodi nihil.\n\nQuia voluptatum rerum ipsa quod veritatis rerum necessitatibus. Ut id magnam exercitationem ipsum adipisci quia. Velit qui et voluptatibus sit sit.', 'Omnis nesciunt itaque aut voluptatibus omnis eligendi tenetur. Aut officia voluptate quasi. Cum repellat accusantium pariatur provident sunt cupiditate. Officia possimus excepturi recusandae aperiam.', 'Monique Pacocha', 'published', 'https://www.rodriguez.com/fugit-quia-ipsa-maxime', '1980-04-24 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(60, 8, 1, 'Veniam nemo nesciunt quod hic reiciendis sed aut.', 'veniam-nemo-nesciunt-quod-hic-reiciendis-sed-aut', 'Dolorem recusandae omnis molestias id quam sit. Voluptatibus laboriosam sit ut assumenda nihil pariatur. Maxime repellat sunt voluptas eligendi itaque eos commodi. Velit et eos ut voluptatum.\n\nUnde quidem odit earum assumenda. Beatae omnis quia odit nulla nihil et in illo. Nam ipsum nostrum saepe et.\n\nEt odio dignissimos ut eos sapiente maiores et autem. Et ipsa ea amet rem sint esse. Aut et optio facilis minus nostrum et eius.\n\nNemo corporis esse ipsa inventore accusantium numquam. Quidem eos laudantium dolor reiciendis. Quos repellendus dolorum esse consectetur.', 'Aut qui mollitia voluptas voluptatem iste unde. Dolor est qui sit dolores est ducimus in eos.', 'Keshawn Hills Sr.', 'published', 'http://feest.info/vero-aliquid-placeat-saepe-qui', '1986-02-03 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(61, 5, 2, 'Eveniet facilis ducimus omnis perferendis sint impedit.', 'eveniet-facilis-ducimus-omnis-perferendis-sint-impedit', 'Explicabo quis deserunt eum quod aliquam quia voluptas. Voluptatem dolorem at excepturi velit. Non cupiditate non voluptatem illo sit culpa unde.\n\nRepellendus quia sint sed vel. Dolor ea enim ut placeat laudantium asperiores voluptas ratione. Voluptas soluta voluptates quia est voluptatem nisi eum nihil. Molestias provident maiores corrupti magnam.\n\nAssumenda tempora explicabo minima sequi odit omnis. Cumque et ut voluptates ullam earum. Odit iusto et atque hic aspernatur ex et sit. Qui autem repellat accusamus.\n\nDolores mollitia porro commodi esse. Blanditiis et accusamus molestiae repudiandae est. Totam et doloribus autem ut voluptates pariatur qui ut.', 'Sint quis exercitationem ipsum id molestiae. Nemo ex corporis amet. Illum maxime deserunt commodi corporis a dignissimos. Assumenda maxime labore et non.', 'Elmer Cartwright', 'published', 'http://tromp.org/recusandae-modi-quibusdam-perspiciatis-quos-iste-tempore-ut', '1991-02-08 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(62, 8, 2, 'Libero explicabo quis et eum minima provident provident.', 'libero-explicabo-quis-et-eum-minima-provident-provident', 'Neque placeat voluptates unde assumenda. Expedita eaque qui sunt eum rerum deserunt vero. Quae quis voluptates dolor sint occaecati.\n\nTempore dignissimos non in. Id quas accusantium qui id. Omnis tempora quo rerum laudantium dolores ipsum.\n\nDolor voluptas soluta alias. Quis quo dignissimos dignissimos perspiciatis vitae. Non ut eos nam hic cumque. Assumenda saepe sed doloremque vel vitae quisquam nulla.\n\nSed corporis non deserunt ex doloribus. Autem quo enim ullam praesentium neque nobis incidunt. Consequatur iste eos vel doloremque. Ea magnam est sint occaecati.', 'Minus ut accusamus modi in non tempora. Cupiditate ipsa aut expedita laudantium. Sit enim quisquam minus consequuntur error.', 'Breanna Bartell', 'published', 'https://towne.com/illum-quo-quia-sunt-similique-quo-assumenda-saepe.html', '2010-03-22 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(63, 5, 4, 'Illo est incidunt rerum explicabo et hic.', 'illo-est-incidunt-rerum-explicabo-et-hic', 'Rerum numquam dolores qui non sint. Illum impedit iste exercitationem laudantium minus unde.\n\nLaborum culpa ut adipisci. Et quam iusto cumque voluptas sint ipsa et. Voluptatem assumenda vel magni mollitia perferendis totam. Molestiae aspernatur id sit ad itaque harum quo.\n\nAssumenda aut corporis harum sunt omnis aliquid facere. Molestias ut ea aut doloribus dolorem repellendus.\n\nLaboriosam tempore voluptas amet illum voluptas expedita error. Quo eaque ex consequatur et repellat minus fuga.', 'Debitis quia odit et. Excepturi atque est iure in ullam. Omnis omnis pariatur pariatur fugit velit.', 'Santiago Dickens V', 'published', 'http://www.gusikowski.com/voluptates-architecto-laudantium-facere-dolorem-qui.html', '1984-08-19 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(64, 6, 6, 'Exercitationem enim necessitatibus molestiae qui.', 'exercitationem-enim-necessitatibus-molestiae-qui', 'Nam perspiciatis voluptatem eum qui. Ut labore necessitatibus consequatur eaque corrupti. Enim impedit enim voluptatibus et. Expedita inventore quae sed natus dignissimos adipisci.\n\nEius placeat voluptate quia nihil quo esse voluptas. Soluta perspiciatis magnam atque sed ad eius omnis magni. Minus aut corporis qui eligendi facere illum dolor libero.\n\nQuo esse nam voluptatum ea. Harum adipisci rem consequatur neque rem at molestiae ipsam. Sed incidunt et officiis id ut est nesciunt quia. Quisquam quidem ea et eum est.\n\nOptio nihil est et odio aliquid voluptatem. Eos dolor in aspernatur voluptatem hic officia. Et repellat omnis quo praesentium aspernatur. Tenetur in atque mollitia id.', 'Adipisci dolor dolor reiciendis unde nulla eum. Dicta doloremque eius qui sint. Incidunt eos cum quaerat est.', 'Kaelyn Reynolds', 'published', 'http://www.maggio.com/suscipit-et-et-quia-sunt-eaque', '2016-09-20 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(65, 5, 2, 'Est quia unde dignissimos accusantium repudiandae inventore.', 'est-quia-unde-dignissimos-accusantium-repudiandae-inventore', 'Voluptates rerum sunt ab eum. Minima delectus quam id fugit. Quae rerum minima itaque voluptatibus iusto autem rerum. Nihil nihil qui voluptatem placeat.\n\nIste ut id et consequatur. Quia et inventore blanditiis sit. Saepe voluptatibus inventore eos autem qui voluptatum sint quas.\n\nSequi dolorem fuga molestiae perferendis. Nobis veritatis est mollitia dolorum tempore nostrum molestias. Rerum veniam est consectetur et tempora corrupti. Dolorem rerum quis animi perferendis et. Vel sequi quis qui autem necessitatibus nostrum iusto rem.\n\nPraesentium vel quis quia quasi. Ullam omnis corporis commodi voluptatibus sed aut corporis. Velit suscipit et id odit eius veniam. Veritatis magni ex ut enim voluptatem pariatur.', 'Et autem aut ut veritatis fuga cum in. Eos quis laboriosam id qui iure reiciendis praesentium quam. Perspiciatis est inventore sit est est. Tenetur corporis non consectetur omnis soluta voluptatibus.', 'Rafaela Kunde', 'published', 'http://www.smith.org/', '1983-01-18 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(66, 9, NULL, 'Reprehenderit distinctio quos molestiae iusto repellat qui exercitationem.', 'reprehenderit-distinctio-quos-molestiae-iusto-repellat-qui-exercitationem', 'Accusantium est voluptatem eum qui. Nisi dolores et nisi fugiat dolor delectus. Quia nam quo quidem rerum dolorum. Quibusdam sunt et omnis omnis aliquid asperiores.\n\nUllam earum dolorem ut necessitatibus iste. Sint alias impedit quae. Magni aut aliquam officiis sunt ut.\n\nExplicabo et vel autem earum vitae. Aut excepturi dicta temporibus dolorem aspernatur et. Ut ad aut non. Similique aliquam aperiam quos explicabo.\n\nTempora incidunt molestias ratione ex rem rerum porro. Beatae quia ipsa cum repellendus. Quidem et dolor voluptas veniam cupiditate qui rem. Unde ut sunt expedita qui quia nisi quod.', 'Ut quaerat nihil vero inventore recusandae sint reprehenderit ipsum. Eum in voluptatem aut rerum veritatis nulla ullam est. Id voluptatibus quasi velit tempora. Delectus eum saepe pariatur libero id.', 'Kelsie Mills MD', 'published', 'http://prohaska.com/', '1991-09-24 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(67, 7, 6, 'Sunt dolorem sapiente illum non et ea.', 'sunt-dolorem-sapiente-illum-non-et-ea', 'Soluta velit vero nihil quis neque quo voluptas in. Voluptatem provident ab repellat eos deserunt nobis asperiores asperiores. Rerum ut eum corporis aut placeat dolor autem. Molestiae eligendi voluptate pariatur fugiat neque doloremque porro.\n\nNemo dicta nihil aliquid soluta possimus accusantium sequi deleniti. Velit vel veritatis voluptatem nemo. Voluptatum exercitationem sapiente veniam a consequuntur voluptate unde.\n\nCulpa vel voluptatem nihil vitae ut incidunt velit. Alias est quos esse esse quae. Molestiae modi eos voluptates ipsam sapiente dicta.\n\nOmnis et et sit minima voluptates. Ex ipsum dolorem dignissimos iure laborum aspernatur. Voluptatem aliquam libero temporibus consequatur.', 'Mollitia et quisquam id quaerat quod libero ut. Qui voluptas quia quis similique. Vel quo sapiente aut commodi.', 'Dr. Moises Herzog MD', 'published', 'https://mohr.com/necessitatibus-deserunt-esse-quibusdam-quis-quo-natus-neque.html', '2006-06-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(68, 8, 7, 'Vel nesciunt aut porro non esse doloribus.', 'vel-nesciunt-aut-porro-non-esse-doloribus', 'Unde natus minima similique quae enim ut minima velit. Et totam nostrum ut. Odit enim perferendis atque autem nostrum vitae. Maxime voluptatem voluptas aut aut provident.\n\nLaboriosam architecto aliquid ducimus commodi sunt possimus. Sit cupiditate enim sapiente possimus. Magni adipisci voluptatum sapiente quidem.\n\nAmet dicta soluta saepe assumenda. Ut sint repellat sequi deleniti dicta maiores cupiditate.\n\nTempore aut soluta id. Aliquam quos nihil non consequatur nulla dolorum. Ut cumque voluptatibus ducimus qui ratione est cupiditate laudantium. Et et magni consequatur impedit.', 'Quasi eos corporis nam praesentium eius. Qui molestias provident quo sit error. Nemo ullam optio deleniti in dignissimos facilis voluptatem eveniet.', 'Malachi Beatty', 'published', 'http://www.kessler.com/dolor-et-ea-tempore-et-sit-accusamus.html', '1989-09-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(69, 3, 2, 'Non quisquam quia voluptas sunt.', 'non-quisquam-quia-voluptas-sunt', 'Ad ut non quia sequi labore. Dicta sunt facere et maxime ea consequatur. Impedit dicta quia voluptas. Autem iure dolores assumenda aut et ut. Sit in non voluptatem quaerat vel facilis ad.\n\nOfficia hic commodi quidem qui natus. Quia debitis non est esse omnis illo velit. Omnis vel eos amet eum enim blanditiis laboriosam at.\n\nIncidunt id autem ut explicabo placeat iure minus. Libero modi aut ex dicta. Distinctio expedita voluptatibus et deserunt molestiae.\n\nTempora quos sint sit ullam maiores consequatur corporis. Hic repudiandae dolores blanditiis praesentium aut. Ipsa dolorem eos facere et.', 'Consequuntur nostrum incidunt consectetur quia neque ea aliquam. Reprehenderit vero molestias omnis sed eum. Id ratione quis mollitia inventore alias consequuntur nesciunt.', 'Jefferey Bode', 'published', 'https://www.medhurst.com/consequatur-quibusdam-doloremque-placeat-illo-voluptas-quia-perferendis', '2012-12-10 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(70, 3, NULL, 'Nostrum similique pariatur est ab aperiam.', 'nostrum-similique-pariatur-est-ab-aperiam', 'Fugiat sunt dolore sit vitae. Sapiente qui rem provident et nihil dolorem. Aliquam voluptatem tenetur ipsa atque sint aut aperiam.\n\nExcepturi aperiam eum tempore et omnis. Qui alias delectus voluptatem laborum alias voluptatem. Et cum nesciunt temporibus perferendis repellendus. Et quaerat quidem est occaecati in omnis.\n\nOdit voluptas necessitatibus consequatur soluta dolores sed. Eius doloribus cupiditate possimus.\n\nSuscipit laboriosam maiores consequatur sit. Deleniti distinctio maiores neque. Beatae laboriosam sed qui eos voluptatem error animi.', 'Et qui laboriosam sunt possimus nesciunt explicabo ducimus. Perspiciatis quos ipsum ut asperiores recusandae.', 'Mr. Cicero Jaskolski MD', 'published', 'http://jaskolski.com/', '1974-05-28 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(71, 2, 3, 'Quasi nostrum voluptatem saepe totam sed iusto fugit.', 'quasi-nostrum-voluptatem-saepe-totam-sed-iusto-fugit', 'Soluta distinctio quia rerum suscipit natus quos qui. Ullam id autem magnam ab quaerat illo. Deleniti amet ratione quia voluptatibus minima iste.\n\nConsequuntur est porro qui qui. Vel nihil numquam quo sapiente nihil. Ipsa vel molestiae quis quasi.\n\nMinima rerum enim consectetur sit. Laborum in aliquam quibusdam voluptas iure. Placeat eligendi harum voluptates.\n\nSit reiciendis nam dolorem esse tempore repellendus voluptatum. Aut voluptas et sed vitae et. Et mollitia unde qui reiciendis necessitatibus consectetur esse. Maiores quaerat reiciendis aut et.', 'Fuga maiores sit aut. Ut atque earum ut quis odit nihil. Illo aut reiciendis voluptatem consequatur labore labore.', 'Sylvia Stark', 'published', 'http://www.trantow.org/dolor-omnis-accusamus-magnam-vel-nostrum-sed-ut-totam', '1970-06-28 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(72, 4, 2, 'Maiores vitae fugit rerum quam necessitatibus nulla dignissimos.', 'maiores-vitae-fugit-rerum-quam-necessitatibus-nulla-dignissimos', 'Ut quam tenetur voluptatibus quia molestiae. Accusantium quia qui alias exercitationem alias. Sit non minima quo sed.\n\nSit non laboriosam vitae in aperiam quo pariatur. Eius ea omnis consequuntur quam veniam.\n\nAccusantium impedit voluptatum eveniet qui sit non. Sed nobis omnis quae et quisquam eveniet corporis ducimus. Soluta error est dolor inventore amet atque praesentium. Non minus laudantium placeat earum sint quis molestias.\n\nHic qui eveniet sunt porro et. Accusamus recusandae praesentium et assumenda facere dolores. Similique qui perspiciatis quia maxime qui. Et veniam ut architecto fugit aut sunt nostrum.', 'Deleniti voluptate sunt consequatur ullam et. Dignissimos sit quia et dignissimos animi. Impedit rem autem voluptas aut error provident nemo. Omnis voluptas iure dolor ut laboriosam nobis.', 'Heloise Koch', 'published', 'http://hayes.com/unde-amet-vero-eaque-rem.html', '1975-10-29 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(73, 6, 6, 'Quam a consequatur consequuntur suscipit non ut sapiente.', 'quam-a-consequatur-consequuntur-suscipit-non-ut-sapiente', 'Vel libero quia dolores corporis libero sed. Omnis sed aperiam vitae consequuntur pariatur incidunt. Itaque explicabo non aperiam pariatur quas ullam.\n\nIn qui eos repellendus doloremque et. Ut ipsum magnam ipsum ea sequi et est. Sapiente blanditiis iure nam esse. Qui earum dolores corporis sit et quo.\n\nPlaceat enim nesciunt iure debitis. Et eligendi sint minus. Molestiae dolorem cupiditate ipsam assumenda. Consequatur neque et quod et suscipit a.\n\nSed repudiandae aut voluptas possimus laboriosam perferendis fugiat. Perspiciatis eligendi qui odit qui quas veritatis rerum. Vero modi quam molestiae aut et. Voluptate tempore animi doloremque pariatur rerum.', 'Dolorum sed aut doloribus sed. Excepturi harum voluptates esse id natus sapiente. Temporibus magni ex error sint. Nam et et odit voluptatibus deleniti consectetur laboriosam.', 'Dandre Marks', 'published', 'http://www.raynor.net/', '2001-05-02 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(74, 2, 6, 'Molestiae maiores quia doloremque cupiditate odio quam ex.', 'molestiae-maiores-quia-doloremque-cupiditate-odio-quam-ex', 'Voluptatem molestiae rerum iste numquam enim. Repellat et aut non enim fugit vel. Quia modi provident rerum voluptas sit ea ut.\n\nCulpa qui est eum incidunt. Aliquam eum ipsum porro repellendus iure id laudantium. Eveniet totam cupiditate dolorum saepe fuga.\n\nExpedita officia aliquam minima voluptate ducimus nihil sit aliquam. Soluta saepe voluptatibus nihil nemo rem. Enim pariatur placeat laudantium molestias quos ad accusantium. Fuga et eius sequi.\n\nPraesentium fugit consequatur nostrum vero corrupti rem voluptatem eos. Iusto quo incidunt ut officia veritatis adipisci. Ad qui et provident saepe aliquam nulla. Quia aspernatur voluptatem nisi unde quam et deserunt recusandae.', 'Iste ex accusantium corporis quia nobis illum cupiditate cumque. Et animi dignissimos commodi ea quia rerum. Ea nobis neque quo.', 'Roy Bogisich', 'published', 'http://stracke.com/cupiditate-ipsam-nostrum-ut-ut', '1987-08-22 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(75, 1, 1, 'Deserunt asperiores voluptatibus consequuntur molestiae aut labore aut.', 'deserunt-asperiores-voluptatibus-consequuntur-molestiae-aut-labore-aut', 'Ullam quia quo delectus et consequuntur vitae eum. Est quo illum eius. Dolorem delectus aliquid ut expedita temporibus minima rerum.\n\nDolorem tempora rerum quas esse vel ut aut. Doloribus ut magni et optio at expedita necessitatibus. Omnis ullam incidunt ducimus suscipit.\n\nQuia aut veritatis molestiae est adipisci. Ipsum rerum neque omnis deleniti rem. Sapiente molestiae non omnis dolores est modi quia nulla.\n\nRem repellat aut quam. Ut vel nam et saepe vel excepturi. Earum quaerat et ut numquam.', 'Quidem consequuntur enim molestias ab. Veniam ea ab dolor aut ea et. Et eligendi dignissimos est praesentium corrupti totam.', 'Ms. Kaia Stoltenberg', 'published', 'http://www.schroeder.biz/', '2022-11-25 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(76, 3, NULL, 'Iusto et ex rerum nam.', 'iusto-et-ex-rerum-nam', 'Commodi iure repellendus nostrum qui ratione ut dolorum quaerat. Repellendus ullam exercitationem cum consequuntur sapiente. Dignissimos rerum id dolor. Voluptas ipsam esse impedit similique.\n\nImpedit non ex omnis totam sunt modi aliquid. Nihil omnis corporis est itaque. Numquam itaque excepturi commodi quidem quis delectus ut tempore.\n\nCommodi amet nemo soluta enim ut architecto similique. Veritatis harum consequatur voluptas inventore aut consequatur.\n\nQuia eveniet voluptatum veniam doloremque quia tenetur. Ipsum aliquid cum quas inventore. Occaecati omnis doloremque ex autem esse est temporibus. Quibusdam cum aut impedit unde reiciendis perferendis.', 'Est corporis aut et impedit reprehenderit sapiente facere sed. Earum esse ut aut quibusdam qui repudiandae. Dicta aut nisi et temporibus. Dolore amet explicabo qui eligendi sit neque.', 'Kacey Dare', 'published', 'http://metz.biz/ex-suscipit-maxime-ipsum-ut', '2006-09-16 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(77, 1, NULL, 'Ipsam laborum est delectus aspernatur praesentium quisquam esse.', 'ipsam-laborum-est-delectus-aspernatur-praesentium-quisquam-esse', 'Rerum eius voluptatibus fugit unde non officia possimus. Quo ut perspiciatis ex explicabo dolore consequatur perspiciatis. Alias itaque quaerat dolorem debitis soluta.\n\nOdit vitae dolorem laudantium voluptas impedit dolorem. Aut pariatur architecto quo. Placeat distinctio perferendis explicabo similique mollitia ratione illo.\n\nAutem molestiae quisquam sint impedit. Vel cum sed similique illum sunt. Quo aut illo consequatur et.\n\nConsequatur iure est illum eaque doloremque quod. Nam harum vero facere laudantium animi quia eligendi quibusdam. Est cum omnis similique explicabo quo in ad fugit.', 'Enim dicta minima tempore quia aliquam optio totam. Et eum laboriosam sit nulla voluptas. Sequi odit veritatis porro corrupti aliquid earum sit ut.', 'Prof. Christopher Tillman V', 'published', 'http://skiles.com/adipisci-vero-ad-et-adipisci-eum-qui-odit-minima', '2009-11-04 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(78, 3, 6, 'Nihil et facere doloribus ab consequatur similique.', 'nihil-et-facere-doloribus-ab-consequatur-similique', 'Sint eaque non dignissimos sequi nihil aut. Quaerat laudantium temporibus nesciunt veritatis aut. Quas tenetur et voluptatum et. Tenetur error rem porro eius.\n\nIpsa quia et eligendi placeat cupiditate. Voluptatem excepturi occaecati natus quidem eum vitae magni. Modi nisi tenetur temporibus eligendi voluptatem aut nostrum. Velit eos et atque et repellendus quia.\n\nQuia assumenda dolorem laboriosam harum. Excepturi aliquam ab sit quod. Eaque tempora aspernatur quo qui et quae. Delectus qui fuga alias est provident repellendus.\n\nTenetur unde libero exercitationem sit suscipit voluptatibus iure. Qui exercitationem libero ipsa quibusdam optio qui ut. Sint architecto quis illum in nisi.', 'Laudantium rem enim porro fugit earum. Dolor magni occaecati quasi suscipit qui quod. Repellat assumenda provident aperiam consequatur et consequatur voluptas.', 'Curt Mayer V', 'published', 'http://hackett.info/', '2003-06-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(79, 7, NULL, 'Nam rerum neque laudantium adipisci.', 'nam-rerum-neque-laudantium-adipisci', 'Suscipit sit eos blanditiis et fugiat quod sunt. Commodi quia ut maiores qui ut sint. Omnis consequatur est ut aperiam rerum nesciunt.\n\nAutem aut voluptatem qui quasi a magnam assumenda optio. Facilis repellat quia consequatur illo esse. Expedita consequatur voluptatem fuga cumque minus omnis ipsum.\n\nRepellat dicta velit iure amet provident. Quia repudiandae qui tenetur suscipit rerum vitae eos. Veniam labore voluptas vel animi perspiciatis rerum voluptas. Unde illo voluptatem error. Aut totam cupiditate asperiores in dolorem excepturi ut.\n\nPariatur laudantium nisi quisquam commodi dolor et. Sit quis sed molestias nisi nihil consequatur. Alias vel aut enim.', 'Non sint quis molestiae ut laudantium est beatae. Possimus voluptates sed corrupti dolorem illo. Praesentium eaque rem nemo. Repudiandae porro libero modi non sapiente.', 'Eudora VonRueden DVM', 'published', 'http://kautzer.com/a-qui-enim-facilis-aut-fugit-et', '2001-09-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(80, 1, NULL, 'Ab tempore et magnam et quam perferendis quo.', 'ab-tempore-et-magnam-et-quam-perferendis-quo', 'Autem et quos explicabo et quod. Vero dolorem sint quae soluta beatae. Perspiciatis modi minima delectus excepturi.\n\nPlaceat et illum eveniet adipisci laborum. Ut eos minima reprehenderit harum aperiam soluta.\n\nFuga vel laudantium sed consequatur ab deserunt accusantium blanditiis. Quo quas unde soluta. Consequatur id occaecati officiis aliquid eius.\n\nDolor sit et ducimus quo temporibus eius. Sed nostrum incidunt consequatur odit provident est vel illum. Cum doloremque enim aut tempore in laboriosam praesentium.', 'Sapiente culpa esse qui debitis dolorem. Tempora enim animi architecto. Ea at sint aut et tenetur. Cupiditate molestiae facere molestiae consequatur consectetur.', 'Ed Hermann II', 'published', 'http://www.heathcote.org/harum-et-illo-sed-ea-autem', '1974-12-14 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(81, 7, NULL, 'Minus quidem modi voluptas nobis nemo aut.', 'minus-quidem-modi-voluptas-nobis-nemo-aut', 'Minus aspernatur omnis ipsa dolores consequatur aut optio. Rem deserunt vel pariatur veritatis qui molestias in commodi. Dolor dignissimos vero libero quo.\n\nUt assumenda laudantium laborum veniam voluptas commodi veritatis. In repellat nemo exercitationem aut. Soluta consequatur commodi ex aut odit eum reiciendis. Ut recusandae ab aspernatur voluptatibus assumenda aut.\n\nUt labore doloribus dolores quis. Recusandae labore dolores debitis cum. Quaerat natus sunt aut est animi tempora quasi repudiandae.\n\nPerspiciatis natus qui illo exercitationem. Non aliquid amet ab ut. Autem et consectetur iusto dolor. Aut nesciunt sunt aut accusamus ducimus at rerum.', 'Totam quisquam asperiores quia ea. Quia ut aut saepe. Libero voluptatibus rerum alias dicta delectus. Ea reprehenderit hic aut. Qui eveniet repudiandae neque ex non in ut.', 'Prof. Julien Cummerata DDS', 'published', 'http://www.corkery.com/tempore-ad-similique-beatae-quis-corrupti-fugiat.html', '1970-09-16 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(82, 7, 4, 'Quo omnis libero quisquam nesciunt.', 'quo-omnis-libero-quisquam-nesciunt', 'Deleniti dignissimos maxime placeat qui velit. Voluptatum rerum et consequatur vero est magnam vel. In totam aut assumenda odio vel.\n\nCorrupti ut earum qui asperiores. Excepturi doloribus qui et debitis doloribus ut ut. Totam corporis qui fuga eum neque. Saepe reprehenderit adipisci voluptatem beatae aut voluptatibus officia quo.\n\nSequi sint quisquam ea vel eum esse vitae. Placeat tenetur accusantium quas beatae ut est recusandae odit. Nihil assumenda ut sapiente ducimus cumque atque ut. Laudantium commodi deleniti nostrum sint qui sit.\n\nVoluptatum quam accusantium culpa distinctio. Consequatur ullam nemo voluptas dignissimos aut nulla corporis. Nihil nihil animi qui neque quia amet sit voluptatem. Ut quos harum voluptatem tempore. Aut vel eius et illo ut expedita facere.', 'Fugiat vero a aut eos dolores tempore nisi. Deleniti molestias dolor rerum quia quia. Ipsam facilis vel debitis aut omnis. Reprehenderit rerum et sed ullam.', 'Prof. Arvel Rutherford', 'published', 'http://www.sporer.com/', '1987-12-01 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(83, 6, 1, 'Voluptatum fugit soluta et cum molestiae est temporibus tenetur.', 'voluptatum-fugit-soluta-et-cum-molestiae-est-temporibus-tenetur', 'Dolore sed inventore qui magni animi. Quae amet non necessitatibus quis qui nulla et. Quis non sunt sequi illo aut aperiam et. Repellat sequi quo accusantium incidunt harum vel.\n\nCumque quia labore id at distinctio. Rerum numquam architecto enim. Voluptatem in neque labore rerum totam optio assumenda.\n\nRem non consequatur vel non excepturi voluptatibus similique et. Ab rem dolorem voluptas quaerat suscipit quasi. Hic est et porro quod dolor voluptas.\n\nVoluptatem asperiores id impedit reprehenderit quod eaque. Alias eligendi dicta porro et eos eum illo. Nihil tempore non fugiat nihil dolores magnam.', 'Voluptatibus molestiae amet aliquid facilis. Repellendus voluptas eum error aspernatur velit vitae. Ut ipsum autem aut id corporis non illo.', 'Ariane Roob', 'published', 'http://www.harris.com/', '2010-08-12 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(84, 8, 5, 'Veritatis reiciendis ut doloremque.', 'veritatis-reiciendis-ut-doloremque', 'Fugiat officiis impedit itaque autem. Libero hic iste nihil dolorum totam minus.\n\nUt quo quo natus dolore asperiores quam id aspernatur. Iure suscipit animi laborum harum est. Aliquid nemo saepe aut sint nulla voluptatem. Nisi mollitia tenetur inventore consequatur perferendis.\n\nLabore dolorum aut rem vitae quos vel ea voluptatem. Placeat quisquam perferendis eligendi magnam tempore tempora cumque vel.\n\nInventore maiores accusamus voluptate quaerat aut maxime a. Fuga mollitia natus veniam odit ipsam neque et. Explicabo voluptatem cum et dolor reprehenderit.', 'Ratione et reiciendis ea totam eos quia. Ex ab est accusamus sint doloribus id architecto. Distinctio delectus rerum dolorem autem illum laborum. Nihil asperiores facere similique qui et.', 'Gunner Buckridge', 'published', 'http://vandervort.com/omnis-deserunt-veniam-deserunt-reprehenderit', '1994-08-15 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(85, 1, NULL, 'Minus sunt aut ea in harum.', 'minus-sunt-aut-ea-in-harum', 'Voluptatem delectus possimus voluptatem similique qui dolorem. Enim praesentium beatae ab delectus eveniet repudiandae. Eaque nam aut tempore et quasi. Suscipit ducimus omnis praesentium voluptatibus ut nulla sit.\n\nQuae nobis quis sit. Voluptates autem minima rem. Ut qui sapiente unde omnis perspiciatis ut.\n\nSunt laboriosam necessitatibus ut labore. Quia quibusdam at at perferendis non in. Ullam est inventore similique et aut qui.\n\nDeleniti aperiam quia at asperiores accusamus assumenda officiis. Dolorum officia eum minus quidem et dolor. Qui neque quod omnis ipsum voluptate iure.', 'Consequatur nobis libero sed est. Ea vero atque assumenda rerum nihil. Aut atque at atque delectus voluptate.', 'Anastacio Skiles', 'published', 'https://sporer.com/doloremque-aperiam-occaecati-ut-maxime-corporis.html', '1980-05-21 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(86, 9, NULL, 'Porro quidem quos quos voluptatem minima.', 'porro-quidem-quos-quos-voluptatem-minima', 'Fugiat quod fuga iste earum eum omnis maiores qui. Amet velit et incidunt maiores. Quisquam sit laborum iusto.\n\nExcepturi mollitia aut recusandae omnis. Consequatur quaerat quae sint doloremque fugiat. Libero qui a accusantium beatae esse aut odio ut. Et omnis quidem enim quia.\n\nAb repudiandae minus reiciendis vitae quia quod rerum. Nesciunt dicta error omnis omnis eveniet. Earum autem voluptas ut esse dolorem ea.\n\nQuod cum quia et repellat veritatis qui corporis. Fuga sunt maiores fugiat reprehenderit possimus. Aliquid praesentium odio et quo suscipit dignissimos.', 'Assumenda id ea inventore ut sed. Beatae sit occaecati quibusdam voluptas nobis explicabo at aliquam. Sed aliquam et error repudiandae. Expedita rerum est est impedit.', 'Mr. Bart Keeling', 'published', 'https://www.moore.com/et-ut-dolorem-et', '1975-02-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(87, 8, 2, 'Aliquam vitae enim ullam quo voluptatum consectetur.', 'aliquam-vitae-enim-ullam-quo-voluptatum-consectetur', 'Impedit nesciunt sapiente omnis est. Omnis qui quidem in corrupti et. In tempora nisi hic tenetur voluptate qui voluptatum.\n\nDucimus facilis quaerat eius. Praesentium magni dolor molestiae voluptatum voluptas qui. Odit eos consectetur dolor consequatur accusamus. Et libero ipsam et repellendus.\n\nEt praesentium error impedit minima sit. Omnis incidunt rerum distinctio dolorem. Sapiente est rerum omnis voluptatem qui aut minus.\n\nEx neque numquam placeat aut et possimus. Corporis quas esse quo voluptatem consequatur. Amet dolor unde qui hic aut iure culpa. Nam rerum nulla omnis est.', 'Aut omnis quo doloremque pariatur. Fugiat natus omnis minima odio voluptates. Voluptatem doloremque quaerat ab ut. Sed ducimus rem nihil ut consequatur neque nihil.', 'Rollin Aufderhar', 'published', 'http://herman.com/delectus-repudiandae-magnam-nam-repellat.html', '1977-12-31 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(88, 3, 6, 'Magni accusamus distinctio perferendis autem amet quia.', 'magni-accusamus-distinctio-perferendis-autem-amet-quia', 'Et eum aliquam ab dolores harum vero non. Exercitationem eaque nihil quis consequatur fuga. Et quaerat exercitationem quidem corporis quis. Esse ducimus quo minima est alias tempora voluptatem qui.\n\nAtque iusto aut enim ut nisi quia. Qui culpa eos officiis provident est vel ut et. Sed quia deserunt voluptate ratione aut beatae sequi.\n\nCorporis atque ex veritatis enim. Quaerat ab et inventore aperiam sunt. Cupiditate quas molestias ad incidunt incidunt. Quam corrupti non sed voluptatem.\n\nAliquam dignissimos dolores quis culpa velit magnam earum. Minima id adipisci voluptas veritatis.', 'Nihil beatae eaque quas sit consequatur amet perspiciatis. Cumque quis atque velit nisi consequatur. Est molestiae itaque sint beatae porro. Maxime voluptates illo aut architecto sit est.', 'Ms. Cierra Raynor', 'published', 'http://hackett.biz/molestias-eveniet-accusantium-sequi-aut-repellendus-est-voluptas', '1999-07-26 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(89, 5, NULL, 'Voluptatibus a quod quis optio.', 'voluptatibus-a-quod-quis-optio', 'Dolor aliquid ut vero mollitia at quos recusandae modi. Corporis praesentium dolor quidem eos est velit. Suscipit non in ullam aliquam.\n\nNihil ut at voluptates minima voluptatem sit aut. Culpa id nemo doloribus ipsam hic in minima. Distinctio doloribus voluptatem voluptatibus dolore qui qui id. At ut necessitatibus omnis est.\n\nA voluptas consectetur nesciunt sapiente nulla esse. Quidem maiores ut et. Accusantium possimus minima officiis sequi laboriosam eveniet beatae.\n\nTempore iusto sed libero saepe illum sint natus temporibus. Expedita ut velit sit rem voluptatem tempora cumque. Rerum qui dolorum nemo. Dignissimos deleniti sint enim similique quasi odio.', 'Ducimus est cumque aut. Nostrum est doloribus qui fugiat.', 'Marcus Boehm', 'published', 'http://www.hauck.com/cumque-adipisci-ut-quam-modi-distinctio', '1976-11-10 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(90, 2, NULL, 'Nihil quo molestias quod velit aut impedit sit inventore.', 'nihil-quo-molestias-quod-velit-aut-impedit-sit-inventore', 'Voluptatibus suscipit esse laboriosam sed dicta rerum. Eaque accusantium ex voluptatem consequuntur dolorem et. Voluptate et suscipit quia iusto soluta.\n\nVel recusandae voluptatem dicta nihil repudiandae aut unde. Qui magni culpa enim perferendis. Facilis id et reiciendis minus eum. Aut aperiam aut vitae est eveniet sapiente.\n\nMinima reiciendis eius sunt enim aut necessitatibus cupiditate dolores. Aut dolorem natus veritatis a. Vero vero error ut voluptas asperiores. Nemo corrupti amet itaque omnis ut corporis ducimus quod. Cumque sed labore in.\n\nQuam et quia ut ipsa. Placeat velit soluta odio dolorem quia. Aliquam iusto accusamus voluptatem odio molestiae. Mollitia ea nobis in vel harum totam quia.', 'Eum dolorem explicabo eos ea quis dolorem eaque. Odio laborum recusandae perspiciatis qui quis. Sunt maiores aut doloribus consectetur ipsa necessitatibus.', 'Dr. Mark Shields', 'published', 'http://simonis.com/consequatur-qui-sint-sed-pariatur', '2017-06-05 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(91, 2, 5, 'Quae reiciendis aut et qui.', 'quae-reiciendis-aut-et-qui', 'Quibusdam sapiente consequatur numquam est illum beatae voluptatem. Qui vel esse pariatur quos ipsam. Quis est sed ipsum aut sapiente est. Inventore eum voluptate ullam et.\n\nDoloribus dolor alias architecto numquam est consequatur. Aliquam in ratione a.\n\nNulla quisquam maxime exercitationem et enim qui. Quidem qui enim fuga eligendi rerum sapiente beatae. Consequatur sint sunt deleniti. Perspiciatis nihil dolores suscipit molestias sunt.\n\nOfficiis asperiores eius suscipit. Ut blanditiis sed beatae quaerat itaque. Dolores fugit quasi assumenda. In velit voluptatem debitis nobis.', 'Error iusto odit sint voluptates eum sint iste. Consectetur dolores omnis sit ut quae qui. Et quaerat quia ipsum eveniet qui fugiat.', 'Gloria Hettinger', 'published', 'http://www.kilback.org/aut-neque-expedita-beatae-consequatur', '1973-11-22 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(92, 1, NULL, 'Quam ipsam debitis aperiam aut porro optio laborum.', 'quam-ipsam-debitis-aperiam-aut-porro-optio-laborum', 'Cumque magnam labore quis. Similique voluptas officiis perferendis ratione. Blanditiis dolorem nulla quia ipsum labore quibusdam. Quia dolores ipsam in beatae fugit.\n\nAliquid repudiandae cum ab itaque provident sunt. Fugit facilis ipsum et incidunt. Facere veniam quia quo molestiae magni. Quia ducimus tenetur nesciunt eveniet quis nemo.\n\nCorrupti nam excepturi perferendis soluta quas laborum possimus soluta. Rem ut et tenetur natus est. Dolor consequuntur quaerat id odit occaecati et.\n\nAssumenda quod quas distinctio. Sequi mollitia qui voluptate aut blanditiis pariatur consectetur. Blanditiis officiis aut dolor dolor doloribus voluptas dolorum. Quod est et quis odit a aliquid.', 'Nesciunt accusamus perspiciatis animi quae numquam deleniti dolor occaecati. Architecto ab et nihil. Quidem illo sed deserunt praesentium et ea cum.', 'Carlotta Bauch I', 'published', 'http://medhurst.biz/nam-sit-ducimus-ipsam-eligendi-assumenda-consequuntur-fugit.html', '1990-04-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(93, 5, NULL, 'Labore facere iste nesciunt nulla.', 'labore-facere-iste-nesciunt-nulla', 'Consequuntur qui ratione eveniet quia est enim magni. Labore excepturi magni omnis. Excepturi id et minus sit nostrum ipsam.\n\nFugiat voluptate sunt deleniti at qui accusantium. Ratione aut consequuntur dolor.\n\nRepudiandae occaecati libero et autem optio dignissimos. Animi omnis dolorem minus dicta ipsum nulla perspiciatis. Vel voluptas voluptatem ipsum rem consequatur. Nesciunt et quae necessitatibus eum.\n\nEt sed molestiae itaque natus dolor. Quibusdam veritatis qui et deleniti nesciunt et et. Occaecati accusamus id quo expedita. Dolores quis est magni nihil. Occaecati minima consequuntur quia deserunt.', 'Consequatur architecto quisquam quia. Et eum in voluptatem dolorum quisquam quo. Qui rerum temporibus voluptatem atque eum. Assumenda provident natus quidem molestiae ut pariatur.', 'Emerson Nader', 'published', 'http://bergstrom.net/illo-ut-nulla-aspernatur-quidem', '2020-09-09 18:15:00', '2023-12-03 23:40:05', NULL, NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(94, 6, NULL, 'Fugiat aliquam ut quo ut iusto accusantium.', 'fugiat-aliquam-ut-quo-ut-iusto-accusantium', 'Sunt magni ut nesciunt dolores nostrum rerum odit. Laboriosam maiores culpa esse amet quis at dolores.\n\nNisi qui sint iusto nulla tenetur aliquam ad minus. Voluptas consequatur quas architecto ipsam. Ipsam vitae illum nobis quo itaque laborum.\n\nNihil quae modi architecto. Amet debitis soluta repellendus facere dolorum. Doloremque praesentium et rerum omnis.\n\nEt iusto dolorem voluptatibus consequuntur qui laboriosam. Ex est velit commodi. Vitae sed facilis quaerat ea animi sit voluptatum.', 'Qui eius consequatur numquam nemo minus quibusdam voluptate. Ea voluptatum neque delectus qui. Omnis perspiciatis quaerat nobis et.', 'Dr. Brisa Sporer', 'published', 'http://www.padberg.com/nostrum-sint-ut-nihil-nihil-accusamus-blanditiis-enim.html', '2004-11-26 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(95, 2, NULL, 'Qui impedit quia ex facilis ratione accusamus eos.', 'qui-impedit-quia-ex-facilis-ratione-accusamus-eos', 'Commodi iure accusamus aut repudiandae et. Consequuntur vero aperiam et nulla enim. Libero dolor et est rerum et sed quia.\n\nIncidunt inventore consequatur temporibus. Consequatur sit enim et nulla consequatur inventore.\n\nIn nobis voluptate in maxime reiciendis. Nihil dolores doloribus illo eligendi quod. Vero blanditiis optio laudantium et voluptate. Cum vero ab repellendus illo.\n\nVoluptates est iste omnis magni enim sequi delectus. Et eveniet tenetur nesciunt quia velit. Est quo non ipsam inventore non quibusdam. Eos est et iusto.', 'Recusandae et dicta maiores dolorum quia impedit minima. Quas dolor quod non aut rem. Omnis quis nam ad dolor aut eum est.', 'Dr. Efren Bernhard', 'published', 'https://www.ward.net/vero-ut-enim-quia', '1976-10-30 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(96, 6, 6, 'Temporibus a eum autem ut iste.', 'temporibus-a-eum-autem-ut-iste', 'Pariatur fuga similique rem excepturi accusamus. Ullam officiis aut aut in ut perferendis. Magnam dolores quia vero quam. Labore aliquam sequi ad id porro vitae.\n\nVel dicta molestias dolores sit quia. Nam dolor et est qui tempora laborum. Rerum sit in ut quasi et id voluptatem. Fugit officiis repudiandae nihil voluptas debitis quasi odit. Aliquid vel veniam est odio occaecati quidem.\n\nAspernatur ut earum dignissimos. Neque asperiores provident et reiciendis maiores fuga quod maxime. Et voluptatibus neque vel eveniet magni. Repellat cumque at asperiores necessitatibus.\n\nIllo aliquam reiciendis optio sit illum. Consequatur tempora praesentium officia aut eum veritatis. Vel provident voluptatem excepturi accusantium et dolor a. Vel eaque eos ea asperiores id voluptatem. Aut amet nihil esse ipsa asperiores et qui qui.', 'Alias commodi ea minima id voluptatem voluptatem. Est explicabo nostrum sunt iusto. Necessitatibus illo sit qui quibusdam optio provident reprehenderit.', 'Clare Schuppe', 'published', 'https://walker.com/velit-aut-et-sapiente-qui.html', '1975-10-23 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(97, 1, 1, 'Doloremque consequatur qui recusandae consequuntur quibusdam.', 'doloremque-consequatur-qui-recusandae-consequuntur-quibusdam', 'Molestiae recusandae dolore beatae harum autem id quo facilis. Sint debitis reprehenderit voluptatem. Sit voluptas nemo cupiditate quam. Et explicabo laborum id illo cum.\r\n\r\nOdit alias quos quo cum qui debitis. Expedita illum soluta fugiat voluptatem delectus aut assumenda quo. Repudiandae enim rerum omnis.\r\n\r\nMollitia ea dignissimos id aut omnis corporis ea. Et vel incidunt ratione dolorem sed ut consequatur. Facere fugit nihil deleniti quia occaecati culpa esse voluptas. Sit consequatur explicabo quaerat aut quasi corporis ut.\r\n\r\nLibero repudiandae architecto provident autem odit dolor hic. Expedita officiis accusamus iure molestiae sunt facere aut. In adipisci dicta rem at delectus dolor.', 'Dolor similique aperiam necessitatibus est. Est earum minus reprehenderit sapiente. Est perferendis voluptatum rerum odio. Aut provident voluptas nobis quia nihil dolores consequatur.', 'Rosanna Reichel', 'published', 'http://hauck.com/quisquam-voluptate-consequatur-est.html', '2023-12-04 18:15:00', '2023-12-03 23:40:05', '2023-12-05 00:32:38', NULL),
(98, 9, NULL, 'Qui vitae debitis quia nisi alias voluptatum amet est.', 'qui-vitae-debitis-quia-nisi-alias-voluptatum-amet-est', 'Est occaecati ullam soluta deserunt neque natus unde. Debitis earum non fuga suscipit possimus minima. Eos qui eos quo laborum consequatur laborum.\n\nOdio quo qui adipisci ut molestias eius. Enim nam nihil at corporis soluta facilis. Unde tempora architecto velit.\n\nSuscipit dignissimos facere aut dignissimos qui rerum rerum eveniet. Quaerat porro officia dolores et quibusdam cumque ullam. Veniam iusto et ea. Sint occaecati culpa dolorem.\n\nAccusantium perspiciatis doloribus veniam at facilis. Eum sit laborum in nisi vel illo aliquid. Enim itaque incidunt et.', 'Quis labore quia dolore enim qui reprehenderit. Enim occaecati qui et est et tenetur. Ipsum ipsam fugiat molestiae consequatur aut. Enim quis fuga dolor a sit et optio.', 'Ruth Casper', 'published', 'http://funk.com/quasi-labore-ut-veritatis-earum-deserunt-vero-molestiae', '2019-05-07 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(99, 8, NULL, 'Reiciendis et pariatur qui est corrupti.', 'reiciendis-et-pariatur-qui-est-corrupti', 'Impedit blanditiis odit maiores a quia sint corporis. Qui voluptate est asperiores sint fugiat voluptatum distinctio. Quam inventore pariatur aut maxime cum. Maxime soluta quidem explicabo at consectetur maiores.\n\nVel facilis eum tempora quo. Fuga quisquam consequatur aut inventore. Animi sunt dignissimos accusantium rerum aliquid velit doloribus consequuntur. Dolores quas repellat voluptatem dolorem veritatis quaerat.\n\nSint perspiciatis numquam dignissimos quo. Eveniet accusantium laborum nihil et.\n\nVoluptate deserunt iste quod praesentium aliquid. Qui et totam est itaque repellendus adipisci dignissimos non. Doloremque mollitia et sit.', 'Perferendis consequatur praesentium sed aut doloribus tempora qui. Voluptatem dolorem ut eum nihil deleniti doloribus. Quia accusamus qui tempora rerum et.', 'Dion Wisoky', 'published', 'http://www.kiehn.com/sint-quaerat-nulla-et-eveniet-optio-doloremque-non-omnis', '1972-10-21 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(100, 3, NULL, 'Et repellendus aut sed adipisci commodi ea praesentium.', 'et-repellendus-aut-sed-adipisci-commodi-ea-praesentium', 'Optio et vero cum occaecati et voluptas. Quia veritatis quis voluptatem tempore. Qui illum corrupti cum. Debitis iure inventore id eaque quia mollitia facilis. Ut exercitationem inventore molestias a temporibus perferendis.\n\nMagnam reiciendis est illum. Iure repellat dolorem aliquid dolore animi qui. Eum enim facilis cupiditate.\n\nQuo quisquam est ipsam optio sequi nisi quis. Deserunt eos dolores temporibus quaerat. Repellat aspernatur nostrum et natus provident aliquam ut laborum. Sunt voluptas mollitia omnis dicta perferendis qui quisquam.\n\nIpsa sunt sequi voluptas voluptatum sed libero. Ea aut reiciendis et repellat. Omnis dignissimos nesciunt reiciendis velit nulla et. Fugiat est autem laudantium. Voluptatibus alias ducimus illum tenetur perferendis.', 'Autem ab voluptatem ea ex vel ipsam nisi est. Numquam suscipit rem labore recusandae et. Totam et sit et voluptatem. Aut error et corporis laboriosam iusto libero.', 'Armand Stroman', 'published', 'http://prohaska.com/', '1994-09-10 18:15:00', '2023-12-03 23:40:05', NULL, NULL),
(101, 5, NULL, 'Temporibus sint a de', 'temporibus-sint-a-de', '<p>Quis ipsam autem sin.</p>', 'Soluta porro volupta', 'Alias perferendis ip', 'published', 'Magna asperiores mag', '1977-10-20 18:15:00', '2023-12-05 06:03:00', '2023-12-05 06:03:00', NULL);

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
(1, 1, 15, NULL, NULL),
(2, 1, 14, NULL, NULL),
(3, 1, 12, NULL, NULL),
(4, 2, 15, NULL, NULL),
(5, 2, 20, NULL, NULL),
(6, 2, 9, NULL, NULL),
(7, 3, 20, NULL, NULL),
(8, 3, 15, NULL, NULL),
(9, 3, 4, NULL, NULL),
(10, 4, 7, NULL, NULL),
(11, 4, 4, NULL, NULL),
(12, 4, 19, NULL, NULL),
(13, 5, 11, NULL, NULL),
(14, 5, 15, NULL, NULL),
(15, 5, 12, NULL, NULL),
(16, 6, 20, NULL, NULL),
(17, 6, 9, NULL, NULL),
(18, 6, 19, NULL, NULL),
(19, 7, 11, NULL, NULL),
(20, 7, 15, NULL, NULL),
(21, 7, 3, NULL, NULL),
(22, 8, 12, NULL, NULL),
(23, 8, 10, NULL, NULL),
(24, 8, 4, NULL, NULL),
(25, 9, 8, NULL, NULL),
(26, 9, 17, NULL, NULL),
(27, 9, 5, NULL, NULL),
(28, 10, 20, NULL, NULL),
(29, 10, 10, NULL, NULL),
(30, 10, 3, NULL, NULL),
(31, 11, 2, NULL, NULL),
(32, 11, 19, NULL, NULL),
(33, 11, 15, NULL, NULL),
(34, 12, 13, NULL, NULL),
(35, 12, 2, NULL, NULL),
(36, 12, 14, NULL, NULL),
(37, 13, 9, NULL, NULL),
(38, 13, 14, NULL, NULL),
(39, 13, 7, NULL, NULL),
(40, 14, 3, NULL, NULL),
(41, 14, 12, NULL, NULL),
(42, 14, 11, NULL, NULL),
(43, 15, 17, NULL, NULL),
(44, 15, 5, NULL, NULL),
(45, 15, 20, NULL, NULL),
(46, 16, 4, NULL, NULL),
(47, 16, 15, NULL, NULL),
(48, 16, 12, NULL, NULL),
(49, 17, 9, NULL, NULL),
(50, 17, 16, NULL, NULL),
(51, 17, 10, NULL, NULL),
(52, 18, 12, NULL, NULL),
(53, 18, 17, NULL, NULL),
(54, 18, 19, NULL, NULL),
(55, 19, 15, NULL, NULL),
(56, 19, 3, NULL, NULL),
(57, 19, 9, NULL, NULL),
(58, 20, 19, NULL, NULL),
(59, 20, 6, NULL, NULL),
(60, 20, 11, NULL, NULL),
(61, 21, 8, NULL, NULL),
(62, 21, 7, NULL, NULL),
(63, 21, 11, NULL, NULL),
(64, 22, 19, NULL, NULL),
(65, 22, 18, NULL, NULL),
(66, 22, 4, NULL, NULL),
(67, 23, 4, NULL, NULL),
(68, 23, 6, NULL, NULL),
(69, 23, 13, NULL, NULL),
(70, 24, 1, NULL, NULL),
(71, 24, 4, NULL, NULL),
(72, 24, 7, NULL, NULL),
(73, 25, 6, NULL, NULL),
(74, 25, 19, NULL, NULL),
(75, 25, 11, NULL, NULL),
(76, 26, 4, NULL, NULL),
(77, 26, 2, NULL, NULL),
(78, 26, 10, NULL, NULL),
(79, 27, 2, NULL, NULL),
(80, 27, 6, NULL, NULL),
(81, 27, 11, NULL, NULL),
(82, 28, 11, NULL, NULL),
(83, 28, 15, NULL, NULL),
(84, 28, 12, NULL, NULL),
(85, 29, 4, NULL, NULL),
(86, 29, 11, NULL, NULL),
(87, 29, 12, NULL, NULL),
(88, 30, 11, NULL, NULL),
(89, 30, 12, NULL, NULL),
(90, 30, 9, NULL, NULL),
(91, 31, 20, NULL, NULL),
(92, 31, 18, NULL, NULL),
(93, 31, 5, NULL, NULL),
(94, 32, 6, NULL, NULL),
(95, 32, 20, NULL, NULL),
(96, 32, 12, NULL, NULL),
(97, 33, 17, NULL, NULL),
(98, 33, 6, NULL, NULL),
(99, 33, 5, NULL, NULL),
(100, 34, 14, NULL, NULL),
(101, 34, 5, NULL, NULL),
(102, 34, 19, NULL, NULL),
(103, 35, 1, NULL, NULL),
(104, 35, 18, NULL, NULL),
(105, 35, 17, NULL, NULL),
(106, 36, 6, NULL, NULL),
(107, 36, 7, NULL, NULL),
(108, 36, 2, NULL, NULL),
(109, 37, 15, NULL, NULL),
(110, 37, 17, NULL, NULL),
(111, 37, 20, NULL, NULL),
(112, 38, 12, NULL, NULL),
(113, 38, 6, NULL, NULL),
(114, 38, 1, NULL, NULL),
(115, 39, 11, NULL, NULL),
(116, 39, 15, NULL, NULL),
(117, 39, 16, NULL, NULL),
(118, 40, 5, NULL, NULL),
(119, 40, 8, NULL, NULL),
(120, 40, 18, NULL, NULL),
(121, 41, 19, NULL, NULL),
(122, 41, 5, NULL, NULL),
(123, 41, 1, NULL, NULL),
(124, 42, 5, NULL, NULL),
(125, 42, 2, NULL, NULL),
(126, 42, 20, NULL, NULL),
(127, 43, 13, NULL, NULL),
(128, 43, 5, NULL, NULL),
(129, 43, 9, NULL, NULL),
(130, 44, 6, NULL, NULL),
(131, 44, 16, NULL, NULL),
(132, 44, 18, NULL, NULL),
(133, 45, 17, NULL, NULL),
(134, 45, 11, NULL, NULL),
(135, 45, 5, NULL, NULL),
(136, 46, 7, NULL, NULL),
(137, 46, 9, NULL, NULL),
(138, 46, 15, NULL, NULL),
(139, 47, 8, NULL, NULL),
(140, 47, 9, NULL, NULL),
(141, 47, 16, NULL, NULL),
(142, 48, 12, NULL, NULL),
(143, 48, 15, NULL, NULL),
(144, 48, 20, NULL, NULL),
(145, 49, 10, NULL, NULL),
(146, 49, 12, NULL, NULL),
(147, 49, 5, NULL, NULL),
(148, 50, 7, NULL, NULL),
(149, 50, 10, NULL, NULL),
(150, 50, 15, NULL, NULL),
(151, 51, 18, NULL, NULL),
(152, 51, 17, NULL, NULL),
(153, 51, 19, NULL, NULL),
(154, 52, 6, NULL, NULL),
(155, 52, 19, NULL, NULL),
(156, 52, 11, NULL, NULL),
(157, 53, 17, NULL, NULL),
(158, 53, 1, NULL, NULL),
(159, 53, 9, NULL, NULL),
(160, 54, 10, NULL, NULL),
(161, 54, 6, NULL, NULL),
(162, 54, 18, NULL, NULL),
(163, 55, 10, NULL, NULL),
(164, 55, 5, NULL, NULL),
(165, 55, 11, NULL, NULL),
(166, 56, 17, NULL, NULL),
(167, 56, 3, NULL, NULL),
(168, 56, 4, NULL, NULL),
(169, 57, 19, NULL, NULL),
(170, 57, 15, NULL, NULL),
(171, 57, 9, NULL, NULL),
(172, 58, 20, NULL, NULL),
(173, 58, 2, NULL, NULL),
(174, 58, 16, NULL, NULL),
(175, 59, 3, NULL, NULL),
(176, 59, 18, NULL, NULL),
(177, 59, 11, NULL, NULL),
(178, 60, 18, NULL, NULL),
(179, 60, 6, NULL, NULL),
(180, 60, 16, NULL, NULL),
(181, 61, 4, NULL, NULL),
(182, 61, 15, NULL, NULL),
(183, 61, 19, NULL, NULL),
(184, 62, 13, NULL, NULL),
(185, 62, 12, NULL, NULL),
(186, 62, 14, NULL, NULL),
(187, 63, 10, NULL, NULL),
(188, 63, 6, NULL, NULL),
(189, 63, 13, NULL, NULL),
(190, 64, 20, NULL, NULL),
(191, 64, 1, NULL, NULL),
(192, 64, 8, NULL, NULL),
(193, 65, 12, NULL, NULL),
(194, 65, 18, NULL, NULL),
(195, 65, 17, NULL, NULL),
(196, 66, 15, NULL, NULL),
(197, 66, 7, NULL, NULL),
(198, 66, 5, NULL, NULL),
(199, 67, 7, NULL, NULL),
(200, 67, 9, NULL, NULL),
(201, 67, 6, NULL, NULL),
(202, 68, 1, NULL, NULL),
(203, 68, 15, NULL, NULL),
(204, 68, 11, NULL, NULL),
(205, 69, 10, NULL, NULL),
(206, 69, 5, NULL, NULL),
(207, 69, 17, NULL, NULL),
(208, 70, 14, NULL, NULL),
(209, 70, 6, NULL, NULL),
(210, 70, 8, NULL, NULL),
(211, 71, 8, NULL, NULL),
(212, 71, 20, NULL, NULL),
(213, 71, 3, NULL, NULL),
(214, 72, 10, NULL, NULL),
(215, 72, 9, NULL, NULL),
(216, 72, 13, NULL, NULL),
(217, 73, 6, NULL, NULL),
(218, 73, 9, NULL, NULL),
(219, 73, 7, NULL, NULL),
(220, 74, 7, NULL, NULL),
(221, 74, 18, NULL, NULL),
(222, 74, 6, NULL, NULL),
(223, 75, 4, NULL, NULL),
(224, 75, 12, NULL, NULL),
(225, 75, 8, NULL, NULL),
(226, 76, 16, NULL, NULL),
(227, 76, 15, NULL, NULL),
(228, 76, 6, NULL, NULL),
(229, 77, 13, NULL, NULL),
(230, 77, 16, NULL, NULL),
(231, 77, 20, NULL, NULL),
(232, 78, 17, NULL, NULL),
(233, 78, 7, NULL, NULL),
(234, 78, 18, NULL, NULL),
(235, 79, 14, NULL, NULL),
(236, 79, 3, NULL, NULL),
(237, 79, 15, NULL, NULL),
(238, 80, 14, NULL, NULL),
(239, 80, 10, NULL, NULL),
(240, 80, 12, NULL, NULL),
(241, 81, 10, NULL, NULL),
(242, 81, 8, NULL, NULL),
(243, 81, 13, NULL, NULL),
(244, 82, 17, NULL, NULL),
(245, 82, 15, NULL, NULL),
(246, 82, 6, NULL, NULL),
(247, 83, 17, NULL, NULL),
(248, 83, 19, NULL, NULL),
(249, 83, 10, NULL, NULL),
(250, 84, 18, NULL, NULL),
(251, 84, 17, NULL, NULL),
(252, 84, 3, NULL, NULL),
(253, 85, 10, NULL, NULL),
(254, 85, 19, NULL, NULL),
(255, 85, 16, NULL, NULL),
(256, 86, 8, NULL, NULL),
(257, 86, 18, NULL, NULL),
(258, 86, 3, NULL, NULL),
(259, 87, 8, NULL, NULL),
(260, 87, 9, NULL, NULL),
(261, 87, 11, NULL, NULL),
(262, 88, 19, NULL, NULL),
(263, 88, 9, NULL, NULL),
(264, 88, 10, NULL, NULL),
(265, 89, 7, NULL, NULL),
(266, 89, 2, NULL, NULL),
(267, 89, 5, NULL, NULL),
(268, 90, 20, NULL, NULL),
(269, 90, 13, NULL, NULL),
(270, 90, 6, NULL, NULL),
(271, 91, 18, NULL, NULL),
(272, 91, 5, NULL, NULL),
(273, 91, 15, NULL, NULL),
(274, 92, 14, NULL, NULL),
(275, 92, 10, NULL, NULL),
(276, 92, 13, NULL, NULL),
(277, 93, 1, NULL, NULL),
(278, 93, 10, NULL, NULL),
(279, 93, 13, NULL, NULL),
(280, 94, 20, NULL, NULL),
(281, 94, 13, NULL, NULL),
(282, 94, 5, NULL, NULL),
(283, 95, 3, NULL, NULL),
(284, 95, 19, NULL, NULL),
(285, 95, 6, NULL, NULL),
(286, 96, 20, NULL, NULL),
(287, 96, 4, NULL, NULL),
(288, 96, 8, NULL, NULL),
(289, 97, 2, NULL, NULL),
(290, 97, 11, NULL, NULL),
(291, 97, 20, NULL, NULL),
(292, 98, 13, NULL, NULL),
(293, 98, 20, NULL, NULL),
(294, 98, 7, NULL, NULL),
(295, 99, 1, NULL, NULL),
(296, 99, 9, NULL, NULL),
(297, 99, 3, NULL, NULL),
(298, 100, 5, NULL, NULL),
(299, 100, 7, NULL, NULL),
(300, 100, 15, NULL, NULL);

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

--
-- Dumping data for table `publications`
--

INSERT INTO `publications` (`id`, `category_id`, `title`, `slug`, `subtitle`, `description`, `created_at`, `updated_at`) VALUES
(1, 11, 'Vol. 1, No. 1, 2005', NULL, NULL, NULL, '2023-12-04 05:11:18', '2023-12-04 05:11:18'),
(2, 11, 'Vol. 1, No. 2, 2005', NULL, NULL, NULL, '2023-12-04 05:11:40', '2023-12-04 05:11:40'),
(3, 11, 'Vol. 1, No. 3, 2005', NULL, NULL, NULL, '2023-12-04 05:11:57', '2023-12-04 05:11:57'),
(4, 11, 'Vol. 1, No.4, 2005', NULL, NULL, NULL, '2023-12-11 05:22:49', '2023-12-11 05:22:49');

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

--
-- Dumping data for table `research`
--

INSERT INTO `research` (`id`, `title`, `slug`, `subtitle`, `description`, `year`, `created_at`, `updated_at`) VALUES
(1, 'LDCs after Brussels and Doha: Catching up or Falling Further Behind?', NULL, NULL, NULL, 2001, '2023-12-04 05:16:32', '2023-12-04 05:16:32'),
(2, 'Impact of Trade Liberalisation on Lives and Livelihood of Mountain Communities in the Northern Areas of Pakistan', NULL, NULL, NULL, 2002, '2023-12-04 05:17:17', '2023-12-04 05:17:17'),
(3, 'The Scope of Crop Diversification in Increasing Productivity to Support Livelihood of Mountain Communities in India', NULL, NULL, NULL, 2002, '2023-12-04 05:17:50', '2023-12-04 05:17:50');

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
(1, 'Genesis', '<p>Beginning the mid-1980s, most countries, across all regions of the world, started to rapidly embark on the path of globalization and liberalization. The global wave of globalization and liberalization also created a compelling situation for South Asian countries to follow suit. This led South Asian governments and stakeholders alike to design strategies and implement measures that enhance their capacities to benefit from regional and global integration, and respond to the adverse implications of globalization for their economies.</p>\n\n            <p>In order to complement the efforts of South Asian governments and stakeholders, and to bring to the fore the views and concerns of the marginalized and poor segments of society, South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”</p>.\n\n            <p>From 1994 to 1997, its secretariat was housed in Kolkata, India at the office of Consumer Unity & Trust Society (CUTS), a founding member institution of the network. With the emergence of consensus among network members, in 1997, SAWTEE\'s secretariat was moved to Kathmandu, Nepal. Since then, SAWTEE has strengthened its activities ranging from sensitization and awareness raising to independent and concrete policy research, capacity building and advocacy on trade, economic and environmental issues at local, national, regional and international levels.</p>', NULL, 'default', NULL, 1, '2016-05-15 13:12:24', '2021-03-12 15:32:42'),
(2, 'Registration and Recognition', '<p>SAWTEE was registered with the District Administration Office, Kathmandu, Nepal to operate as a non-profit, NGO in 1999. Due to its research capacity, policy outreach and developmental impacts, the organization has been growingly recognized as a think tank at local, national, regional and global levels. SAWTEE is also recognized in the capacity of a secretariat of a national network of Nepal-based national and international NGOs called National Alliance for Food Security in Nepal (NAFOS); a global network of civil society organizations (CSOs) working on biodiversity management and farmers rights issues called Farmers Rights Advocacy Network (FRANK); and a global network of least-developed countries (LDCs) established for the economic transformation of LDCs, called Least Developed Countries Network for Economic Transformation (LDC-NET). Its members and staff have served/been serving on the board of various international and national agencies working on trade, development, farmers rights and food security issues.</p>.', NULL, 'default', NULL, 1, '2017-12-08 04:41:36', '2023-07-31 19:02:41'),
(3, 'Vision, Goal and Objectives', '', NULL, 'tabs', NULL, 1, '2014-07-10 14:25:30', '2019-02-17 15:15:25'),
(4, 'Vision', '<p>Ensuring fair, equitable, inclusive, and sustainable growth and development in South Asia.</p>', NULL, 'tabs', 3, 1, '2015-11-04 00:28:28', '2021-07-26 02:33:03'),
(5, 'Goal', '<p>Enabling stakeholders, particularly the poor and marginalized, to derive net benefits from changing political economy and environmental landscapes.</p>', NULL, 'tabs', 3, 1, '2021-08-11 15:50:09', '2018-01-29 08:11:13'),
(6, 'Objectives', '<ol>\n            <li>To equip stakeholders with knowledge, information and skills to represent their interests and assert their rights to development.</li>\n            <li>To contribute to fair, equitable, inclusive, and sustainable growth and development for a society directed towards poverty reduction, food security and environmental sustainability.</li>\n            <li>To contribute to informed and participatory policy-making and implementation for fair, equitable, inclusive, and sustainable growth and development.</li>\n            <li>To contribute to enhancing meaningful participation of South Asian countries, particularly the least-developed and landlocked, in and their integration into the sub-regional, regional and multilateral trade, economic and environmental systems.</li>\n            <li>To contribute to strengthening regional cooperation in South Asia.&nbsp;</li>\n            </ol>', NULL, 'tabs', 3, 1, '2022-06-17 20:36:13', '2014-10-28 21:37:59'),
(7, 'Strategies', '', NULL, 'accordian', NULL, 1, '2021-11-25 14:48:27', '2021-04-01 16:10:02'),
(8, 'Policy Research', '<p>Realizing the capacity and resource constraints faced by South Asian NGOs to conduct research on various policy issues; come out with policy recommendations; and prepare well-argued advocacy strategy, SAWTEE, together with its member institutions and academics of the region, conducts policy research on issues such as World Trade Organization (WTO) rules, regional cooperation, intellectual property rights (IPRs), competition policy, farmers&rsquo; rights, climate change and development dimension of trade liberalization. The research findings are widely disseminated among South Asian as well as international audiences comprising, inter alia, trade negotiators, NGOs, the media, the academia, research institutions, international and regional inter-governmental organizations and the donor community, in English as well as various South Asian vernaculars.</p>\n            <p>Policy research conducted by SAWTEE includes: &nbsp;</p>\n            <ul>\n            <li>Mechanism for pruning the sensitive list under SAFTA</li>\n            <li>Trade and climate change in the context of South Asia</li>\n            <li>Traditional health services in South Asia</li>\n            <li>Liberalization of services trade in South Asia</li>\n            <li>Mechanisms for protecting farmers&rsquo; rights to livelihood in the Hindu-Kush Himalayan Region</li>\n            <li>Positive trade agenda for South Asian LDCs</li>\n            <li>Agricultural liberalization in South Asia</li>\n            <li>Gender implications of Nepal&rsquo;s accession to the WTO&nbsp;</li>\n            </ul>', NULL, 'accordian', 7, 1, '2020-05-26 17:18:10', '2018-05-18 02:53:40'),
(9, 'Advocacy', '<p>SAWTEE conducts various programmes advocating the cause of social justice and economic equity in the context of globalization and liberalization in general and trade liberalization in particular. SAWTEE and its member institutions organize conferences, seminars, policy dialogues, consultation meetings, talk programmes, monthly forums and interaction programmes at regular intervals to achieve this objective. The advocacy at the policy level is also supplemented by publication and distribution of policy briefs, briefing papers and issue papers on relevant issues on a timely manner.</p>\n\n            <p>Successful advocacy campaigns of SAWTEE and its member institutions include:</p>\n\n            <ul>\n            <li>Adoption of the concept of regional “seed bank” as an instrument for protecting food security in South Asia, which is reflected in the Declaration adopted by the 16th Summit of the South Asian Association for Regional Cooperation (SAARC) held in Bhutan in April 2010.</li>\n            <li>Convincing the Government of Nepal to preserve policy space required for achieving its development objectives in the process of signing Trade and Investment Framework Agreement (TIFA) with the United States.\n            Convincing the Government of Nepal to preserve the policy space required for achieving its development objectives in the process of the country’s accession to the WTO.</li>\n            <li>Convincing South Asian governments not to join the International Union for the Protection of New Varieties of Plant (UPOV), which could be detrimental to the interest of nearly 800 million farmers in the region.</li>', NULL, 'accordian', 7, 1, '2014-02-15 23:52:21', '2020-01-28 17:31:17'),
(10, 'Capacity Building', '<p>Recognizing the need to build the capacity of the concerned stakeholders in South Asia so as to better equip them with information and advocacy tools to provide adequate safety nets for the protection of poor, marginalized and vulnerable communities and people through enhanced regional and international cooperation, SAWTEE conducts capacity-building activities at various levels. Training workshops, monthly forums, information dissemination, internship programmes, etc., are the major vehicles through which SAWTEE builds the capacity of its member institutions, network institutions and other NGOs.</p>\n            <p>Some of the capacity-building efforts of SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Training of South Asian Economic Journalists on WTO issues and subsequent formation of South Asian Centre for Economic Journalists (SACEJ).</li>\n            <li>Training of South Asian researchers on Computable General Equilibrium (CGE) modelling for three consecutive years since 2008.</li>\n            <li>Creating a batch of young WTO practitioners from South Asia, through continuous training to the same group of people for eight years (between 1997 and 2004).</li>\n            <li>Capacity building of Nepali customs officials on Nepal&rsquo;s obligations under multilateral, regional and bilateral trade agreements.&nbsp;</li>\n            <li>Capacity building of Nepal\'s Ministry of Commerce and Supplies (MoCS) on emerging trade issues.</li>\n            <li>Capacity building of Nepali trade negotiators on issues and modalities of negotiations of SAARC Framework Agreement on Services (SAFAS).</li>\n            </ul>', NULL, 'accordian', 7, 1, '2014-10-25 04:57:23', '2019-07-26 16:00:34'),
(11, 'Sensitization', '<p>To inform, educate and provoke action from a wide readership, SAWTEE and its member institutions regularly publish briefing papers on issues related to globalization, liberalization, multilateral trading system, regional cooperation, competition policy, environment, IPRs, food security, farmers&rsquo; rights, etc. SAWTEE also publishes a quarterly magazine titled Trade Insight in which it includes analytical articles on contemporary trade and sustainable development issues. Besides, office bearers and staff members of SAWTEE as well as those of its member institutions publish articles on contemporary issues and agenda pursued by SAWTEE, in national, regional and international newspapers, magazines and journals.</p>\n            <p>Successful sensitization programmes conducted by SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Sensitization of consumers on the role they need to play in the regulation of electricity.</li>\n            <li>Sensitization of foreign ministry officials of South Asia through the publication of special briefs prior to the 16th SAARC Summit.</li>\n            <li>Sensitization of Member of Parliaments of Nepal and Pakistan on trade and development issues.</li>\n            <li>Sensitization of farmers and indigenous communities on their rights under the Convention of Biological Diversity (CBD) and the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), and how to protect these rights in the context of the attempt at ratcheting up intellectual property protection under the WTO\'s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS) and IPR provisions included in various bilateral and regional trade arrangements.</li>\n            </ul>', NULL, 'accordian', 7, 1, '2020-11-30 07:52:45', '2020-01-07 20:59:54'),
(12, 'Networking and alliance building', '<p>SAWTEE as well as its member institutions are active members of various national, regional and international alliances. By virtue of this networking, they are involved in collective efforts to realize the objective of fair trade and equitable development in the region. SAWTEE has established network linkages with the media, the academia and research institutions at national, regional and international levels, and seeks and obtains critical inputs from them. At the international level, SAWTEE has established close institutional linkages with ActionAid, London, Bangkok and Kathmandu; Centre for International Environmental Law (CIEL), Geneva; Centre for Policy Dialogue (CPD), Dhaka; Consumers International (CI), London and Kuala Lumpur; EU-LDC Network, Rotterdam; Friedrich Ebert Stiftung (FES), Germany and Kathmandu; Gene Campaign, New Delhi; Institute of Agriculture and Trade Policy (IATP), Minneapolis; International Centre for Trade and Sustainable Development (ICTSD), Geneva; International Plant Genetic Resources Institute (IPGRI), Rome; International Development Research Centre (IDRC), Ottawa; Local Initiatives for Biodiversity, Research and Development (LI-BIRD), Pokhara; MS Swaminathan Research Foundation (MSSRF), Chennai; Novib, The Hague; Oxfam, New Delhi; Southern and Eastern African Trade Information and Negotiations Institute (SEATINI), Harare; Southeast Asian Council for Food Security &amp; Fair Trade (SEACON), Kuala Lumpur; The World Conservation Union (IUCN), Kathmandu; United Nations Conference on Trade and Development (UNCTAD), Geneva and New Delhi; Wageningen University, Wageningen; World Trade Institute (WTI), Berne; and World Trade Organisation (WTO), Geneva, among others. &nbsp;</p>', NULL, 'accordian', 7, 1, '2014-07-17 23:24:06', '2017-09-17 19:50:59'),
(13, 'Resources', '<p>SAWTEE has been sustaining itself through membership fees and contributions, sales proceeds of its publications and support from development partners. SAWTEE has received support from, among others, the following development partners:</p>\n            <ul>\n            <li>ActionAid, Kathmandu and Bangkok</li>\n            <li>The Asia Foundation, Kathmandu</li>\n            <li>CARITAS, Kathmandu</li>\n            <li>Development Fund, Oslo</li>\n            <li>Department for International Development, Kathmandu</li>\n            <li>Friedrich Ebert Stiftung, New Delhi and Kathmandu</li>\n            <li>Ford Foundation, New Delhi</li>\n            <li>International Centre for Integrated Mountain Development (ICIMOD), Kathmandu</li>\n            <li>International Development Research Centre (IDRC), Ottawa</li>\n            <li>MS Nepal, Kathmandu</li>\n            <li>Oxfam Novib, The Hague</li>\n            <li>United Nations Conference on Trade and Development (UNCTAD), Geneva</li>\n            <li>United Nations Development Programme (UNDP), Kathmandu, Regional Centre in Colombo and Regional Centre in Bangkok</li>\n            <li>United Nations Fund for Women (UNIFEM) Regional Office, New Delhi</li>\n            <li>USC Canada, Kathmandu</li>\n            </ul>', NULL, 'default', NULL, 1, '2019-09-27 03:39:36', '2022-01-05 00:55:47'),
(14, 'Intro', '<p>Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability. With these guiding elements, our major thematic areas for research and advocacy are the following:</p>', NULL, 'default', NULL, 2, '2017-12-13 05:46:34', '2017-04-10 06:30:33'),
(15, 'Sectors', '', NULL, 'tabs', NULL, 2, '2014-05-16 20:24:54', '2023-05-22 19:33:15'),
(16, 'Our Programmes', NULL, '/category/programmes', 'tabs', 15, 2, '2019-09-16 20:42:39', '2023-12-06 00:46:03'),
(17, 'Research', NULL, '/category/research', 'tabs', 15, 2, '2014-04-24 19:44:10', '2023-12-06 00:46:16');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Home Page Slider', '2023-12-03 23:40:14', '2023-12-03 23:40:14');

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

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `slider_id`, `title`, `subtitle`, `created_at`, `updated_at`) VALUES
(1, 1, 'Temporibus voluptate', 'Quae magni et velit', '2023-12-04 00:22:14', '2023-12-04 00:22:14'),
(2, 1, 'Voluptatibus consequ', 'Error quibusdam eius', '2023-12-04 03:29:39', '2023-12-04 03:29:39'),
(3, 1, 'Quo obcaecati non pl', 'Est in tempor fuga', '2023-12-04 03:30:43', '2023-12-04 03:30:43');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_at` timestamp NULL DEFAULT NULL,
  `status` enum('unverified','verified') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unverified',
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'porro', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(2, 'eos', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(3, 'cupiditate', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(4, 'minima', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(5, 'doloribus', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(6, 'amet', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(7, 'quis', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(8, 'architecto', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(9, 'quas', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(10, 'repudiandae', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(11, 'eligendi', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(12, 'soluta', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(13, 'voluptas', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(14, 'ipsum', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(15, 'ducimus', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(16, 'nemo', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(17, 'at', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(18, 'deserunt', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(19, 'vero', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(20, 'alias', '2023-12-03 23:40:04', '2023-12-03 23:40:04');

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
(1, 'Economic and social reform, growth and poverty', 'Identifies South Asia’s development interests, in particular, those of the marginalized and poor people, communities and workers, in regional economic and social reform processes; and advocates their mainstreaming into economic and social policies, and growth and development processes.', '2015-06-27 01:29:43', '2015-01-11 22:54:01'),
(2, 'Trade integration and supply-side constraints', 'Advocates the region’s trade and development interests in bilateral, regional and multilateral trade negotiations and deals; and identifies ways and mechanisms to address South Asian countries’ supply-side constraints for their meaningful integration into the global economy.', '2020-04-19 02:32:19', '2017-05-18 18:21:18'),
(3, 'Trade and climate change', 'Promotes mutual compatibility between trade and climate change objectives by providing support to government, private sector and civil society organizations to design and implement policies that contribute to climate change mitigation and adaptation by utilizing trade as an instrument, and supporting government agencies in international negotiations.', '2020-05-04 19:24:13', '2023-01-06 07:18:03'),
(4, 'Agriculture policies, biodiversity management and food security', 'Calls for comprehensive agriculture policies that strengthen traditional farming systems and advance farmers\' traditional knowledge for meeting long-term food security objectives; and advocates community-centred biodiversity management policies, laws and programmes, including those relating to IPRs, so as to protect farmers\' rights to seeds and traditional knowledge.', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(5, 'Competition, regulation and competitiveness', 'Monitors the status and trends in markets for generating information and analysis on anti-competitive practices; advocates effective regulatory systems and measures for the protection of consumer rights and promotion of good business practices; and identifies and advocates policy and institutional measures for scaling up the competitiveness of domestic enterprises and institutions.', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(6, 'Financial resource management', 'Assesses the nature and trends of aid inflows as well as their allocation and sectoral use for identifying measures to enhance aid effectiveness; keeps track of government budget expenditures for productive investment; and advocates gender-responsive and pro-poor budget.', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(7, 'Remittance and development', 'Identifies mechanisms for improving human capital and effective remittance management; and advocates measures needed to ensure productive and decent working conditions, poverty reduction and human development.', '2023-12-03 23:40:04', '2023-12-03 23:40:04');

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
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$XEJJJ0wwLKkFrUe0i2pvfeyvxiKBRgP8IvEXfCOLbo7xOqTu5QbiS', NULL, NULL, NULL),
(2, 'Lamar Jones', 'harber.edgardo@example.net', '2023-12-03 23:40:04', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '52dlzbBxDE', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(3, 'Marquise Toy', 'stanton.tyson@example.org', '2023-12-03 23:40:04', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vii3qsdBd7', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(4, 'Allene McLaughlin', 'pvon@example.net', '2023-12-03 23:40:04', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'd80cJjIzkO', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(5, 'Darius Wuckert', 'farrell.kim@example.org', '2023-12-03 23:40:04', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'XFnookBjVu', '2023-12-03 23:40:04', '2023-12-03 23:40:04'),
(6, 'Mr. Heber Anderson', 'marina.schoen@example.org', '2023-12-03 23:40:04', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'c3XwOdfyxP', '2023-12-03 23:40:04', '2023-12-03 23:40:04');

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
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_menu_id_foreign` (`menu_id`);

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `post_tag`
--
ALTER TABLE `post_tag`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

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
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE;

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
-- Constraints for table `slides`
--
ALTER TABLE `slides`
  ADD CONSTRAINT `slides_slider_id_foreign` FOREIGN KEY (`slider_id`) REFERENCES `sliders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
