<?php
/**
 * The template for displaying header
 */
global  $options,$cs_theme_options, $cs_position, $cs_page_builder, $cs_meta_page, $cs_node, $cs_xmlObject,$options,$page_option,$post,$page_colors;
$slider_position = '';	
$header_style = '';
  	if(is_page()){
		$cs_page_bulider = get_post_meta($post->ID, "cs_page_builder", true);
		$cs_xmlData = new stdClass();
		if(isset($cs_page_bulider) && $cs_page_bulider <> ''){
			$cs_xmlData = new SimpleXMLElement($cs_page_bulider);
			$slider_position 	= 	(!empty($cs_xmlData->slider_position))? $cs_xmlData->slider_position : '' ;
			$header_style		=	(!empty($cs_xmlData->header_banner_style))? $cs_xmlData->header_banner_style : '' ;
		}
 		$cs_page_options = (!empty($cs_xmlData->cs_page_options))? $cs_xmlData->cs_page_options : '' ;
		if(isset($cs_page_options) and $cs_page_options != 'default' and $cs_page_options <> ''){
			$cs_page_options = trim($cs_page_options);
			$settings =$page_option['theme_options'][$cs_page_options]['theme_option'];
			$page_setting=unserialize(base64_decode($settings));
			$cs_theme_options =$page_setting;
		
		}else{
			$cs_theme_options = get_option('cs_theme_options');
		}
	}else{
		$cs_theme_options = get_option('cs_theme_options');	
	}
	/* theme unit testing code start*/
	
	if(!get_option('cs_theme_options')){
			$activation_data=cs_reset_data();
			$cs_theme_options =  $activation_data;
			$cs_theme_options['cs_default_layout_sidebar'] = 'sidebar-1';
			$cs_theme_options['cs_footer_widget'] = 'off';
	}
	/* theme unit testing code end */
 	$cs_builtin_seo_fields =$cs_theme_options['cs_builtin_seo_fields'];
	if(isset($cs_theme_options['cs_layout'])){ $cs_site_layout =$cs_theme_options['cs_layout'];} else { $cs_site_layout == '';}
?>
<?php /** @package WordPress @subpackage Default_Theme  **/
header("Access-Control-Allow-Origin: *"); 
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="google-site-verification" content="aS8TXq7Ion04L7SAESrIhNj15RvwkYLceSwVj2hdYjc" />
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->

	<?php			
		//pull in the code that determines if this is production or dev,
		//and echo the correct url for typography.com fonts
		//include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/fonts-include.php';


	?>

  <?php 
     if(isset($cs_theme_options['cs_custom_css']) and $cs_theme_options['cs_custom_css']<>''){
		$cs_content = $cs_theme_options['cs_custom_css'];
		$content = str_replace(array('&gt;'), '>', $cs_content);
            echo '<style type="text/css">
                '.$content. '
				
            </style> ';
        }
		
		if(isset($cs_theme_options['cs_custom_js']) and $cs_theme_options['cs_custom_js']<>''){
	    echo '<script type="text/javascript">
   			'. $cs_theme_options['cs_custom_js'].'
		</script> ';
  		}
        if ( function_exists( 'cs_header_settings' ) ) { cs_header_settings(); }
   		
		if ( is_singular() && get_option( 'thread_comments' ) )
            wp_enqueue_script( 'comment-reply' );  
            wp_head();
		
		if(isset($cs_theme_options['cs_style_rtl']) and $cs_theme_options['cs_style_rtl']=='on'){
				cs_rtl();
				$cs_rtl_class = 'rtl';
		}else{
				$cs_rtl_class = '';
		}
     	//=====================================================================
		// Header Colors
		//=====================================================================
		if ( function_exists( 'cs_header_color' ) ) { cs_header_color(); }
		
		//=====================================================================
		// Theme Colors
		//=====================================================================
		if ( function_exists( 'cs_footer_color' ) ) { cs_footer_color(); }
		if ( function_exists( 'cs_theme_colors' ) ) { cs_theme_colors(); } 
    ?>

      <!-- STEMulus Custom CSS -->
      <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory') ?>/custom.min.css" media="all" />
      <!-- Formstack tracking code -->
      <script>
       (function(t,e,n,r,a){var c,i=e[a]=e[a]||{init:function(t){function e(t){
       i[t]=function(){i.q.push([t,[].slice.call(arguments,0)])}}var n,r;i.q=[],
       n="addListener track".split(" ");for(r in n)e(n[r]);
       i.q.push(["init",[t||{}]])}},s=t.createElement(r);s.async=1,s.src=n,
       c=t.getElementsByTagName(r)[0],c.parentNode.insertBefore(s,c)
       })(document,window,"https://analytics.formstack.com/js/fsa.js","script","FSATracker");

       FSATracker.init(649173);
       FSATracker.track('pageView');
      </script>
    </head>
    <?php flush(); ?>
  <body <?php body_class($cs_rtl_class);  if($cs_site_layout !='full_width'){ if ( function_exists( 'cs_bg_image' ) ) { echo cs_bg_image(); } } ?>>
     <!-- Google Tag Manager -->
      <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WNQNLQ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WNQNLQ');</script>
      <!-- End Google Tag Manager -->
      <?php  if ( function_exists( 'cs_under_construction' ) ) { cs_under_construction(); } ?>
    	<!-- Wrapper Start -->
    <div class="wrapper <?php if ( function_exists( 'cs_header_postion_class' ) ) { echo cs_header_postion_class(); } ?> wrapper_<?php if ( function_exists( 'cs_wrapper_class' ) ) { cs_wrapper_class(); }?>">
	   	<!-- Header Start -->
	<?php
 		if($header_style == 'custom_slider' && $slider_position == 'above'){
			if ( function_exists( 'cs_subheader_style' ) ) { cs_subheader_style(); }
			if ( function_exists( 'cs_get_headers' ) ) { cs_get_headers(); }
			if(isset($cs_theme_options['cs_smooth_scroll']) and $cs_theme_options['cs_smooth_scroll'] == 'on'){
			?>
			<script type="text/javascript">
				jQuery(document).ready(function($){
					cs_nicescroll();	
				});
			</script>
			<?php			
			}
			if (isset($cs_theme_options['cs_sitcky_header_switch']) and $cs_theme_options['cs_sitcky_header_switch'] == "on"){
				cs_scrolltofix();
			?>
			<script type="text/javascript">
				jQuery(document).ready(function(){
					jQuery('.main-head,.main-navbar').scrollToFixed();
				});
			</script>
			<?php }?>
			<div class="clear"></div>
 			<?php
		}else{
 			if ( function_exists( 'cs_get_headers' ) ) { cs_get_headers(); }
			if(isset($cs_theme_options['cs_smooth_scroll']) and $cs_theme_options['cs_smooth_scroll'] == 'on'){
			cs_scrolltofix();
			?>
            
			<script type="text/javascript">
				jQuery(document).ready(function($){
					cs_nicescroll();	
				});
			</script>
			<?php			
			}
			if (isset($cs_theme_options['cs_sitcky_header_switch']) and $cs_theme_options['cs_sitcky_header_switch'] == "on"){
				cs_scrolltofix();
			?>
			<script type="text/javascript">
				jQuery(document).ready(function(){
					jQuery('.main-head,.main-navbar').scrollToFixed();	
				});
			</script>
			<?php }?>
			<div class="clear"></div>
             <?php
				cs_header_position_settings();
			?>
			<!-- Breadcrumb SecTion -->
			<?php 
				if ( function_exists( 'cs_subheader_style' ) ) { cs_subheader_style(); }
			}
			?>
        <!-- Breadcrumb SecTion -->
        <!-- Main Content Section -->
        <main id="main-content">
            <!-- Main Section Start -->
            <div class="main-section">