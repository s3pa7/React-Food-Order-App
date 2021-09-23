<?php


define('DB_DSN', 'mysql:dbname=react_food_app;host=localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', 'qwerty123456');

session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

try {
    $conn = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //$sql = $conn->prepare("SELECT gsm_no , code FROM  argeta_mk_2109_codes WHERE  winning = :winning");
    $sql = $conn->prepare("SELECT * FROM  meals ");
    $sql->execute();

    $result = $sql->fetchAll();
    //return json_encode($result , true);
    //return $this->response->done($sql->fetchAll());
} catch (PDOException $e) {
    print_r($e);
    echo "Connection failed: " . $e->getMessage();
}
$conn = null;





echo json_encode($result , true);
die();
