<?php
$to = 'callseungyuforhelp@gmail.com';
$subject = 'Message from Website';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
echo "Thank you for your message!";
?>