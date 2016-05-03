<?php 
	$option = get_option('montreal_theme_options'); 
?>

<footer class="black">
	<div class="container">
	
		<div class="row bigtoppadding">
			<?php dynamic_sidebar( 'footer-widgets' ); ?>
		</div>
		
		<div class="greyhorizontal midmargin"></div>
		
		<div class="row">
		
			<div class="four columns">
				<p class="greytext meta">
					 © <?php echo date('Y'); ?> <a href="<?php echo home_url(); ?>" class="greytext meta"><?php echo bloginfo('name'); ?></a> <?php echo bloginfo('description'); ?>
				</p>
			</div>
			
			<div class="five columns">
				<div class="meta">
					<?php wp_nav_menu( array( 'menu_id' => '', 'theme_location' => 'footer', 'container' => 'false' ) ); ?>
				</div>
			</div>
			
			<div class="three columns right">
				<p class="meta">
					<?php if( $option['facebook_link'] !='' ) : ?><a href="<?php echo $option['facebook_link']; ?>" class="greytext" target="_blank"><?php _e('Facebook', 'montreal'); ?></a> / &nbsp; <?php endif; ?>
					<?php if( $option['twitter_link'] !='' ) : ?><a href="<?php echo $option['twitter_link']; ?>" class="greytext" target="_blank"><?php _e('Twitter', 'montreal'); ?></a> / &nbsp; <?php endif; ?>
					<?php if( $option['google_link'] !='' ) : ?><a href="<?php echo $option['google_link']; ?>" class="greytext" target="_blank"><?php _e('Google+', 'montreal'); ?></a><?php endif; ?>
				</p>
			</div>
			
		</div>
		
	</div>
</footer>

<?php 
	wp_footer();
?>
<script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/featherlight.min.js"></script>
<script type="text/javascript" src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/js/custom.min.js"></script>
</body>
</html>