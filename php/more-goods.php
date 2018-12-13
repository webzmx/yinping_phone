<?php
    include "../inc/dbconn.php";
    $page = $_GET["page"];
    $size = 6;
    $start = ($page - 1) * $size;
    $sql = "select * from book order by Id desc limit " . $start . ",6" ;
    $result=$conn->query($sql);
	if($result->num_rows>0){
		while($row=mysqli_fetch_assoc($result)){
			$rows[]=$row;
		}
		
	}
	echo json_encode($rows);  // '[{"Id":"25","bookName":"史记"},{},{}]'
?>