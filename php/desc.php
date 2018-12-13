<?php

include "../inc/dbconn.php";

$num = $_REQUEST["num"];                                          
$sql="select * from serise order by Id desc limit $num,10";
$result=$conn->query($sql);;
if($result->num_rows>0){
   
    while($row=mysqli_fetch_assoc($result)){
        $rows[] = $row;

    }
}
echo json_encode($rows);
?>