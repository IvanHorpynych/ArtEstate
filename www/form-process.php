<?php
$errorMSG = "";

$to = "lizaveta.odintsova@buroodintsova.com.ua";
$name = $_POST['name'];
$subject = 'Заявка на консультацию с сайта';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: site@artestate.com.ua"."\r\n" . "Reply-To:"."\r\n";
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