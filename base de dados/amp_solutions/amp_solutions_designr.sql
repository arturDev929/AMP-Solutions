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
-- Table structure for table `designr`
--

DROP TABLE IF EXISTS `designr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `designr` (
  `id_des` int NOT NULL AUTO_INCREMENT,
  `tecnologia_des` varchar(255) NOT NULL,
  PRIMARY KEY (`id_des`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designr`
--

LOCK TABLES `designr` WRITE;
/*!40000 ALTER TABLE `designr` DISABLE KEYS */;
INSERT INTO `designr` VALUES (1,'Figma'),(2,'Adobe XD'),(3,'Sketch'),(4,'InVision'),(5,'Axure RP'),(6,'Proto.io'),(7,'Marvel'),(8,'Adobe Photoshop'),(9,'Adobe Illustrator'),(10,'Adobe InDesign'),(11,'Affinity Designer'),(12,'Affinity Photo'),(13,'CorelDRAW'),(14,'GIMP'),(15,'Canva'),(16,'Balsamiq'),(17,'Framer'),(18,'Principle'),(19,'Origami Studio'),(20,'UXPin'),(21,'Blender'),(22,'Cinema 4D'),(23,'Adobe After Effects'),(24,'Spline'),(25,'Three.js'),(26,'Storybook'),(27,'Zeroheight'),(28,'Supernova'),(29,'Miro'),(30,'Mural'),(31,'UserTesting'),(32,'Hotjar'),(33,'Optimal Workshop');
/*!40000 ALTER TABLE `designr` ENABLE KEYS */;
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
