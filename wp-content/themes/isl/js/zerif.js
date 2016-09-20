/* =================================

 LOADER

 =================================== */

// makes sure the whole site is loaded

jQuery(window).load(function() {

   // will first fade out the loading animation

   jQuery(".status").fadeOut();

   // will fade out the whole DIV that covers the website.

   jQuery(".preloader").delay(1000).fadeOut("slow");


   jQuery('.carousel').carousel('pause');

})


/*** mobile menu */
jQuery(document).ready(function() {

   if(jQuery('#developer').is(":checked")) {
      jQuery('div#interested').removeClass('hidden');
   } else {
      jQuery('div#interested').addClass('hidden');
   }

   jQuery('#developer').click(function() {
      if(jQuery('#developer').is(":checked")) {
         jQuery('#interested').removeClass('hidden');
         jQuery('#interestedMessage').focus();
      } else {
         jQuery('#interested').addClass('hidden');
      }
   });

   if ( jQuery(window).width() < 767 ){

      jQuery('#site-navigation li').each(function(){

         if ( jQuery(this).find('ul').length > 0 ){
            jQuery(this).addClass('has_children');
            jQuery(this).find('a').first().after('<p class="dropdownmenu"></p>');
         }

      });

   }

   jQuery('.dropdownmenu').click(function(){
      if( jQuery(this).parent('li').hasClass('this-open') ){
         jQuery(this).parent('li').removeClass('this-open');
      }else{
         jQuery(this).parent('li').addClass('this-open');
      }
   });

});


jQuery(document).ready(function() {
   //var current_height = jQuery('.header .container').height();
   var windowHeight = jQuery(window).height();
   //jQuery('.header').css('min-height',current_height);
   jQuery("#top").css("minHeight", windowHeight);
   jQuery("#focus").css("minHeight", windowHeight);
   jQuery("#latestnews").css("minHeight", windowHeight);
   jQuery("#testimonials").css("minHeight", windowHeight);
   jQuery("#aboutus").css("minHeight", windowHeight);
   jQuery("#contact").css("minHeight", windowHeight);
   jQuery("#post").css("minHeight", windowHeight);
});


/* show/hide reCaptcha */
jQuery(document).ready(function() {

   var thisOpen = false;
   jQuery('.contact-form .form-control').each(function(){
      if ( jQuery(this).val().length > 0 ){
         thisOpen = true;
         jQuery('.g-recaptcha').css('display','block').delay(1000).css('opacity','1');
         return false;
      }
   });
   if ( thisOpen == false && (typeof jQuery('.contact-form textarea').val() != 'undefined') && (jQuery('.contact-form textarea').val().length > 0) ) {
      thisOpen = true;
      jQuery('.g-recaptcha').css('display','block').delay(1000).css('opacity','1');
   }
   jQuery('.contact-form input, .contact-form textarea').focus(function(){
      if ( !jQuery('.g-recaptcha').hasClass('recaptcha-display') ) {
         jQuery('.g-recaptcha').css('display','block').delay(1000).css('opacity','1');
      }
   });
});

/* TOP NAVIGATION MENU SELECTED ITEMS */

function scrolled() {
   jQuery(this).off('scroll')[0].setTimeout(function(){

      if ( jQuery(window).width() >= 751 ) {
         var zerif_scrollTop = jQuery(window).scrollTop();       // cursor position
         var headerHeight = jQuery('#main-nav').outerHeight();   // header height
         var isInOneSection = 'no';                              // used for checking if the cursor is in one section or not
         // for all sections check if the cursor is inside a section
         jQuery("section").each( function() {
            var thisID = '#' + jQuery(this).attr('id');           // section id
            var zerif_offset = jQuery(this).offset().top;         // distance between top and our section
            var thisHeight  = jQuery(this).outerHeight();         // section height
            var thisBegin   = zerif_offset - headerHeight;                      // where the section begins
            var thisEnd     = zerif_offset + thisHeight - headerHeight;         // where the section ends
            // if position of the cursor is inside of the this section
            if ( zerif_scrollTop >= thisBegin && zerif_scrollTop <= thisEnd ) {
               isInOneSection = 'yes';
               jQuery('.current').removeClass('current');
               jQuery('#site-navigation a[href$="' + thisID + '"]').parent('li').addClass('current');    // find the menu button with the same ID section
               return false;
            }
            if (isInOneSection == 'no') {
               jQuery('.current').removeClass('current');
            }
         });
      }

      jQuery(this).on('scroll',scrolled);
   }, 500)
}
jQuery(window).on('scroll',scrolled);


/* =================================

 ===  Bootstrap Fix              ====

 =================================== */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

   var msViewportStyle = document.createElement('style')

   msViewportStyle.appendChild(

      document.createTextNode(

         '@-ms-viewport{width:auto!important}'

      )

   )

   document.querySelector('head').appendChild(msViewportStyle)

}



/* =================================

 ===  STICKY NAV                 ====

 =================================== */



jQuery(document).ready(function() {



   // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/

   var top = jQuery('#main-nav').offset().top - parseFloat(jQuery('#main-nav').css('margin-top').replace(/auto/, 0));



   jQuery(window).scroll(function (event) {

      // what the y position of the scroll is

      var y = jQuery(this).scrollTop();



      // whether that's below the form

      if (y >= top) {

         // if so, ad the fixed class

         jQuery('#main-nav').addClass('fixed');

      } else {

         // otherwise remove it

         jQuery('#main-nav').removeClass('fixed');

      }

   });





   jQuery('body:not(.home)').removeClass('custom-background');



});





///*=================================
//
//===  SMOOTH SCROLL             ====
//
//=================================== */
//
//var scrollAnimationTime = 1200,
//
//        scrollAnimation = 'easeInOutExpo';
//
//    jQuery('a.scrollto').bind('click.smoothscroll',function (event) {
//
//
//
//        event.preventDefault();
//
//        var target = this.hash;
//
//        jQuery('html, body').stop().animate({
//
//            'scrollTop': jQuery(target).offset().top
//
//        }, scrollAnimationTime, scrollAnimation, function () {
//
//            window.location.hash = target;
//
//        });
//
//    });


/*=================================

 ===  SMOOTH SCROLL             ====

 =================================== */

jQuery(document).ready(function(){
   jQuery('#site-navigation a[href*=#]:not([href=#]), header.header a[href*=#]:not([href=#])').bind('click',function () {
      var headerHeight;
      var hash    = this.hash;
      var idName  = hash.substring(1);    // get id name
      var alink   = this;                 // this button pressed
      // check if there is a section that had same id as the button pressed
      if ( jQuery('section [id*=' + idName + ']').length > 0 && jQuery(window).width() >= 751 ){
         jQuery('.current').removeClass('current');
         jQuery(alink).parent('li').addClass('current');
      }else{
         jQuery('.current').removeClass('current');
      }
      if ( jQuery(window).width() >= 751 ) {
         headerHeight = jQuery('#main-nav').height();
      } else {
         headerHeight = 0;
      }
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = jQuery(this.hash);
         target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            jQuery('html,body').animate({
               scrollTop: target.offset().top - headerHeight + 10
            }, 300);
            return false;
         }
      }
   });
});

jQuery(document).ready(function(){
   var headerHeight;
   jQuery('.current').removeClass('current');
   jQuery('#site-navigation a[href$="' + window.location.hash + '"]').parent('li').addClass('current');
   if ( jQuery(window).width() >= 751 ) {
      headerHeight = jQuery('#main-nav').height();
   } else {
      headerHeight = 0;
   }
   if (location.pathname.replace(/^\//,'') == window.location.pathname.replace(/^\//,'') && location.hostname == window.location.hostname) {
      var target = jQuery(window.location.hash);
      if (target.length) {
         jQuery('html,body').animate({
            scrollTop: target.offset().top - headerHeight + 10
         }, 300);
         return false;
      }
   }
});


/* ================================

 ===  PARALLAX                  ====

 ================================= */

jQuery(document).ready(function(){

   var jQuerywindow = jQuery(window);

   jQuery('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){

      var jQuerybgobj = jQuery(this);

      jQuery(window).scroll(function() {

         var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed'));

         var coords = '50% '+ yPos + 'px';

         jQuerybgobj.css({

            backgroundPosition: coords

         });

      });

   });

});



/* ================================

 ===  KNOB                      ====

 ================================= */

jQuery(function() {

   jQuery(".skill1").knob({

      'max':100,

      'width': 64,

      'readOnly':true,

      'inputColor':' #FFFFFF ',

      'bgColor':' #222222 ',

      'fgColor':' #e96656 '

   });

   jQuery(".skill2").knob({

      'max':100,

      'width': 64,

      'readOnly':true,

      'inputColor':' #FFFFFF ',

      'bgColor':' #222222 ',

      'fgColor':' #34d293 '

   });

   jQuery(".skill3").knob({

      'max': 100,

      'width': 64,

      'readOnly': true,

      'inputColor':' #FFFFFF ',

      'bgColor':' #222222 ',

      'fgColor':' #3ab0e2 '

   });

   jQuery(".skill4").knob({

      'max': 100,

      'width': 64,

      'readOnly': true,

      'inputColor':' #FFFFFF ',

      'bgColor':' #222222 ',

      'fgColor':' #E7AC44 '

   });

});



/* ======================================

 ============ MOBILE NAV =============== */

jQuery('.navbar-toggle').on('click', function () {

   jQuery(this).toggleClass('active');

});

/* FOOTER */
jQuery(window).load(function() {

   /* vp_h will hold the height of the browser window */
   var vp_h = jQuery(window).height();

   /* b_g will hold the height of the html body */
   var b_g = jQuery('body').height();

   /* If the body height is lower than window */
   if(b_g < vp_h) {

      jQuery('footer').css("position","absolute");
      jQuery('footer').css("bottom","0px");
      jQuery('footer').css("width","100%");

   }
});


jQuery(document).ready(function(){
   setminHeightHeader();
});

jQuery(window).resize(function() {
   setminHeightHeader();
   cloneMenu();
});

function setminHeightHeader()
{
   jQuery('#main-nav').css('min-height','76px');
   jQuery('.header').css('min-height','76px');
   var minHeight = parseInt( jQuery('#main-nav').height() );
   jQuery('#main-nav').css('min-height',minHeight);
   jQuery('.header').css('min-height',minHeight);
}

function cloneMenu()
{
   jQuery( '.collapse.in').removeClass('in');
   jQuery( '.navbar-toggle.collapsed').removeClass('collapsed');
}
