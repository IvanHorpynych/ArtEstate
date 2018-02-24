<?php
$errorMSG = "";

$to = "ivan.horpynych@gmail.com";
$name = $_POST['name'];
$subject = 'New message';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: info@info.ua"."\r\n" . "Reply-To: infoy@info.ua"."\r\n";
$success = mail($to, $subject, $message, $headers);

if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>