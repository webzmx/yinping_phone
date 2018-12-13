<?php 
	include "inc/dbconn.php";
	include "init.inc.php";

	$sql = "select * from serise order by Id asc limit 0,10";
	$result = $conn->query($sql);
	// var_dump($result);
	if($result->num_rows>0){
		while($row = mysqli_fetch_assoc($result)){
			$data[] = $row;
        }
    }
		// var_dump($data);
		$smarty->assign("goodslist",$data);
		$smarty->display("series-1.html");
	

 ?>