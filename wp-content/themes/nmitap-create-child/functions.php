<?php

function theme_enqueue_styles() {

    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );

    wp_enqueue_style('google-fonts',"https://fonts.googleapis.com/css?family=Oswald:400,700,300");
}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

?>
