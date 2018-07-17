<?php
    $host="localhost";
    $user="root";
    $pass=""; 
    $db_name="basa1";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db("basa1",$link);
?>
<?php

if (isset($_POST["Name"])) {
    $sql = mysql_query("INSERT INTO partner (Name, summ, age) 
                        VALUES ('".$_POST['Name']."','".$_POST['summ']."','".$_POST['age']."')");
    if ($sql) {
        echo "<p>dannye dobavleny.</p>";
    } else {
        echo "<p>oshibka.</p>";
    }
}
?>