/**
 * Created by ehigginsiii on 4/18/17.
 */


jQuery(document).ready(function($) {
	//fixJqmScrollBug();
		//create sticky footer element on non-front-page pages

	function isIOS(){
		if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
			return true;
		}
	};

	if($('body').hasClass("needs-sticky-footer")) {


		// create an element after the sidebar and before the footer
		// that will detect a collision with the top of the page
		// if it doesn't already exist
		if (!$('.sticky-stopper').offset()) {
			$('#genesis-footer-widgets').before('<div class="sticky-stopper"></div>');
		}
		var $stickyStopper = $('.sticky-stopper');

		var padding = 150;

		// determine if wpadminbar is visible, if so add its height to padding
		if (!!$('#wpadminbar').offset()) {
			padding += $('#wpadminbar').height();
		}

		$('body').append('<div id="sticky-footer"><div class="flex"><h5>Ready to reboot your career?</h5>  <div><a href="/deepdive/apply-now/" class="button entry-content text-widget"  >Apply Now</a></div> </div> </div>');
		//$('body').append('<div id="sticky-footer"><div style="float:left;padding: 20px 0 0 400px;"><h5>Ready to reboot your career?</h5></div>  <a href="/apply-now/" class="button entry-content text-widget" style="float:right;text-align:center;width:200px;margin-right:150px;" >Apply Now</a>  </div>');
		var $stickyFooter = $('#sticky-footer');
		var $footerWidgetsTop = $('#genesis-footer-widgets').offset().top;

		var footerHeight = $stickyFooter.innerHeight();
		var footerTopInitial = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

		// number of pixels that need to scroll before sticky footer shows
		// or, this can be a percentage
		var dontShowBeforePx = 1000;

		var showStickyFooter = function(footerTop) {
			$stickyFooter.css({position: 'absolute', top: footerTop})
			if ($stickyStopper.offset().top - $('#genesis-sidebar-primary').innerHeight() > $(window).scrollTop() + padding && $(window).scrollTop() > dontShowBeforePx) {
				$stickyFooter.fadeIn();
			} else {
				$stickyFooter.fadeOut(200);
			}
		}

		//sticky footer initial position
		showStickyFooter(footerTopInitial);

		if (isIOS()){
			$('body').css({ position: 'absolute', top: footerTop})
			$(document).on({
				'touchmove': function(e) {
					var footerTopNow = ($(window).scrollTop() + screen.availHeight  - footerHeight + 28);
					showStickyFooter(footerTopNow);
				}
			})

		} else {
			$(document).scroll(function () {

					var footerTopNow = ($(window).scrollTop() + $(window).height() - footerHeight);
					showStickyFooter(footerTopNow);

			})
		}


	}

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

		var positionSidebar = function() {
			var padding = 10;

			// determine if wpadminbar is visible, if so add its height to padding
			if (!!$('#wpadminbar').offset()) {
				padding += $('#wpadminbar').height();
			}

			// add the header's height to padding
			padding += $header.outerHeight();
			if( $stickyStopper.offset().top - $sidebar.innerHeight() < $(window).scrollTop() + padding ){
				// check if the stopPoint has hit the top of the page
				// this is the bottom of the scroll
				if( $(window).width() > 800) {
					$sidebar.css({ position: 'absolute', top: $stickyStopper.offset().top - $sidebar.innerHeight() })
				} else {
					$sidebar.css({ position: 'static', top: 'initial' });
				}

			} else if ($sidebarInitialTop > $(window).scrollTop() + padding) {
				// check if the sidebar's initial top has not yet scrolled to the top of the page
				// this is the top of the scroll, i.e. the initial state
				$sidebar.css({position: 'absolute', top: 'initial'})
			} else {
				// this is the scrolling behavior, i.e. fixed position
				if( $(window).width() > 800) {
					$sidebar.css({position: 'fixed', top: padding})
				} else {
					$sidebar.css({ position: 'absolute', top: 'initial' });
				}
			}
		}

		positionSidebar();

		// don't make sidebar fixed if in mobile view
		$(window).resize(positionSidebar);
		// start paying attention to the scroll event
		$(document).scroll(positionSidebar);
	}
})
