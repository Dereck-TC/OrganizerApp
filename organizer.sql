-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: organizerapp
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `datestart` date NOT NULL,
  `dateend` date DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL,
  `iduser` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_iduser` (`iduser`),
  CONSTRAINT `fk_iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'JavaScript','aprender funciones y objetos','2022-05-30','2022-06-10','fc-bg-deepskyblue','circle',1),(2,'JavaScript','aprender funciones y objetos','2022-05-30','2022-06-10','fc-bg-deepskyblue','circle',1),(3,'aprender Inglés','descripcion del evento','2022-05-05','2022-05-15','blue','circle',2),(4,'Hola','ggggg','2022-05-17',NULL,'fc-bg-lightgreen','suitcase',NULL),(5,'Desarrollar mi gestor de horarios','actividad','2022-05-29',NULL,'fc-bg-pinkred','circle',NULL),(6,'frfr','ggg','2022-05-12',NULL,'fc-bg-deepskyblue','suitcase',NULL),(7,'JavaScript','aprender funciones y objetos','2022-05-30','2022-06-10','fc-bg-deepskyblue','circle',1);
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Dereck','alek@gmail.com','alek','2001-11-26','$2b$10$.J6iN0pDOF/FfApUqsXVVepOP1cpPWplGsl9axaaD.PfWejKYZbQq'),(2,'ethsn','ethan@gmail.com','isai','2020-02-28','$2b$10$.J6iN0pDOF/FfApUqsXVVepOP1cpPWplGsl9axaaD.PfWejKYZbQq'),(3,'Nayeli','nayeli@gmail.com','Nayi01','1997-05-05','$2b$10$0wlGRVVlTx7WOVhHZpD30uEDfeNJvJUY16Hmxfxi7jkl/Iwm92Vz.'),(4,'Nayeli','nayeli@gmail.com','Nayi01','1997-05-05','$2b$10$DKyTGO/juEnh4qll5XsafO5sgmmNQeZJEmh0eWDOrxb3RBW46I3U.'),(5,'Lucas','lucas@gmail.com','Luc4s','2000-10-25','$2b$10$2mY.DN4RWvtE1IvmIeo1D.CYNj/rNEbhxKOrXWhAAYpCyHk0SHulq'),(6,'Dereck','alek@gmail.com','alek','2001-11-26','123456');
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

-- Dump completed on 2022-07-01 10:05:44
