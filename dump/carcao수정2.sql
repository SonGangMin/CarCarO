-- MySQL dump 10.13  Distrib 8.0.32, for macos11.7 (arm64)
--
-- Host: localhost    Database: CarCarO
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boards` (
  `postId` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`postId`),
  KEY `boards_FK` (`user_id`),
  CONSTRAINT `boards_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'adf','asdf','2023-04-22 12:44:35','2023-04-22 12:44:35','rlaekgns1838'),(2,'asdf','asdf','2023-04-22 13:42:56','2023-04-22 13:42:56','rlaekgns1838'),(3,'asdf','asdf','2023-04-22 13:46:35','2023-04-22 13:46:35','rlaekgns1838'),(4,'sdafasffff','sfffss','2023-04-22 13:46:42','2023-04-22 13:46:42','rlaekgns1838'),(5,'a','a','2023-04-22 13:46:56','2023-04-22 13:46:56','rlaekgns1838');
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `carNum` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `from` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mile` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `fuel` varchar(100) NOT NULL,
  `trans` varchar(100) NOT NULL,
  `seater` varchar(255) NOT NULL,
  `disp` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `method` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roof` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nav` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `light` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sensor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `camera` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `box` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `leather` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `heated` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `airbag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `etc` varchar(255) DEFAULT NULL,
  `like` bigint NOT NULL DEFAULT '0',
  `hashtag` varchar(100) DEFAULT NULL,
  `num` bigint NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`num`),
  UNIQUE KEY `cars_UN` (`carNum`),
  KEY `cars_FK` (`user_id`),
  CONSTRAINT `cars_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES ('a','import','hyundai','hyundai','df','df','f','f','d','df','fd','f','df','f','그로브 메인.png','f','f','f','f','f','f','f','f','f','ff','f',0,'df',6,'rlaekgns1838'),('asd','domestic','hyundai','hyundai','asdf','df','df','df','f','f','f','f','f','f','그로브-짜집기1.png','f','f','df','f','f','f','f','df','f','f','fd',0,'f',7,'rlaekgns1838'),('asdfdd','domestic','bmw','hyundai','asd','df','f','f','f','f','f','f','f','f','그로브-짜집기2.png','f','f','f','f','f','f','f','f','f','f','f',0,'f',8,'rlaekgns1838'),('ff','domestic','hyundai','hyundai','df','f','f','f','f','f','f','f','f','f','그로브-짜집기1.png','f','f','ff','f','f','ff','ff','f','f','f','f',0,'f',9,'rlaekgns1838'),('vv','domestic','hyundai','hyundai','df','f','f','dff','f','f','f','f','f','f','그로브-짜집기1.png','f','f','f','f','f','f','f','f','f','f','f',0,'f',10,'rlaekgns1838'),('vvs','domestic','hyundai','hyundai','f','f','f','f','f','f','f','f','f','f','áá³áá©áá³-áá¡ááµá¸ááµ11682257067635.png','f','f','f','f','f','f','f','f','f','f','f',0,'f',12,'rlaekgns1838'),('125vv','domestic','hyundai','hyundai','f1f1f1f1f','f','f','f','f','f','f','f','f','f','KakaoTalk_Photo_2022-03-14-12-05-201682257152097.jpeg','f','f','f','f','f','f','f','f','f','f','f',0,'f',13,'rlaekgns1838');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `number` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`number`),
  KEY `comments_FK` (`user_id`),
  CONSTRAINT `comments_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faqs` (
  `number` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hashtags`
--

DROP TABLE IF EXISTS `hashtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hashtags` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cars_hashtag` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cars_number` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hashtags`
--

LOCK TABLES `hashtags` WRITE;
/*!40000 ALTER TABLE `hashtags` DISABLE KEYS */;
/*!40000 ALTER TABLE `hashtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquirys`
--

DROP TABLE IF EXISTS `inquirys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquirys` (
  `number` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(255) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `answer` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`number`),
  KEY `inquiry_FK` (`user_id`),
  CONSTRAINT `inquiry_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquirys`
--

LOCK TABLES `inquirys` WRITE;
/*!40000 ALTER TABLE `inquirys` DISABLE KEYS */;
/*!40000 ALTER TABLE `inquirys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `number` bigint NOT NULL AUTO_INCREMENT,
  `car_num` bigint NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`number`),
  KEY `likes_FK_1` (`user_id`),
  KEY `likes_FK` (`car_num`),
  CONSTRAINT `likes_FK` FOREIGN KEY (`car_num`) REFERENCES `cars` (`num`),
  CONSTRAINT `likes_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `tel` varchar(13) NOT NULL,
  `birth` varchar(10) DEFAULT NULL,
  `grade` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('','','$2b$12$pntIFjwSDl3lLI2epO38QeuMb3qmSVjBYH9qvOG597biXYbSDj.t6','','','',1),('adm','관리자','$2b$12$SnYUL5Sf.OAWtUgyfk00RuTuLZ70Txp1DSGyRhpIhRgDIbYX32lWi','kdh@kdh.com','01033333333','123',1),('kdh','kdh','$2b$12$50/TWakw8wxQSB9txxdI5OLRmSttZy2vOY/BsI9evpVqODvwUM43C','rlaekgns1838@nate.com','01000000000','12',1),('rlaekgns1838','김다훈','$2b$12$Ta4RCy3tB6wHSVBnshbXhOTdLXQ/VdF.LTDPHwd5O5u0RT.5U4sOa','rad','01011111111','21',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-24  9:18:08
