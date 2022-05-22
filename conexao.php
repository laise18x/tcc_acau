<?php

$servername = "localhost";
$database = "acau";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Falha na conexao: " .mysqli_connect_error());
}else{
echo "Conectou com sucesso";
}


?>