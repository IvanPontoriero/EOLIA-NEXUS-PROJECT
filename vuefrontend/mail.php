<?php

/*$name = "Undefined name";
$email = "Undefined mail";
$content = "Undefined content";*/


if(!empty($_POST['name'])){
    $name = $_POST['name'];
}
if(!empty($_POST['email'])){
    $email = $_POST['email'];
}
if(!empty($_POST['content'])){
    $content = $_POST['content'];
}

$message = "<p>New contact from Eolia Nexus</p>";
$message .= "<ul><li><strong>Name:</strong> $name</li><li><strong>Email:</strong> $email</li><li><strong>Message:</strong> $content</li></ul> ";

$to_email = 'yaelduckwen@gmail.com';
// contacteolia@mailfence.com
$subject = 'New contact from Eolia Nexus';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Eolia Nexus web <noreply@eolianexus.com>';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>