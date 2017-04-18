/**
 * Created by ehigginsiii on 4/18/17.
 */
jQuery(document).ready(function($) {
	$(document).scroll(function(){
		if ($(document).scrollTop()/$(document).height() >=.85 ){
			$('.sidebar.sidebar-primary.widget-area').css("position", "inherit");
		} else {
			$('.sidebar.sidebar-primary.widget-area').css("position", "fixed")
		}

	})
})
