<?php
function deep_dive_styles() {


    wp_enqueue_style( 'custom-styles',
        get_stylesheet_directory_uri() . '/custom-styles.css'
    );

//google fonts 
wp_enqueue_style('google-fonts', "https://fonts.googleapis.com/css?family=Roboto");

// cloud typography fonts
    if (function_exists('is_wpe') && is_wpe()) {
        wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/641408/css/fonts.css');
    } else {
        //development url
        wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/785104/css/fonts.css');
    }

}

add_action( 'wp_enqueue_scripts', 'deep_dive_styles',100 );

function deep_dive_scripts() {

	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', false);
}
add_action( 'wp_enqueue_scripts', 'deep_dive_scripts' );
?>

