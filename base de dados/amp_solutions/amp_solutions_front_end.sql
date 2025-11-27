-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: amp_solutions
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `front_end`
--

DROP TABLE IF EXISTS `front_end`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `front_end` (
  `id_Front` int NOT NULL AUTO_INCREMENT,
  `tecnologia_Front` varchar(255) NOT NULL,
  PRIMARY KEY (`id_Front`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `front_end`
--

LOCK TABLES `front_end` WRITE;
/*!40000 ALTER TABLE `front_end` DISABLE KEYS */;
INSERT INTO `front_end` VALUES (1,'React'),(2,'Vue.js'),(3,'Angular'),(4,'Svelte'),(5,'Solid.js'),(6,'jQuery'),(7,'Next.js'),(8,'Nuxt.js'),(9,'SvelteKit'),(10,'Astro'),(11,'Gatsby'),(12,'Remix'),(13,'Tailwind CSS'),(14,'Bootstrap'),(15,'Material-UI'),(16,'Sass'),(17,'Less'),(18,'Styled Components'),(19,'Chakra UI'),(20,'Bulma'),(21,'Webpack'),(22,'Vite'),(23,'Parcel'),(24,'Rollup'),(25,'Snowpack'),(26,'Jest'),(27,'Cypress'),(28,'Playwright'),(29,'Testing Library'),(30,'Vitest'),(31,'React Native'),(32,'Flutter'),(33,'Ionic'),(34,'Capacitor'),(35,'TypeScript'),(36,'Flow');
/*!40000 ALTER TABLE `front_end` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-27 16:38:45
