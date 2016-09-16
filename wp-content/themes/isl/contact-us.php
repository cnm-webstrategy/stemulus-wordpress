<?php get_header();

/**
Template Name: Contact Us
 **/

?>



<?php

if(isset($_POST['submitted'])) :


	/* recaptcha */

	$zerif_contactus_sitekey = get_theme_mod('zerif_contactus_sitekey');

	$zerif_contactus_secretkey = get_theme_mod('zerif_contactus_secretkey');

	$zerif_contactus_recaptcha_show = get_theme_mod('zerif_contactus_recaptcha_show');

	if( isset($zerif_contactus_recaptcha_show) && $zerif_contactus_recaptcha_show != 1 && !empty($zerif_contactus_sitekey) && !empty($zerif_contactus_secretkey) ) :

		$captcha;

		if( isset($_POST['g-recaptcha-response']) ){

			$captcha=$_POST['g-recaptcha-response'];

		}

		if( !$captcha ){

			$hasError = true;

		}

		$response = wp_remote_get( "https://www.google.com/recaptcha/api/siteverify?secret=".$zerif_contactus_secretkey."&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR'] );

		if($response['body'].success==false) {

			$hasError = true;

		}

	endif;



	/* is developer */

	$developer = $_POST['developer'];

	/* name */


	if(trim($_POST['myname']) === ''):


		$nameError = __('* Please enter your name.','zerif-lite');


		$hasError = true;


	else:


		$name = trim($_POST['myname']);


	endif;


	/* email */


	if(trim($_POST['myemail']) === ''):


		$emailError = __('* Please enter your email address.','zerif-lite');


		$hasError = true;


	elseif (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['myemail']))) :


		$emailError = __('* You entered an invalid email address.','zerif-lite');


		$hasError = true;


	else:


		$email = trim($_POST['myemail']);


	endif;


	/* subject */


	if(trim($_POST['mysubject']) === ''):


		$subjectError = __('* Please enter a subject.','zerif-lite');


		$hasError = true;


	else:


		$subject = trim($_POST['mysubject']);


	endif;

	$aboutBusiness = stripslashes(trim($_POST['aboutBusiness']));
	$businessProblem = stripslashes(trim($_POST['businessProblem']));
	$users = stripslashes(trim($_POST['users']));
	$solution = stripslashes(trim($_POST['solution']));
	$newOrUpdate = stripslashes(trim($_POST['newOrUpdate']));
	$concerns = stripslashes(trim($_POST['concerns']));
	$message = stripslashes(trim($_POST['mymessage']));
	$interestedMessage = stripslashes(trim($_POST['interestedMessage']));

	/* send the email */


	if(!isset($hasError)):


		$zerif_contactus_email = get_theme_mod('zerif_contactus_email');

		if( empty($zerif_contactus_email) ):

			$emailTo = get_theme_mod('zerif_email');

		else:

			$emailTo = $zerif_contactus_email;

		endif;


		if(isset($emailTo) && $emailTo != ""):

			if( empty($subject) ):
				$subject = 'From '.$name;
			endif;

			if ($developer == 1) {

				$isDeveloper = "(I'm a developer)";

			}

			$body = "<strong>Name:</strong> $name $isDeveloper<br><br>
			<strong>Email:</strong> $email<br><br>
			<strong>Subject:</strong> $subject<br><br>
			<strong>Tell us about your business so we can better understand your needs.</strong><br>$aboutBusiness<br><br>
			<strong>Tell us about the business problem and process you need to improve.</strong><br>$businessProblem<br><br>
			<strong>Tell us about the users who will benefit from this solution.</strong><br>$users<br><br>
			<strong>What will your solution do for your business? What will be different once your solution is in place?</strong><br>$solution<br><br>
			<strong>Will this be new software or an update to an existing solution?</strong><br>$newOrUpdate<br><br>
			<strong>What are some concerns you may have about this project?</strong><br>$concerns<br><br>
			<strong>Any other comments?</strong><br>$message<br><br>
			<strong>Interested in working with us? Tell us about your interest and expertise.</strong><br>$interestedMessage";

			$headers = "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			$headers .= 'From: '.$name.' <'.$email.'>' . "\r\n" . 'Reply-To: ' . $email;

			wp_mail($emailTo, $subject, $body, $headers);


			$emailSent = true;


		else:


			$emailSent = false;


		endif;


	endif;


endif;


?>
</header> <!-- / END HOME SECTION  -->


<div id="content" class="site-content">


	<?php

	/* CONTACT US */
	$zerif_contactus_show = get_theme_mod('zerif_contactus_show');

	?>
	<section class="contact-us centerMe" id="contact">
		<div class="container">
			<!-- SECTION HEADER -->
			<div class="section-header">

				<?php

				$zerif_contactus_title = get_theme_mod('zerif_contactus_title','Get in touch');
				if ( !empty($zerif_contactus_title) ):
					echo '<h2 class="white-text">'.$zerif_contactus_title.'</h2>';
				endif;

				$zerif_contactus_subtitle = get_theme_mod('zerif_contactus_subtitle');
				if(isset($zerif_contactus_subtitle) && $zerif_contactus_subtitle != ""):
					echo '<h6 class="white-text">'.$zerif_contactus_subtitle.'</h6>';
				endif;
				?>
			</div>
			<!-- / END SECTION HEADER -->

			<!-- CONTACT FORM-->
			<div class="row">

				<form role="form" method="POST" action="" onSubmit="this.scrollPosition.value=(document.body.scrollTop)" class="contact-form" id="contactForm" name="contactForm">
					<input type="hidden" name="scrollPosition">

					<input type="hidden" name="submitted" id="submitted" value="true" />

					<div class="col-lg-4 col-sm-4" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="myname">Full Name*</label>
						<input required="required" type="text" name="myname" class="form-control input-box" value="<?php if(isset($_POST['myname'])) echo esc_attr($_POST['myname']);?>">

					</div>

					<div class="col-lg-4 col-sm-4" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="myemail">Email*</label>
						<input required="required" type="email" name="myemail" class="form-control input-box" value="<?php if(isset($_POST['myemail'])) echo esc_attr($_POST['myemail']);?>">

					</div>

					<div class="col-lg-4 col-sm-4" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="mysubject">Subject*</label>
						<input required="required" type="text" name="mysubject" class="form-control input-box" value="<?php if(isset($_POST['mysubject'])) echo esc_attr($_POST['mysubject']);?>">

					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter left, wait 0s, over 1s">

						<label for="aboutBusiness">Tell us about your business so we can better understand your needs.</label>
						<textarea rows="4" name="aboutBusiness" class="form-control textarea-box"><?php if(isset($_POST['aboutBusiness'])) { echo stripslashes($_POST['aboutBusiness']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="businessProblem">Tell us about the business problem and process you need to improve.</label>
						<textarea rows="4" name="businessProblem" class="form-control textarea-box"><?php if(isset($_POST['businessProblem'])) { echo stripslashes($_POST['businessProblem']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter left, wait 0s, over 1s">

						<label for="users">Tell us about the users who will benefit from this solution.</label>
						<textarea rows="4" name="users" class="form-control textarea-box"><?php if(isset($_POST['users'])) { echo stripslashes($_POST['users']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="solution">What will your solution do for your business? What will be different once your solution is in place?</label>
						<textarea rows="4" name="solution" class="form-control textarea-box"><?php if(isset($_POST['solution'])) { echo stripslashes($_POST['solution']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter left, wait 0s, over 1s">

						<label for="newOrUpdate">Will this be new software or an update to an existing solution?</label>
						<textarea rows="4" name="newOrUpdate" class="form-control textarea-box"><?php if(isset($_POST['newOrUpdate'])) { echo stripslashes($_POST['newOrUpdate']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="concerns">What are some concerns you may have about this project?</label>
						<textarea rows="4" name="concerns" class="form-control textarea-box"><?php if(isset($_POST['concerns'])) { echo stripslashes($_POST['concerns']); } ?></textarea>
					</div>

					<div class="col-lg-12 col-sm-12" data-scrollreveal="enter left, wait 0s, over 1s">

						<label for="mymessage">Any other comments?</label>
						<textarea rows="4" name="mymessage" class="form-control textarea-box"><?php if(isset($_POST['mymessage'])) { echo stripslashes($_POST['mymessage']); } ?></textarea>
					</div>

					<div id="interested" class="col-lg-12 col-sm-12" data-scrollreveal="enter right, wait 0s, over 1s">

						<label for="interestedMessage">Interested in working with us? Tell us about your interest and expertise.</label>
						<textarea rows="4" id="interestedMessage" name="interestedMessage" class="form-control textarea-box"><?php if(isset($_POST['interestedMessage'])) { echo stripslashes($_POST['interestedMessage']); } ?></textarea>
					</div>

					<div id="developerDiv" class="col-lg-12 col-sm-12 paddingClass" data-scrollreveal="enter down, wait 0s, over 1s, vFactor=1">
						<input type="checkbox" name="developer" id="developer" value="1" <?php echo $_POST['developer'] ? 'checked' : '' ?>>
						<span class="label developerLabel">Are you a developer?</span>
					</div>

					<?php

					if(isset($emailSent) && $emailSent == true) :

						echo '<div class="notification success"><p>'.__('Thanks! Your form was submitted successfully.','zerif-lite').'</p></div>';
						echo '<script type="text/javascript">jQuery("input, textarea").val("");</script>';

						global $wpdb;
						$wpdb->insert('wp_contacts',
							array(
								'name'=>$name,
								'email'=>$email,
								'subject'=>$subject,
								'message'=>$message,
								'developer'=>$developer
							),
							array(
								'%s',
								'%s',
								'%s',
								'%s',
								'%d'
							)
						);

					elseif(isset($_POST['submitted'])):

						echo '<div class="notification error"><p>'.__('Sorry, an error occured.','zerif-lite').'</p></div>';

					endif;


					if(isset($nameError) && $nameError != '') :

						echo '<div class="notification error"><p>'.esc_html($nameError).'</p></div>';

					endif;

					if(isset($emailError) && $emailError != '') :

						echo '<div class="notification error"><p>'.esc_html($emailError).'</p></div>';

					endif;

					if(isset($subjectError) && $subjectError != '') :

						echo '<div class="notification error"><p>'.esc_html($subjectError).'</p></div>';

					endif;

					if(isset($messageError) && $messageError != '') :

						echo '<div class="notification error"><p>'.esc_html($messageError).'</p></div>';

					endif;

					$zerif_contactus_sitekey = get_theme_mod('zerif_contactus_sitekey');
					$zerif_contactus_secretkey = get_theme_mod('zerif_contactus_secretkey');
					$zerif_contactus_recaptcha_show = get_theme_mod('zerif_contactus_recaptcha_show');

					if(isset($zerif_contactus_recaptcha_show) && $zerif_contactus_recaptcha_show != 1 && !empty($zerif_contactus_sitekey) && !empty($zerif_contactus_secretkey) ) :

						echo '<div class="g-recaptcha" data-sitekey="' . $zerif_contactus_sitekey . '"></div>';

					endif;

					$zerif_contactus_button_label = get_theme_mod('zerif_contactus_button_label','Send Message');

					if( !empty($zerif_contactus_button_label) ):

						echo '<button class="btn btn-primary custom-button grey-btn" type="submit" data-scrollreveal="enter left, wait 0s, over 1s">'.$zerif_contactus_button_label.'</button>';

					endif;

					?>

				</form>

			</div>

			<!-- / END CONTACT FORM-->

		</div> <!-- / END CONTAINER -->

	</section> <!-- / END CONTACT US SECTION-->

	<?php get_footer(); ?>
