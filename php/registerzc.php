<?php
	require "../inc/dbconn.php";
	header("content-type:text/html;charset=utf8");
	$tell = $_REQUEST["tell"];
	$pwd = $_REQUEST["pwd"];
	$sql = "insert into register(tell,pwd) values('$tell','$pwd')";
	$result = $conn->query($sql);
	if($result){
		echo 1;
	}
	else{
		echo 0;
	}
?>