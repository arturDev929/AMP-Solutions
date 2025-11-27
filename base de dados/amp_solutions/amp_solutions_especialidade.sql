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
-- Table structure for table `especialidade`
--

DROP TABLE IF EXISTS `especialidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especialidade` (
  `id_esp` int NOT NULL AUTO_INCREMENT,
  `id_adm` int DEFAULT NULL,
  `id_col` int DEFAULT NULL,
  `id_Front` int DEFAULT NULL,
  `id_Back` int DEFAULT NULL,
  `id_des` int DEFAULT NULL,
  PRIMARY KEY (`id_esp`),
  KEY `id_adm` (`id_adm`),
  KEY `id_col` (`id_col`),
  KEY `id_Front` (`id_Front`),
  KEY `id_Back` (`id_Back`),
  KEY `id_des` (`id_des`),
  CONSTRAINT `especialidade_ibfk_1` FOREIGN KEY (`id_adm`) REFERENCES `adm` (`id_adm`),
  CONSTRAINT `especialidade_ibfk_2` FOREIGN KEY (`id_col`) REFERENCES `colaboradores` (`id_col`),
  CONSTRAINT `especialidade_ibfk_3` FOREIGN KEY (`id_Front`) REFERENCES `front_end` (`id_Front`),
  CONSTRAINT `especialidade_ibfk_4` FOREIGN KEY (`id_Back`) REFERENCES `back_end` (`id_back`),
  CONSTRAINT `especialidade_ibfk_5` FOREIGN KEY (`id_des`) REFERENCES `designr` (`id_des`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidade`
--

LOCK TABLES `especialidade` WRITE;
/*!40000 ALTER TABLE `especialidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `especialidade` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-27 16:38:46
