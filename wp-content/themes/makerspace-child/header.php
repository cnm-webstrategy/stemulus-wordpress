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
<!-- Google Tag Manager -->
 <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-K634WS"
 height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-K634WS');</script>
 <!-- End Google Tag Manager -->
<header>
	<div class="container">
		<section class="row custom-header">

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
<<<<<<< HEAD
</header>
=======
</header>
>>>>>>> 2ba7345f79b9345e5110c07e9563734f7a051ae9
