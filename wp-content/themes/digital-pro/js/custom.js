/**
 * Created by ehigginsiii on 4/18/17.
 */
jQuery(document).ready(function($) {

	//create sticky footer element
	$('body').append('<div id="sticky-footer">this is sticky footer</div>');
	var footerHeight =0,
		footerTop = 0,
		$footer = $('#sticky-footer');


	function positionFooter() {
		footerHeight = $footer.height();
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

		if ( ($(document.body).height()+footerHeight) > $(window).height()) {

			$footer.css({
				position: "absolute",
				top: footerTop
			})
			// 	.animate({
			// 	top: footerTop
			// });

		} else {

			$footer.css({
				position: "static"
			});
		}
	}

	$(document)
		.scroll(positionFooter)
		.resize(positionFooter);
	$(window)
		.resize(hideFixedMenuOnResize);

	function hideFixedMenuOnResize(){
		if ($(window).width() < 800 ){
			$('.sidebar.sidebar-primary.widget-area').css("position", "inherit");
		}
	}

	$(document).scroll(function(){

		positionFooter();

		var scrollPos = $(document).scrollTop()/$(document).height();

		// hide fixed vertical menu when scroll is near bottom of page
		if (scrollPos < .08 || scrollPos >=.82 || $(window).width() < 800  ){
			$('.sidebar.sidebar-primary.widget-area').css("position", "inherit");
		} else {
				$('.sidebar.sidebar-primary.widget-area').css("position", "fixed")
		}

		// show/hide sticky footer
		if ( scrollPos >= .08 && scrollPos <= .85 ){
			$footer.fadeIn();
		} else {
			$footer.fadeOut();
		}
	})
})
