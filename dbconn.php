<?php
	header("content-type:text/html;charset=utf8");
	$serverName = "localhost";
	$userName = "root";
	$pwd = "root";
	$dbName = "test";
	//如果连接上数据库后，改变了数据库的结构，会造成下次连接的时候数据库连接不上，解决方法就是重启服务器
	$conn = new mysqli($serverName,$userName,$pwd,$dbName);

	//保证查询出来的中文不会出现乱码
	mysqli_set_charset($conn, "utf8");

	if($conn->connect_error){
		die("连接失败：".$conn->connect_error);
	}

	// echo "连接成功！";
?>