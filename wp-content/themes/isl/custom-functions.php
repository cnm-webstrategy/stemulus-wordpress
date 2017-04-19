<?php

function my_theme_enqueue_styles() {

    wp_enqueue_style( 'custom-style',
        get_stylesheet_directory_uri() . '/custom.css'
    );

}

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 20 );