<?php

$frm_name  = "Заявка с сайта Торум";
$recepient = "design-mr@mail.ru";
$sitename  = "Torum-Perm";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
