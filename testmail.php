<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "test@mail.com";
$to = "juliocaba@gmail.com";
$subject = "chequeo de envio de email";
$message = "se envio correctamente";
$headers = "From: " . $from;
mail($to, $subject, $message, $headers);
echo "se envio el mensaje";
?>
