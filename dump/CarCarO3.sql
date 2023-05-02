-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: CarCarO
-- ------------------------------------------------------
-- Server version	8.0.33

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
  `grade` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`postId`),
  KEY `boards_FK` (`user_id`),
  CONSTRAINT `boards_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1077 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1058,'怨듭??ы빆1','怨듭??ы빆1','2023-04-27 02:09:24','2023-04-27 02:11:21','admin',2),(1059,'怨듭??ы빆2','怨듭??ы빆2ddff','2023-04-27 02:09:31','2023-04-27 08:21:59','admin',2),(1060,'?쇰컲寃뚯떆湲','?쇰컲寃뚯떆湲','2023-04-27 02:09:41','2023-04-27 02:09:41','admin',1),(1061,'?쇰컲寃뚯떆湲','?쇰컲寃뚯떆湲','2023-04-27 02:09:44','2023-04-27 02:09:44','admin',1),(1062,'?쇰컲寃뚯떆湲3','?쇰컲寃뚯떆湲3','2023-04-27 02:09:48','2023-04-27 02:09:48','admin',1),(1063,'?쇰컲寃뚯떆湲4','?쇰컲寃뚯떆湲4','2023-04-27 02:09:53','2023-04-27 02:09:53','admin',1),(1064,'?쇰컲寃뚯떆湲5','?쇰컲寃뚯떆湲5','2023-04-27 02:09:57','2023-04-27 02:09:57','admin',1),(1065,'?쇰컲寃뚯떆湲','?쇰컲寃뚯떆湲','2023-04-27 02:10:14','2023-04-27 02:10:14','user',1),(1066,'?쇰컲寃뚯떆湲6','?쇰컲寃뚯떆湲6','2023-04-27 02:10:19','2023-04-27 02:10:19','user',1),(1067,'?쇰컲寃뚯떆湲7','?쇰컲寃뚯떆湲7','2023-04-27 02:10:24','2023-04-27 02:10:24','user',1),(1068,'?쇰컲寃뚯떆湲8','?쇰컲寃뚯떆湲8','2023-04-27 02:10:29','2023-04-27 02:10:29','user',1),(1070,'?쇰컲寃뚯떆湲10','?쇰컲寃뚯떆湲10','2023-04-27 02:10:41','2023-04-27 02:10:41','user',1),(1071,'?쇰컲寃뚯떆湲11','?쇰컲寃뚯떆湲11','2023-04-27 02:10:46','2023-04-27 02:10:46','user',1),(1072,'?쇰컲寃뚯떆湲12','?쇰컲寃뚯떆湲12','2023-04-27 02:10:50','2023-04-27 02:10:50','user',1),(1073,'?쇰컲寃뚯떆湲13','13','2023-04-27 02:10:54','2023-04-27 02:10:54','user',1),(1074,'?쇰컲寃뚯떆湲14','?쇰컲寃뚯떆湲14','2023-04-27 02:10:58','2023-04-27 10:29:58','user',1),(1076,'fff','fffff','2023-04-27 10:30:10','2023-04-27 10:30:16','admin',2);
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `num` bigint NOT NULL AUTO_INCREMENT,
  `carNum` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
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
  `picture` json NOT NULL,
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
  `hashtag` varchar(100) DEFAULT NULL,
  `likes_count` int DEFAULT '0',
  `price` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`num`),
  UNIQUE KEY `cars_UN` (`carNum`),
  KEY `cars_FK` (`user_id`),
  CONSTRAINT `cars_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (60,'33媛 5695','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(61,'12媛 3321','user','援?궛','?먮낫??,'?몃옓??,'10000','2023','寃쎌쑀','?먮룞','4','2','以以묓삎李?,'?꾨쪣','?곗깋','','[{\"url\": \"/carImg/챠혡쨍챘혷혲챙혡짚_1682782989874.jpg\", \"filename\": \"챠혡쨍챘혷혲챙혡짚_1682782989874.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','','',0,1200,'2023-04-29 15:43:09','2023-04-29 15:43:09',NULL),(178,'11媛 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(179,'31媛 5695','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(180,'13d媛 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(181,'33媛dd 5695','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(182,'1df2媛 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(183,'33媛 d5695','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(184,'1fd2媛 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(185,'33媛 56a95','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(186,'12媛sd 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(187,'33媛 569ff5','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(188,'12媛we 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(189,'33媛 56925','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(190,'12媛 343333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(191,'33媛 56955','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(192,'12媛 36333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(193,'33媛 569755','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(194,'12媛 373333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(195,'33媛 569355','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(196,'12媛 331333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(197,'33媛 569523','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(198,'12媛 431333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(199,'33媛 569235','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(200,'12媛11 3333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(201,'33媛 56951322312','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(202,'12媛 3331343','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(203,'33媛 569555','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(204,'12媛 3551333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(205,'33媛 5691315','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(206,'12媛 3313533','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(207,'33媛 569566','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(208,'12媛 366666333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(209,'33媛 5695112','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(210,'12媛 33412333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(211,'33媛 56951235','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(212,'12媛 3331231453','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(213,'33媛 5695152','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(214,'12媛 33312343','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(215,'33媛 5695135','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(216,'12媛 3356733','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(217,'33媛 56952351','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(218,'12媛 3336723','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(219,'33媛 5695131235412','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(220,'12媛 333561233','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(221,'33媛 569590','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(222,'12媛 6783333','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(223,'33媛 56996785','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(224,'12媛 3336783','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(225,'33媛 5695456','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(226,'12媛 33679545733','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(227,'33媛 5695675','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(228,'12媛 336733','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(229,'33媛 56956735','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(230,'12媛 33312353','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',0,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(231,'33媛 56984565','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,1,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(232,'12媛 33345623','skm0628','援?궛','?꾨?','肄붾굹','333','2021','?꾧린','?먮룞','5','2','以以묓삎李?,'?꾨쪣','?뚮옉','01033333333','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682780218536.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682780218536.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','媛쒕찇吏?,'?덈뀞',1,5000,'2023-04-29 14:56:58','2023-04-29 14:56:58',NULL),(233,'33媛 5695234','user','?섏엯','?щⅤ??,'?뚮굹硫붾씪','333','2020','?섎컻??,'?섎룞','2','1','寃쎌감','?щ쪣','?곗깋','','[{\"url\": \"/carImg/챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\", \"filename\": \"챠혣혣챘혗혱챘짤혬챘혶쩌_1682782910657.jpg\"}]','1','1','1','1','1','1','1','1','1','undefined','硫뗭쭚','媛쒕찇吏?,0,20000,'2023-04-29 15:41:50','2023-04-29 15:41:50',NULL),(234,'12媛 33332','user','援?궛','?띿슜','?뚮굹','123','2022','?섎컻??,'?섎룞','4','2','?뚰삎李?,'?꾨쪣','?곗깋','','[{\"url\": \"/carImg/챠혡쨍챘혷혲챙혡짚_1682986501594.jpg\", \"filename\": \"챠혡쨍챘혷혲챙혡짚_1682986501594.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','','',2,1313,'2023-05-02 00:15:01','2023-05-02 00:15:01',NULL),(235,'12媛 3333','skm0628','援?궛','?꾨?','?뚮굹','13','2000','?섎컻??,'?섎룞','3','2','寃쎌감','?꾨쪣','?곗깋','','[{\"url\": \"/carImg/챙쩍혬챘혗혱_1682995048913.jpg\", \"filename\": \"챙쩍혬챘혗혱_1682995048913.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','','',0,333,'2023-05-02 02:37:28','2023-05-02 02:37:28',NULL),(236,'12媛11111','skm0628','援?궛','湲곗븘','?덈줈?깅줉??,'1313','2022','?섎컻??,'?섎룞','4','2','以以묓삎李?,'?꾨쪣','?곗깋','','[{\"url\": \"/carImg/챠혡쨍챘혷혲챙혡짚_1682995211514.jpg\", \"filename\": \"챠혡쨍챘혷혲챙혡짚_1682995211514.jpg\"}]','2','2','2','2','2','2','2','2','2','undefined','','',0,444,'2023-05-02 02:40:11','2023-05-02 02:40:11',NULL);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carshashtags`
--

DROP TABLE IF EXISTS `carshashtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carshashtags` (
  `carsId` bigint NOT NULL,
  `hashtagId` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`carsId`,`hashtagId`),
  KEY `carsHashtags_FK_1` (`hashtagId`),
  CONSTRAINT `carsHashtags_FK` FOREIGN KEY (`carsId`) REFERENCES `cars` (`num`),
  CONSTRAINT `carsHashtags_FK_1` FOREIGN KEY (`hashtagId`) REFERENCES `hashtags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carshashtags`
--

LOCK TABLES `carshashtags` WRITE;
/*!40000 ALTER TABLE `carshashtags` DISABLE KEYS */;
/*!40000 ALTER TABLE `carshashtags` ENABLE KEYS */;
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
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `post_id` bigint NOT NULL,
  PRIMARY KEY (`number`),
  KEY `comments_FK` (`user_id`),
  KEY `comments_FK_1` (`post_id`),
  CONSTRAINT `comments_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_FK_1` FOREIGN KEY (`post_id`) REFERENCES `boards` (`postId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (64,'?밤꽮gg','2023-04-27 12:01:40','2023-04-27 23:54:40','admin',1059),(66,'?끹뀉','2023-04-27 12:03:56','2023-04-27 12:03:56','skm0628',1074),(67,'?끹뀉','2023-04-27 12:03:58','2023-04-27 12:03:58','skm0628',1074),(68,'?끹뀉?밤꽮','2023-04-27 12:04:33','2023-04-27 12:04:35','skm0628',1072),(69,'?끹뀉??,'2023-04-27 12:04:50','2023-04-27 12:04:50','user',1073),(70,'?끹뀉?밤꽮','2023-04-27 12:04:56','2023-04-27 23:58:10','user',1058),(71,'?끹뀉?밤꽮?밤꽮','2023-04-27 12:12:13','2023-04-27 12:21:52','user',1074),(72,'tt','2023-04-27 12:14:21','2023-04-27 12:43:04','admin',1076),(73,'fffffssff','2023-04-27 12:14:23','2023-04-27 12:14:47','admin',1076),(74,'tt44f888','2023-04-27 12:15:33','2023-04-28 00:12:49','skm0628',1076),(75,'ff777','2023-04-27 12:18:10','2023-04-28 00:12:47','skm0628',1076),(78,'tt?끹뀉?끹뀉fff666','2023-04-27 12:18:23','2023-04-28 00:12:45','user',1076),(79,'ffff','2023-04-27 12:31:28','2023-04-28 01:39:55','user',1076),(80,'?밤꽮?퉒ff','2023-04-27 12:31:31','2023-04-28 01:39:53','user',1076),(81,'ff','2023-04-27 23:54:41','2023-04-27 23:57:14','admin',1059),(82,'fff?밤꽮','2023-04-27 23:54:42','2023-04-27 23:57:12','admin',1059),(83,'??,'2023-04-28 01:35:11','2023-04-28 01:35:11','user',1058),(84,'媛쒕찇?뉖늻~','2023-04-29 15:00:29','2023-04-29 15:00:29','skm0628',1059);
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
  `updatedAt` datetime NOT NULL,
  `grade` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (21,232,'user'),(24,231,'skm0628'),(25,234,'skm0628');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `increment_likes_count` AFTER INSERT ON `likes` FOR EACH ROW BEGIN

  UPDATE cars SET likes_count = likes_count + 1 WHERE num = NEW.car_num;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `decrement_likes_count` AFTER DELETE ON `likes` FOR EACH ROW begin

	update cars set likes_count = likes_count -1 where num = old.car_num;

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_UN` (`email`,`tel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin','愿由ъ옄','$2b$12$axVl/qpDI46EsU1oDepL1.l0BH/Bwfmp55rSycQf21CBMzV5RUBRS','admin@admin.com','01012345678','99',2),('kbj001211','源蹂묒젣','$2b$12$nf24.NvqhxZ6xvbcyF/7yu/Hkj.4x1HIqRSHGXEBk7fSGwx9FaBw2','kbj@kbj','01010101010','24',2),('rlaekgns1','源?ㅽ썕','$2b$12$1PjAaFRR38z3U1lFXl8qbuCrv8eVO9eDmWkKKieXwtwxzGFNamkfC','2','2','2',2),('skm0628','?먭컯誘?,'$2b$12$MX3gNEjrvIjIIUUDRXgF3O.4sRXSWiJoduEo2EVQ5neVtqnPiopLa','skm0628@naver.com','01049775695','31',2),('user','?쇰컲?좎?','$2b$12$J4WpzT4lxse1QG4DPRFsReNfWqssbd19YOnTk58LgunwaWDUD6Y92','user@user.com','01011111111','1',1),('weise','LSH','$2b$12$Xy0cQJP9A6O2stOhdi99suM0QoLnmTQ95/jfVgUaxvrVbYTom7252','a','123123','3',2);
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

-- Dump completed on 2023-05-02 11:45:48
