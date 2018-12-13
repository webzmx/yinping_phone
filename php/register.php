<?php
    require "../inc/dbconn.php";
	header("content-type:text/html;charset=utf8");
	$tell = $_REQUEST["tell"];
	$sql = "select * from register where tell='$tell'";
	$result = $conn->query($sql);
	if($result->num_rows==0){
		echo 1;
	}else{
		echo 0;
	}
?>