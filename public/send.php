<?php

$frm_name  = "Заявка с сайта Торум";
$recepient = "design-mr@mail.ru";
$sitename  = "torum-perm";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$mess = trim($_POST["message"]);
$filepath = trim($_FILES['file']['tmp_name']);
$filename = trim($_FILES['file']['name']);





$message = "
Имя: $name <br>
Телефон: $phone <br>
E-mail: $email <br>
Сообщение: $mess <br>
Файл: $filepath
";

mail($recepient, $subject, $message, $filepath, $filename "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
