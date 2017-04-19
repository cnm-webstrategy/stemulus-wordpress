/**
 * Created by ehigginsiii on 4/18/17.
 */
jQuery(document).ready(function($) {

	//create sticky footer element
	$('body').append('<div id="sticky-footer">this is sticky footer</div>');
	var $stickyFooter = $('#sticky-footer');
	var $footerWidgetsTop = $('#genesis-footer-widgets').offset().top;

	var footerHeight = $stickyFooter.innerHeight();
	var footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
	$stickyFooter.css({position: 'absolute', top: footerTop})

	$(document).scroll(function() {
		// temporarily show sticky footer at bottom of window
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight);
		$stickyFooter.css({position: 'absolute', top: footerTop})

		console.log( footerTop , $('#genesis-footer-widgets').offset().top );

		if ( footerTop < $footerWidgetsTop ) {
			$stickyFooter.fadeIn();
		} else {
			$stickyFooter.fadeOut();
		}
	})
	// var footerHeight =0,
	// 	footerTop = 0,
	// 	$footer = $('#sticky-footer');
    //
    //
	// function positionFooter() {
	// 	footerHeight = $footer.height();
	// 	footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    //
	// 	if ( ($(document.body).height()+footerHeight) > $(window).height()) {
    //
	// 		$footer.css({
	// 			position: "absolute",
	// 			top: footerTop
	// 		})
	// 		// 	.animate({
	// 		// 	top: footerTop
	// 		// });
    //
	// 	} else {
    //
	// 		$footer.css({
	// 			position: "static"
	// 		});
	// 	}
	// }
    //
	// $(document)
	// 	.scroll(positionFooter)
	// 	.resize(positionFooter);
	// $(window)
	// 	.resize(hideFixedMenuOnResize);
    //
	// function hideFixedMenuOnResize(){
	// 	if ($(window).width() < 800 ){
	// 		$('.sidebar.sidebar-primary.widget-area').css("position", "inherit");
	// 	}
	// }
	// // create an element after the sidebar and before the footer
	// // that will detect a collision with the top of the page
	// // if it doesn't already exist
	// if (!$('.sticky-stopper').offset()) {
	// 	$('#genesis-footer-widgets').before('<div class="sticky-stopper"></div>');
	// }
	// var $stickyStopper = $('.sticky-stopper');
	//
	// $(document).scroll(function(){
    //
	// 	positionFooter();
    //
	// 	var scrollPos = $(document).scrollTop()/$(document).height();
    //
    //
    //
    //
    //
	// 	// show/hide sticky footer
	// 	if ( scrollPos >= .08 && scrollPos <= .85 ){
	// 		$footer.fadeIn();
	// 	} else {
	// 		$footer.fadeOut();
	// 	}
	// })

	/*********
	 * sticky sidebar
	 * by Gene Higgins
	 * inspired by http://codepen.io/perminder-klair/pen/tdzue
	 */

	// Does the sidebar exist?
	if(!!$('#genesis-sidebar-primary').offset()) {

		// get elements
		var $sidebar = $('#genesis-sidebar-primary');
		var $sidebarInitialTop = $sidebar.offset().top;
		var $header = $('header');

		// create an element after the sidebar and before the footer
		// that will detect a collision with the top of the page
		// if it doesn't already exist
		if (!$('.sticky-stopper').offset()) {
			$('#genesis-footer-widgets').before('<div class="sticky-stopper"></div>');
		}
		var $stickyStopper = $('.sticky-stopper');
		// get the sticky-stopper's position, taking into account the height of the sidebar
		var stopPoint = $stickyStopper.offset().top - $sidebar.innerHeight() ;

		// start paying attention to the scroll event
		$(document).scroll(function() {
			var padding = 10;

			// determine if wpadminbar is visible, if so add its height to padding
			if (!!$('#wpadminbar').offset()) {
				padding += $('#wpadminbar').height();
			}

			// add the header's height to padding
			padding += $header.outerHeight();

			if( stopPoint < $(window).scrollTop() + padding ){
				// check if the stopPoint has hit the top of the page
				// this is the bottom of the scroll
				$sidebar.css({ position: 'absolute', top: stopPoint })
			} else if ($sidebarInitialTop > $(window).scrollTop() + padding) {
				// check if the sidebar's initial top has not yet scrolled to the top of the page
				// this is the top of the scroll, i.e. the initial state
				$sidebar.css({position: 'absolute', top: 'initial'})
			} else {
				// this is the scrolling behavior, i.e. fixed position
				$sidebar.css({position: 'fixed', top:  padding})
			}
		})
	}
})
