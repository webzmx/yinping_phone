<?php
	header('Access-Control-Allow-Origin:*');
	require "../inc/dbconn.php";

	$sql="select * from active order by id";
	$result=$conn->query($sql);
	if($result->num_rows>0){
		while($row=mysqli_fetch_assoc($result)){
			$rows[] = $row;
	
		}
	}

	echo json_encode($rows);

?>