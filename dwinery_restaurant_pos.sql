-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Време на генериране:  2 септ 2025 в 23:16
-- Версия на сървъра: 10.6.23-MariaDB-log
-- Версия на PHP: 8.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данни: `dwinery_restaurant_pos`
--

-- --------------------------------------------------------

--
-- Структура на таблица `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Храни', '2025-09-01 04:51:09', '2025-09-01 05:00:35'),
(2, 'Напитки', '2025-09-01 04:51:09', '2025-09-01 04:56:52'),
(3, 'Други', '2025-09-01 04:51:09', '2025-09-01 04:57:03');

-- --------------------------------------------------------

--
-- Структура на таблица `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `table_id` int(11) NOT NULL,
  `waiter_id` int(11) NOT NULL,
  `status` enum('active','completed','cancelled') DEFAULT 'active',
  `total_bgn` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total_eur` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `orders`
--

INSERT INTO `orders` (`id`, `table_id`, `waiter_id`, `status`, `total_bgn`, `total_eur`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'active', 43.90, 22.43, '2025-09-02 11:53:41', '2025-09-02 11:53:41'),
(2, 2, 2, 'active', 31.90, 16.30, '2025-09-02 12:01:40', '2025-09-02 12:01:40'),
(3, 3, 2, 'active', 12.00, 6.13, '2025-09-02 12:03:39', '2025-09-02 12:03:39');

-- --------------------------------------------------------

--
-- Структура на таблица `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `price_bgn` decimal(10,2) NOT NULL,
  `price_eur` decimal(10,2) NOT NULL,
  `status` enum('pending','preparing','ready','served') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `bar_item` tinyint(1) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `price_bgn`, `price_eur`, `status`, `created_at`, `updated_at`, `bar_item`) VALUES
(1, 1, 9, 1, 12.00, 6.13, 'pending', '2025-09-02 11:53:41', '2025-09-02 18:36:29', 1),
(2, 1, 8, 1, 19.90, 10.17, 'pending', '2025-09-02 11:53:41', '2025-09-02 18:36:35', 1),
(3, 1, 9, 1, 12.00, 6.13, 'pending', '2025-09-02 11:53:41', '2025-09-02 18:36:38', 1),
(4, 2, 9, 1, 12.00, 6.13, 'pending', '2025-09-02 12:01:40', '2025-09-02 18:36:42', 1),
(5, 2, 8, 1, 19.90, 10.17, 'pending', '2025-09-02 12:01:40', '2025-09-02 18:36:45', 1),
(6, 3, 9, 1, 12.00, 6.13, 'pending', '2025-09-02 12:03:39', '2025-09-02 18:36:51', 1);

-- --------------------------------------------------------

--
-- Структура на таблица `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price_bgn` decimal(10,2) NOT NULL,
  `price_eur` decimal(10,2) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `available` tinyint(1) DEFAULT 1,
  `bar_item` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price_bgn`, `price_eur`, `description`, `available`, `bar_item`, `created_at`, `updated_at`) VALUES
(1, 'Кюфте', 1, 12.50, 6.39, 'Сочно кюфте', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:20'),
(2, 'Кебабче', 1, 18.90, 9.66, 'Най-добрите кебабчета', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:28'),
(3, 'Карначе', 1, 16.80, 8.59, 'Карначе класика', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:34'),
(4, 'Шоколадова торта', 3, 8.50, 4.34, 'Шоко торта ', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:37'),
(5, 'Кафе', 2, 3.20, 1.64, 'Прясно кафе', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:40'),
(6, 'Чаша вино', 2, 9.50, 4.86, 'Вино от извора', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:44'),
(7, 'Брускета', 1, 7.80, 3.99, 'Брускета със слънчеви домати', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:47'),
(8, 'Fish & Chips', 1, 19.90, 10.17, 'Рибка', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:49'),
(9, 'Cocktail - Mojito', 2, 12.00, 6.13, 'Класически коктейл', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:55'),
(10, 'Крафт бира', 2, 4.50, 2.30, 'Наливно крафтче', 1, 1, '2025-09-01 04:51:09', '2025-09-02 15:35:58');

-- --------------------------------------------------------

--
-- Структура на таблица `restaurant_tables`
--

CREATE TABLE `restaurant_tables` (
  `id` int(11) NOT NULL,
  `table_number` varchar(10) NOT NULL,
  `seats` int(11) NOT NULL DEFAULT 4,
  `status` enum('free','occupied','reserved') DEFAULT 'free',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `restaurant_tables`
--

INSERT INTO `restaurant_tables` (`id`, `table_number`, `seats`, `status`, `created_at`, `updated_at`) VALUES
(1, 'T1', 4, 'occupied', '2025-09-01 04:51:09', '2025-09-02 11:53:41'),
(2, 'T2', 2, 'occupied', '2025-09-01 04:51:09', '2025-09-02 12:01:40'),
(3, 'T3', 6, 'occupied', '2025-09-01 04:51:09', '2025-09-02 12:03:39'),
(4, 'T4', 4, 'free', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(5, 'T5', 8, 'free', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(6, 'T6', 2, 'free', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(7, 'T7', 4, 'free', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(8, 'T8', 6, 'free', '2025-09-01 04:51:09', '2025-09-01 04:51:09');

-- --------------------------------------------------------

--
-- Структура на таблица `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` enum('admin','waiter','kitchen','bar') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Схема на данните от таблица `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `role`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin123', 'Administrator', 'admin', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(2, 'waiter1', 'waiter123', 'John Smith', 'waiter', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(3, 'waiter2', 'waiter123', 'Maria Garcia', 'waiter', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(4, 'kitchen1', 'kitchen123', 'Chef Wilson', 'kitchen', '2025-09-01 04:51:09', '2025-09-01 04:51:09'),
(5, 'bar1', 'bar123', 'Alex Bartender', 'bar', '2025-09-01 04:51:09', '2025-09-01 04:51:09');

--
-- Indexes for dumped tables
--

--
-- Индекси за таблица `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индекси за таблица `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `table_id` (`table_id`),
  ADD KEY `waiter_id` (`waiter_id`);

--
-- Индекси за таблица `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Индекси за таблица `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индекси за таблица `restaurant_tables`
--
ALTER TABLE `restaurant_tables`
  ADD PRIMARY KEY (`id`);

--
-- Индекси за таблица `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `restaurant_tables`
--
ALTER TABLE `restaurant_tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
