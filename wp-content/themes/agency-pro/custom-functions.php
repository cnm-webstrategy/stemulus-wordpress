<?php
//echo "howdy ".get_current_blog_id();
// determine which blog (aka subsite or microsite) this is

function get_blog_GTM(){
	$blogcode = '';
	if (get_current_blog_id() == 8) {
		$blogcode = 'GTM-NVHXBB';
	} elseif (get_current_blog_id() == 12) {
		$blogcode = 'GTM-NJGHRZK';
	}
	return $blogcode;
}

// add GTM code to head (not body)
function GTM_script($blogcode){
	
	$blogcode = get_blog_GTM();

    $GTM_code = <<<EOT

<!-- Google Tag Manager  --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','$blogcode');</script><!-- End Google Tag Manager --> 

EOT;
    echo $GTM_code;
}
add_action( 'wp_head', 'GTM_script', 0, 1);
//do_action ( 'wp_head', $blogcode );

function add_GTM_code_to_body() {
	$blogcode = get_blog_GTM();
    $GTM_code = <<<EOT
<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=$blogcode"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->
EOT;
    echo $GTM_code;
}
add_action( 'genesis_before', 'add_GTM_code_to_body' );