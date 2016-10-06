<?php
function theme_enqueue_styles() {

    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );

	// is this wpengine production?
	if ( is_wpe() ) {  
	    wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/641408/css/fonts.css');
	} else  {
		//development url
		 wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/785104/css/fonts.css');
	}
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

//ENQUEUE JQUERY & CUSTOM SCRIPTS
// This function is taken from the parent, which hard codes some CSS 
// into the parent theme in such a way that some child theme styles are lower priority
// and will never be recognized as highest priority without the `!important` tag. - GH

// First, unregister the function from the parent - GH
remove_action( 'wp_enqueue_scripts', 'ebor_load_scripts');

// Then reload and register the function using the child directory paths
// instead of the parent (use `get_stylesheet_uri()` instead of `get_template_directory_uri()`) - GH
function ebor_load_scripts_GH() {
	$protocol = is_ssl() ? 'https' : 'http';
	
	wp_enqueue_style( 'ebor-font1', "$protocol://fonts.googleapis.com/css?family=Oswald:400,300,700" );
	wp_enqueue_style( 'ebor-font2', "$protocol://fonts.googleapis.com/css?family=Droid+Serif:400italic,700italic" );
	wp_enqueue_style( 'ebor-font3', "$protocol://fonts.googleapis.com/css?family=Ubuntu" );
	wp_enqueue_style( 'ebor-mediaelementplayer', get_template_directory_uri() . '/player/skin/mediaelementplayer.css' );
	wp_enqueue_style( 'ebor-plugins', get_template_directory_uri() . '/css/plugins.css' );
	wp_enqueue_style( 'ebor-styles', get_template_directory_uri() . '/styles.php' );
	wp_enqueue_style( 'ebor-style', get_stylesheet_uri() );
	wp_enqueue_style( 'ebor-custom', get_stylesheet_directory_uri() . '/custom.min.css' );
	
	wp_enqueue_script( 'ebor-modernizr', get_template_directory_uri() . '/js/libs/modernizr-2.0.6.min.js', array('jquery') );
	wp_enqueue_script( 'ebor-mediaelement', get_template_directory_uri() . '/player/lib/mediaelement.js', array('jquery') );
	wp_enqueue_script( 'ebor-mediaelementplayer', get_template_directory_uri() . '/player/lib/mediaelementplayer.js', array('jquery') );
	wp_enqueue_script( 'ebor-maps', 'http://maps.google.com/maps/api/js?sensor=true', array('jquery'), false, true );
	wp_enqueue_script( 'ebor-gumby', get_template_directory_uri() . '/js/libs/gumby.min.js', array('jquery'), false, true );
	wp_enqueue_script( 'ebor-gumby-tabs', get_template_directory_uri() . '/js/libs/gumby.tabs.js', array('jquery'), false, true );
	wp_enqueue_script( 'ebor-gumby-toggle', get_template_directory_uri() . '/js/libs/gumby.toggleswitch.js', array('jquery'), false, true );
	wp_enqueue_script( 'ebor-plugins', get_template_directory_uri() . '/js/plugins.js', array('jquery'), false, true );
	wp_enqueue_script( 'ebor-main', get_template_directory_uri() . '/js/main.js', array('jquery'), false, true );
	if( is_page_template('page-home.php') )
		wp_enqueue_script( 'ebor-supersized', get_template_directory_uri() . '/js/supersized.js', array('jquery') );
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) 
		wp_enqueue_script( 'comment-reply' );
}
add_action('wp_enqueue_scripts', 'ebor_load_scripts_GH');
?>