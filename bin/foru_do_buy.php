<?php
    require_once "connect.php";

    $database_connect = @new mysqli($host, $user, $pass, $database_name);

    if($database_connect->connect_errno!=0){

        echo "Error: ".$database_connect->connect_errno;
        

    }
   else{


    echo "Working ";
   
    }   

 






?>