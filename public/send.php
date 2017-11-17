<?php

$frm_name  = "Заявка с сайта Торум";
$recepient = "design-mr@mail.ru";
$sitename  = "Torum-Perm";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);


$message = "
Имя: $name <br>
Телефон: $phone <br>
E-mail: $email <br>
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
