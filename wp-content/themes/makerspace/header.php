<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<?php $option = get_option('montreal_theme_options'); ?>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php if (is_home() || is_front_page()) { echo bloginfo('name'); } else { echo wp_title(''); } ?></title>	
	
	<?php if ( $option['custom_favicon'] ) : ?>
		<link rel="shortcut icon" href="<?php echo $option['custom_favicon']; ?>">
	<?php endif; ?>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="google-site-verification" content="QQMau7gl337LiK8R7qRKgjvbLdndwCUCaaK9-gjrNvM" />
		
	<link rel="stylesheet" type="text/css" href="//cloud.typography.com/6007112/641408/css/fonts.css" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
	<div class="container">
		<section class="row custom-header">
			<a class="mobile-show" href="<?php echo home_url(); ?>"><?php if ( $option['custom_logo'] !='' ) { echo '<img class="scale-with-grid-logo-small" src="' . $option['custom_logo_small'] . '" alt="Logo" />'; } ?></a>

			<div class="four columns">
				<a href="<?php echo home_url(); ?>"><?php if ( $option['custom_logo'] !='' ) { echo '<img class="scale-with-grid-logo" src="' . $option['custom_logo'] . '" alt="Logo" /><img class="scale-with-grid-logo-small" src="' . $option['custom_logo_small'] . '" alt="Logo" />'; } else { echo bloginfo('name'); } ?></a>
			</div>
	
		<div class="seven columns">
		
			<nav id="navigationmain">
				<?php wp_nav_menu( array( 'menu_id' => 'menu', 'theme_location' => 'primary', 'container' => 'false' ) ); ?>
			</nav>
	
		</div>
		
		</section>
	</div>
</header>