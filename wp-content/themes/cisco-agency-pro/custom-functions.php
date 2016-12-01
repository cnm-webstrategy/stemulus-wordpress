<?php
/**
 * Created by PhpStorm.
 * User: ehigginsiii
 * Date: 12/1/16
 * Time: 3:26 PM
 */
function my_theme_enqueue_styles() {

    wp_enqueue_style( 'custom-style',
        get_stylesheet_directory_uri() . '/custom.css',
        get_stylesheet_directory_uri() . '/style.css'
    );

    // is this wpengine production?
    if ( is_wpe() ) {
        wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/641408/css/fonts.css');
    } else  {
        //development url
        wp_enqueue_style('typography-font', 'https://cloud.typography.com/6007112/785104/css/fonts.css');
    }
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 20 );

// add GTM code to head (not body)
function GTM_script(){

    $GTM_code = <<<EOT
<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PSFKT5V');</script><!-- End Google Tag Manager --> 

EOT;
    echo $GTM_code;
}
add_action( 'wp_head', 'GTM_script', 0 );


function add_GTM_code_to_body() {
    $GTM_code = <<<EOT
<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSFKT5V"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->
EOT;
    echo $GTM_code;
}
add_action( 'genesis_before', 'add_GTM_code_to_body' );