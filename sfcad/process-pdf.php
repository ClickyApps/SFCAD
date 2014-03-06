<?php

$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$emailContent = $_POST['emailContent'];
$notes = $_POST['notes'];

if ( $_POST['email'] == '' ) {
	
	echo 'Error';
	
} else {
		   
	$to = $email;
	
	$email_template = file_get_contents('email_template.html');
	$search_values=array("{EMAIL_CONTENT}","{NOTES_CONTENT}");
	$real_values=array($emailContent,$notes);
	$email_template=str_replace($search_values,$real_values,$email_template);
	
	$subject = "PCF App";
	
	$from = 'app@skillsforcareanddevelopment.org.uk';
	$headers = "MIME-Version: 1.0" . "\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";
	$headers .= "From: app@skillsforcareanddevelopment.co.uk" . "\n";
	$headers .= "BCC: josh@clicky.co.uk" . "\n";

	// Send email
	mail($to,$subject,$email_template,$headers);
	
	// Inform the user
	echo 'Success';
	
}
	
?>