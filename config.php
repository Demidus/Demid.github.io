<?php

$connect = new mysqli("localhost", "root", "", "basa1");
    if (mysqli_connect_errno()) {
    printf("error", mysqli_connect_error());
    exit();
}

    $sql = "SELECT * FROM partner" ;

    $arrayresult = [];

   if ($result = mysqli_query($connect, $sql)) {


    while ($row = mysqli_fetch_assoc($result)) {

       $arrayresult[] = $row ;
    }



}
 

mysqli_close($connect);

 echo json_encode($arrayresult) ;
?>
