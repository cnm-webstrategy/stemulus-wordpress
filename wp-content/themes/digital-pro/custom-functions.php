<?php
function deep_dive_styles() {


    wp_enqueue_style( 'custom-styles',
        get_stylesheet_directory_uri() . '/custom-styles.css'
    );
}
add_action( 'wp_enqueue_scripts', 'deep_dive_styles',100 );

function deep_dive_scripts() {
	echo "howdy ".get_stylesheet_directory_uri().'/js/custom.js';
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', false);
}
add_action( 'wp_enqueue_scripts', 'deep_dive_scripts' );
?>
