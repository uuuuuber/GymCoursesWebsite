-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: xdclass
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `adminName` varchar(30) DEFAULT NULL COMMENT '昵称',
  `pwd` varchar(124) DEFAULT NULL COMMENT '密码',
  `headImg` varchar(524) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `orderId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL COMMENT '用户id',
  `time` varchar(124) NOT NULL COMMENT '购课时间',
  `price` varchar(11) NOT NULL,
  `zhanghao` varchar(100) NOT NULL,
  `title` varchar(524) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (3,'唐杰华','2022-11-10','109/月','tjh','跑步机'),(4,'唐杰华','2022-11-10','109/月','唐杰华','瑜伽'),(5,'唐杰华','2022-11-10','109/月','唐杰华','基础器械训练'),(6,'唐杰华','2022-11-10','109/月','唐杰华','动感单车'),(7,'唐杰华','2022-11-11','109/月','tjh','拉杆');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `zhanghao` varchar(128) DEFAULT NULL COMMENT '昵称',
  `pwd` varchar(124) DEFAULT NULL COMMENT '密码',
  `head_img` varchar(524) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tjh','$2a$10$XT//wBc81HZ1iJ7Btzlw1eXYJNNyaCebvelE7Qv89iaJR/T2ndNhC','https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg'),(2,'唐杰华','$2a$10$XFtgRsdcw02Jk0q2oqDxKOghU3.zAnaIr70n8ra0vQpA/1xkgtFJ6','https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg'),(3,'胡明海','$2a$10$OggCCivNt1bm/F4iYHTPPuxcwmES0KVV3J8sAv5tpXrLVhlxFEeMG','https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `courseId` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '课程id',
  `title` varchar(524) DEFAULT NULL COMMENT '视频标题',
  `course_img` varchar(524) DEFAULT NULL COMMENT '封面图',
  `price` varchar(11) DEFAULT NULL COMMENT '价格,分',
  `point` double(11,2) DEFAULT '8.70' COMMENT '默认8.7，最高10分',
  `category` varchar(50) DEFAULT NULL COMMENT '课程分类',
  `del` int(11) DEFAULT '0' COMMENT '是否删除',
  `courseTime` varchar(124) DEFAULT NULL,
  `courseInfo` varchar(524) DEFAULT NULL,
  PRIMARY KEY (`courseId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'跑步机','R-C','109/月',2.00,'front',0,'2022/10/10','跑步是有氧运动，可以提高心肺功能，提高肺活量，更好的支持力量运动，提高心血管功能，提高热量消耗，减少多余脂肪。'),(2,'拉杆','R-C','109/月',3.00,'front',0,'2022/10/11','拉力绳通过拉引时的重力帮助锻炼肌肉，增加肌肉强度，且拉力绳携带方便，操作简单，能够随时随地的帮助进行如柔韧、拉伸、舒展、力量等运动。而且使用拉力绳几乎能锻炼到全身各处的肌肉，如肱三头肌、肱二头肌、背阔肌、胸肌、腿部肌肉等都是能使用拉力绳锻炼到的'),(3,'基础器械训练','R-C','109/月',1.00,'front',0,'2022/10/12','器械健身可明显地提高循环系统、呼吸系统、消化系统和中枢神经系统的机能水平，从而使体质得以全面增强，健康状况得以全面改善'),(4,'健美操','R-C','109/月',3.00,'front',0,'2022/10/13','健美操运动从影响人体健康的角度来说具有良好的作用，尤其是对于控制体重减肥和改善体型体态，提高协调性和韵律感具有良好的效果。 健美操改善了腹腔内脏活动的调节机能，增加了胃肠蠕动及其血液循环，使腹胀肠鼓、便秘、下肢静脉曲张、痔疮、嗜睡等并发症减少。'),(5,'动感单车','R-C','109/月',4.00,'front',0,'2022/10/14','通过骑动感单车达到的锻炼效果能分泌多巴胺，使得自身能够产生运动后的快感，同时因为骑行时多伴随着各种音乐节奏和不同的骑行效果，增加了运动的趣味性，使得心胸开朗、精神愉快。'),(6,'普拉提','R-C','109/月',2.00,'front',0,'2022/10/15','普拉提可以促进情感健康，平稳的功效可以舒缓紧张精神，宁心静神，在拉伸和加强肌肉的同时，也可促进循环系统的运转，扫除紧张情绪，灭个动作都会让人感到平静，协调和有活力，有助于集中注意力，消除压力。'),(7,'举重','R-C','109/月',4.00,'front',0,'2022/10/16','举重 运动 就是根据身体适应的重量举杠铃的一种运动，这项运动对于人们身体的手臂、腿部、以及腰部的肌肉具有极好的锻炼作用，可以增强肌肉的力量。'),(8,'瑜伽','R-C','109/月',4.00,'back',0,'2022/10/17','瑜伽能调节全身系统、改善血液循环、促进内分泌平衡、减压养心、释放身心, 达到修心养性的目的。. 瑜伽的其它好处还包括能提高免疫力、集中注意力、增加活力以及改善视力与听力等等。'),(9,'拳击','R-C','109/月',4.00,'back',0,'2022/10/18','拳击是一项全身运动,非常讲究身体各部位的协调性。主要训练身体的灵活协调性及心肺耐力,拉长肌肉,使之协调,身体更加灵活。任何年龄段的女性、儿童都可以练习拳击。针对部分女性及儿童比较内向、腼腆、害羞的表现,通过拳击的练习会迅速提升他们的自豪感和自信心。'),(10,'爵士','R-C','109/月',5.00,'back',0,'2022/10/19','学习爵士舞最明显的好处，就是身材的变化。 爵士舞属于有氧运动，根据美国运动医学会的建议，每周跳3-5次爵士舞，每次30-50分钟，便能塑造出魔鬼身材。 跳爵士不仅能消耗多余的脂肪，更能锻炼出肌肉，使得女孩的身材更紧致，曲线更动人。'),(11,'散打','R-C','109/月',4.00,'back',0,'2022/10/20','散打的好处培养竞争意识、健体防身、锻炼意志、发展心智。 散打是比较激烈的搏击运动.直面拳脚的攻击与身手比试,成功与失败、痛苦与高兴、失落与得意,两者必居其一.竞争意识是现在社会各种人才必须具备的基本素质,可以说散打最能培养胜不骄败不馁的竞争精神.'),(12,'有氧拉丁操','R-C','109/月',3.00,'back',0,'2022/10/21','有氧拉丁采用传统的拉丁步伐为主，其音乐则较为舒缓，配合音乐节奏进行呼吸吐纳，能起到较好的健身效果。有氧拉丁最大的特点是在运动中洋溢着拉丁舞蹈特有的欢乐与激情。有氧拉丁可以增加健身趣味性，对于都市人释放压力、放松自己特别有好处。'),(13,'舞蹈','R-C','109/月',1.00,'back',0,'2022/10/22','在练功房，在舞台上，在赛场上，可以遇到更多的舞友，彼此一个微笑，一个招呼，然后各自训练，各自跳舞，一起练，互相监督，互相打气。这些舞友身上散发出来的正能量，让你自己都不由得加快跳舞的步伐。'),(14,'杠铃操','R-C','109/月',3.00,'back',0,'2022/10/23','长期练习杠铃可锻炼上肢、腰、腹部肌肉,能很好地改善肌肉线条,增加肌肉耐力,常做杠铃练习,可使锻炼者的肌肉更结实,增加肌肉力量。'),(15,'引体向上','R-C','109/月',3.00,'all',0,'2022/10/24','相比别的训练方式来说，引体向上训练到身体的肌肉部位多，这是别的训练所带不来的效果，尤其是引体向上，对肌肉的刺激是非常大的，能很好的促进肌肉的生长。'),(16,'街舞','R-C','109/月',2.00,'all',0,'2022/10/25','跳街舞还是一项非常有效的瘦身有氧运动,对于消耗全身的脂肪的作用相当强。经常练习能让你充满活力。街舞是小肌肉群的运动，它很好地弥补了其他健身项目的局限性，使锻炼更为全面。而且街舞是非常好的有氧运动，连续跳1小时消耗的热量，相当于跑步6公里，它的减肥功效不言而喻，同时它还能提高身体协调能力。'),(17,'极限搏击操','R-C','109/月',3.00,'back',0,'2022/10/26','搏击操属于有氧运动的一种，结合拳击、武术、跆拳道、舞蹈等运动特点，能有效运动全身，帮助燃烧脂肪。'),(18,'尊巴','R-C','109/月',4.00,'back',0,'2022/10/27','尊巴并非某个年龄层的专利，跳尊巴时，人的肌肉伸缩范围适当，也没有器械性伤害，适合向更广泛人群推广。 运动专家还指出，尊巴运动有利于心肺功能，对关节损伤较小，对于想提高身体素质的中年人来说，是个合适的选择。');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'xdclass'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-12 18:27:21
