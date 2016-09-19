<?php
function theme_enqueue_styles() {

    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

if ( ! function_exists( 'cs_get_font_family' ) ) {
	function cs_get_font_family($font_index = 'default', $att = 'regular') {
		global $fonts;
		if($font_index != 'default'){
			$fonts = cs_googlefont_list();
 			$all_att = '';
			if(isset($fonts) and is_array($fonts)){
				$name = $fonts[$font_index];
				$name = str_replace(' ', '+',$name);
				if($att <> '') $all_att = ':'.$att;
				$url = '//fonts.googleapis.com/css?family='.$name.$all_att;
				$html ='@import url('.$url.');';
			}
		}
		else{
			$html = '';
		}
		return $html;
	}
}

?>