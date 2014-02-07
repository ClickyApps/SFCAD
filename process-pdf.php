<?php

$email = htmlspecialchars($_POST['email'], ENT_QUOTES);

if ( $_POST['email'] == '' ) {
	
	echo 'Error';
	
} else {
		   
	$to = $email;
	
	$subject = "SfCaD | PDF Email";
	$message .= "<h3>SfCaD | PDF Email</h3>";
	$message .= "\n\n" .'<strong>Email Entered:</strong> ' . $email;
	
	$from = 'app@skillsforcareanddevelopment.co.uk';
	$headers = "MIME-Version: 1.0" . "\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";
	$headers .= "From: app@skillsforcareanddevelopment.co.uk" . "\n";
	$headers .= "BCC: josh@clicky.co.uk" . "\n";

	// Send email
	mail($to,$subject,$message,$headers);
	
	// Inform the user
	echo 'Success';
	
}
	
?>