# Host: localhost  (Version: 5.5.40)
# Date: 2018-11-16 17:49:04
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "erjicomp"
#

DROP TABLE IF EXISTS `erjicomp`;
CREATE TABLE `erjicomp` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float(6,2) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

#
# Data for table "erjicomp"
#

/*!40000 ALTER TABLE `erjicomp` DISABLE KEYS */;
INSERT INTO `erjicomp` VALUES (1,'https://img.ingping.com/images/product/ML/201405/201405211637390168579.jpg','音平(INGPING) H60红豆监听级高音质耳塞',99.00,' ',40),(2,'https://img.ingping.com/images/product/ML/201704/201704261159350492645.jpg','得胜(TAKSTAR) PRO82 专业参考级监听耳机 (黑色)',469.00,'低频纯净、中频透彻和高频细腻',69),(3,'https://img.ingping.com/images/product/ML/201706/201706291534530384665.jpg','铁三角(Audio-technica) ATH-M20x头戴式耳机 专业录音音乐K歌监听',338.00,'具备性价比的入门级机型！',20),(4,'https://img.ingping.com/images/product/ML/201302/201302261205350006772.jpg','得胜(TAKSTAR) HD 2000 黑金版 专业监听耳机推荐',139.00,'混厚的低音、清晰的中音以及延展的高音！',10),(5,'https://img.ingping.com/images/product/ML/201302/201302011610370650576.jpg','舒尔(SHURE) SRH440 录音级头戴式耳机',688.00,'2015年耳机品牌排行榜！家庭录音室录音和监听的理想之选',8),(6,'https://img.ingping.com/images/product/ML/201706/201706291518400956864.jpg','爱科技(AKG) K271MKⅡ专业监听级高保真立体声耳罩式耳机',839.00,'自动静音，可换线！',22),(7,'https://img.ingping.com/images/product/ML/201704/201704261159120338295.jpg','得胜(TAKSTAR) PRO82 专业参考级监听耳机 (银色)',469.00,'低频纯净、中频透彻和高频细腻',28),(8,'https://img.ingping.com/images/product/ML/201209/201209011549210504612.jpg','得胜(TAKSTAR) HD 3000 专业封闭式监听耳机',189.00,'电脑录音、翻唱、网络K歌，可折叠翻转，声音细节丰富',29),(9,'https://img.ingping.com/images/product/ML/201410/20141029161548005496.jpg','铁三角(Audio-technica) ATH-IM50 双动圈监听耳塞 可换线耳机 (白色)',426.00,'2015年耳机品牌排行榜！实现监听音色！发烧友强烈推荐！',44),(10,'https://img.ingping.com/images/product/ML/201708/20170804180615027029.jpg','莱维特(LEWITT) IN-EARS 专业入耳塞监听耳塞HIF高保真耳机 (金榜金)',799.00,' ',32),(11,'https://img.ingping.com/images/product/ML/201602/201602261753080853214.jpg','舒尔(SHURE) SE215专业入耳式监听耳机 入耳式HI-FI隔音耳塞（透明）',779.00,'低音强劲、丰富细腻的声音',26),(12,'https://img.ingping.com/images/product/ML/201510/201510131151020741301.jpg','铁三角(Audio-technica) ATH-M40x头戴式 专业录音棚耳机',699.00,'还原真实的声音！！！',65),(13,'https://img.ingping.com/images/product/ML/20122/201202021458240480517.jpg','拜亚动力(Beyerdynamic) DT770 PRO 专业监听头戴式耳机 (250Ω)',1388.00,'【双11到手价1388元】11.1-13疯狂开抢！该套装/产品不与商城其他活动同时参与',16),(14,'https://img.ingping.com/images/product/ML/201711/201711250902000830970.jpg','爱科技(AKG) K52头戴式专业录音师监听发烧音乐耳机',299.00,'40mm驱动单元 轻型耐用 封闭式结构',34),(15,'https://img.ingping.com/images/product/ML/201607/201607171635380682172.jpg','爱科技(AKG) K92 封闭式监听耳机',448.00,'录音棚主流耳机',28),(16,'https://img.ingping.com/images/product/ML/201208/201208301628190003981.jpg','爱科技(AKG) K240 Studio 录音室专业监听耳机',598.00,'监听耳机推荐，不错还原声音本色 ',16),(17,'https://img.ingping.com/images/product/ML/201212/201212201727220361828.jpg','ISK SEM6 入耳式耳塞 录音 K歌',196.00,' ',23),(18,'https://img.ingping.com/images/product/ML/201510/201510121648450457793.jpg','铁三角(Audio-technica) ATH-M30x录音室头戴式监听耳机',599.00,'录音室专业监听耳机！！！',19),(19,'https://img.ingping.com/images/product/ML/201410/201410291605180285602.jpg','铁三角(Audio-technica) ATH-IM50 双动圈监听耳塞 可换线耳机 (黑色)',426.00,'2015年耳机品牌排行榜！实现监听音色！发烧友强烈推荐！',21),(20,'https://img.ingping.com/images/product/ML/201301/201301241139270380208.jpg','拜亚动力(Beyerdynamic) DT770 PRO 专业监听头戴式耳机 (80Ω)',1388.00,'【双11到手价1388元】11.1-13疯狂开抢！该套装/产品不与商城其他活动同时参与',33);
/*!40000 ALTER TABLE `erjicomp` ENABLE KEYS */;
