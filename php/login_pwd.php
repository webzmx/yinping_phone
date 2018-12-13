<?php
	require "../inc/dbconn.php";
	$pwd = $_REQUEST["pwd"];
	$sql = "select * from register where pwd='$pwd'";
	$result = $conn->query($sql);
	if($result->num_rows>=1){
		echo 1;
	}else{
		echo 0;
	}
?>