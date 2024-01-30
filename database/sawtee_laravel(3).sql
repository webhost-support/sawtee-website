-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 27, 2023 at 11:41 AM
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
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('post','publication','research') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `type`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Featured Events', 'featured-events', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(2, 'Programmes', 'programmes', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(3, 'Completed Programmes', 'completed-programmes', 'post', 2, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(4, 'Ongoing Programmes', 'ongoing-programmes', 'post', 2, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(5, 'Covid', 'covid', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(6, 'Infocus', 'infocus', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(7, 'Newsletters', 'newsletters', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(8, 'Sawtee in Media', 'sawtee-in-media', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(9, 'Blog', 'blog', 'post', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(10, 'Publication', 'publication', 'publication', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(11, 'Trade Insight', 'trade-insight', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(12, 'Discussion Paper', 'discussion-paper', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(13, 'Briefing Paper', 'briefing-paper', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(14, 'Policy Brief', 'policy-brief', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(15, 'Issue Paper', 'issue-paper', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(16, 'Working Paper', 'working-paper', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(17, 'Books', 'books', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(18, 'Reseacrh Brief', 'research-brief', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(19, 'Others', 'others', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(20, 'Publications in Nepali', 'publications-in-nepali', 'publication', 10, '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(21, 'Research', 'research', 'research', NULL, '2023-11-27 00:24:20', '2023-11-27 00:24:20');

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
(1, 'App\\Models\\Slide', 1, '83cd4738-e48b-4c22-9951-462f8aacc287', 'slides', 'DSC_0397', 'DSC_0397.webp', 'image/webp', 'media', 'media', 689186, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:31:35', '2023-11-27 01:31:36'),
(2, 'App\\Models\\Slide', 2, 'fd08ca71-9093-4648-b18a-789e7680ffdc', 'slides', 'fishing-resized', 'fishing-resized.webp', 'image/webp', 'media', 'media', 201348, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:31:49', '2023-11-27 01:31:50'),
(3, 'App\\Models\\Slide', 3, '60a4fab9-ec78-457b-a765-de4e9d527475', 'slides', 'climate-change-resized', 'climate-change-resized.webp', 'image/webp', 'media', 'media', 193152, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:32:10', '2023-11-27 01:32:10'),
(4, 'App\\Models\\Slide', 4, 'f557ccde-5307-4908-afa2-8aeb4b19c688', 'slides', 'sharing-resized', 'sharing-resized.webp', 'image/webp', 'media', 'media', 307118, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:32:33', '2023-11-27 01:32:33'),
(5, 'App\\Models\\Slide', 5, '99eb8057-d389-4175-86c7-be8418040fc5', 'slides', 'TI-2', 'TI-2.webp', 'image/webp', 'media', 'media', 1596066, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:32:54', '2023-11-27 01:32:55'),
(6, 'App\\Models\\Slide', 6, 'ddb1ad24-4da4-4e78-8ac3-f3763edb8d51', 'slides', 'hero-image', 'hero-image.webp', 'image/webp', 'media', 'media', 477368, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:33:21', '2023-11-27 01:33:22'),
(7, 'App\\Models\\Slide', 7, '1f794ff9-e972-46cc-b9b2-24391893d2ea', 'slides', 'our-work', 'our-work.webp', 'image/webp', 'media', 'media', 294606, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:33:37', '2023-11-27 01:33:38'),
(8, 'App\\Models\\Slide', 8, '38ba055a-7e3a-478b-ba13-f1c755c9839e', 'slides', 'IMG_1377-resized', 'IMG_1377-resized.webp', 'image/webp', 'media', 'media', 486120, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:34:02', '2023-11-27 01:34:02'),
(9, 'App\\Models\\Slide', 9, 'e95bf17f-ff3e-4879-8a49-e0582a536dc4', 'slides', 'FE-1', 'FE-1.webp', 'image/webp', 'media', 'media', 143956, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 01:34:14', '2023-11-27 01:34:14'),
(10, 'App\\Models\\Publication', 1, '63f51652-2adc-4089-93dd-eaa1bc9a87ff', 'publication_featured_image', 'Trade-Insight-1', 'Trade-Insight-1.jpg', 'image/jpeg', 'media', 'media', 122572, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 03:30:53', '2023-11-27 03:30:54'),
(11, 'App\\Models\\Publication', 2, '2d94aadd-6b6a-45dc-a11d-40be086483e0', 'publication_featured_image', '92trade_insight2', '92trade_insight2.jpg', 'image/jpeg', 'media', 'media', 30556, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 03:38:29', '2023-11-27 03:38:29'),
(12, 'App\\Models\\Publication', 3, '3770e168-a6be-4518-9dfb-0b206e707c80', 'publication_featured_image', '21trade_insight', '21trade_insight.jpg', 'image/jpeg', 'media', 'media', 34798, '[]', '[]', '{\"preview\": true}', '[]', 1, '2023-11-27 03:40:08', '2023-11-27 03:40:08');

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
(1, 'Home', 'home', '2018-12-12 23:57:17', '2021-10-27 10:17:42'),
(2, 'About', 'about', '2015-05-07 14:04:31', '2016-02-25 02:58:54'),
(3, 'Our Work', 'our-work', '2014-11-30 15:46:50', '2022-12-30 05:02:10'),
(4, 'Contact', 'contact', '2017-06-04 22:48:26', '2019-01-08 10:59:50'),
(5, 'career', 'career', '2017-11-06 23:54:32', '2019-04-14 04:18:36');

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
  `published_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(1, 6, 7, 'Sunt molestiae et omnis fugit fugiat expedita ut.', 'sunt-molestiae-et-omnis-fugit-fugiat-expedita-ut', 'Maxime perspiciatis quia in adipisci temporibus ut a. Voluptas ut soluta iusto sed ex velit quam exercitationem. Autem distinctio sapiente sunt culpa earum ut perferendis totam.\n\nEx quo voluptates ut deserunt officia ea. Debitis quo alias quis perspiciatis ipsa at.\n\nAlias officiis sint ea sed. Autem optio repudiandae rerum iure molestias veritatis. Temporibus quisquam et sed in. Voluptas dicta quia consectetur praesentium rerum.\n\nIllum enim debitis dolores sint illum ea. Saepe voluptatem et magnam voluptates. Sunt nihil sit tempore incidunt omnis sunt voluptates.', 'Nesciunt aliquid libero aliquam reiciendis ut velit. Sed distinctio rem natus esse inventore dolor.', 'Garnett Simonis', 'published', 'http://mckenzie.info/', '1987-09-05', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(2, 2, 1, 'Odit reprehenderit cumque ducimus reprehenderit.', 'odit-reprehenderit-cumque-ducimus-reprehenderit', 'Qui incidunt perspiciatis beatae autem aut enim reprehenderit. Sunt hic incidunt sit ut quas voluptas assumenda quo. Et est totam qui dignissimos vero nostrum ab amet. Provident eum distinctio rem repellat.\n\nIpsam doloribus adipisci dolores quis quod vitae mollitia totam. Explicabo nihil quia voluptas ut voluptas ducimus. Voluptatum ut nihil voluptatum ipsum beatae.\n\nRerum illo temporibus mollitia necessitatibus pariatur. Et nam dolor eos qui velit hic. Cum dolorum ut similique porro in et ratione voluptate. Eum autem neque adipisci vel voluptates inventore illum.\n\nProvident aut soluta cupiditate voluptatibus autem rerum. Perferendis culpa minima blanditiis tempore aliquam quia ut maiores. Iste reiciendis aliquam suscipit unde.', 'Voluptatem eos debitis est. Ad inventore quia ab a enim. Quis molestias iure aperiam est corporis sed nostrum. Natus dolores repellendus et quia rerum quae vero.', 'Mrs. Kaela Auer MD', 'published', 'http://www.graham.com/', '1996-03-30', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(3, 6, NULL, 'Magnam excepturi sed aut quo et.', 'magnam-excepturi-sed-aut-quo-et', 'Praesentium maiores eaque in ab qui eos est. Fuga fugit occaecati non optio. Ea culpa aperiam dolores. Quo tempora aut voluptas et doloremque.\n\nExcepturi dolorem et dolorem odit sed perspiciatis. Voluptates qui voluptatem deserunt. Expedita veniam occaecati ut sed fuga. Sed alias minus omnis vel sed laborum veniam.\n\nEnim voluptate qui eum quasi aliquid. Optio deleniti magni dolorem aut qui.\n\nRecusandae sunt officia sed ea dolore reiciendis doloribus commodi. Officiis cupiditate nobis rerum nisi optio excepturi et. Ea ut dicta sit illum illum dolores a. Nulla illo quas totam.', 'Rerum autem beatae aut vitae est nobis maiores. Asperiores eius non rerum quis asperiores et mollitia. Esse quibusdam aut temporibus velit.', 'Gayle Armstrong I', 'published', 'http://rodriguez.com/ea-ut-voluptas-id', '2016-10-16', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(4, 5, 5, 'Facere adipisci possimus distinctio ut nobis enim et.', 'facere-adipisci-possimus-distinctio-ut-nobis-enim-et', 'Et tenetur dolorem sed numquam dignissimos nostrum aut qui. Est vitae ipsa autem exercitationem qui accusantium. Atque qui atque alias saepe. Id non alias voluptate modi asperiores dolor.\n\nNecessitatibus autem voluptates aut itaque harum adipisci. Officia ab aliquam recusandae quia laborum vel. Sequi quis aperiam est quisquam vel iste. Et quas ipsum cupiditate vero velit esse consequatur.\n\nNemo assumenda non ut exercitationem. Commodi unde officia assumenda natus autem. Beatae aut molestias et culpa.\n\nNesciunt ut officia voluptatem id placeat. Itaque velit dolor occaecati libero dolores perspiciatis. Totam saepe ex officia placeat architecto et temporibus. Officia sint cumque vitae repudiandae et facere aut.', 'Adipisci consequatur non qui perspiciatis. Voluptas fugiat sequi totam distinctio sit accusantium. Quia vitae repellat earum molestiae cumque praesentium officia.', 'Dr. Vincenzo Baumbach', 'published', 'http://borer.com/maxime-unde-dolorem-explicabo-corporis-porro.html', '2010-07-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(5, 1, NULL, 'Cupiditate ad ea explicabo dicta cumque eum ad.', 'cupiditate-ad-ea-explicabo-dicta-cumque-eum-ad', 'Vitae doloremque et rerum quo pariatur aut. Neque nihil error modi ipsa est. Aut veniam error laborum tenetur qui omnis eos.\n\nNon eos culpa minima nam facere blanditiis. Doloremque reprehenderit aliquam necessitatibus. Iste maiores temporibus non similique exercitationem eum temporibus. Ut veniam a aut voluptatem libero ipsum.\n\nNisi non fugiat qui eaque eveniet unde voluptatem praesentium. Alias doloremque doloremque voluptas perferendis vel et. Dicta autem velit explicabo animi ex. Dolor unde facilis reiciendis. Adipisci officia ipsam laudantium quia.\n\nQuo adipisci quae cupiditate ducimus. Earum cum quisquam dolor. Omnis atque dolores non sunt aliquam minus voluptatem. Temporibus architecto atque error excepturi.', 'Ipsam voluptatibus autem accusamus libero soluta impedit. Voluptatem amet eos in consectetur aut voluptatem. Dolores soluta quasi aut rerum tenetur eum recusandae.', 'Miss Marjolaine Zboncak II', 'published', 'https://farrell.com/libero-rerum-molestiae-illum-ab-consequatur-omnis.html', '2023-04-20', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(6, 2, NULL, 'Fugit vitae odit molestiae velit rerum officiis sed.', 'fugit-vitae-odit-molestiae-velit-rerum-officiis-sed', 'Repellendus mollitia tempora consequatur dolorem voluptate est. Optio nesciunt modi quo officiis sit distinctio omnis veniam. Omnis qui non distinctio totam.\n\nConsequatur rerum quisquam magnam est nesciunt. Velit maiores ab sed facilis omnis sequi. Maxime distinctio occaecati cumque quidem sunt aliquid fugit corrupti.\n\nQuia similique tempore iusto. Ipsam enim quisquam fuga enim hic. Quos quibusdam tempore libero reiciendis suscipit et.\n\nAutem quo ut magni dolores ut est. Nihil quis earum nostrum eius inventore. Consequatur nihil mollitia aperiam cupiditate reprehenderit et. Beatae non sed culpa pariatur.', 'Eius voluptatum ducimus est sed sit. Quidem consequuntur dolorem odio. Et sed praesentium harum alias aut non sed.', 'Anais Bahringer', 'published', 'http://roberts.com/omnis-vel-corporis-aspernatur-sit.html', '1970-07-23', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(7, 5, 6, 'Quam totam perspiciatis rerum ut autem ea.', 'quam-totam-perspiciatis-rerum-ut-autem-ea', 'Voluptate ut veritatis aliquid sed. Dolorum quae quae sequi possimus. Pariatur aspernatur molestias eveniet minus alias. Quidem reprehenderit iure et nisi ab et quos reiciendis.\n\nCulpa pariatur et eos itaque et. Ut nulla saepe alias sed accusamus soluta animi impedit. Animi rerum sed nam accusantium voluptatem.\n\nQuibusdam quasi voluptas quidem iste necessitatibus. Voluptatem quos rerum est a quia exercitationem. Voluptates esse dolor dolor modi.\n\nAb veniam accusantium ut facere dolorem nisi. Voluptatum velit numquam id voluptatum sed maiores. Illo quo nostrum recusandae. Nihil fugit voluptatum dolorem commodi qui dignissimos.', 'Quidem porro et est autem corporis culpa necessitatibus. Rem et in nihil ad. Dignissimos blanditiis dolorum nostrum quas commodi.', 'Camryn Tillman', 'published', 'http://www.steuber.com/pariatur-accusamus-sed-molestiae-debitis-est-accusamus-sit', '1980-07-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(8, 6, 5, 'Totam voluptatum similique pariatur.', 'totam-voluptatum-similique-pariatur', 'Perspiciatis a enim non dolorum iure. Voluptatem sed quis est doloribus exercitationem tempora. Labore est quo laudantium quo dicta laborum quaerat quia.\n\nPossimus placeat asperiores aliquam earum vel. Illum et consequatur eum quaerat quo esse voluptates voluptatem. Qui fugiat inventore ea nesciunt perspiciatis quia ducimus mollitia.\n\nTenetur quo voluptas qui reiciendis qui nisi. Iure soluta quod autem autem. Corporis id doloribus esse iusto fugiat.\n\nDolores id possimus est ipsum dicta. Maiores tenetur velit est hic et hic. Voluptate earum nihil saepe ut. Consectetur eaque autem consequatur.', 'Rem ea possimus atque eaque qui nihil quam. Molestiae illo praesentium qui necessitatibus. Molestiae sint officia et accusamus alias voluptas. Ullam aut ab ea nobis rem blanditiis.', 'Mrs. Keira Legros V', 'published', 'http://rohan.net/aut-nobis-harum-veniam-occaecati', '1973-10-09', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(9, 5, 7, 'Iste aut sit explicabo eveniet nihil illum eos.', 'iste-aut-sit-explicabo-eveniet-nihil-illum-eos', 'Sint et vero minus est. Asperiores molestiae ad vero dolorem ullam expedita. Veniam error ipsam adipisci libero qui facere. Aspernatur consequuntur delectus et voluptatum ullam ea quo quia.\n\nSunt et perferendis soluta ut. Temporibus veniam nostrum ut quis. Sit consequatur quasi et enim.\n\nUt omnis officiis eius nesciunt eos vero eligendi. Consequatur consequuntur quasi a amet.\n\nVelit cum sit vero asperiores doloremque numquam dolorem. Quisquam et facilis eius est iure incidunt. Beatae qui sapiente enim numquam. Aut autem doloremque nobis excepturi nulla.', 'Explicabo aperiam qui ea sit. Consequatur ea recusandae voluptatem qui nostrum eveniet dignissimos necessitatibus. Et voluptatem eos temporibus placeat aut aut.', 'Ms. Monique Toy V', 'published', 'http://bode.biz/quas-vel-eum-pariatur-deserunt', '2017-12-05', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(10, 7, 3, 'Dolores earum omnis iusto necessitatibus doloribus aut.', 'dolores-earum-omnis-iusto-necessitatibus-doloribus-aut', 'Perferendis ut at consequatur iusto sint necessitatibus ut. Aut atque nihil omnis et quam aut quos. Debitis omnis et alias quod quaerat neque. Fuga in repellat dolor illum dolor optio necessitatibus. Modi recusandae ex non perspiciatis.\n\nNisi laboriosam eum earum officiis iusto autem mollitia et. Blanditiis qui voluptas repudiandae voluptas. Saepe quas fuga minus quibusdam et.\n\nVel quia quis consequatur id incidunt ex saepe. Qui a aspernatur consequuntur saepe est. Voluptates ut quis sed.\n\nSit nisi quibusdam fugit corrupti cumque. Rerum sit qui et maiores quis. Eius et iure sed dolor architecto cumque porro. Odio porro eligendi non.', 'Qui cupiditate natus et suscipit et. Impedit quia facere consequuntur quis ea ea eveniet. Accusamus nihil nobis quam odio magni qui qui. Ducimus ab deleniti sint architecto rerum iusto voluptatibus.', 'Diamond Feest', 'published', 'https://waelchi.com/quos-consectetur-dolores-tenetur-recusandae-sit.html', '2017-08-04', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(11, 7, 1, 'Quae quae dolorum rem voluptatem aliquid quo est reprehenderit.', 'quae-quae-dolorum-rem-voluptatem-aliquid-quo-est-reprehenderit', 'Magni laboriosam fugiat et nam tempora dicta quia laborum. Esse vero sunt ea dignissimos beatae debitis et. Et eius vero laborum provident. Et reprehenderit minima dolorem.\n\nRatione deleniti doloribus est pariatur aut rerum. Expedita autem aliquam eos sunt tempore aliquam ut. Harum ab suscipit ipsum voluptatem consequatur. Aperiam accusantium voluptates voluptatibus consequatur.\n\nUt quaerat eum odio minima recusandae unde. Et qui sit quam expedita ipsum officia. Aut et minus inventore qui deleniti ipsa aut illo.\n\nDignissimos voluptatem ipsum est optio odit. Porro aperiam quidem non sint est laboriosam. Ullam tempora reiciendis doloribus rerum veritatis et.', 'Repudiandae aliquid in totam necessitatibus aperiam maxime. Est saepe earum sunt ratione ea. Deserunt at cumque adipisci illum minus. Nulla non delectus in ea aut.', 'Marian Daugherty II', 'published', 'http://sauer.info/ducimus-non-qui-eum-molestias-est-officiis', '1993-05-31', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(12, 7, NULL, 'Consequatur minus distinctio aliquam explicabo.', 'consequatur-minus-distinctio-aliquam-explicabo', 'Perspiciatis et repellendus nobis dolores tempore officia. Exercitationem quis nesciunt minima qui consequuntur nihil quod. Voluptas molestias inventore autem mollitia quia.\n\nNisi et autem sed et aut hic. Aperiam cumque dicta totam magni hic molestias. Et numquam qui ipsam ipsum voluptatem.\n\nQuia impedit facilis delectus saepe fuga enim ratione minima. Tempora culpa et velit dolore architecto. Veniam qui et explicabo aperiam excepturi.\n\nPerspiciatis corporis laudantium quae assumenda sed. Aut est numquam aut cupiditate dolore vel. Voluptates ipsum voluptatem iste. Unde molestiae occaecati et eum quo dicta consequatur vitae. Possimus voluptates a et fugiat dolore.', 'Qui vitae eos qui totam omnis. Rerum et accusamus et est ut in dolor. Labore quia voluptatem sed debitis aut assumenda. Libero est nemo consequatur blanditiis repellat.', 'Verlie Corwin', 'published', 'http://www.sipes.info/ex-ipsam-eligendi-dolorem-ullam', '1995-01-04', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(13, 5, 6, 'Nam sed voluptas atque accusantium veritatis accusamus.', 'nam-sed-voluptas-atque-accusantium-veritatis-accusamus', 'Est cumque tempora consequatur qui vel quos voluptates voluptas. Officia rerum deleniti incidunt fuga eos. Repellendus eligendi minus rem sunt et. Omnis dolore odio commodi et hic at.\n\nSit sed harum atque ipsum sed laborum tempora. Est est nisi corporis aperiam dolores. Dolores odit aspernatur assumenda dolor quam rerum cumque. Et impedit sit labore eveniet molestias.\n\nQuis vitae molestiae doloribus. Iusto dignissimos quod sapiente magnam corrupti quia qui. Asperiores ullam ab ullam temporibus et provident commodi. Molestias laboriosam quam repellendus ut modi officiis autem culpa.\n\nQuia quo maiores rerum ipsum sunt illo. Commodi aspernatur nulla vel velit velit sit. Recusandae in qui et dolor sit commodi et non. Neque et at delectus est alias magnam beatae veniam.', 'Voluptatem ut ipsum voluptas est consequatur. Ea sint id doloremque sequi nemo voluptas. Neque id consequatur animi ratione.', 'Jonathan Dach', 'published', 'http://www.stracke.com/laudantium-occaecati-hic-atque-dolorem-corporis-aspernatur-dicta', '2003-09-17', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(14, 2, 3, 'Beatae aut reprehenderit tempora accusamus laborum dolor.', 'beatae-aut-reprehenderit-tempora-accusamus-laborum-dolor', 'Exercitationem cupiditate eum tenetur quaerat et autem. Sint odio explicabo voluptas quis in aut velit. Dolorem debitis ut et.\n\nDucimus quasi qui sunt dolores voluptatem similique. Nobis ad quia non enim ea eos. Eos nam doloribus quasi mollitia ab laudantium.\n\nDoloremque aut libero quod iure amet alias quibusdam. Consequatur aut reiciendis distinctio iusto fuga reprehenderit. Ea quia cum ut quia. Aut eum quae illum in.\n\nRepellendus alias recusandae eos qui sit dolore. Qui id iste sed soluta error hic autem. Quidem rerum qui quaerat deserunt.', 'Non officia cupiditate est at molestiae beatae fuga. Sed ut labore quia libero iste asperiores omnis. Non adipisci odit hic voluptatem necessitatibus rem quam. Sint deserunt deleniti dicta.', 'Porter Lind', 'published', 'http://www.marks.com/ipsa-consequatur-minima-et-tempore', '1993-09-12', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(15, 7, NULL, 'Vel quaerat assumenda nam rem commodi vel repellendus non.', 'vel-quaerat-assumenda-nam-rem-commodi-vel-repellendus-non', 'Numquam aperiam rerum dolor eaque. Omnis autem illum in illum asperiores debitis. Inventore ad voluptate quia vel quisquam non id sed. Consequuntur quibusdam corporis molestiae omnis et.\n\nVitae deleniti optio vero laudantium soluta laborum quaerat. Quasi facere excepturi itaque et ex in. Harum nostrum magnam aspernatur ex quae. Quis quia est sed laboriosam non nemo officia.\n\nAb id aspernatur expedita quam enim quibusdam. Non molestias mollitia facere enim quos atque amet molestias. Qui commodi non ut quia omnis.\n\nAspernatur voluptas necessitatibus ut aut dolor magni. Quia et placeat cum nemo. Veritatis iure qui voluptatem dicta doloremque. Et et aliquam iure est.', 'Praesentium temporibus eum et aut. Omnis doloremque aut qui doloribus saepe. Est at quia quaerat repellat.', 'Loraine Feeney', 'published', 'http://www.wisoky.net/', '1997-07-11', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(16, 5, NULL, 'Iusto modi sed iusto itaque et voluptate.', 'iusto-modi-sed-iusto-itaque-et-voluptate', 'Consequatur voluptatem provident et est reiciendis. Eos iure enim ea iste quia iusto veniam. Consectetur sit necessitatibus quia tempore corrupti repudiandae earum. Quia deserunt et dolorem. Aspernatur esse totam eligendi beatae voluptate placeat.\n\nVoluptas rerum nostrum nihil officiis. Quia eveniet qui et commodi voluptatibus eaque fuga. Dolores voluptatem libero quisquam fuga.\n\nEligendi expedita fugiat qui soluta. Voluptas soluta tempora et sit officiis harum.\n\nMolestiae magni est occaecati repellendus ex et. Rem est ex doloribus architecto voluptas impedit voluptates. Incidunt neque aspernatur corporis ea in libero.', 'Illo sed laborum et eum. Totam eos nisi odio nisi quam blanditiis mollitia.', 'Aric Russel', 'published', 'https://conn.com/consequatur-quia-quia-laudantium-consectetur-fuga-dolor-pariatur.html', '2020-07-28', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(17, 6, NULL, 'Odit aut rerum voluptas est reprehenderit provident sed sint.', 'odit-aut-rerum-voluptas-est-reprehenderit-provident-sed-sint', 'Eum cupiditate mollitia optio quibusdam in. Totam hic aut sit omnis maiores est. Soluta doloremque sed aperiam. Doloremque voluptatem est eligendi molestias magni aut perferendis.\n\nAccusantium qui a est illum possimus. Aut velit quae aspernatur quis ipsa ex omnis. Soluta nemo esse consequuntur quos expedita. Iste voluptatem voluptatem quidem facilis architecto molestiae tenetur.\n\nDolore eos nulla voluptas adipisci. Ipsam voluptatum est provident sunt molestiae inventore. Explicabo sapiente debitis quo quaerat qui nesciunt commodi. Explicabo delectus repudiandae expedita autem dolor dignissimos.\n\nEt repellat sit ipsum quia et rerum. Mollitia velit maiores dolor in. Ut qui et sed quo molestiae labore delectus. Totam voluptatem qui provident labore quis autem. Doloribus soluta minus sed fuga quia tempora temporibus qui.', 'Corporis in nihil nemo qui praesentium. Quibusdam iste ut et perferendis aut dolorum et molestias. Quasi itaque excepturi iusto corporis assumenda.', 'Rachel Rau', 'published', 'https://kautzer.com/delectus-doloribus-molestiae-maiores-architecto-molestiae-ut-ut.html', '1978-10-27', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(18, 7, 2, 'Reprehenderit delectus placeat tempora nihil reprehenderit perferendis.', 'reprehenderit-delectus-placeat-tempora-nihil-reprehenderit-perferendis', 'Quia omnis delectus autem enim rerum. Dolorem debitis quam temporibus delectus sint sunt. Animi amet ut doloremque maiores excepturi earum tempora.\n\nUt debitis magnam animi ut rerum. Sed dolores deleniti est laudantium. Blanditiis alias ut eum maxime.\n\nEos vel qui sit sint. Quia eos inventore eveniet minima quia consequatur rerum consectetur. Quisquam explicabo est ducimus nobis et. Et sit qui magni delectus porro vero.\n\nQui praesentium debitis qui sint. Exercitationem ipsam fugiat sunt voluptatibus enim sint. Quae aliquam repudiandae quis sed voluptatum.', 'Soluta sit autem repellat omnis. Sint quisquam vel et in aut nesciunt. Mollitia quaerat quis aut unde.', 'Gudrun Balistreri Sr.', 'published', 'http://www.purdy.com/ut-aut-repellendus-quia-asperiores', '1987-08-27', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(19, 4, 4, 'Quaerat eligendi culpa velit sed recusandae optio.', 'quaerat-eligendi-culpa-velit-sed-recusandae-optio', 'Aliquam esse totam nemo voluptatem dolores suscipit. Vel officiis nam fugiat praesentium sint. Deleniti aut facilis velit ab. Atque numquam consectetur nesciunt libero vel fugit neque.\n\nQui cumque dolore aut ut. Officia saepe quisquam et ex amet odit. Quis voluptatem nemo ipsa eum odio nam in. Aperiam et maiores ad et fuga.\n\nVoluptatibus quia eos voluptatem cum. Dolor fuga doloremque et nobis. Sunt animi necessitatibus autem dolores consectetur et rerum. Commodi atque corporis quis.\n\nCumque non voluptatem qui sed et officia fugit. Est provident mollitia necessitatibus repellendus magni odio. Ipsum autem distinctio cupiditate repellat. Cumque et repellat officiis dolor sit.', 'Eius amet ducimus fugit sed animi. Quo enim corrupti ipsum commodi eum laboriosam. Modi eos vero aperiam deserunt quis animi reprehenderit veritatis.', 'Prof. Camylle Dibbert DVM', 'published', 'https://morissette.info/quas-dolore-quae-sunt-sint-similique-tenetur-enim.html', '1995-06-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(20, 3, 4, 'Sit iste aut totam soluta velit numquam.', 'sit-iste-aut-totam-soluta-velit-numquam', 'Nesciunt perspiciatis sed doloremque facere et voluptatum. Fuga architecto aut in necessitatibus voluptatibus dolorem distinctio. Pariatur sed in eum laboriosam. Non dolor repellendus nulla fugit impedit.\n\nMaxime aut tenetur qui ut saepe suscipit. Quia explicabo eaque ipsam aut quisquam. Et qui aut et tempora reprehenderit. Quasi quos et ut sunt sit. Consequatur tempore reiciendis explicabo quis quod qui.\n\nNemo magni qui ratione eum. Eius et repudiandae minima incidunt amet. Soluta dolorum officiis odit quos quibusdam beatae quia. Consectetur veritatis omnis corrupti neque aut et rerum. Ipsa rerum corrupti sed et.\n\nAut incidunt quasi repudiandae reprehenderit assumenda commodi. Illum occaecati magni placeat consequatur commodi qui. Quis provident fugit aspernatur quia.', 'Omnis quidem non accusantium veritatis nihil odit aperiam. Placeat at asperiores omnis corporis repudiandae iste. Omnis ut et aperiam et dolor repudiandae assumenda.', 'Miguel Kuhn', 'published', 'http://kuphal.com/officia-autem-dolorem-alias-eum-ipsa.html', '1981-06-16', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(21, 9, NULL, 'Mollitia a quia suscipit odio.', 'mollitia-a-quia-suscipit-odio', 'Quia magnam error mollitia numquam eos aut. Voluptas vel soluta ducimus officia alias at.\n\nRecusandae soluta nam vero alias. Corrupti nihil atque unde eaque alias. Impedit aut voluptatibus ut natus consequatur autem.\n\nId ratione et aut officia nemo quae nesciunt. Omnis corporis qui mollitia pariatur non. Excepturi sunt mollitia est autem reiciendis.\n\nAd aliquid ipsam dolore reprehenderit. Iste dolore animi veniam ut ut aliquid et. Cum labore est odit asperiores quisquam ad. Est facere eligendi accusamus debitis enim voluptas.', 'Rerum quam maxime dignissimos provident quaerat eligendi consectetur. Error voluptatem laudantium et. Alias voluptatem mollitia est voluptatem temporibus a occaecati.', 'Adrienne Effertz', 'published', 'http://www.huel.net/earum-tempora-eum-facilis-tenetur-quasi', '1973-09-22', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(22, 8, NULL, 'Voluptas commodi vitae et inventore nostrum.', 'voluptas-commodi-vitae-et-inventore-nostrum', 'Blanditiis rerum minima quia repudiandae nostrum a non harum. Ut non in est quod. Asperiores et est aperiam veniam qui. Exercitationem explicabo delectus est aspernatur.\n\nDolor iusto incidunt sed praesentium. Ipsam quo aut non et ullam. Est reiciendis sed deleniti vero expedita dolorem.\n\nUt placeat vero veritatis dolorem incidunt quaerat. Rem neque quas ut aut aut officiis velit. Mollitia consequatur qui aut sit aut vitae at.\n\nFugit ipsum non vel vitae. Qui vel qui non maxime officia fuga.', 'Exercitationem itaque sed reprehenderit. Molestiae suscipit eos ut voluptatibus. Vitae blanditiis tenetur quaerat modi similique. Non inventore in amet amet unde eum.', 'Mrs. Paige Bogan DVM', 'published', 'http://www.connelly.com/at-eaque-iusto-ab-eaque-dignissimos-provident.html', '2017-03-10', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(23, 3, 7, 'Iure iure quia qui magnam nemo ea.', 'iure-iure-quia-qui-magnam-nemo-ea', 'Modi exercitationem amet est omnis eligendi. Omnis quidem error dolor est molestiae. Exercitationem cum voluptatem vero.\n\nDeserunt mollitia enim fuga voluptatem. Modi dolorem pariatur excepturi beatae. Enim illo qui sed eum praesentium.\n\nPerspiciatis et explicabo dolore aut enim. Ea eveniet et atque nihil ullam distinctio est. Eum perspiciatis qui totam nihil.\n\nInventore culpa aut possimus dolore voluptates aut natus. Nisi esse quo sapiente. Dignissimos eos hic est vero est vel animi. Voluptatem quidem omnis maxime quae repellendus velit a.', 'Explicabo omnis atque quam nisi ut. A maxime sed aut voluptates rerum quia quas eaque. Eos occaecati voluptate sit excepturi quasi. Harum enim ullam repellat sunt suscipit sit qui ut.', 'Prof. Stewart Barrows V', 'published', 'http://ziemann.com/consequatur-quas-suscipit-quis', '1988-01-16', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(24, 1, NULL, 'Quis fuga qui quos.', 'quis-fuga-qui-quos', 'Nostrum sunt at voluptas aut numquam aut qui. Laudantium pariatur ad delectus reiciendis ea qui deleniti quia. Nostrum officiis molestias voluptatum harum.\n\nFacere natus commodi provident in. Aut est odit enim veniam quaerat qui veniam deleniti.\n\nCum tempora eaque quasi saepe dolores. Sed id autem quo expedita quibusdam. Ut perferendis et accusantium tempore harum. Atque sapiente dolor dolorem velit. Aut sequi architecto eos est ipsum fuga.\n\nNihil illo praesentium et aut molestiae. Dolores nesciunt temporibus exercitationem earum autem corporis doloribus.', 'Sunt consequatur commodi iure nisi qui. Rerum veritatis sequi dolore reiciendis. Molestias architecto rem sunt eius. Magni officia quia dolorem distinctio.', 'Tracy Rohan', 'published', 'https://www.hickle.org/dolorem-delectus-tenetur-sint-ipsam', '1999-10-12', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(25, 9, NULL, 'Repellendus labore delectus inventore error nulla porro.', 'repellendus-labore-delectus-inventore-error-nulla-porro', 'Minus animi pariatur provident enim aperiam eos dolorem. Ducimus quod non qui dolor ducimus suscipit vel. Aut error eum omnis neque omnis excepturi.\n\nUllam velit quia consequuntur quo ex cupiditate vitae alias. Reiciendis eum saepe eum qui possimus reiciendis. Autem vero totam porro fugiat. Molestias illum ea natus et. Delectus dolores recusandae provident ut porro iure dolorem exercitationem.\n\nIste praesentium dolor aut accusamus odio maiores mollitia. Officia et voluptatem ea natus asperiores fuga.\n\nConsequatur consequatur quia eaque numquam rerum sunt impedit. Ullam aperiam quod ratione consectetur. Molestiae inventore ipsam temporibus eum.', 'Iste aspernatur tenetur nihil quibusdam rem nam. Non sed magni odit illum et unde. Voluptas tenetur quia ad ex omnis a earum. Voluptatem doloremque quibusdam consectetur porro id temporibus nihil.', 'Mrs. Liliane Kilback', 'published', 'http://www.huel.org/', '1990-04-11', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(26, 2, NULL, 'Magnam quibusdam sint aut ut et quia pariatur.', 'magnam-quibusdam-sint-aut-ut-et-quia-pariatur', 'Cum ut eligendi aut cumque voluptas illum. Qui ea non tempore inventore quia quibusdam provident commodi. Et corporis impedit est velit. Sed voluptatum corrupti fugit voluptas dignissimos ipsam pariatur.\n\nEt aspernatur est est aut qui in nisi. Veniam consequuntur alias vero a dolor ut sit. Necessitatibus aliquid sint nam ratione adipisci voluptate. Error dignissimos similique saepe perferendis.\n\nQui doloribus aut minus nemo illo. Minus velit qui occaecati molestiae ut aliquam at. Eaque iusto soluta dolore excepturi qui.\n\nEos et voluptates beatae inventore. Cumque labore quisquam eveniet rem quam. Voluptas aut eos asperiores enim odit fugiat. Repellendus deserunt qui ratione culpa numquam natus aperiam.', 'Ut ut corporis molestiae consequatur optio. Quia ut asperiores vitae omnis aut. Dolore quis ut omnis pariatur.', 'Torrance Leuschke', 'published', 'http://conroy.biz/aut-aliquam-minima-quia', '1993-09-14', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(27, 6, 2, 'Eos sint voluptate laborum aperiam est voluptatem amet ducimus.', 'eos-sint-voluptate-laborum-aperiam-est-voluptatem-amet-ducimus', 'Sit non eum et minus quia. Voluptatem occaecati eos voluptatem iste ipsum ut exercitationem. Quia quis voluptas eius ex.\n\nRepudiandae ea ut dolorem id possimus dolores. Illum consequatur nobis voluptas fugit aliquid consequuntur aut. Odit repellat qui harum iusto consequuntur fuga molestiae eius.\n\nEt sit repellendus id rem et nobis laboriosam. Qui et voluptas accusamus blanditiis eveniet autem. Voluptates quia perferendis debitis nisi velit. Ut ut dolores sit aliquid vitae.\n\nEt velit voluptate recusandae amet. Laborum temporibus suscipit dolor rerum nobis nihil. Dicta accusamus explicabo impedit distinctio. Asperiores aspernatur sunt ipsam eius adipisci in aut iure. Laborum ut ullam autem aspernatur.', 'Eaque qui ea facilis sed vel. Consequatur mollitia asperiores molestias commodi velit maiores optio. Nihil et non ea rem libero ab a non. Ut odit aut beatae ut tempora non ducimus.', 'Miss Roslyn Fisher', 'published', 'http://langosh.com/', '2019-01-20', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(28, 3, NULL, 'Minima laudantium sint facilis occaecati neque et cupiditate.', 'minima-laudantium-sint-facilis-occaecati-neque-et-cupiditate', 'Porro sint itaque architecto assumenda quibusdam. Vel est non eligendi voluptas blanditiis. Quae quam quo alias ratione. Sint tenetur autem numquam sit qui.\n\nA quam quia natus sapiente magni minima. Tenetur id deserunt nostrum. Qui ipsam a sit repellat aut dolorum ipsa eaque.\n\nProvident quidem beatae totam cum dignissimos earum quia voluptatem. Architecto iusto suscipit alias ut cupiditate. Voluptatem explicabo quibusdam et laudantium et non. Ipsum occaecati eius totam et aliquam perspiciatis.\n\nSimilique voluptas dignissimos ex nihil non. Quasi reprehenderit sunt est quos. Nam debitis in consequatur aut neque.', 'Est praesentium repellat quasi placeat in corrupti sed. Maxime autem tenetur sit dolore exercitationem amet dolorum.', 'Salma Waelchi', 'published', 'http://www.carter.info/nostrum-ut-iusto-suscipit', '2022-02-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(29, 7, 7, 'Nemo incidunt eos qui consequatur omnis nihil.', 'nemo-incidunt-eos-qui-consequatur-omnis-nihil', 'Quia beatae enim harum sed dolores officia. Eum vel perferendis accusamus maiores. Quos sit distinctio blanditiis tenetur qui dolorem. Quia quos odio corrupti. Id quas sit aut possimus.\n\nOccaecati aut omnis voluptas nam sapiente vero. Qui error hic reiciendis dolores et velit autem. Et et numquam ut. Ipsa voluptatum nobis quis officiis et ea fuga.\n\nQuis provident dolor dicta aut ratione deserunt. Qui aut quia accusamus dolores ut dolorem officiis. Ea quasi inventore consectetur voluptatem veniam.\n\nQuis consequatur labore ullam sed quisquam maiores sed. Sed voluptatem facere qui voluptatem. Assumenda fuga et rerum asperiores.', 'Nostrum dolorum sit rerum similique. Dolorem quo reprehenderit rerum aut necessitatibus. Nihil in veniam doloribus cum.', 'Wilfred Conn', 'published', 'http://www.nader.biz/commodi-qui-pariatur-consectetur', '1997-08-26', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(30, 6, 2, 'Veniam et ea molestiae sed.', 'veniam-et-ea-molestiae-sed', 'Nulla nostrum ab et commodi est qui ipsum. Ad quos magnam et ea et. Ad quisquam deleniti saepe dolorem expedita esse. Illo consequatur maiores consectetur enim suscipit voluptatem.\n\nQui ut quia sunt ut omnis reprehenderit aut. Qui natus repellendus sed modi et.\n\nEos inventore est ipsam. Provident sit non eius. Ut dolorem veritatis est debitis. Quod voluptatem ab laborum ratione error quod fuga.\n\nEnim natus magni repudiandae dolor tempora. Explicabo excepturi quam odit dolorem nulla mollitia eius. Pariatur laboriosam maxime suscipit commodi eum. Et hic iusto odio id alias consequatur natus reiciendis.', 'Blanditiis a repellat qui magni fugit architecto. Et illum consequatur aperiam qui porro. A vel sed nam dolore mollitia nam dignissimos.', 'Pierce Reinger', 'published', 'https://senger.com/earum-ea-omnis-repellendus-voluptate-nulla.html', '2002-06-20', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(31, 1, 6, 'Esse hic praesentium sit et et.', 'esse-hic-praesentium-sit-et-et', 'Qui repellendus quisquam veritatis accusantium voluptatem. Sed voluptates distinctio eveniet quo inventore. Soluta excepturi tempora enim et quam. Sed nostrum mollitia vero. Iure et dolore sed est non sit voluptates.\n\nQuia recusandae neque repudiandae eveniet aut repellat aut. Magni enim voluptatem est voluptates. Et eum fugiat consequuntur saepe.\n\nTenetur quaerat corporis nam laboriosam dolor rem. Aut nam reiciendis officiis. Quos earum architecto ducimus aliquam eos eum. Aut ab et odio impedit doloribus.\n\nOmnis accusamus iste aut quam vero quisquam. Nihil eligendi tempora molestias tempora laboriosam quaerat. Doloremque aperiam consequuntur velit sit sed et. Voluptatum excepturi laudantium error aperiam recusandae explicabo doloremque ducimus. Omnis optio facere harum dolores et nisi nemo vel.', 'At qui ut eaque qui a accusamus odit. Et nihil recusandae et. Occaecati quod ipsam vitae voluptatem.', 'Prof. Marcella Murphy', 'published', 'http://www.frami.com/vel-qui-ipsum-provident-voluptate-ut-voluptate.html', '1998-06-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(32, 4, 7, 'Quisquam consectetur libero suscipit.', 'quisquam-consectetur-libero-suscipit', 'Quia ratione est facilis nisi. Ad ut aut exercitationem labore possimus inventore. Quibusdam eum quaerat id dolor.\n\nNon similique temporibus consequatur assumenda. Nam rerum et a nulla consequatur nobis quia.\n\nSaepe nam dignissimos laborum praesentium. Iure et qui aut consectetur. Assumenda molestiae est qui velit sed et. Quos voluptatum natus velit nihil explicabo tempora.\n\nSoluta ratione ut exercitationem iusto maxime est voluptatem. Et consequatur facilis eveniet. Nostrum expedita neque facilis ut facilis magnam quis. Totam iste autem commodi unde.', 'Consequatur ut officia eos. Porro odit reiciendis rerum. Ullam consequatur enim suscipit aut facilis.', 'Emilie Wisoky', 'published', 'http://weber.biz/enim-natus-numquam-facilis-nulla-enim-nesciunt-ut', '1984-12-24', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(33, 7, 7, 'Aut voluptates perferendis sit vel quisquam aliquam perferendis.', 'aut-voluptates-perferendis-sit-vel-quisquam-aliquam-perferendis', 'Enim quas numquam corrupti et vero modi. Modi eaque velit sunt magni sint dolor. Rerum optio labore eos modi veniam.\n\nUllam optio velit eum occaecati ab et. Quia hic aut voluptates. Dolorem enim aut officia sed nam laborum. Dolor quo est beatae assumenda et aut. Deleniti voluptates cupiditate culpa qui vel dolores ab.\n\nEos illum nam ratione autem recusandae voluptates. Rerum natus et cumque laudantium enim quia. Neque eligendi blanditiis nihil consequatur error delectus et. Voluptas reiciendis dolores nemo esse reprehenderit aut.\n\nPerspiciatis quis delectus ut possimus. Fugiat facilis iusto ut ipsum libero inventore. Velit labore cumque pariatur odio fuga porro excepturi nihil. Dolores dolorem facere ratione nihil dolore quidem.', 'Quisquam eius ut ipsa ut. Nobis animi mollitia odio consectetur. Sit debitis sint accusamus doloremque.', 'Jensen Cormier I', 'published', 'https://zboncak.com/natus-beatae-minima-non-amet-dolores.html', '1982-03-13', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(34, 8, NULL, 'Dolorum vero qui voluptas architecto quaerat fuga ipsam.', 'dolorum-vero-qui-voluptas-architecto-quaerat-fuga-ipsam', 'Voluptatibus quibusdam nesciunt velit perferendis autem voluptas. Eos iste perspiciatis labore eveniet cupiditate voluptates. Facere repellat doloremque itaque quod dolores consequatur. Et quas similique qui repellat suscipit molestiae.\n\nQuasi sapiente quia quia consectetur necessitatibus iure iusto aut. Enim error nesciunt rerum similique velit voluptatibus. Voluptas qui accusantium totam. Voluptas non eaque enim sapiente iure omnis quasi.\n\nFugit mollitia repellendus nesciunt velit corrupti asperiores quis. Inventore quia perspiciatis veniam nostrum aut maiores. Earum doloribus eaque et a vero. Distinctio voluptates omnis velit.\n\nPariatur necessitatibus exercitationem sed reiciendis autem. Repudiandae ea dolorem quia unde vel. Omnis quam accusantium optio aut.', 'Consequatur quo qui est ab laudantium cum nulla. Ut non sunt tempora illum aut temporibus. Similique labore eos aut et animi blanditiis. Commodi praesentium commodi dolores.', 'Chanel Hirthe', 'published', 'http://mayer.biz/corporis-iusto-rem-est-commodi-beatae-quo-saepe.html', '2006-03-08', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(35, 5, NULL, 'Pariatur eos impedit doloremque ut.', 'pariatur-eos-impedit-doloremque-ut', 'Voluptatem qui at inventore. Ea voluptatem repellendus est enim alias illo aliquid. Ea qui recusandae aliquam aliquam enim fugit.\n\nNesciunt tenetur omnis qui. Rerum eum nihil est quae ad est. Doloremque ut quisquam sint dicta dolor.\n\nMagni nulla incidunt accusamus qui libero culpa amet. Placeat qui in qui est. Voluptatem non nemo ratione ab quis laudantium.\n\nPorro nulla corporis laudantium qui ullam nostrum perferendis. Qui enim dicta dolore qui quam odio quasi veniam. Autem aut corrupti vel sint laboriosam.', 'Aut accusamus consequatur voluptatum ea qui. Dolores rem dolor itaque atque consequatur in.', 'Hosea Dickens', 'published', 'http://www.zulauf.info/molestiae-recusandae-reprehenderit-fugiat-enim-vero', '2018-12-21', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(36, 5, NULL, 'Vero esse in placeat ut accusantium.', 'vero-esse-in-placeat-ut-accusantium', 'Fuga deleniti velit corporis numquam earum. Adipisci non qui ipsa accusantium. Voluptatem et voluptas itaque dicta.\n\nCumque magni cumque dolorum deserunt. Illum omnis sint eum corrupti omnis. Odio esse quos ducimus quia voluptatem voluptates architecto. Aspernatur sint aut iste ea.\n\nAut magni animi est enim. Aut et voluptatibus omnis alias id dolore et. Nihil in iusto temporibus. Nesciunt deserunt facere et in non inventore autem. Sit debitis consequatur eos enim labore.\n\nSed natus numquam explicabo recusandae nesciunt soluta quae. Adipisci esse ut vel et quisquam aliquid vitae. Nulla magni doloremque ut quod aut.', 'Et voluptatem necessitatibus facere id occaecati magnam est architecto. Repellendus et eaque sed minima distinctio. Quod ut ut veniam.', 'Ms. Opal Crooks V', 'published', 'http://conroy.biz/voluptas-ea-harum-quibusdam-qui.html', '1995-07-30', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(37, 6, 7, 'Temporibus ut ea sit voluptatem.', 'temporibus-ut-ea-sit-voluptatem', 'Consequatur cum quos minus voluptatem. Quisquam inventore eaque illum tenetur. Doloribus hic neque doloremque id.\n\nOfficia beatae vel nisi sunt. Voluptas perferendis fugiat magnam ut eveniet. Sunt laborum ea sunt id error commodi. Dolor autem et quia voluptate.\n\nQuibusdam dolore molestiae et et. Dolore quo similique et et sapiente qui odio. In necessitatibus recusandae veniam beatae dolorum.\n\nDicta aut autem sunt voluptatem culpa. Voluptatem aut qui expedita et quia. Provident maiores pariatur sunt eaque.', 'Voluptatem asperiores modi ratione odit. Ducimus velit eos qui quidem eos perspiciatis non. Nihil iste accusantium soluta et error accusantium sint. Nihil excepturi qui non sit.', 'Lily Bauch', 'published', 'http://kris.com/', '2013-12-17', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(38, 4, 4, 'Quod ducimus saepe et cupiditate vel laudantium.', 'quod-ducimus-saepe-et-cupiditate-vel-laudantium', 'Deserunt fugit non a et. Aut et tempora consequatur sed officia recusandae quas. Dolores quo incidunt nesciunt et. Dolores sed perspiciatis earum explicabo nemo vitae laudantium qui.\n\nDolores tenetur voluptatum est sunt quia. Consectetur dolor non magni dolores accusamus ea. Officia dolorum non deleniti nulla.\n\nNon optio quia distinctio suscipit distinctio nostrum placeat sunt. Saepe perspiciatis voluptatibus modi quis deserunt ea. Occaecati quidem officia est eum. Qui numquam id ut at est in.\n\nQuas et et quibusdam adipisci occaecati. Eligendi ex et aut soluta quia. Quae ad et repudiandae adipisci.', 'Suscipit amet ipsum rerum praesentium modi et vel. Aspernatur corporis ratione officia rerum quis. Nihil sint enim aspernatur possimus nemo aliquam.', 'Kenton Friesen', 'published', 'http://www.kilback.info/minus-autem-nulla-ipsa-fugiat-sed.html', '1974-02-14', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(39, 7, 1, 'Molestiae hic ut aperiam enim est dolorem cumque.', 'molestiae-hic-ut-aperiam-enim-est-dolorem-cumque', 'Enim voluptatem id delectus aut enim est. Id dolores eos sunt ut quod. Deserunt amet inventore minima ad itaque culpa. Aut est amet temporibus mollitia.\n\nRerum omnis veritatis rerum inventore quas. Soluta deleniti omnis qui velit dignissimos incidunt. Expedita quia suscipit molestiae ut. Eos deleniti porro sit qui nostrum.\n\nPerferendis adipisci eveniet minus sit ipsum corrupti molestiae. Sunt sint officia reprehenderit fugiat ut. Omnis ut vero nesciunt voluptatem nostrum.\n\nQuaerat exercitationem molestiae sed eum voluptatum mollitia. Rem et quo quis iste. Fuga fugit possimus unde voluptatem maxime eos ea. Ullam aut dolorem consequatur laboriosam.', 'Impedit itaque enim ut non similique. Deserunt saepe quidem cumque. Tempora dolorum maxime sit ab asperiores.', 'Prof. Hilma Wunsch I', 'published', 'http://www.kuhic.com/harum-voluptas-eaque-inventore-qui-corporis-possimus-vel', '1975-06-05', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(40, 1, 1, 'Magni quia labore doloribus dolores repellat eaque aspernatur.', 'magni-quia-labore-doloribus-dolores-repellat-eaque-aspernatur', 'Tempore eos et porro non ea. Sapiente dolor voluptatem tenetur quod libero asperiores omnis. Sapiente debitis neque quo nihil quidem. Et soluta occaecati maxime cum officia eos.\n\nQui sed quo voluptatem iure. Possimus voluptas sit nulla delectus et tempore. Dolor molestiae laborum minima impedit eum dicta.\n\nVoluptas odio rerum quia ipsum. Id unde mollitia ad maxime. Sunt aliquid qui aut in veniam.\n\nPossimus cumque deleniti velit soluta veritatis ipsa qui. Voluptatem quae nihil molestiae voluptate qui aut aut. Recusandae ut est nihil impedit architecto quasi.', 'Labore molestiae quae pariatur illum. Et ut vel aliquam et quae nostrum aut. Officia quis accusamus numquam non praesentium et. Qui voluptatem tenetur iusto incidunt.', 'Nora Mertz II', 'published', 'http://www.boyer.com/error-placeat-ad-natus-adipisci-incidunt', '2016-07-06', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(41, 7, NULL, 'Qui quas eveniet doloremque.', 'qui-quas-eveniet-doloremque', 'Reiciendis quisquam sed sunt corrupti ab id molestiae. Odit maiores recusandae ex nobis. Cupiditate voluptas culpa minima ab. Nisi occaecati sed vel iste molestiae iste.\n\nProvident qui facilis ut necessitatibus ipsum. Est a quae qui et quaerat. Voluptatum unde consequatur quia ut et eius. Occaecati et dolores vero labore odit repellat.\n\nRepellat et voluptatem beatae maiores neque nostrum maiores earum. Placeat nihil harum vero minus. Voluptate ad ullam ducimus omnis ut quo.\n\nVelit ea qui fugit debitis. Assumenda ea modi beatae quas quod fugit. Eos reprehenderit placeat cupiditate. Ut placeat id similique cupiditate qui dolores illum.', 'Aliquid aliquid itaque voluptatem et. Fugit perferendis dolor quis maxime porro aut hic. Exercitationem at consequatur voluptates quod recusandae sequi. Unde nihil voluptas sunt.', 'Blaise Block', 'published', 'http://conroy.com/ratione-sunt-consequuntur-error-animi', '1992-09-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(42, 7, 5, 'Vitae dolore veniam facere unde enim ab voluptas magni.', 'vitae-dolore-veniam-facere-unde-enim-ab-voluptas-magni', 'Eum asperiores reiciendis quis nam et doloremque nulla. Est in facilis architecto praesentium et voluptatem dolores. Rerum velit odit non fuga libero adipisci similique. Nisi accusamus qui vel ipsam consectetur omnis minima.\n\nSint et atque deserunt repellendus minus officiis omnis. Odit nesciunt quis est sed incidunt molestias dolore. Sunt qui sit omnis animi est quia. Tenetur totam soluta necessitatibus vitae.\n\nAmet magnam ipsam minima qui. Adipisci cum tempore eum necessitatibus totam eum. Error in qui neque sapiente. Et vel dolore inventore praesentium.\n\nAut quia consequatur numquam illum velit repellendus. Praesentium quasi quia rerum aut quo. Omnis fugiat molestiae voluptatem tenetur iusto ab rem.', 'Accusamus eum nesciunt molestiae consequatur possimus accusamus. Error eius quos tempora ut neque quis. Consectetur aperiam nam asperiores rerum.', 'Dangelo Purdy', 'published', 'http://www.luettgen.info/ut-optio-cum-harum-est-voluptatibus', '2015-04-08', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(43, 6, NULL, 'Veniam et molestiae qui perspiciatis qui magni tempora.', 'veniam-et-molestiae-qui-perspiciatis-qui-magni-tempora', 'Officiis quis quibusdam autem. Vel non unde natus occaecati et similique. Et consectetur distinctio itaque est hic.\n\nEos repellat molestias sit sunt dolores pariatur. Veritatis adipisci optio voluptas quidem. Architecto maiores adipisci porro. Dolorem voluptates eos rerum nesciunt sunt minus velit.\n\nNulla amet optio molestias ullam laboriosam ipsam. Dicta doloribus autem sit doloremque esse quis odit non. Qui ut aut in ducimus quo.\n\nDoloremque quaerat hic commodi saepe reprehenderit. Praesentium explicabo blanditiis aut necessitatibus nostrum incidunt corporis. Dolorem consequatur beatae praesentium sequi ex.', 'Nulla molestias culpa eum vero. Ad eveniet fuga optio ut est. Exercitationem aut accusantium recusandae aut quia eos sit.', 'Kailee Halvorson DDS', 'published', 'http://kreiger.com/molestiae-laudantium-eveniet-quia-incidunt', '1989-10-23', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(44, 9, 4, 'Ut qui alias dolorum qui dolor saepe consequatur.', 'ut-qui-alias-dolorum-qui-dolor-saepe-consequatur', 'Totam repudiandae harum qui necessitatibus provident voluptatem. Dolores assumenda eos incidunt dolorem velit. Totam velit et ipsam rerum nihil.\n\nBlanditiis qui optio culpa eum vero beatae maiores. Exercitationem ea nam dolores nulla explicabo. Ut dolor voluptatibus veritatis a ut nesciunt.\n\nOfficiis placeat nesciunt quod ea pariatur. Error quo voluptatem quam. Totam facere perferendis voluptatem voluptatem eaque voluptatem. Excepturi omnis voluptate officia qui dolores incidunt eius sint.\n\nSed architecto reiciendis atque et expedita. Maiores unde amet id nulla. Voluptatem enim aut ut animi vero quae consectetur qui. Quas culpa corrupti in perspiciatis.', 'Voluptatem tempora distinctio quod. Harum enim dolor velit nihil eum ullam nam. Sed excepturi omnis quis laborum sed ab. Maxime accusamus expedita ullam.', 'Mrs. Bettie Jenkins', 'published', 'http://www.johns.info/quam-aut-omnis-quia-distinctio', '2015-08-26', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(45, 5, 1, 'Ut quae quis eaque vel fuga non repellat cum.', 'ut-quae-quis-eaque-vel-fuga-non-repellat-cum', 'Laudantium quo quo quidem eos accusantium expedita hic incidunt. Ea ab mollitia sit deserunt. Hic aspernatur sed ut distinctio.\n\nNihil cumque sunt non ab modi quis. Perspiciatis voluptatum asperiores quisquam fugiat. Odit magni atque laudantium deleniti. Quia ea ut necessitatibus praesentium accusamus itaque quisquam ut.\n\nIpsum tempore aut similique labore. Rerum hic iusto dolorem porro. Vitae nesciunt a illo odit vero ut. Hic fugiat sapiente corporis ut consequatur placeat aperiam.\n\nEnim neque odit voluptas commodi ducimus. Dolores in perspiciatis quisquam adipisci. Ad perspiciatis labore impedit ad accusantium. Minima nihil aut cumque dolore numquam sunt.', 'Et reprehenderit in aperiam asperiores magni. Id ab alias rerum nobis ea voluptatem odit temporibus. Nobis voluptas ratione fuga.', 'Kendra Stiedemann Jr.', 'published', 'https://heidenreich.com/sit-harum-eveniet-et-et-officia-quo.html', '2015-01-07', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(46, 5, NULL, 'Veniam nam autem maxime est veritatis earum id.', 'veniam-nam-autem-maxime-est-veritatis-earum-id', 'Nemo in officiis a in odit iste dolore aperiam. Totam eos dolorum porro tenetur nihil ut. Repudiandae dolor iure nesciunt quo perspiciatis facere iure autem.\n\nConsectetur repudiandae aut quidem culpa pariatur. Voluptas esse aut vero cupiditate animi. Repellendus distinctio earum illo aut. Eum autem voluptas voluptatem nemo voluptas a blanditiis.\n\nNam molestias dolorem odio a. Officiis ut laboriosam autem ut. Nobis ut molestias nulla tempora quo incidunt. Officiis non enim omnis sunt accusantium.\n\nSunt eaque eligendi provident nostrum voluptates similique tempore. Voluptates minus repellendus vero labore rerum sapiente. Omnis labore voluptas perferendis mollitia non. Eligendi officiis iusto itaque ut rem explicabo quidem quia.', 'Earum officiis porro in sit facere enim reiciendis. Amet aliquid sapiente nostrum debitis laboriosam. Exercitationem voluptas consequuntur delectus. Rerum velit nemo autem voluptatibus eaque.', 'Madelyn Wisoky', 'published', 'https://www.hamill.com/necessitatibus-laudantium-animi-alias-et-nulla-placeat-sapiente-voluptas', '2009-03-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(47, 5, 2, 'Sit commodi molestias distinctio doloremque qui esse.', 'sit-commodi-molestias-distinctio-doloremque-qui-esse', 'Maxime alias omnis in voluptatem. Ut ut doloremque facilis aut. Atque rerum qui dolor.\n\nSint neque quaerat voluptas vel reiciendis doloribus. Nobis sit et officiis molestias. Iusto sed itaque non et dolor ipsum. Alias quidem illum est.\n\nConsequatur reiciendis tempora laboriosam quos. Voluptatem qui quidem aut dicta fuga ducimus. Quo dicta et maiores.\n\nEst dolorem aut quia consequatur. Quibusdam explicabo voluptate enim quam. Sit expedita officia neque sed.', 'Sunt qui voluptas sapiente aut deserunt qui exercitationem. Temporibus dolores ratione quam. Suscipit omnis id doloribus ut doloremque aut.', 'Zachariah Weissnat', 'published', 'http://www.thiel.com/eligendi-rerum-et-exercitationem-rerum-accusamus-tenetur', '2000-01-10', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(48, 7, 7, 'Excepturi cum eum recusandae repellat ipsa commodi at ut.', 'excepturi-cum-eum-recusandae-repellat-ipsa-commodi-at-ut', 'Enim dolor velit laudantium. Reiciendis accusamus veritatis quia inventore nostrum sint. Quia odio omnis exercitationem aspernatur omnis cumque sunt.\n\nCommodi sit officiis totam libero provident voluptatum. Illum illo alias quos porro possimus. Impedit fuga odit enim. Eum maiores accusamus quis labore est iusto consequuntur.\n\nPariatur consequatur nobis fuga cum doloribus ut eum. Provident aut consequuntur reiciendis cum. Ea placeat occaecati sed numquam incidunt cum necessitatibus. Hic hic dignissimos minima vel.\n\nEsse vel enim rerum beatae praesentium. Ut laboriosam et ipsa porro perferendis.', 'Molestias ipsam doloremque et repudiandae doloribus et. Commodi ipsam iste quia fugiat fuga quia. Ut nemo aut molestiae quam natus facere tenetur. Explicabo et ut voluptatem.', 'Mrs. Daphney Considine', 'published', 'https://beer.com/rem-debitis-tempore-asperiores-hic.html', '1997-08-25', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(49, 4, NULL, 'Ut eligendi expedita beatae id ut iste.', 'ut-eligendi-expedita-beatae-id-ut-iste', 'Occaecati molestiae unde qui libero molestiae sit aut. Et iusto ut pariatur quia rerum possimus. Eos impedit eos debitis explicabo et debitis.\n\nMinus id veniam quo eum. Et delectus qui repudiandae qui omnis. Impedit delectus suscipit ut neque.\n\nNobis unde corporis officiis dolorem. Itaque ad rerum ex excepturi quia. Consequatur veniam doloribus et est non reprehenderit unde.\n\nAutem fugit itaque voluptatum eveniet quibusdam. Eligendi est reprehenderit dolore aut qui est. Exercitationem temporibus distinctio sunt reprehenderit facere quia quis fugiat. Voluptas id et voluptas a.', 'Voluptate quam omnis consectetur architecto voluptatibus. Temporibus repellendus enim ut sapiente. Modi aliquid sapiente occaecati est aperiam.', 'Dr. Omari Feil', 'published', 'http://www.marks.com/et-excepturi-tempora-impedit-rerum-velit-reiciendis', '1996-08-01', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(50, 6, 7, 'Vero a sapiente dolore quos.', 'vero-a-sapiente-dolore-quos', 'Ea fuga incidunt saepe commodi tenetur occaecati. Facilis odit saepe fugit rerum error. Sunt et nesciunt aperiam est debitis nihil dignissimos aut.\n\nMolestiae unde est vel quos voluptatibus consequatur maxime. Totam illum doloribus laudantium dolorem. Qui voluptatum quo magni repudiandae facere. Eius et explicabo repudiandae odio quod expedita.\n\nSint totam nesciunt quo officia quo ut. Aut officiis et dolorum consequatur cumque. Quo quam quia expedita quia sed.\n\nQuia eos expedita tenetur perspiciatis ut maiores. Eius magnam dolore iste nobis maxime. Consectetur doloremque quia nam fugit ut aut sed. Eaque dolor cum fugit facere.', 'Eius id fuga quaerat sint non non. Omnis mollitia qui ad consequuntur rerum est quos eveniet. Facilis nobis pariatur enim repudiandae alias quibusdam molestias. Quia id velit accusantium qui.', 'Prof. Virgil Gorczany Sr.', 'published', 'http://stanton.com/debitis-qui-et-ratione-sit-qui-ad', '1977-04-07', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(51, 1, 3, 'Eum nesciunt qui dolor accusamus est maxime.', 'eum-nesciunt-qui-dolor-accusamus-est-maxime', 'Explicabo sunt eum iure mollitia vel quibusdam. Ex explicabo architecto dolorem in modi natus. Earum ipsam aspernatur quam et asperiores quasi ab.\n\nSoluta commodi ut sequi. Velit nesciunt eos sint perspiciatis sunt at quis cupiditate.\n\nMolestiae officia eos et in. Id error quia illo autem nihil eum in. Pariatur quam sed voluptatum perspiciatis iste.\n\nQui voluptatibus facere dolorem quia. Sit expedita itaque possimus minus dolorem aspernatur. Eaque sed impedit nulla at iusto. Error repellat nihil ut nihil modi. Et sint doloremque odio nulla enim recusandae dolores.', 'Accusamus neque ea sed iusto qui molestiae. Sit rem aliquam non assumenda et fuga eum. Temporibus nihil voluptates dolorum qui magnam ipsa.', 'Bobbie Kuhn', 'published', 'https://cummerata.org/inventore-molestias-ipsum-aut-maxime-possimus-sed.html', '1976-12-28', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(52, 2, NULL, 'Cupiditate delectus reiciendis cum voluptate dolor.', 'cupiditate-delectus-reiciendis-cum-voluptate-dolor', 'Et molestias consectetur soluta dolor magnam voluptas est. Rem sed explicabo doloremque quasi. Labore labore officiis a enim.\n\nConsectetur ab doloribus occaecati sit voluptate error nulla. Deserunt deserunt aliquam quo quas. Itaque perspiciatis illo libero sed aut.\n\nEst molestias nihil repudiandae maiores. Vitae magnam rerum rerum reiciendis repellat aperiam. Et ipsum dolor rerum exercitationem. Libero animi quia vitae non vel ea. Quis rem voluptatum non enim.\n\nQuibusdam et tempora et maiores ab. Fugiat ut praesentium voluptas. Ducimus ut dolorum nam minima itaque repellendus.', 'Dolorem porro sed quis id eaque ipsam. Natus inventore pariatur provident culpa perferendis fugiat odio molestiae. In fuga quam esse et est repudiandae.', 'Alessia Blanda', 'published', 'https://www.beahan.com/totam-harum-praesentium-ut-est-ipsam', '2005-07-19', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(53, 1, NULL, 'Delectus at vel dicta consequatur ut nihil et.', 'delectus-at-vel-dicta-consequatur-ut-nihil-et', 'Ratione dolorum consequatur et alias est. Unde voluptas accusamus labore at et. Qui veniam est hic illum blanditiis esse. Est ea deleniti in adipisci.\n\nConsectetur perferendis unde reprehenderit blanditiis quidem. Officiis perspiciatis et in consequuntur autem nostrum quia. Hic sapiente soluta recusandae expedita et dicta sequi.\n\nAut ipsum fugiat qui rerum deleniti omnis. Placeat voluptatum enim ut cum molestias quo. Nesciunt labore distinctio et nihil qui et.\n\nVoluptatem alias repudiandae minima et hic atque. Libero est occaecati commodi. Dignissimos dicta ut ipsa. Sunt quisquam quam iure omnis.', 'Voluptatem assumenda ab earum dolores id et qui. Autem vitae enim alias esse. Ullam quas et illum molestiae. Nisi qui sunt qui id.', 'Mabelle Gulgowski', 'published', 'http://mayer.com/nam-aut-quia-numquam-quibusdam', '2019-07-09', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(54, 6, NULL, 'Nesciunt labore autem nobis ipsa totam.', 'nesciunt-labore-autem-nobis-ipsa-totam', 'Eos possimus exercitationem sunt aut. Labore molestias voluptates quae rerum sed iure. Saepe ut consequatur minus laboriosam dolore reiciendis. Possimus voluptates harum at nihil qui quaerat. Ea aspernatur ut nostrum.\n\nLibero minima quibusdam tempora consequatur error nemo ipsa molestiae. In odio id neque sunt aut sequi. Saepe ut dicta ratione voluptates. Sapiente quasi sequi et sunt porro.\n\nQui doloremque dignissimos aperiam nulla enim dicta enim. Vero aut eos a et vel dolores dolorem. Ea quae dolor officiis et ut.\n\nNam reprehenderit nihil magnam dignissimos. Repudiandae praesentium numquam voluptatem atque omnis aut ducimus. Occaecati aut aut autem quas aut.', 'Aliquid et sit dolores harum. Sed nihil placeat et eius ut. Dolore ut ipsam ea qui accusantium debitis.', 'Grady Carroll', 'published', 'http://www.zulauf.com/eum-quaerat-est-voluptas-est-perspiciatis-cumque.html', '1974-03-06', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(55, 9, NULL, 'Rerum nisi blanditiis eos ipsam aut.', 'rerum-nisi-blanditiis-eos-ipsam-aut', 'Nihil repudiandae facilis corporis aliquid soluta dignissimos. Voluptas cupiditate culpa animi cupiditate nemo dolore. Vel maxime et laudantium libero voluptatem nostrum. Facere quasi praesentium tenetur placeat enim eaque.\n\nNon quia neque esse sed. Quia debitis reprehenderit enim nobis quibusdam. Et tempore quas soluta voluptatibus.\n\nEt dignissimos ea nesciunt sequi incidunt vel officia. Numquam porro dolores maxime iste quaerat quaerat necessitatibus. Qui aut et vel vel dolor aut.\n\nEsse qui vero pariatur perferendis aspernatur voluptatum natus. Ea similique aut suscipit officia. Doloribus officia quidem unde a amet aut aut nesciunt. Quod distinctio eligendi voluptatem quis sit culpa velit facere.', 'Delectus accusamus quisquam sint doloremque nihil illum optio. Officiis quo maxime dolores quaerat. Eaque aut saepe sed cumque dignissimos.', 'Adriana Champlin', 'published', 'http://barton.com/unde-quos-ab-explicabo-quibusdam-cumque', '1997-06-12', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(56, 6, 3, 'Quia quasi saepe nam esse enim repellendus ad nam.', 'quia-quasi-saepe-nam-esse-enim-repellendus-ad-nam', 'Mollitia quaerat cumque atque voluptatem maxime. Quas expedita perferendis maxime earum quam. Odio delectus inventore consequatur qui maiores deleniti.\n\nAut perferendis qui quia maiores distinctio saepe. Vitae et aut quam sunt earum.\n\nEos dolores sed optio doloribus qui in. Soluta earum quia explicabo illum. Blanditiis quis architecto a sint qui odit ut.\n\nQuia minima quis id facilis odit. Perspiciatis odit a non odit provident. Assumenda iusto ut quo porro magnam.', 'Iure aspernatur et quis sint natus. Pariatur eum sed ad recusandae necessitatibus quae dolor. Eum voluptatem sapiente eligendi voluptatem aperiam.', 'Michel Quitzon', 'published', 'http://hessel.biz/optio-aut-non-unde-dolorem-incidunt-suscipit', '2017-11-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(57, 6, NULL, 'Numquam explicabo aliquid veritatis expedita voluptatem.', 'numquam-explicabo-aliquid-veritatis-expedita-voluptatem', 'Laudantium magnam placeat qui et omnis nihil molestiae. Et qui quidem aut. Sed aspernatur quidem adipisci aliquid. Ipsa est suscipit facilis dolorem nulla consequatur modi.\n\nDebitis laboriosam consequuntur vitae nobis asperiores molestiae occaecati. Consequuntur ab laborum neque dicta aut. Nemo perspiciatis asperiores aut dolorum occaecati. Quas qui officiis hic sequi eveniet in dolorem.\n\nConsequatur et est debitis voluptas. Ut non dolor error ex.\n\nUnde rerum alias eveniet nesciunt et. Cumque ab pariatur et voluptatibus et. Sed fuga aperiam est voluptas atque.', 'Ut sit ratione excepturi rerum ad iure inventore. Eos expedita numquam voluptas sapiente aut. Rem quae omnis laboriosam.', 'Joshuah O\'Kon', 'published', 'http://white.com/', '2019-02-25', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(58, 9, NULL, 'Laboriosam voluptatem et repudiandae quaerat officia.', 'laboriosam-voluptatem-et-repudiandae-quaerat-officia', 'Necessitatibus deleniti fugiat et maxime adipisci recusandae sed. Sequi ad enim asperiores maxime. Aut possimus quasi minus rem repellendus. Porro ab sint dolores omnis.\n\nVel repellendus quisquam harum qui tempore deleniti voluptatem. Et iusto officiis sit at. Est dolores repellat aliquam dolor et optio quae.\n\nConsequuntur illo sit in in eos et. Rem quibusdam itaque incidunt ut et quae. Voluptas est dolor tempore cupiditate veritatis soluta atque. Earum blanditiis ipsum rerum aut iste sit.\n\nCupiditate veritatis dignissimos commodi rerum. Molestiae non consequuntur repudiandae. Provident praesentium laudantium suscipit dolor repudiandae libero molestiae.', 'Est mollitia eius earum recusandae error sint. Deleniti cumque aut numquam deleniti eveniet ipsa. Est ut cumque repudiandae iure debitis. Quidem et rerum qui corporis dolorem quam inventore.', 'Albertha Luettgen', 'published', 'http://leannon.com/ut-et-rerum-ab-dolor', '2003-08-21', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(59, 5, 1, 'Tempore possimus repellat quo perferendis accusamus et.', 'tempore-possimus-repellat-quo-perferendis-accusamus-et', 'Aspernatur odit voluptas aut ut quibusdam vitae excepturi. Laborum aliquid dicta voluptatem deserunt laborum.\n\nMolestiae eum quia quas ullam officiis. Nihil natus odio non illo aut. Id et facere et molestiae. Eum velit nam non.\n\nEt et in provident et sint quis. Quisquam esse quo est vel est nostrum. Hic perspiciatis sapiente et aspernatur. Commodi consequuntur voluptatem accusamus repellat sit excepturi tempore.\n\nNatus et repellat et id velit. Quo voluptate nihil sed dolor consequatur dolores sit. Veritatis praesentium non voluptatem.', 'Incidunt voluptatem officia sed quia nobis. Autem ea quo omnis voluptatibus ut voluptatem qui. Ratione assumenda iure sed officia. Laboriosam est porro voluptate debitis recusandae dignissimos.', 'Miss Alexandrea Weimann DVM', 'published', 'http://schaden.biz/', '2014-10-11', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(60, 4, NULL, 'Explicabo qui sit qui qui sunt.', 'explicabo-qui-sit-qui-qui-sunt', 'Cum quia earum quam tempore. Et eius repellendus perferendis illo dolore magnam assumenda. In dolore consectetur quaerat est animi consequatur voluptatem. Non est magni asperiores sunt repellendus.\n\nQuia dolor nostrum sed et magnam possimus nesciunt. Suscipit repellat corrupti saepe sit et. Temporibus esse corporis ut sunt et itaque. Qui mollitia ab distinctio at voluptates ipsum.\n\nVoluptas distinctio dolore ipsum ipsum qui. Est ut nostrum sit. Rerum nihil consequatur reiciendis.\n\nQuo quo repudiandae iure accusamus. Quis at et optio eligendi reprehenderit libero autem. Quis assumenda aut eum.', 'Eveniet mollitia provident excepturi. Possimus delectus fugiat voluptatem et animi sit.', 'Brooklyn Bernhard I', 'published', 'http://wilkinson.info/porro-eos-nihil-tenetur-qui-animi-ipsam-sequi', '1973-06-14', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(61, 6, NULL, 'Qui nihil minus ea enim ex debitis dolorem.', 'qui-nihil-minus-ea-enim-ex-debitis-dolorem', 'Quia vitae voluptate hic. Vel est consequatur quos enim aut veritatis ut eum. Ut aut amet corporis quo officia.\n\nEveniet consequuntur quia pariatur quaerat sunt ex ipsum. Pariatur quaerat molestiae sed ea tenetur. Ut qui iste aut eum. Suscipit excepturi in facilis.\n\nCum et voluptate qui quos modi neque. Consequatur blanditiis optio quisquam sint asperiores quia porro. Molestiae enim id rerum iusto. Culpa excepturi nemo consequuntur repellat fuga nobis.\n\nIpsa aut ea qui consequuntur. Eveniet earum consequatur aliquam molestias. Quidem asperiores laborum qui qui ea.', 'Itaque laborum nisi fuga consequuntur placeat numquam et. Repellendus est nihil dolorum nesciunt et impedit est praesentium.', 'Mathilde Jacobs', 'published', 'http://hessel.biz/corporis-voluptate-delectus-sunt-ut-a', '2018-06-04', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(62, 7, 1, 'Repellendus eligendi doloremque cumque rem consequuntur perspiciatis voluptatibus.', 'repellendus-eligendi-doloremque-cumque-rem-consequuntur-perspiciatis-voluptatibus', 'Veritatis possimus iste qui quasi ullam quibusdam. Dolor dolore nostrum labore sit reprehenderit. Repudiandae fugit quibusdam autem repudiandae minima et voluptatum. Ut esse placeat voluptate aut.\n\nVoluptas laboriosam a laudantium eaque et. Iste quo recusandae veniam minus tempore. Quia dolor laborum consequatur. Unde rem in aut magni sit eos. Quis tempore et soluta possimus quisquam fugiat accusamus.\n\nItaque incidunt rerum voluptatem non quae delectus iste. Sit ratione et autem dolorem rerum ipsam voluptatem. Blanditiis modi harum perspiciatis vel voluptatem quia. Minima et aspernatur et.\n\nImpedit quasi ut ea soluta excepturi eligendi quia. Explicabo voluptates vero excepturi perferendis. Quos veritatis enim omnis a facilis dolorum.', 'Adipisci est sit rem. Id cupiditate delectus dicta nihil autem voluptas sunt. A exercitationem explicabo consequatur et. Ut rerum dolore aut quo sint.', 'Paxton Rolfson', 'published', 'http://www.wunsch.com/consectetur-harum-ut-temporibus-libero-officiis-consequatur-ducimus-minima', '1986-02-22', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(63, 1, NULL, 'Et mollitia aperiam molestiae nostrum.', 'et-mollitia-aperiam-molestiae-nostrum', 'Aliquid est quaerat accusantium ut quis occaecati sit. Eum inventore qui consequatur. Ut voluptatem iure hic hic voluptas fuga eaque.\n\nExcepturi repudiandae pariatur id at consequatur nobis. Aliquid non iste architecto rerum et. Porro ipsum suscipit sed id quo. Molestiae qui sunt qui.\n\nNesciunt itaque fuga ratione voluptate totam. Numquam sed numquam ea excepturi dolor. Est similique eius voluptatum pariatur dolor nostrum.\n\nDolores optio accusantium quis fugit sint. Adipisci enim minima impedit optio eum. Et magni vel ipsum vel aliquid.', 'Asperiores saepe deserunt atque quis dolor. Rerum quisquam perspiciatis aut in quos ut. Et praesentium officia odit minima et. Ex quis nihil voluptas.', 'Angelina Boyle', 'published', 'https://langworth.com/voluptatem-quo-enim-vel.html', '1988-10-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(64, 9, NULL, 'Fugit rerum et quis est voluptatem maxime.', 'fugit-rerum-et-quis-est-voluptatem-maxime', 'Non quia dolorem eaque. Consequatur incidunt labore quidem voluptatem. Ex et qui sit iste excepturi.\n\nMaiores cupiditate molestias mollitia molestiae in nihil. Dolores quia sint ut. Quo rerum possimus odio natus impedit. Beatae praesentium blanditiis et molestiae a rerum.\n\nVeniam aut voluptatem quia et tenetur qui. Harum est delectus magnam molestias eius reprehenderit. Voluptas natus id modi facere adipisci saepe cumque earum. Eum rem ipsa perferendis natus aut.\n\nEt voluptate nihil incidunt nulla totam voluptatibus. Reiciendis necessitatibus est exercitationem aut. Officia sed qui facere rerum laborum. Aut voluptas illo aliquam consequatur exercitationem dolor tenetur.', 'Placeat a officiis qui. Ea saepe voluptatibus repudiandae. Dolores sequi quas aut quia qui illum. Repellendus nesciunt voluptas maiores iure sit. Rem qui culpa magni beatae enim et.', 'Earnest Jast Sr.', 'published', 'http://www.dach.info/aut-minima-optio-pariatur-maxime-quisquam.html', '2009-07-08', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(65, 6, 3, 'Est ipsa non id unde.', 'est-ipsa-non-id-unde', 'Vitae possimus odit ut. Id velit consequatur dolores aut eligendi consequatur dolores tempora. Reiciendis quibusdam nemo nihil ab.\n\nNulla quidem sapiente rerum aspernatur ea et aut eaque. Voluptates doloribus omnis laudantium veniam sed. Blanditiis eos voluptatem iste porro explicabo et.\n\nAut nulla et in earum eum eius ea. Cupiditate autem aperiam laudantium quia. Omnis est et aspernatur ut in repellat omnis. Vitae similique temporibus nisi nihil quis.\n\nExcepturi ad natus fugit officiis qui in. Atque consequatur ipsa repellendus.', 'Soluta voluptates est dolorum commodi suscipit aliquam. Amet eos culpa at eum cumque molestias. Qui molestiae culpa similique enim et odio repudiandae. Eum et id ratione cupiditate et.', 'Gina Haag', 'published', 'https://rath.net/error-aut-et-et-voluptatem-voluptatem.html', '2015-08-25', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(66, 3, NULL, 'Asperiores qui facilis consequuntur.', 'asperiores-qui-facilis-consequuntur', 'Et quia autem ipsa commodi sunt adipisci. Maxime fuga sequi eius ut id. Voluptas eos saepe et soluta.\n\nRepudiandae dolores qui amet quo officiis ut. Qui modi dolores nihil in. Provident est temporibus dignissimos consequatur voluptatem fugiat. Possimus aperiam atque quas quas iste.\n\nIllo provident quidem occaecati doloremque. Ad vel eius odio praesentium qui sint. Veniam labore quae quo mollitia.\n\nAtque maxime voluptatem sed non fuga. Deleniti dolorum quis in similique similique eius consequatur. Sed esse sed dignissimos aut et.', 'Quam quis repellendus et. Ut provident nobis ullam expedita neque. Voluptatem architecto aliquam eum eum illum. Omnis rerum sunt ab corporis facere.', 'Wyman Barrows', 'published', 'http://www.koss.com/tenetur-et-consectetur-qui-beatae', '2014-01-27', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(67, 1, 2, 'Qui id saepe aut.', 'qui-id-saepe-aut', 'Ut beatae eos porro quis et. Alias tempore in quos. Et quibusdam est quia.\n\nNihil officia sed porro nostrum sint consequatur sed. Modi nihil placeat illo non. Est consequuntur qui ab quibusdam sunt debitis.\n\nSed itaque et culpa tenetur nam. Modi et et culpa repudiandae dolorem vel aliquid laudantium. Repellat aut tenetur iusto quam.\n\nConsequuntur dolor laborum perspiciatis veniam natus quo. Aliquid iure et tempora accusamus est. Occaecati quia ut maiores distinctio quis magni consectetur.', 'Aut laborum et consequuntur nulla aperiam repellendus. Repudiandae commodi ea temporibus laboriosam et. Id velit mollitia iste qui sed. Vero autem vitae minus non.', 'Mr. Remington Huel III', 'published', 'http://oconnell.com/et-nobis-voluptates-et-quisquam-rerum-nisi-quasi-vel', '2017-02-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(68, 4, 5, 'Impedit et id consequatur rem repudiandae.', 'impedit-et-id-consequatur-rem-repudiandae', 'Animi in voluptatem cupiditate magnam voluptatum corporis aut. Molestiae rerum debitis id ducimus quibusdam recusandae sapiente.\n\nEt quod ad velit consequatur temporibus. Officiis repellat incidunt dolorem molestiae autem. Dicta saepe earum quam non dolorem consequatur. Unde qui laboriosam iusto incidunt dolores veritatis perspiciatis.\n\nVoluptatem doloremque recusandae sequi. Voluptatibus saepe quasi ratione animi est inventore eligendi vel. Qui sit voluptatibus nisi aperiam enim ipsam dignissimos facilis. Enim numquam nemo autem a est earum saepe.\n\nAmet voluptate amet doloremque nihil praesentium eos. Enim modi ipsa similique repudiandae eos. Fuga recusandae voluptatem odit id non fuga error non. Quo sed eaque nulla.', 'Reprehenderit consequatur similique numquam nihil voluptatem quia eum. Vitae recusandae laudantium hic beatae ipsa qui laboriosam. Et est iste ea id est adipisci excepturi.', 'Carlotta Buckridge', 'published', 'https://www.white.biz/dicta-eos-voluptatem-sunt-quis-beatae-non-et', '1972-05-22', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(69, 2, NULL, 'Maxime alias velit assumenda repudiandae.', 'maxime-alias-velit-assumenda-repudiandae', 'Dolor dolore adipisci accusantium doloremque sed. Qui occaecati rerum voluptate aut nemo eligendi. Non aut in et laboriosam facilis enim dignissimos. Eos ut necessitatibus ducimus ducimus.\n\nTemporibus iusto saepe accusantium. Nisi quasi inventore praesentium labore.\n\nAccusamus debitis eveniet consectetur. Alias ad corporis qui perferendis in officiis. Dolor quasi facere quis. Quam et dicta velit repudiandae voluptatem.\n\nLabore ratione et cumque provident iste qui rerum. Optio laudantium sint id veritatis. Asperiores sit quod cupiditate qui.', 'Velit autem ipsam et molestias. Nulla veniam dolor impedit inventore quo et sint. Quia iure sapiente dolores modi velit odit vero. Quam qui non odit. Totam quidem esse dignissimos aut.', 'Amber Metz', 'published', 'http://grant.com/est-hic-est-vel-vel-inventore-consequatur-et.html', '1994-01-03', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(70, 2, 3, 'Quia quae sed dolor ex quia odio.', 'quia-quae-sed-dolor-ex-quia-odio', 'Eum aut placeat aliquid et. Est ipsam laboriosam non consectetur impedit dolorum distinctio maxime. Adipisci error est tempora doloribus. Dolorum eaque facilis totam.\n\nEt numquam aliquid voluptatem similique et natus qui. Voluptas aut deleniti soluta facere est et.\n\nIpsum reprehenderit in distinctio eum doloremque atque odio. Cum accusamus magnam eius voluptatum. Quis velit rerum laboriosam voluptatem error magnam. Quia aut veritatis assumenda mollitia vitae.\n\nQuas sequi recusandae corporis accusantium ipsum consectetur officiis. Exercitationem dolores dicta consequatur facere dolores consequatur. Cumque perferendis alias fuga possimus quidem non.', 'Ducimus et ut et voluptas. Voluptatum pariatur qui nihil commodi possimus. Est dignissimos occaecati incidunt hic quos qui. Voluptatem officiis sint et soluta et dignissimos.', 'Kevin Nitzsche I', 'published', 'http://www.hilpert.biz/', '1973-05-26', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(71, 3, 6, 'Delectus sint molestiae tempore.', 'delectus-sint-molestiae-tempore', 'Vitae voluptatem qui ut vitae voluptatem totam. Aliquid deleniti incidunt animi asperiores natus aut impedit. Consequatur velit est ut non magni et aut sequi. Officia eaque repellendus est odit velit qui quidem voluptatem.\n\nRepellat rerum non quaerat quam. Modi occaecati voluptate qui non aut iste. Sint ducimus voluptas eius voluptatem nulla.\n\nQuisquam aut totam nobis eos iste. Consequatur illum quia ex nobis aut id quibusdam. Tempora voluptas odio asperiores sequi corrupti tempora.\n\nQui sunt tempora voluptates sed sapiente error. Ut fugit tempora odio excepturi. Est quaerat aut molestiae quisquam qui et. Necessitatibus consequatur dolor enim sunt reprehenderit debitis.', 'Voluptas voluptas quia aut eius optio labore. Totam sequi expedita quaerat maxime. Aut omnis minima enim est repellendus eum ea.', 'Prof. Lynn Ebert', 'published', 'http://kessler.com/odio-sapiente-minima-adipisci-mollitia.html', '1979-01-13', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(72, 1, 1, 'Nam ducimus voluptatum dolor quasi.', 'nam-ducimus-voluptatum-dolor-quasi', 'Consequatur tempora voluptas officiis et similique. Ex dignissimos et perspiciatis ullam sint animi explicabo.\n\nQuasi consectetur provident nam. Odit voluptatem fugiat quia saepe nulla est autem. Sed explicabo ullam omnis et voluptatum et enim.\n\nTotam corrupti et asperiores saepe est est. Voluptate beatae ab et quasi in sunt deserunt nesciunt. Est asperiores omnis sit suscipit aliquid. Dolorem enim blanditiis sunt libero explicabo ea. Alias et quaerat impedit accusamus cupiditate.\n\nOdio et quae amet porro aliquid quisquam architecto. Consequuntur perspiciatis cum facilis cupiditate cum ut. Qui ut mollitia praesentium tempora inventore est. Earum voluptas debitis autem.', 'Soluta maiores nihil est minima rem est. Saepe est laborum labore necessitatibus. Voluptate iusto iure officiis voluptas deleniti. Aspernatur laborum quae corrupti sed.', 'Destiny Roberts', 'published', 'http://www.frami.com/', '1970-05-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(73, 7, 1, 'Omnis expedita iusto ea labore minus itaque quia.', 'omnis-expedita-iusto-ea-labore-minus-itaque-quia', 'Officiis eum rem mollitia atque. Molestiae blanditiis libero dolor omnis beatae veritatis culpa. Unde tempore aut eveniet aut aut et doloremque et.\n\nLaudantium laborum necessitatibus est ducimus porro. Illo eum vitae aut natus nesciunt eius. Maxime quos voluptas tempora.\n\nEt occaecati et voluptatem nemo numquam eos. Doloremque illum sapiente aut officia cumque et. Deserunt non distinctio consequatur natus ullam. Qui voluptatem quis culpa dolores eveniet illo et dolores.\n\nQuo aliquam est recusandae et voluptatum. Sapiente amet vitae aut sit. Officiis quidem magni natus ipsum. Dolore quas magni quia quia eveniet vel ipsum. Cumque et pariatur autem ipsam dolorum repellat enim.', 'Impedit qui qui porro vel qui magni sunt rem. Saepe laboriosam excepturi qui.', 'Tierra Kohler', 'published', 'http://www.maggio.net/doloribus-dolor-nisi-dolores-ipsa-esse-odit-voluptates.html', '1990-07-07', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(74, 7, 3, 'Quod atque odio consectetur ad veritatis.', 'quod-atque-odio-consectetur-ad-veritatis', 'Dolores eum pariatur et libero eos nostrum consequuntur. Ut atque nostrum eum non explicabo cupiditate. Totam laborum qui quia fuga earum dolorem. Dolores ullam vero magni nesciunt adipisci laudantium sint velit.\n\nTempora numquam voluptas aut quo ut voluptas qui. Sint ut ad eligendi impedit voluptas quo quos aliquam. Animi deleniti earum consectetur quaerat non. Sed odio repudiandae dignissimos rerum facere qui harum saepe.\n\nQuam magni nulla est perferendis soluta. Sit quos temporibus velit corporis iure.\n\nUllam reiciendis tempora dicta fugiat eius magni. Eum libero perspiciatis molestias sunt recusandae sed. Quam non consequatur modi vel omnis in sed. Nobis est odio non laboriosam et ducimus est. Sunt porro reprehenderit omnis perspiciatis excepturi eveniet iste.', 'Ea accusamus tempora vel porro consequatur placeat incidunt. Aspernatur rem et totam quam. Eum dolorem pariatur et voluptatem quaerat.', 'Gage Leuschke', 'published', 'https://cormier.com/ratione-quia-praesentium-ab-autem-architecto-rem.html', '2013-07-20', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(75, 8, 1, 'Asperiores dolor consequatur dolorum optio quia voluptatum debitis.', 'asperiores-dolor-consequatur-dolorum-optio-quia-voluptatum-debitis', 'Libero laborum neque iusto tempore. Aut mollitia optio et id ex autem beatae. Reiciendis ut quibusdam unde accusantium ut maxime aut iusto. Atque cumque assumenda sequi dolores nobis. Nemo aliquid dolores qui.\n\nEx temporibus dolor rerum ut debitis voluptates. Quis doloribus asperiores quis iusto. Eos laborum qui asperiores architecto qui. Et consequatur molestias consequatur rerum veritatis sapiente rerum.\n\nNecessitatibus quisquam quo accusamus. Ab aut harum accusamus reprehenderit. Blanditiis eum autem dolorem eum ipsa pariatur. Unde aut perferendis quia sed.\n\nAperiam quia sit est. Ut sunt odio occaecati illo. Et nulla deserunt libero et sint.', 'Libero voluptatum ducimus est magni praesentium alias. Exercitationem enim velit minus ut temporibus. In alias qui nemo aut. Temporibus ipsam ratione eum ut.', 'Kolby Durgan MD', 'published', 'http://www.carter.org/dolore-error-velit-deleniti-saepe-ea-sit-labore-illum', '1992-02-06', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(76, 9, 2, 'Blanditiis impedit nulla laboriosam ea quae molestiae consequatur.', 'blanditiis-impedit-nulla-laboriosam-ea-quae-molestiae-consequatur', 'Et autem illo et ut natus sunt. Quia est quia soluta sint repellat. Quia qui quaerat voluptatum repudiandae esse perferendis distinctio. Impedit voluptatem expedita praesentium dolorem.\n\nCum nihil in delectus sit accusantium aperiam culpa. Dolorum vel excepturi eligendi dolor voluptas rerum quasi. Illo sit maiores explicabo perspiciatis quia praesentium velit. Velit et dignissimos voluptas.\n\nTempora autem provident accusantium fuga. Earum ut qui quis architecto. Facere autem repellendus excepturi dignissimos.\n\nQuis sint mollitia placeat. Soluta molestias dicta exercitationem nesciunt ipsam. Ut deserunt dolorem id libero. Cumque et quia autem impedit et libero.', 'Cumque suscipit suscipit voluptatum modi eum expedita officiis. Sit ipsam error harum quia quis. Culpa odit rerum quia quia. Dolorem sed iure eveniet similique sunt facilis.', 'Nickolas Little DVM', 'published', 'http://lesch.com/blanditiis-et-repudiandae-suscipit-dolores-repellendus-enim', '1978-07-08', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(77, 8, 7, 'Aut aliquam voluptas recusandae minima cumque consectetur.', 'aut-aliquam-voluptas-recusandae-minima-cumque-consectetur', 'Eum in sit possimus aut tempora officiis eos ea. Quibusdam suscipit iste quos dolores. Ea officiis voluptas hic et beatae.\n\nNihil inventore aperiam voluptatem quia nihil. Optio provident quo quibusdam. Hic veniam eius est eum est atque eos. Enim dolorem veritatis suscipit delectus molestiae dolorem ut est.\n\nEnim iusto ullam delectus et pariatur dolorem. Voluptatibus est maxime id voluptas optio quam. Hic autem quia ipsa ex.\n\nAutem non natus necessitatibus. Eos sapiente odio eos totam. Autem dicta atque sed necessitatibus eveniet aut doloribus in.', 'Ipsum et voluptatem facere ut cum voluptates. Ipsa in vel voluptatem praesentium sapiente optio. Repellat commodi deserunt rerum omnis maiores. Accusamus quia fugiat aut dicta aut quia quia.', 'Gwendolyn Ondricka', 'published', 'http://www.morar.info/', '2019-07-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(78, 8, 3, 'Necessitatibus possimus et culpa aspernatur nemo quia.', 'necessitatibus-possimus-et-culpa-aspernatur-nemo-quia', 'Ut et nulla reprehenderit quaerat eum incidunt. Quisquam iure est optio provident harum tenetur et. Ipsa laboriosam recusandae temporibus dolores distinctio optio animi.\n\nEsse nobis excepturi non aspernatur. Qui fugit esse enim nobis.\n\nSit neque consectetur quis veritatis. Voluptatem molestias voluptas vitae molestiae hic quia rerum.\n\nVoluptatem modi vel alias quis eius dolorum qui. Enim quia et ut tenetur nesciunt. Et ipsa harum iste necessitatibus temporibus hic rerum. Qui id animi adipisci consectetur molestiae consequuntur.', 'Eum officiis quia doloremque repellendus. Est eos dolorem sint iusto. Sit cupiditate cumque aut et sunt ipsum modi qui. Tenetur et id et est. Cum officia quidem modi excepturi magnam.', 'Prof. Keanu Ebert PhD', 'published', 'https://www.muller.org/molestiae-dolor-ratione-odio-laudantium-dolore', '1978-02-09', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(79, 8, NULL, 'Distinctio eum et totam doloremque dolorum quibusdam.', 'distinctio-eum-et-totam-doloremque-dolorum-quibusdam', 'Dolor quibusdam sit placeat et odit quia. Laudantium ipsum quo ipsam nulla hic. In eius reprehenderit magni alias officiis ut aliquam. Nulla totam dignissimos fugit illum rerum sit deleniti.\n\nUt iusto ex dolor minima rerum debitis est. Quia eligendi non aut quos adipisci error ipsum. Magnam voluptatum voluptas et illo voluptatum molestias numquam exercitationem. Nam et et exercitationem voluptatibus quisquam. Cum quod voluptatem deleniti qui temporibus itaque.\n\nNecessitatibus fuga eos dolore ut minus necessitatibus commodi. Dolores est error consequuntur qui molestias voluptas. Neque exercitationem qui veritatis dolor ea.\n\nQuia voluptas molestiae qui consequatur quae. Omnis sit nihil voluptatem. Laudantium dignissimos facere dolorum. Eaque accusamus et natus porro odio nisi.', 'Consequatur et est in ut aperiam debitis. Voluptas porro sint voluptatum aut in explicabo quos. Qui hic iusto necessitatibus architecto consequuntur iure.', 'Claudia Crist', 'published', 'http://www.cummerata.com/ex-voluptas-ea-doloremque-doloremque-culpa', '2019-08-09', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(80, 9, NULL, 'Sunt adipisci repellat amet rem est.', 'sunt-adipisci-repellat-amet-rem-est', 'Delectus animi rem nihil sint officia eos. Ipsam dolor rerum suscipit doloribus eos. Eos expedita exercitationem perferendis et. Et ut vel et amet deleniti. Nulla debitis minus eum quidem voluptas quibusdam.\n\nQuia eaque illum veniam qui et suscipit. Corrupti at libero eum optio odit dolorem. Corporis quas id debitis eaque. Impedit delectus inventore dolores quas consequuntur odit.\n\nEt minus maxime in voluptates eos totam quibusdam. Architecto ab minima odio qui aut. Est amet illo nisi et laudantium.\n\nItaque perferendis molestiae commodi. Ipsa consequuntur sed dolore adipisci. Autem quibusdam eum facilis dolores.', 'Natus totam ex numquam ut aut consectetur maiores. Iste adipisci provident doloribus molestiae aut. Totam sit rem quidem et necessitatibus.', 'Ms. Duane McCullough', 'published', 'http://kessler.info/veritatis-occaecati-esse-omnis-ea-earum-consequatur', '2020-03-19', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(81, 3, NULL, 'Aut occaecati consectetur est quibusdam.', 'aut-occaecati-consectetur-est-quibusdam', 'Ratione sunt placeat dolore rerum quidem enim expedita. Perferendis quas ipsa dolor dolorem ipsa. Sit quos nam ut earum. Delectus voluptate nihil fugit ut.\n\nVeniam sunt quis qui accusamus. Nihil quo ut ipsa non rerum quis totam. Sit ullam velit aliquam doloribus tempore. Aliquid sed doloribus temporibus autem deserunt nisi facilis. Enim adipisci vitae nobis.\n\nFugiat odio placeat repellendus inventore est. Enim nemo iusto impedit unde sapiente accusamus provident. Commodi blanditiis consectetur impedit beatae eius. Omnis rerum natus qui libero ut eum minima error.\n\nExplicabo qui corrupti sunt eligendi. Est autem ipsa sit consequuntur. Aliquid saepe voluptates expedita rerum qui.', 'Asperiores sit ea nemo numquam explicabo eos officiis. Ut laboriosam possimus neque reiciendis ut non maxime et. Voluptate eius eligendi rerum beatae.', 'Andre Hyatt', 'published', 'http://casper.biz/aliquid-eveniet-a-commodi-a-debitis-eligendi-laudantium', '1999-01-08', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(82, 3, NULL, 'Assumenda mollitia molestiae in est ratione dolorem.', 'assumenda-mollitia-molestiae-in-est-ratione-dolorem', 'Enim quia eos adipisci. Error temporibus et quidem quia repellat vero. Aliquid eius amet consequatur pariatur ut.\n\nConsequatur perferendis vitae itaque omnis. Et rem qui minus. Dolorum quia qui est. Neque numquam similique et similique facere.\n\nTempora et itaque quia id corrupti. Ratione et libero magnam eveniet blanditiis. Ad suscipit culpa veniam eos sint maxime inventore. Distinctio autem ea aliquam perspiciatis explicabo vel.\n\nQui fugiat dolorem cupiditate consequatur nesciunt voluptate incidunt officiis. Sint necessitatibus sapiente reprehenderit autem aut nam. Excepturi sint earum voluptas consequatur exercitationem molestiae. Ut ratione nemo esse quisquam quam autem.', 'Voluptatem sed laudantium aliquid doloremque accusamus nemo. Magni velit molestiae sint vel ut.', 'Don Jenkins', 'published', 'http://hill.com/', '1995-07-27', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(83, 2, NULL, 'Sapiente consequatur fuga non cumque magnam nihil.', 'sapiente-consequatur-fuga-non-cumque-magnam-nihil', 'Veritatis cupiditate dicta et pariatur saepe voluptas. Aliquid quia aut rerum praesentium quis. Doloremque temporibus qui est nam et optio. Autem quaerat facilis doloremque dicta odit velit consequatur.\n\nError praesentium numquam quibusdam. Et optio quibusdam esse nihil illo voluptas exercitationem numquam. Harum est beatae cupiditate unde velit sed dicta.\n\nDolore alias tempora vitae aperiam. Quia aspernatur iure suscipit sit aperiam reprehenderit voluptas. Et distinctio reiciendis ea quis. Sunt assumenda dolores consequatur quia repudiandae aut at esse.\n\nNumquam iste est earum et blanditiis odit qui. Vel commodi ex in quia.', 'Ipsum porro necessitatibus doloribus. Animi ipsam quo accusantium est. Quis velit est qui voluptas sapiente. Animi culpa eligendi at molestiae voluptatem sit.', 'Nathan McCullough', 'published', 'http://flatley.com/totam-praesentium-quisquam-minima-inventore.html', '2021-08-31', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(84, 9, NULL, 'Aut et numquam et beatae qui cupiditate.', 'aut-et-numquam-et-beatae-qui-cupiditate', 'Voluptatem ad et odit debitis. Molestiae libero natus occaecati aliquid aperiam consequatur aut. Est omnis aut voluptates saepe et nulla. Vitae at voluptatum ad eos et. Rerum cupiditate aspernatur qui atque.\n\nUt laboriosam placeat omnis fugit velit laborum. Non expedita a reprehenderit molestiae harum quaerat voluptas. Dolores deleniti est eos quia doloremque aut et. Veniam non similique voluptas doloremque eos.\n\nIncidunt velit doloribus distinctio aperiam rem. Nulla quae repudiandae corrupti sint qui sed. Voluptatem cum eligendi repellendus in.\n\nNam repellat repellendus ut pariatur libero voluptas cupiditate et. Placeat architecto laborum ut. Dolorem sunt et enim et minus nulla. Blanditiis non eius recusandae ipsam. Ullam non assumenda ullam alias quae dolor.', 'Qui atque et maxime totam. Eaque nihil culpa eos non. Id et tempore eius omnis. Fugiat odio iusto libero in ex illum.', 'Kaia Mueller', 'published', 'https://www.wintheiser.net/quia-tempore-similique-accusamus-laudantium-corrupti-aut', '2010-08-22', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(85, 6, NULL, 'Dignissimos minima facere animi incidunt culpa id.', 'dignissimos-minima-facere-animi-incidunt-culpa-id', 'Omnis cumque eveniet dignissimos voluptatibus a. Quam corrupti eos dignissimos aliquam sint minus voluptatem. Harum et ex quam aspernatur labore iste ad. Tempora amet magni maiores consequatur dolorum tempore. Sapiente repellat aperiam voluptates qui ullam ullam quae.\n\nMolestiae sed expedita alias repellat tenetur et. Iure enim perferendis qui ut qui quisquam voluptatem.\n\nAccusamus voluptatem ad quo iusto id expedita. Magnam provident veritatis est temporibus. Quisquam voluptatem facilis veritatis libero ex totam soluta maxime.\n\nAutem aut quod quia consequatur vel. Fugiat omnis et et molestiae odit. Nobis optio minima quidem quia eum qui quia. Eaque est est aut voluptatem rerum distinctio.', 'Quia qui fugit ut aut ut. Quis est magnam at deserunt eum animi dolore voluptatibus. Pariatur sapiente id ut voluptatum eveniet. Iusto dolores nulla id impedit itaque quibusdam exercitationem.', 'Ulises Morar', 'published', 'http://price.net/enim-a-itaque-accusantium-et.html', '2014-12-18', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(86, 6, NULL, 'Aliquam non nostrum quasi aut et porro a.', 'aliquam-non-nostrum-quasi-aut-et-porro-a', 'Natus aspernatur impedit nobis sed voluptatem. Perspiciatis aut est impedit iste dolorem.\n\nVoluptatum consequatur cupiditate fuga et. Labore nam neque quia quas a eos voluptatem aperiam. Quidem nihil quos consequatur eos.\n\nConsequatur quia blanditiis consequatur molestiae aliquam. Et totam vero nisi omnis quam. Quam odio nam possimus.\n\nModi corrupti distinctio rerum minus. Velit animi autem repudiandae expedita. Excepturi eos laudantium autem dolorem et at. Quod tenetur sapiente totam officia. Veniam quas nulla et omnis.', 'Unde sit occaecati ea sint. Dolores impedit qui nemo ea enim cum. Beatae veritatis itaque culpa nesciunt nihil nobis. Necessitatibus deserunt perspiciatis et aut et aut.', 'Cody Franecki', 'published', 'http://www.lakin.com/placeat-omnis-itaque-in-labore-eius', '1981-07-03', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(87, 3, NULL, 'Blanditiis numquam optio error nulla.', 'blanditiis-numquam-optio-error-nulla', 'Quas facere explicabo ut numquam. Amet facilis quae explicabo consequuntur voluptatem neque. Dolores harum ullam consequatur deserunt consequatur praesentium maxime et.\n\nQuas vel et nihil et voluptas voluptatem. Sit accusantium amet tenetur vero voluptatem quisquam. Temporibus ut suscipit ut magni facilis similique repudiandae voluptatem. Quo non doloribus deserunt.\n\nRerum possimus nostrum nobis excepturi delectus temporibus aut quo. Assumenda harum voluptates qui. Velit est delectus mollitia pariatur facere nesciunt commodi qui.\n\nDeleniti ut quam laborum qui. In dolor cupiditate sapiente labore pariatur. Dolores repellendus totam asperiores enim quibusdam est aperiam nobis.', 'Odit illum modi qui sequi et provident nemo. Qui aut debitis consequatur molestiae voluptas non ea odio.', 'Prof. Javon Marvin', 'published', 'http://fadel.com/', '2001-02-02', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(88, 8, 2, 'Adipisci non qui ut non dolor totam eaque.', 'adipisci-non-qui-ut-non-dolor-totam-eaque', 'Dolorem libero ut nulla neque et vel nulla. Eaque nemo magnam sit voluptatem. Voluptatem quis optio quia error molestiae occaecati. Eum quibusdam similique culpa nihil omnis expedita.\n\nMolestiae non sit magnam accusamus illum nulla ut. Alias pariatur voluptatum non cupiditate possimus voluptatem exercitationem. Sint in et saepe nostrum excepturi assumenda. Nulla delectus et sit cumque est dolores quae ut.\n\nDolorem repudiandae sed aspernatur exercitationem molestiae a quis. Nihil amet aut impedit quasi id cumque. A voluptas architecto deserunt nam itaque est velit sit.\n\nPorro dolor corporis aliquid adipisci ad saepe. Veniam magnam similique et dolores. Nihil et in eveniet nihil saepe doloremque deleniti. Sed necessitatibus tempore perferendis delectus provident.', 'Placeat quis omnis reiciendis in aut velit. Quaerat rerum corrupti vitae necessitatibus. Aliquam totam aut ut doloremque ut illum.', 'Cleve Johnson', 'published', 'http://www.wintheiser.com/rerum-fuga-omnis-voluptatum-facere-ad-a-sunt', '1999-09-17', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(89, 3, NULL, 'Voluptatibus qui quisquam sunt.', 'voluptatibus-qui-quisquam-sunt', 'Sed quibusdam pariatur nam ut eaque et velit. Earum omnis nemo culpa quaerat alias voluptatibus. Quo mollitia asperiores velit non nobis.\n\nA doloremque doloremque earum placeat est sed sed. Eius est consequatur modi deserunt qui enim dolores. Tenetur nisi enim commodi ducimus laborum.\n\nPraesentium omnis error alias qui recusandae corporis. Maxime sed vel aut quod deleniti optio possimus. Velit quas reiciendis repudiandae ut eos recusandae error sunt. Voluptatem voluptas nisi tenetur eius quis.\n\nCum distinctio quibusdam distinctio autem aut. Eaque aliquid omnis aut nihil velit repellendus. Qui modi sed voluptatem tenetur velit facere id. Sunt quia iusto quod aut eum quam.', 'Soluta recusandae fuga dolor sunt enim numquam. Perferendis quasi et sit aut non. Officiis error quod expedita nostrum non dignissimos est quod.', 'Fabian Bahringer', 'published', 'http://bartell.com/nulla-dicta-occaecati-suscipit-exercitationem-voluptas-ea-id-earum.html', '2003-04-15', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(90, 7, 7, 'In alias ex doloremque omnis natus consequatur.', 'in-alias-ex-doloremque-omnis-natus-consequatur', 'Enim rerum repellat est officiis nostrum totam voluptatibus aut. Iusto ut nihil velit nihil. Enim fugit et doloribus. Libero quidem hic ut qui aliquid vero omnis tempora.\n\nSed explicabo magni quaerat aliquam et consequatur corporis. Inventore quam eos officiis tenetur tenetur et amet. Aliquam asperiores et commodi sit maxime veniam quia.\n\nRerum cumque et veniam beatae doloremque provident perspiciatis. Autem dolor sed unde doloremque. Officiis fugit cum est ut ratione animi.\n\nVeniam labore enim consequatur. Incidunt perspiciatis enim assumenda ullam molestiae et incidunt. Est quam temporibus laudantium et eos cumque.', 'Voluptatem deserunt debitis doloribus est adipisci. Rem velit cum nam aut in impedit molestiae.', 'Reanna D\'Amore', 'published', 'http://dooley.com/', '1997-05-13', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(91, 8, NULL, 'Placeat aut velit labore eveniet autem eius.', 'placeat-aut-velit-labore-eveniet-autem-eius', 'Rerum et modi dicta eius quaerat nostrum. Ut ipsa enim qui in veritatis quis ut. Officia molestiae similique consequatur perferendis.\n\nIn nemo quia voluptates at voluptas maxime iste itaque. Officiis numquam nam ab sequi ipsa minus fugiat. Quo quia ut rerum ipsa. Velit voluptatem voluptate occaecati id. Cupiditate quasi rem commodi facere molestiae.\n\nUt ex adipisci reiciendis voluptates quo velit neque. Sunt quis tempore ea earum perspiciatis voluptatem aut. Sint ut ad sit repellendus eos ipsam. Commodi autem qui illum ratione sapiente id.\n\nNumquam quasi cumque iure. Veniam quo possimus quod rerum sed mollitia. Sint ut eaque dicta repudiandae aliquid ex. Dolorem minus quisquam qui expedita dignissimos.', 'Ut nemo facilis nostrum minus iure id. Exercitationem dicta odit in. Dicta omnis numquam placeat dolores omnis veritatis.', 'Mrs. Gladyce King PhD', 'published', 'http://www.bartell.com/', '1976-02-07', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(92, 8, NULL, 'Vitae maiores et vel voluptatem est totam.', 'vitae-maiores-et-vel-voluptatem-est-totam', 'Autem dolorem voluptatem mollitia alias voluptatem consectetur est. Aut consequatur voluptas minima aut a delectus asperiores et. Velit iste est ut nobis. Voluptate reprehenderit quas culpa deleniti. In omnis et in error nostrum ab cum.\n\nQuis mollitia laboriosam quo qui aut pariatur ut similique. Aspernatur nostrum error aperiam aliquam et et vero. Ut in est dolorum rerum.\n\nNulla quo fugiat enim eaque. Exercitationem sed unde corrupti incidunt ut possimus. Et tempora optio eaque deleniti quo. Est voluptatum ut eos consectetur.\n\nEarum quaerat facilis ducimus iure autem sed. Sunt fugit tenetur id eos animi animi non. Officiis nobis tempora eligendi quisquam. Earum quaerat necessitatibus iure similique.', 'Ipsum beatae magnam adipisci ut amet sed. Illo vel occaecati aliquid rem. Iusto itaque enim sunt pariatur.', 'Mrs. Shirley Aufderhar Sr.', 'published', 'http://www.balistreri.net/', '2014-06-29', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(93, 8, NULL, 'Ea quis id itaque nisi velit iusto qui.', 'ea-quis-id-itaque-nisi-velit-iusto-qui', 'Accusantium et sed dolor ut aperiam. Et laboriosam qui et voluptatem rerum. Culpa quae sunt ut pariatur praesentium saepe.\n\nAspernatur corrupti tempora pariatur sit quos. Natus ut ea magnam occaecati. Pariatur autem aut unde ex.\n\nNon rem autem incidunt quia rerum ut ex. Deserunt mollitia minus deleniti et tempora quos iure. Aut tempora hic dolorem et voluptatem dolores ut ut.\n\nDolor vel temporibus nostrum id quis adipisci. Saepe porro libero impedit facilis aut et non. Est sit laborum iure. Voluptatem enim id aut laborum.', 'Ut non aliquam necessitatibus ut inventore illum neque. Et necessitatibus accusantium sint qui maxime voluptas natus. Repellat a consequatur debitis architecto qui et.', 'Kaycee Mayer II', 'published', 'http://thompson.com/blanditiis-recusandae-incidunt-eveniet-praesentium-quia-non-rem', '2019-06-06', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL);
INSERT INTO `posts` (`id`, `category_id`, `theme_id`, `title`, `slug`, `content`, `excerpt`, `author`, `status`, `link`, `published_at`, `created_at`, `updated_at`, `genre`) VALUES
(94, 8, 4, 'Magnam quas quod aut assumenda laudantium.', 'magnam-quas-quod-aut-assumenda-laudantium', 'Sapiente reprehenderit est dicta dicta placeat. Earum aut aut vitae sed accusantium.\n\nDebitis possimus rerum aperiam autem molestias. Ut est eius tempore nihil dolorem quae possimus. Velit error ipsam aut dolor qui quia.\n\nQuia sunt et eveniet qui consectetur quo. Aliquid ullam in nihil quia ratione. Et libero quaerat provident.\n\nAut et non soluta suscipit sint rerum. Id molestiae commodi deleniti voluptatem a sint. Est et quia expedita ea.', 'Ut saepe beatae neque minus. Nemo atque officiis sequi consequatur rerum quisquam enim. Qui fuga nostrum odio non distinctio ut. Quisquam aut at commodi autem.', 'Kianna Ferry', 'published', 'http://www.stark.com/vel-ipsa-et-et-provident.html', '2008-04-27', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(95, 8, 6, 'Debitis ut et repellat ex dolor aut et.', 'debitis-ut-et-repellat-ex-dolor-aut-et', 'Et illo fugiat mollitia. Aut illo quisquam atque recusandae omnis non. Atque aliquam eius neque. Repellendus natus doloremque qui rerum. Expedita corrupti deserunt delectus ea assumenda consectetur.\n\nIn perferendis aut suscipit error. Cumque sit velit provident placeat laboriosam. Quia temporibus quidem voluptatem qui dicta dignissimos alias.\n\nNihil iste ut at autem et. Quia vel adipisci perferendis delectus dolor. Quos ex vel laudantium nemo doloribus distinctio vitae. Delectus quia aliquid at corrupti asperiores beatae.\n\nIusto voluptas quos nemo aut sint eius tempore. Rerum reprehenderit debitis saepe et. Veniam non molestiae distinctio quos temporibus sunt expedita. Repudiandae accusamus non eos velit explicabo. Ab debitis consectetur quisquam quia.', 'Sunt consectetur enim vel dolorem odio accusamus voluptas minima. Est ex temporibus sed numquam assumenda. Ea rerum esse minima sapiente eum cum.', 'Mr. Marco Barton', 'published', 'http://www.morar.com/est-explicabo-qui-doloremque', '2000-12-04', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(96, 5, 1, 'Veritatis ut quae voluptatem qui.', 'veritatis-ut-quae-voluptatem-qui', 'Optio non sunt est explicabo aut sit. Rerum quis laborum animi. Quibusdam laborum soluta eaque sequi unde rem. Perspiciatis sint aperiam asperiores soluta. Aut quidem doloribus quia possimus amet omnis qui.\n\nPossimus error architecto numquam dolor. Ipsam doloribus laboriosam voluptas voluptatem magnam reprehenderit consectetur rerum. Quasi et ea doloribus.\n\nEnim non maiores dolorem soluta. Molestiae qui consequatur illo itaque aliquid. Consectetur earum aspernatur quasi reiciendis deserunt itaque facilis.\n\nPorro iste vero non commodi magnam est non. Fugit fugit ipsam distinctio aut. Ad et aut sed maiores consequatur a error.', 'Voluptas dolores quis impedit non voluptas dicta. Assumenda non qui ea error et aut. Ut dolor et est voluptatem exercitationem et.', 'Don Lesch', 'published', 'http://www.pfannerstill.org/voluptas-aperiam-aut-inventore-assumenda', '2000-08-13', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(97, 3, 1, 'Exercitationem excepturi enim et.', 'exercitationem-excepturi-enim-et', 'Et fugit suscipit totam in quis quia dolorem. Cupiditate sit quis qui natus et nulla doloribus cumque. Voluptatem eos sed odio asperiores consectetur numquam ipsa dolore. Voluptatum quod impedit voluptatum eaque aperiam optio et.\n\nSaepe eum commodi et itaque facilis cumque dolorum. Minima aspernatur voluptas dolorem in impedit vitae. Dolorem ut aut est et eos mollitia.\n\nQuae sit blanditiis cum. Velit consectetur incidunt maxime nihil voluptatem molestiae. Dolorum ipsum ex quaerat sint qui qui doloribus. Perspiciatis dolor vel quis.\n\nQuis commodi aliquam quidem iusto. Omnis quaerat ipsam unde sequi qui. Non perferendis et et dolorum. Delectus dolore fugit necessitatibus impedit accusamus.', 'Temporibus voluptatem fugiat et. Et officiis illum omnis soluta unde. Officia placeat et quia amet voluptatum. Eveniet rerum laborum vitae ut vitae magni.', 'Oliver Collier IV', 'published', 'http://www.schumm.com/saepe-laudantium-rem-quidem-sit-impedit-cum-sit', '1974-11-01', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(98, 5, NULL, 'Dignissimos error vitae rerum consectetur voluptatum exercitationem hic non.', 'dignissimos-error-vitae-rerum-consectetur-voluptatum-exercitationem-hic-non', 'Officiis voluptatem reiciendis beatae. Nam unde suscipit est. Qui perspiciatis corrupti repellat quae aut perspiciatis assumenda.\n\nEt dolorum porro ducimus soluta hic aut dolor. Atque veniam quidem quia qui id accusantium optio. Ea est qui aliquid sunt. Ut id autem ipsum exercitationem. Doloribus quos tempore ut sit est perferendis et.\n\nPariatur qui sit cum earum quidem. Iste dolore explicabo molestias est. Est accusantium officia aperiam et. Doloremque modi delectus dicta distinctio perferendis odit.\n\nVoluptates minus quia voluptas voluptas sed culpa nostrum. Aspernatur nam magni doloribus veniam id. Voluptatem veniam consequatur et eum. Sint id ipsam perferendis eum sed ut totam. Alias et quibusdam dolores nesciunt pariatur at.', 'Distinctio non voluptas maxime officia pariatur eos minima. Harum voluptatibus culpa aspernatur quaerat aut provident ipsum. Quibusdam et quaerat aliquid sed.', 'Ollie Denesik', 'published', 'http://www.parisian.net/', '1999-02-17', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(99, 9, 5, 'Necessitatibus qui repudiandae qui.', 'necessitatibus-qui-repudiandae-qui', 'Et non aut ratione aut. Esse quis atque sequi iusto dolores est pariatur aut. Ratione non ipsam voluptatibus molestiae.\n\nConsequatur dolores nesciunt illum vel ducimus et ad. Molestias consequatur soluta exercitationem voluptatem error minima provident. Quod sapiente aliquid cum eum saepe cupiditate dolor explicabo. Fugit necessitatibus ipsam mollitia praesentium illo consectetur repudiandae.\n\nEst quo eum quia velit quibusdam quasi neque. Vel nostrum voluptatibus quia odio pariatur consequuntur. Eum illo eum officiis et.\n\nAut amet tempore dolore temporibus quia animi non. Provident autem porro mollitia ut. Dolorem similique omnis nesciunt amet consequatur. Cumque reiciendis deleniti dolor mollitia.', 'Qui qui ut possimus. Omnis alias est voluptas at sequi doloremque. Sunt quas et sit quia. Cum sint cum nisi quasi iure omnis.', 'Mr. Jamel Klocko Jr.', 'published', 'http://www.okon.biz/quis-et-in-et-dignissimos-cumque.html', '2013-02-23', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL),
(100, 1, NULL, 'Amet voluptatem autem aut laborum eligendi.', 'amet-voluptatem-autem-aut-laborum-eligendi', 'Consequatur enim nisi magnam maxime nam. Quas blanditiis nihil tempore quod occaecati eaque porro. Nisi omnis ad sit deleniti reiciendis provident vel quam. Possimus explicabo quos quaerat aliquid non tenetur. Voluptas iste maiores molestias ullam cupiditate suscipit.\n\nReiciendis rerum repudiandae laboriosam quia ut. Voluptatem reiciendis quia autem porro sed alias nihil. Quia minus voluptas numquam nihil maxime dolorem. Ut totam quia officia consequatur possimus.\n\nIpsa asperiores omnis debitis expedita. Laudantium aut iusto ut. Neque et nihil sit. Reprehenderit tenetur fuga provident consectetur quidem.\n\nEos non rem repellat iusto et consectetur eos. Autem enim maiores tempore tenetur sint qui et. Similique impedit nihil soluta esse ducimus nostrum earum quisquam. Odio ut quasi numquam animi eligendi nulla.', 'Libero qui iste enim dolores est nemo. Qui aliquid quo porro dolorem. Libero earum cumque nam saepe qui est. Iusto quibusdam fugiat nobis sequi occaecati porro.', 'Zelma Marks', 'published', 'https://www.purdy.com/et-est-illo-modi-repellat-sunt-ut-officia-et', '1998-09-24', '2023-11-27 00:24:20', '2023-11-27 00:24:20', NULL);

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
(1, 1, 2, NULL, NULL),
(2, 1, 13, NULL, NULL),
(3, 1, 10, NULL, NULL),
(4, 2, 4, NULL, NULL),
(5, 2, 16, NULL, NULL),
(6, 2, 1, NULL, NULL),
(7, 3, 19, NULL, NULL),
(8, 3, 14, NULL, NULL),
(9, 3, 2, NULL, NULL),
(10, 4, 1, NULL, NULL),
(11, 4, 19, NULL, NULL),
(12, 4, 2, NULL, NULL),
(13, 5, 7, NULL, NULL),
(14, 5, 15, NULL, NULL),
(15, 5, 1, NULL, NULL),
(16, 6, 18, NULL, NULL),
(17, 6, 8, NULL, NULL),
(18, 6, 15, NULL, NULL),
(19, 7, 7, NULL, NULL),
(20, 7, 16, NULL, NULL),
(21, 7, 17, NULL, NULL),
(22, 8, 11, NULL, NULL),
(23, 8, 4, NULL, NULL),
(24, 8, 3, NULL, NULL),
(25, 9, 17, NULL, NULL),
(26, 9, 8, NULL, NULL),
(27, 9, 10, NULL, NULL),
(28, 10, 9, NULL, NULL),
(29, 10, 12, NULL, NULL),
(30, 10, 17, NULL, NULL),
(31, 11, 2, NULL, NULL),
(32, 11, 8, NULL, NULL),
(33, 11, 20, NULL, NULL),
(34, 12, 19, NULL, NULL),
(35, 12, 11, NULL, NULL),
(36, 12, 1, NULL, NULL),
(37, 13, 14, NULL, NULL),
(38, 13, 16, NULL, NULL),
(39, 13, 11, NULL, NULL),
(40, 14, 5, NULL, NULL),
(41, 14, 3, NULL, NULL),
(42, 14, 4, NULL, NULL),
(43, 15, 3, NULL, NULL),
(44, 15, 1, NULL, NULL),
(45, 15, 13, NULL, NULL),
(46, 16, 6, NULL, NULL),
(47, 16, 9, NULL, NULL),
(48, 16, 19, NULL, NULL),
(49, 17, 18, NULL, NULL),
(50, 17, 12, NULL, NULL),
(51, 17, 5, NULL, NULL),
(52, 18, 6, NULL, NULL),
(53, 18, 15, NULL, NULL),
(54, 18, 13, NULL, NULL),
(55, 19, 18, NULL, NULL),
(56, 19, 5, NULL, NULL),
(57, 19, 9, NULL, NULL),
(58, 20, 10, NULL, NULL),
(59, 20, 11, NULL, NULL),
(60, 20, 9, NULL, NULL),
(61, 21, 16, NULL, NULL),
(62, 21, 7, NULL, NULL),
(63, 21, 12, NULL, NULL),
(64, 22, 8, NULL, NULL),
(65, 22, 6, NULL, NULL),
(66, 22, 12, NULL, NULL),
(67, 23, 3, NULL, NULL),
(68, 23, 11, NULL, NULL),
(69, 23, 1, NULL, NULL),
(70, 24, 18, NULL, NULL),
(71, 24, 10, NULL, NULL),
(72, 24, 13, NULL, NULL),
(73, 25, 13, NULL, NULL),
(74, 25, 17, NULL, NULL),
(75, 25, 14, NULL, NULL),
(76, 26, 2, NULL, NULL),
(77, 26, 6, NULL, NULL),
(78, 26, 14, NULL, NULL),
(79, 27, 6, NULL, NULL),
(80, 27, 4, NULL, NULL),
(81, 27, 18, NULL, NULL),
(82, 28, 20, NULL, NULL),
(83, 28, 1, NULL, NULL),
(84, 28, 6, NULL, NULL),
(85, 29, 16, NULL, NULL),
(86, 29, 17, NULL, NULL),
(87, 29, 6, NULL, NULL),
(88, 30, 19, NULL, NULL),
(89, 30, 18, NULL, NULL),
(90, 30, 3, NULL, NULL),
(91, 31, 13, NULL, NULL),
(92, 31, 17, NULL, NULL),
(93, 31, 2, NULL, NULL),
(94, 32, 14, NULL, NULL),
(95, 32, 13, NULL, NULL),
(96, 32, 8, NULL, NULL),
(97, 33, 17, NULL, NULL),
(98, 33, 4, NULL, NULL),
(99, 33, 19, NULL, NULL),
(100, 34, 8, NULL, NULL),
(101, 34, 16, NULL, NULL),
(102, 34, 5, NULL, NULL),
(103, 35, 6, NULL, NULL),
(104, 35, 4, NULL, NULL),
(105, 35, 2, NULL, NULL),
(106, 36, 20, NULL, NULL),
(107, 36, 8, NULL, NULL),
(108, 36, 18, NULL, NULL),
(109, 37, 15, NULL, NULL),
(110, 37, 2, NULL, NULL),
(111, 37, 1, NULL, NULL),
(112, 38, 15, NULL, NULL),
(113, 38, 10, NULL, NULL),
(114, 38, 20, NULL, NULL),
(115, 39, 13, NULL, NULL),
(116, 39, 9, NULL, NULL),
(117, 39, 5, NULL, NULL),
(118, 40, 2, NULL, NULL),
(119, 40, 11, NULL, NULL),
(120, 40, 16, NULL, NULL),
(121, 41, 19, NULL, NULL),
(122, 41, 6, NULL, NULL),
(123, 41, 9, NULL, NULL),
(124, 42, 4, NULL, NULL),
(125, 42, 6, NULL, NULL),
(126, 42, 8, NULL, NULL),
(127, 43, 16, NULL, NULL),
(128, 43, 7, NULL, NULL),
(129, 43, 8, NULL, NULL),
(130, 44, 7, NULL, NULL),
(131, 44, 11, NULL, NULL),
(132, 44, 3, NULL, NULL),
(133, 45, 8, NULL, NULL),
(134, 45, 16, NULL, NULL),
(135, 45, 5, NULL, NULL),
(136, 46, 9, NULL, NULL),
(137, 46, 16, NULL, NULL),
(138, 46, 12, NULL, NULL),
(139, 47, 9, NULL, NULL),
(140, 47, 2, NULL, NULL),
(141, 47, 17, NULL, NULL),
(142, 48, 8, NULL, NULL),
(143, 48, 6, NULL, NULL),
(144, 48, 10, NULL, NULL),
(145, 49, 18, NULL, NULL),
(146, 49, 2, NULL, NULL),
(147, 49, 3, NULL, NULL),
(148, 50, 13, NULL, NULL),
(149, 50, 19, NULL, NULL),
(150, 50, 9, NULL, NULL),
(151, 51, 2, NULL, NULL),
(152, 51, 18, NULL, NULL),
(153, 51, 1, NULL, NULL),
(154, 52, 1, NULL, NULL),
(155, 52, 8, NULL, NULL),
(156, 52, 19, NULL, NULL),
(157, 53, 18, NULL, NULL),
(158, 53, 13, NULL, NULL),
(159, 53, 10, NULL, NULL),
(160, 54, 1, NULL, NULL),
(161, 54, 12, NULL, NULL),
(162, 54, 6, NULL, NULL),
(163, 55, 6, NULL, NULL),
(164, 55, 2, NULL, NULL),
(165, 55, 11, NULL, NULL),
(166, 56, 4, NULL, NULL),
(167, 56, 7, NULL, NULL),
(168, 56, 13, NULL, NULL),
(169, 57, 12, NULL, NULL),
(170, 57, 5, NULL, NULL),
(171, 57, 6, NULL, NULL),
(172, 58, 14, NULL, NULL),
(173, 58, 13, NULL, NULL),
(174, 58, 18, NULL, NULL),
(175, 59, 11, NULL, NULL),
(176, 59, 3, NULL, NULL),
(177, 59, 7, NULL, NULL),
(178, 60, 15, NULL, NULL),
(179, 60, 9, NULL, NULL),
(180, 60, 13, NULL, NULL),
(181, 61, 20, NULL, NULL),
(182, 61, 15, NULL, NULL),
(183, 61, 9, NULL, NULL),
(184, 62, 17, NULL, NULL),
(185, 62, 3, NULL, NULL),
(186, 62, 4, NULL, NULL),
(187, 63, 9, NULL, NULL),
(188, 63, 4, NULL, NULL),
(189, 63, 14, NULL, NULL),
(190, 64, 16, NULL, NULL),
(191, 64, 7, NULL, NULL),
(192, 64, 2, NULL, NULL),
(193, 65, 3, NULL, NULL),
(194, 65, 14, NULL, NULL),
(195, 65, 12, NULL, NULL),
(196, 66, 8, NULL, NULL),
(197, 66, 19, NULL, NULL),
(198, 66, 2, NULL, NULL),
(199, 67, 5, NULL, NULL),
(200, 67, 3, NULL, NULL),
(201, 67, 18, NULL, NULL),
(202, 68, 11, NULL, NULL),
(203, 68, 3, NULL, NULL),
(204, 68, 1, NULL, NULL),
(205, 69, 14, NULL, NULL),
(206, 69, 19, NULL, NULL),
(207, 69, 10, NULL, NULL),
(208, 70, 15, NULL, NULL),
(209, 70, 1, NULL, NULL),
(210, 70, 18, NULL, NULL),
(211, 71, 1, NULL, NULL),
(212, 71, 3, NULL, NULL),
(213, 71, 8, NULL, NULL),
(214, 72, 6, NULL, NULL),
(215, 72, 15, NULL, NULL),
(216, 72, 9, NULL, NULL),
(217, 73, 2, NULL, NULL),
(218, 73, 18, NULL, NULL),
(219, 73, 17, NULL, NULL),
(220, 74, 11, NULL, NULL),
(221, 74, 5, NULL, NULL),
(222, 74, 1, NULL, NULL),
(223, 75, 16, NULL, NULL),
(224, 75, 8, NULL, NULL),
(225, 75, 15, NULL, NULL),
(226, 76, 6, NULL, NULL),
(227, 76, 11, NULL, NULL),
(228, 76, 17, NULL, NULL),
(229, 77, 15, NULL, NULL),
(230, 77, 9, NULL, NULL),
(231, 77, 4, NULL, NULL),
(232, 78, 18, NULL, NULL),
(233, 78, 15, NULL, NULL),
(234, 78, 3, NULL, NULL),
(235, 79, 20, NULL, NULL),
(236, 79, 6, NULL, NULL),
(237, 79, 19, NULL, NULL),
(238, 80, 11, NULL, NULL),
(239, 80, 16, NULL, NULL),
(240, 80, 17, NULL, NULL),
(241, 81, 10, NULL, NULL),
(242, 81, 8, NULL, NULL),
(243, 81, 14, NULL, NULL),
(244, 82, 13, NULL, NULL),
(245, 82, 6, NULL, NULL),
(246, 82, 11, NULL, NULL),
(247, 83, 8, NULL, NULL),
(248, 83, 13, NULL, NULL),
(249, 83, 14, NULL, NULL),
(250, 84, 16, NULL, NULL),
(251, 84, 9, NULL, NULL),
(252, 84, 15, NULL, NULL),
(253, 85, 6, NULL, NULL),
(254, 85, 17, NULL, NULL),
(255, 85, 19, NULL, NULL),
(256, 86, 19, NULL, NULL),
(257, 86, 20, NULL, NULL),
(258, 86, 3, NULL, NULL),
(259, 87, 13, NULL, NULL),
(260, 87, 12, NULL, NULL),
(261, 87, 17, NULL, NULL),
(262, 88, 14, NULL, NULL),
(263, 88, 13, NULL, NULL),
(264, 88, 20, NULL, NULL),
(265, 89, 6, NULL, NULL),
(266, 89, 17, NULL, NULL),
(267, 89, 12, NULL, NULL),
(268, 90, 15, NULL, NULL),
(269, 90, 18, NULL, NULL),
(270, 90, 19, NULL, NULL),
(271, 91, 15, NULL, NULL),
(272, 91, 7, NULL, NULL),
(273, 91, 14, NULL, NULL),
(274, 92, 18, NULL, NULL),
(275, 92, 17, NULL, NULL),
(276, 92, 9, NULL, NULL),
(277, 93, 8, NULL, NULL),
(278, 93, 12, NULL, NULL),
(279, 93, 3, NULL, NULL),
(280, 94, 1, NULL, NULL),
(281, 94, 10, NULL, NULL),
(282, 94, 2, NULL, NULL),
(283, 95, 6, NULL, NULL),
(284, 95, 1, NULL, NULL),
(285, 95, 12, NULL, NULL),
(286, 96, 11, NULL, NULL),
(287, 96, 5, NULL, NULL),
(288, 96, 17, NULL, NULL),
(289, 97, 9, NULL, NULL),
(290, 97, 11, NULL, NULL),
(291, 97, 15, NULL, NULL),
(292, 98, 13, NULL, NULL),
(293, 98, 7, NULL, NULL),
(294, 98, 17, NULL, NULL),
(295, 99, 17, NULL, NULL),
(296, 99, 11, NULL, NULL),
(297, 99, 13, NULL, NULL),
(298, 100, 19, NULL, NULL),
(299, 100, 1, NULL, NULL),
(300, 100, 16, NULL, NULL);

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
(1, 11, 'Vol. 1, No. 1, 2005', NULL, NULL, NULL, '2023-11-27 03:30:53', '2023-11-27 03:30:53'),
(2, 11, 'Vol. 1, No. 2, 2005', NULL, NULL, NULL, '2023-11-27 03:38:29', '2023-11-27 03:38:29'),
(3, 11, 'Vol. 1, No. 3, 2005', NULL, NULL, NULL, '2023-11-27 03:40:08', '2023-11-27 03:40:08');

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
(1, 'LDCs after Brussels and Doha: Catching up or Falling Further Behind?', NULL, NULL, NULL, 2001, '2023-11-27 05:48:00', '2023-11-27 05:48:00');

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
(1, 'Genesis', '<p>Beginning the mid-1980s, most countries, across all regions of the world, started to rapidly embark on the path of globalization and liberalization. The global wave of globalization and liberalization also created a compelling situation for South Asian countries to follow suit. This led South Asian governments and stakeholders alike to design strategies and implement measures that enhance their capacities to benefit from regional and global integration, and respond to the adverse implications of globalization for their economies.</p>\n\n            <p>In order to complement the efforts of South Asian governments and stakeholders, and to bring to the fore the views and concerns of the marginalized and poor segments of society, South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”</p>.\n\n            <p>From 1994 to 1997, its secretariat was housed in Kolkata, India at the office of Consumer Unity & Trust Society (CUTS), a founding member institution of the network. With the emergence of consensus among network members, in 1997, SAWTEE\'s secretariat was moved to Kathmandu, Nepal. Since then, SAWTEE has strengthened its activities ranging from sensitization and awareness raising to independent and concrete policy research, capacity building and advocacy on trade, economic and environmental issues at local, national, regional and international levels.</p>', NULL, 'default', NULL, 2, '2022-07-04 21:13:05', '2021-10-20 05:59:23'),
(2, 'Registration and Recognition', '<p>SAWTEE was registered with the District Administration Office, Kathmandu, Nepal to operate as a non-profit, NGO in 1999. Due to its research capacity, policy outreach and developmental impacts, the organization has been growingly recognized as a think tank at local, national, regional and global levels. SAWTEE is also recognized in the capacity of a secretariat of a national network of Nepal-based national and international NGOs called National Alliance for Food Security in Nepal (NAFOS); a global network of civil society organizations (CSOs) working on biodiversity management and farmers rights issues called Farmers Rights Advocacy Network (FRANK); and a global network of least-developed countries (LDCs) established for the economic transformation of LDCs, called Least Developed Countries Network for Economic Transformation (LDC-NET). Its members and staff have served/been serving on the board of various international and national agencies working on trade, development, farmers rights and food security issues.</p>.', NULL, 'default', NULL, 2, '2017-01-13 06:21:51', '2017-06-11 19:27:06'),
(3, 'Vision, Goal and Objectives', '', NULL, 'default', NULL, 2, '2020-09-02 01:24:11', '2015-11-08 22:39:10'),
(4, 'Vision', '<p>Ensuring fair, equitable, inclusive, and sustainable growth and development in South Asia.</p>', NULL, 'tabs', 3, 2, '2015-11-18 09:57:01', '2021-09-04 11:37:53'),
(5, 'Goal', '<p>Enabling stakeholders, particularly the poor and marginalized, to derive net benefits from changing political economy and environmental landscapes.</p>', NULL, 'tabs', 3, 2, '2014-04-24 18:27:17', '2020-09-09 17:47:21'),
(6, 'Objectives', '<ol>\n            <li>To equip stakeholders with knowledge, information and skills to represent their interests and assert their rights to development.</li>\n            <li>To contribute to fair, equitable, inclusive, and sustainable growth and development for a society directed towards poverty reduction, food security and environmental sustainability.</li>\n            <li>To contribute to informed and participatory policy-making and implementation for fair, equitable, inclusive, and sustainable growth and development.</li>\n            <li>To contribute to enhancing meaningful participation of South Asian countries, particularly the least-developed and landlocked, in and their integration into the sub-regional, regional and multilateral trade, economic and environmental systems.</li>\n            <li>To contribute to strengthening regional cooperation in South Asia.&nbsp;</li>\n            </ol>', NULL, 'tabs', 3, 2, '2015-10-17 04:42:23', '2019-01-29 22:51:02'),
(7, 'Strategies', '', NULL, 'accordian', NULL, 2, '2021-04-17 22:34:01', '2016-03-05 16:48:37'),
(8, 'Policy Research', '<p>Realizing the capacity and resource constraints faced by South Asian NGOs to conduct research on various policy issues; come out with policy recommendations; and prepare well-argued advocacy strategy, SAWTEE, together with its member institutions and academics of the region, conducts policy research on issues such as World Trade Organization (WTO) rules, regional cooperation, intellectual property rights (IPRs), competition policy, farmers&rsquo; rights, climate change and development dimension of trade liberalization. The research findings are widely disseminated among South Asian as well as international audiences comprising, inter alia, trade negotiators, NGOs, the media, the academia, research institutions, international and regional inter-governmental organizations and the donor community, in English as well as various South Asian vernaculars.</p>\n            <p>Policy research conducted by SAWTEE includes: &nbsp;</p>\n            <ul>\n            <li>Mechanism for pruning the sensitive list under SAFTA</li>\n            <li>Trade and climate change in the context of South Asia</li>\n            <li>Traditional health services in South Asia</li>\n            <li>Liberalization of services trade in South Asia</li>\n            <li>Mechanisms for protecting farmers&rsquo; rights to livelihood in the Hindu-Kush Himalayan Region</li>\n            <li>Positive trade agenda for South Asian LDCs</li>\n            <li>Agricultural liberalization in South Asia</li>\n            <li>Gender implications of Nepal&rsquo;s accession to the WTO&nbsp;</li>\n            </ul>', NULL, 'accordian', 7, 2, '2021-06-03 14:54:37', '2023-01-10 19:50:31'),
(9, 'Advocacy', '<p>SAWTEE conducts various programmes advocating the cause of social justice and economic equity in the context of globalization and liberalization in general and trade liberalization in particular. SAWTEE and its member institutions organize conferences, seminars, policy dialogues, consultation meetings, talk programmes, monthly forums and interaction programmes at regular intervals to achieve this objective. The advocacy at the policy level is also supplemented by publication and distribution of policy briefs, briefing papers and issue papers on relevant issues on a timely manner.</p>\n\n            <p>Successful advocacy campaigns of SAWTEE and its member institutions include:</p>\n\n            <ul>\n            <li>Adoption of the concept of regional “seed bank” as an instrument for protecting food security in South Asia, which is reflected in the Declaration adopted by the 16th Summit of the South Asian Association for Regional Cooperation (SAARC) held in Bhutan in April 2010.</li>\n            <li>Convincing the Government of Nepal to preserve policy space required for achieving its development objectives in the process of signing Trade and Investment Framework Agreement (TIFA) with the United States.\n            Convincing the Government of Nepal to preserve the policy space required for achieving its development objectives in the process of the country’s accession to the WTO.</li>\n            <li>Convincing South Asian governments not to join the International Union for the Protection of New Varieties of Plant (UPOV), which could be detrimental to the interest of nearly 800 million farmers in the region.</li>', NULL, 'accordian', 7, 2, '2023-06-16 20:46:09', '2015-03-03 05:40:18'),
(10, 'Capacity Building', '<p>Recognizing the need to build the capacity of the concerned stakeholders in South Asia so as to better equip them with information and advocacy tools to provide adequate safety nets for the protection of poor, marginalized and vulnerable communities and people through enhanced regional and international cooperation, SAWTEE conducts capacity-building activities at various levels. Training workshops, monthly forums, information dissemination, internship programmes, etc., are the major vehicles through which SAWTEE builds the capacity of its member institutions, network institutions and other NGOs.</p>\n            <p>Some of the capacity-building efforts of SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Training of South Asian Economic Journalists on WTO issues and subsequent formation of South Asian Centre for Economic Journalists (SACEJ).</li>\n            <li>Training of South Asian researchers on Computable General Equilibrium (CGE) modelling for three consecutive years since 2008.</li>\n            <li>Creating a batch of young WTO practitioners from South Asia, through continuous training to the same group of people for eight years (between 1997 and 2004).</li>\n            <li>Capacity building of Nepali customs officials on Nepal&rsquo;s obligations under multilateral, regional and bilateral trade agreements.&nbsp;</li>\n            <li>Capacity building of Nepal\'s Ministry of Commerce and Supplies (MoCS) on emerging trade issues.</li>\n            <li>Capacity building of Nepali trade negotiators on issues and modalities of negotiations of SAARC Framework Agreement on Services (SAFAS).</li>\n            </ul>', NULL, 'accordian', 7, 2, '2019-11-04 00:12:13', '2016-11-03 18:47:52'),
(11, 'Sensitization', '<p>To inform, educate and provoke action from a wide readership, SAWTEE and its member institutions regularly publish briefing papers on issues related to globalization, liberalization, multilateral trading system, regional cooperation, competition policy, environment, IPRs, food security, farmers&rsquo; rights, etc. SAWTEE also publishes a quarterly magazine titled Trade Insight in which it includes analytical articles on contemporary trade and sustainable development issues. Besides, office bearers and staff members of SAWTEE as well as those of its member institutions publish articles on contemporary issues and agenda pursued by SAWTEE, in national, regional and international newspapers, magazines and journals.</p>\n            <p>Successful sensitization programmes conducted by SAWTEE and its member institutions include:</p>\n            <ul>\n            <li>Sensitization of consumers on the role they need to play in the regulation of electricity.</li>\n            <li>Sensitization of foreign ministry officials of South Asia through the publication of special briefs prior to the 16th SAARC Summit.</li>\n            <li>Sensitization of Member of Parliaments of Nepal and Pakistan on trade and development issues.</li>\n            <li>Sensitization of farmers and indigenous communities on their rights under the Convention of Biological Diversity (CBD) and the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), and how to protect these rights in the context of the attempt at ratcheting up intellectual property protection under the WTO\'s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS) and IPR provisions included in various bilateral and regional trade arrangements.</li>\n            </ul>', NULL, 'accordian', 7, 2, '2023-08-25 10:06:05', '2014-08-16 02:41:17'),
(12, 'Networking and alliance building', '<p>SAWTEE as well as its member institutions are active members of various national, regional and international alliances. By virtue of this networking, they are involved in collective efforts to realize the objective of fair trade and equitable development in the region. SAWTEE has established network linkages with the media, the academia and research institutions at national, regional and international levels, and seeks and obtains critical inputs from them. At the international level, SAWTEE has established close institutional linkages with ActionAid, London, Bangkok and Kathmandu; Centre for International Environmental Law (CIEL), Geneva; Centre for Policy Dialogue (CPD), Dhaka; Consumers International (CI), London and Kuala Lumpur; EU-LDC Network, Rotterdam; Friedrich Ebert Stiftung (FES), Germany and Kathmandu; Gene Campaign, New Delhi; Institute of Agriculture and Trade Policy (IATP), Minneapolis; International Centre for Trade and Sustainable Development (ICTSD), Geneva; International Plant Genetic Resources Institute (IPGRI), Rome; International Development Research Centre (IDRC), Ottawa; Local Initiatives for Biodiversity, Research and Development (LI-BIRD), Pokhara; MS Swaminathan Research Foundation (MSSRF), Chennai; Novib, The Hague; Oxfam, New Delhi; Southern and Eastern African Trade Information and Negotiations Institute (SEATINI), Harare; Southeast Asian Council for Food Security &amp; Fair Trade (SEACON), Kuala Lumpur; The World Conservation Union (IUCN), Kathmandu; United Nations Conference on Trade and Development (UNCTAD), Geneva and New Delhi; Wageningen University, Wageningen; World Trade Institute (WTI), Berne; and World Trade Organisation (WTO), Geneva, among others. &nbsp;</p>', NULL, 'accordian', 7, 2, '2017-03-12 14:11:50', '2014-07-19 23:06:32'),
(13, 'Resources', '<p>SAWTEE has been sustaining itself through membership fees and contributions, sales proceeds of its publications and support from development partners. SAWTEE has received support from, among others, the following development partners:</p>\n            <ul>\n            <li>ActionAid, Kathmandu and Bangkok</li>\n            <li>The Asia Foundation, Kathmandu</li>\n            <li>CARITAS, Kathmandu</li>\n            <li>Development Fund, Oslo</li>\n            <li>Department for International Development, Kathmandu</li>\n            <li>Friedrich Ebert Stiftung, New Delhi and Kathmandu</li>\n            <li>Ford Foundation, New Delhi</li>\n            <li>International Centre for Integrated Mountain Development (ICIMOD), Kathmandu</li>\n            <li>International Development Research Centre (IDRC), Ottawa</li>\n            <li>MS Nepal, Kathmandu</li>\n            <li>Oxfam Novib, The Hague</li>\n            <li>United Nations Conference on Trade and Development (UNCTAD), Geneva</li>\n            <li>United Nations Development Programme (UNDP), Kathmandu, Regional Centre in Colombo and Regional Centre in Bangkok</li>\n            <li>United Nations Fund for Women (UNIFEM) Regional Office, New Delhi</li>\n            <li>USC Canada, Kathmandu</li>\n            </ul>', NULL, 'accordian', NULL, 2, '2014-12-31 18:50:17', '2017-03-13 00:44:47'),
(14, 'Intro', '<p>Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability. With these guiding elements, our major thematic areas for research and advocacy are the following:</p>', NULL, 'default', NULL, 3, '2019-03-15 20:17:44', '2020-12-11 22:05:22'),
(15, 'Sectors', '', NULL, 'tabs', NULL, 3, '2014-02-03 05:24:03', '2021-06-19 00:31:56'),
(16, 'Our Programmes', '', 'programmes', 'tabs', 15, 3, '2023-05-23 03:17:38', '2019-11-08 23:45:03'),
(17, 'Research', '', 'research', 'tabs', 15, 3, '2022-03-04 17:26:41', '2014-06-07 12:20:29');

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

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `page_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Home Page Slider', '2023-11-27 01:24:48', '2023-11-27 01:24:48');

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
(1, 1, 'Aut Nam impedit lab', 'Repudiandae corrupti', '2023-11-27 01:31:34', '2023-11-27 01:31:34'),
(2, 1, 'Officia ex fugit se', 'Dignissimos itaque a', '2023-11-27 01:31:49', '2023-11-27 01:31:49'),
(3, 1, 'Rerum dolores ea Nam', 'Et sint dolorem rem', '2023-11-27 01:32:10', '2023-11-27 01:32:10'),
(4, 1, 'Eu labore ab pariatu', 'Facere molestias rec', '2023-11-27 01:32:33', '2023-11-27 01:32:33'),
(5, 1, 'Quisquam laboris dol', 'Quos dolorem rerum c', '2023-11-27 01:32:54', '2023-11-27 01:32:54'),
(6, 1, 'Ipsum tempore itaq', 'Et laborum voluptate', '2023-11-27 01:33:21', '2023-11-27 01:33:21'),
(7, 1, 'Dolorem elit tempor', 'Ea Nam dolore consec', '2023-11-27 01:33:37', '2023-11-27 01:33:37'),
(8, 1, 'Deserunt quia nemo d', 'Ipsum aut in dolore', '2023-11-27 01:34:02', '2023-11-27 01:34:02'),
(9, 1, 'Dolorem Nam placeat', 'Iure sit dolorem no', '2023-11-27 01:34:14', '2023-11-27 01:34:14');

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
(1, 'sed', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(2, 'voluptas', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(3, 'quisquam', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(4, 'voluptatem', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(5, 'deleniti', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(6, 'temporibus', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(7, 'autem', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(8, 'ut', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(9, 'quia', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(10, 'facilis', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(11, 'ea', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(12, 'velit', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(13, 'qui', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(14, 'incidunt', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(15, 'et', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(16, 'sunt', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(17, 'voluptatibus', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(18, 'nihil', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(19, 'sequi', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(20, 'ipsum', '2023-11-27 00:24:20', '2023-11-27 00:24:20');

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
(1, 'Economic and social reform, growth and poverty', 'Identifies South Asia’s development interests, in particular, those of the marginalized and poor people, communities and workers, in regional economic and social reform processes; and advocates their mainstreaming into economic and social policies, and growth and development processes.', '2022-11-18 20:54:27', '2015-05-02 20:37:52'),
(2, 'Trade integration and supply-side constraints', 'Advocates the region’s trade and development interests in bilateral, regional and multilateral trade negotiations and deals; and identifies ways and mechanisms to address South Asian countries’ supply-side constraints for their meaningful integration into the global economy.', '2018-11-27 02:03:46', '2014-01-04 02:55:40'),
(3, 'Trade and climate change', 'Promotes mutual compatibility between trade and climate change objectives by providing support to government, private sector and civil society organizations to design and implement policies that contribute to climate change mitigation and adaptation by utilizing trade as an instrument, and supporting government agencies in international negotiations.', '2021-05-21 10:36:17', '2017-12-14 19:02:27'),
(4, 'Agriculture policies, biodiversity management and food security', 'Calls for comprehensive agriculture policies that strengthen traditional farming systems and advance farmers\' traditional knowledge for meeting long-term food security objectives; and advocates community-centred biodiversity management policies, laws and programmes, including those relating to IPRs, so as to protect farmers\' rights to seeds and traditional knowledge.', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(5, 'Competition, regulation and competitiveness', 'Monitors the status and trends in markets for generating information and analysis on anti-competitive practices; advocates effective regulatory systems and measures for the protection of consumer rights and promotion of good business practices; and identifies and advocates policy and institutional measures for scaling up the competitiveness of domestic enterprises and institutions.', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(6, 'Financial resource management', 'Assesses the nature and trends of aid inflows as well as their allocation and sectoral use for identifying measures to enhance aid effectiveness; keeps track of government budget expenditures for productive investment; and advocates gender-responsive and pro-poor budget.', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(7, 'Remittance and development', 'Identifies mechanisms for improving human capital and effective remittance management; and advocates measures needed to ensure productive and decent working conditions, poverty reduction and human development.', '2023-11-27 00:24:20', '2023-11-27 00:24:20');

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
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$di4HQW/eJ5qBe3ssFE2XduHI/t0ZZrcFVMqrGMPVI2XXFM.2dZ4kS', NULL, NULL, NULL),
(2, 'Hilbert Greenfelder', 'ykiehn@example.net', '2023-11-27 00:24:20', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Xbizf6kXRL', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(3, 'Robbie Hansen', 'znader@example.com', '2023-11-27 00:24:20', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Hl8PnSo6fs', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(4, 'Taylor Carter', 'kunze.leila@example.org', '2023-11-27 00:24:20', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'JSVWJUsBnx', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(5, 'Piper Balistreri', 'bernhard.roman@example.org', '2023-11-27 00:24:20', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0KC2G3Llga', '2023-11-27 00:24:20', '2023-11-27 00:24:20'),
(6, 'Mr. Doug Lindgren PhD', 'betty.russel@example.net', '2023-11-27 00:24:20', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '6GzLvjVmiO', '2023-11-27 00:24:20', '2023-11-27 00:24:20');

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
