<?php

/**

 * The template for displaying the footer.

 *

 * Contains the closing of the #content div and all content after

 *

 * @package zerif

 */

?>

<footer id="footer">
	<div class="container">
		<aside id="text-5" class="widget widget_text">
			<h3 class="widget-title white-text">Ingenuity Software Labs</h3>
			<div class="textwidget"></div>
		</aside>

		<?php
		$footer_sections = 0;
		$zerif_address = get_theme_mod('zerif_address','24B, Fainari Street, Bucharest, Romania');
		$zerif_address_icon = get_theme_mod('zerif_address_icon',get_template_directory_uri().'/images/map25-redish.png');

		$zerif_email = get_theme_mod('zerif_email','support@codeinwp.com');
		$zerif_email_icon = get_theme_mod('zerif_email_icon',get_template_directory_uri().'/images/envelope4-green.png');

		$zerif_phone = get_theme_mod('zerif_phone','Phone number');
		$zerif_phone_icon = get_theme_mod('zerif_phone_icon',get_template_directory_uri().'/images/telephone65-blue.png');

		$zerif_socials_facebook = get_theme_mod('zerif_socials_facebook','#');
		$zerif_socials_twitter = get_theme_mod('zerif_socials_twitter','#');
		$zerif_socials_linkedin = get_theme_mod('zerif_socials_linkedin','#');
		$zerif_socials_behance = get_theme_mod('zerif_socials_behance','#');
		$zerif_socials_dribbble = get_theme_mod('zerif_socials_dribbble','#');

		$zerif_copyright = get_theme_mod('zerif_copyright');

		if(!empty($zerif_address) || !empty($zerif_address_icon)):
			$footer_sections++;
		endif;

		if(!empty($zerif_email) || !empty($zerif_email_icon)):
			$footer_sections++;
		endif;

		if(!empty($zerif_phone) || !empty($zerif_phone_icon)):
			$footer_sections++;
		endif;
		if(!empty($zerif_socials_facebook) || !empty($zerif_socials_twitter) || !empty($zerif_socials_linkedin) || !empty($zerif_socials_behance) || !empty($zerif_socials_dribbble) ||
			!empty($zerif_copyright)):
			$footer_sections++;
		endif;

		if( $footer_sections == 1 ):
			$footer_class = 'col-md-12';
		elseif( $footer_sections == 2 ):
			$footer_class = 'col-md-6';
		elseif( $footer_sections == 3 ):
			$footer_class = 'col-md-4';
		elseif( $footer_sections == 4 ):
			$footer_class = 'col-md-2';
		else:
			$footer_class = 'col-md-2';
		endif;

		/* COMPANY ADDRESS */
		if( !empty($zerif_address) ):
			echo '<div class="'.$footer_class.' company-details">';
			echo '<div class="icon-top red-text">';
			if( !empty($zerif_address_icon) ) echo '<i class="fa fa-map-marker"></i>';
			echo '</div>';
			echo $zerif_address;
			echo '</div>';
		endif;

		/* COMPANY EMAIL */
		if( !empty($zerif_email) ):
			echo '<div class="'.$footer_class.' company-details">';
			echo '<div class="icon-top white-text">';
			if( !empty($zerif_email_icon) ) echo '<i class="fa fa-envelope"></i>';
			echo '</div>';
			echo $zerif_email;
			echo '</div>';
		endif;

		/* COMPANY PHONE NUMBER */
		if( !empty($zerif_phone) ):
			echo '<div class="'.$footer_class.' company-details">';
			echo '<div class="icon-top green-text">';
			if( !empty($zerif_phone_icon) ) echo '<i class="fa fa-phone"></i>';
			echo '</div>';
			echo $zerif_phone;
			echo '</div>';
		endif;

		/* Twitter */
		if( !empty($zerif_socials_twitter) ):
			echo '<div class="'.$footer_class.' company-details">';
			echo '<div class="icon-top blue-text">';
			echo '<i class="fa fa-twitter"></i>';
			echo '</div>';
			echo '<a href="https://twitter.com/@ingenuityslabs" target="_blank">@IngenuitySLabs</a>';
			echo '</div>';
		endif;

		echo '<div class="col-md-4 company-details">';
		echo '<div class="">';

		echo '<img id=cnmIngenuityImage src="'. get_template_directory_uri() . '/images/logo-CNM-ingenuity-whitetext.png" alt="Ingenuity Software Labs" height="300">';
		echo '</div>';
		echo '</div>';
		?>

	</div> <!-- / END CONTAINER -->
</footer> <!-- / END FOOOTER  -->

<?php wp_footer(); ?>

</body>
</html>
