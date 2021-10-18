<?php

if (isset($_POST["name"])  ) { 

$result = array(
    'name' => $_POST["name"],
    'phonenumber' => $_POST["phonenumber"],
    'weight' => $_POST["weight"],
    'amount' => $_POST["amount"],
    'depdate' => $_POST["depdate"]
); 

 echo json_encode($result); 
}

?>
