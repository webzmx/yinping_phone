<?php

/**
 * @Author: Administrator
 * @Date:   2018-09-18 14:47:42
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-08 18:21:00
 */
require "../inc/dbconn.php";
$sql = "select count(id) cou from erjicomp";

	$result = $conn->query($sql);
 $row = mysqli_fetch_assoc($result);
 $total= $row["cou"]; 
$currentPage = $_REQUEST["currentPage"];
$perPage = $_REQUEST["perPage"];

$sql = "select * from erjicomp order by price desc limit ".($currentPage-1)*$perPage.",".$perPage;
    $result = $conn->query($sql);

	if($result->num_rows > 0){
		while($row=mysqli_fetch_assoc($result)){
			$rows[] = $row;
		}
	}
	$array = array("total"=>$total,"data"=>$rows);
	echo json_encode($array);
?>