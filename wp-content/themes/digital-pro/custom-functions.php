<?php
function deep_dive_styles()
{


	wp_enqueue_style('custom-styles',
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

add_action('wp_enqueue_scripts', 'deep_dive_styles', 100);

function deep_dive_scripts()
{

	wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/js/custom.js', false);
}

add_action('wp_enqueue_scripts', 'deep_dive_scripts');


/** Add Viewport meta tag for mobile browsers */
add_action('genesis_meta', 'add_viewport_meta_tag');
function add_viewport_meta_tag()
{
	echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">';
}

// add GTM code to head (not body)
function GTM_script()
{
$GTM_code = <<<EOT

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JW9WBL');</script>
<!-- End Google Tag Manager -->

EOT;
	echo $GTM_code;
}

add_action('wp_head', 'GTM_script', 0);


function add_GTM_code_to_body()
{
$GTM_code = <<<EOT
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src=“https://www.googletagmanager.com/ns.html?id=GTM-5JW9WBL”
height=“0" width=“0” style=“display:none;visibility:hidden”></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
EOT;
	echo $GTM_code;
}

add_action('genesis_before', 'add_GTM_code_to_body');
?>

