<?php

function theme_enqueue_styles() {

    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );

    	// is this wpengine production?
	/*if ( is_wpe() ) {  
	    wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/641408/css/fonts.css');
	} else  {
		//development url
		 wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/785104/css/fonts.css');
	} */
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
?>