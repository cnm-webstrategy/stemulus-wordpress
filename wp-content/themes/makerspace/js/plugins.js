/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.23",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}});var m={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,b){m[b]=function(b){return Math.pow(b,a+2)}}),a.extend(m,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(m,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(jQuery);;

window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// place any jQuery/helper plugins in here, instead of separate, slower script files.

/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

/*
 SelectNav.js (v. 0.1)
 Converts your <ul>/<ol> navigation into a dropdown list for small screens
 https://github.com/lukaszfiszer/selectnav.js
 MIT License
*/
window.selectnav=function(){return function(p,q){var a,h=function(b){var c;b||(b=window.event);b.target?c=b.target:b.srcElement&&(c=b.srcElement);3===c.nodeType&&(c=c.parentNode);c.value&&(window.location.href=c.value)},k=function(b){b=b.nodeName.toLowerCase();return"ul"===b||"ol"===b},l=function(b){for(var c=1;document.getElementById("selectnav"+c);c++);return b?"selectnav"+c:"selectnav"+(c-1)},n=function(b){g++;var c=b.children.length,a="",d="",f=g-1;if(c){if(f){for(;f--;)d+=r;d+=" "}for(f=0;f<
c;f++){var e=b.children[f].children[0];if("undefined"!==typeof e){var h=e.innerText||e.textContent,i="";j&&(i=-1!==e.className.search(j)||-1!==e.parentElement.className.search(j)?m:"");s&&!i&&(i=e.href===document.URL?m:"");a+='<option value="'+e.href+'" '+i+">"+d+h+"</option>";t&&(e=b.children[f].children[1])&&k(e)&&(a+=n(e))}}1===g&&o&&(a='<option value="">'+o+"</option>"+a);1===g&&(a='<select class="selectnav" id="'+l(!0)+'">'+a+"</select>");g--;return a}};if((a=document.getElementById(p))&&k(a)){document.documentElement.className+=
" js";var d=q||{},j=d.activeclass||"active",s="boolean"===typeof d.autoselect?d.autoselect:!0,t="boolean"===typeof d.nested?d.nested:!0,r=d.indent||"\u2192",o=d.label||"- Navigation -",g=0,m=" selected ";a.insertAdjacentHTML("afterend",n(a));a=document.getElementById(l());a.addEventListener&&a.addEventListener("change",h);a.attachEvent&&a.attachEvent("onchange",h)}}}();


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/*!
	jQuery.kinetic v1.5
	Dave Taylor http://the-taylors.org/jquery.kinetic

	The MIT License (MIT)
	Copyright (c) <2011> <Dave Taylor http://the-taylors.org>
*/
/*global define,require */
(function ($) {
	'use strict';

	var DEFAULT_SETTINGS = { decelerate: true
							  , triggerHardware: false
							  , y: true
							  , x: true
							  , slowdown: 0.9
							  , maxvelocity: 40
							  , throttleFPS: 60
							  , movingClass: {
							  	up: 'kinetic-moving-up'
								, down: 'kinetic-moving-down'
								, left: 'kinetic-moving-left'
								, right: 'kinetic-moving-right'
							  }
							  , deceleratingClass: {
							  	up: 'kinetic-decelerating-up'
								, down: 'kinetic-decelerating-down'
								, left: 'kinetic-decelerating-left'
								, right: 'kinetic-decelerating-right'
							  }
	},
		SETTINGS_KEY = 'kinetic-settings',
		ACTIVE_CLASS = 'kinetic-active';

	/**
	* Provides requestAnimationFrame in a cross browser way.
	* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	*/
	if (!window.requestAnimationFrame) {

		window.requestAnimationFrame = (function () {

			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
				window.setTimeout(callback, 1000 / 60);
			};

		} ());

	}

	// add touch checker to jQuery.support
	$.support = $.support || {};
	$.extend($.support, {
		touch: "ontouchend" in document
	});
	var selectStart = function () { return false; };

	var decelerateVelocity = function (velocity, slowdown) {
		return Math.floor(Math.abs(velocity)) === 0 ? 0 // is velocity less than 1?
			   : velocity * slowdown; // reduce slowdown
	};

	var capVelocity = function (velocity, max) {
		var newVelocity = velocity;
		if (velocity > 0) {
			if (velocity > max) {
				newVelocity = max;
			}
		} else {
			if (velocity < (0 - max)) {
				newVelocity = (0 - max);
			}
		}
		return newVelocity;
	};

	var setMoveClasses = function (settings, classes) {
		this.removeClass(settings.movingClass.up)
			.removeClass(settings.movingClass.down)
			.removeClass(settings.movingClass.left)
			.removeClass(settings.movingClass.right)
			.removeClass(settings.deceleratingClass.up)
			.removeClass(settings.deceleratingClass.down)
			.removeClass(settings.deceleratingClass.left)
			.removeClass(settings.deceleratingClass.right);

		if (settings.velocity > 0) {
			this.addClass(classes.right);
		}
		if (settings.velocity < 0) {
			this.addClass(classes.left);
		}
		if (settings.velocityY > 0) {
			this.addClass(classes.down);
		}
		if (settings.velocityY < 0) {
			this.addClass(classes.up);
		}

	};

	var stop = function ($scroller, settings) {
		if (typeof settings.stopped === 'function') {
			settings.stopped.call($scroller, settings);
		}
	};

	/** do the actual kinetic movement */
	var move = function ($scroller, settings) {
		var scroller = $scroller[0];
		// set scrollLeft
		if (settings.x && scroller.scrollWidth > 0) {
			scroller.scrollLeft = settings.scrollLeft = scroller.scrollLeft + settings.velocity;
			if (Math.abs(settings.velocity) > 0) {
				settings.velocity = settings.decelerate ?
					decelerateVelocity(settings.velocity, settings.slowdown) : settings.velocity;
			}
		} else {
			settings.velocity = 0;
		}

		// set scrollTop
		if (settings.y && scroller.scrollHeight > 0) {
			scroller.scrollTop = settings.scrollTop = scroller.scrollTop + settings.velocityY;
			if (Math.abs(settings.velocityY) > 0) {
				settings.velocityY = settings.decelerate ?
					decelerateVelocity(settings.velocityY, settings.slowdown) : settings.velocityY;
			}
		} else {
			settings.velocityY = 0;
		}

		setMoveClasses.call($scroller, settings, settings.deceleratingClass);

		if (typeof settings.moved === 'function') {
			settings.moved.call($scroller, settings);
		}

		if (Math.abs(settings.velocity) > 0 || Math.abs(settings.velocityY) > 0) {
			// tick for next movement
			window.requestAnimationFrame(function () { move($scroller, settings); });
		} else {
			stop($scroller, settings);
		}
	};

	var callOption = function (method, options) {
		var methodFn = $.kinetic.callMethods[method]
		, args = Array.prototype.slice.call(arguments)
		;
		if (methodFn) {
			this.each(function () {
				var opts = args.slice(1), settings = $(this).data(SETTINGS_KEY);
				opts.unshift(settings);
				methodFn.apply(this, opts);
			});
		}
	};

	var attachListeners = function ($this, settings) {
		var element = $this[0];
		if ($.support.touch) {
			element.addEventListener('touchstart', settings.events.touchStart, false);
			element.addEventListener('touchend', settings.events.inputEnd, false);
			element.addEventListener('touchmove', settings.events.touchMove, false);
		} else {
			$this
			.mousedown(settings.events.inputDown)
			.mouseup(settings.events.inputEnd)
			.mousemove(settings.events.inputMove);
		}
		$this.click(settings.events.inputClick)
		.bind("selectstart", selectStart); // prevent selection when dragging
		$this.bind('dragstart', settings.events.dragStart);
	};
	var detachListeners = function ($this, settings) {
		var element = $this[0];
		if ($.support.touch) {
			element.removeEventListener('touchstart', settings.events.touchStart, false);
			element.removeEventListener('touchend', settings.events.inputEnd, false);
			element.removeEventListener('touchmove', settings.events.touchMove, false);
		} else {
			$this
			.unbind('mousedown', settings.events.inputDown)
			.unbind('mouseup', settings.events.inputEnd)
			.unbind('mousemove', settings.events.inputMove);
		}
		$this.unbind('click', settings.events.inputClick)
		.unbind("selectstart", selectStart); // prevent selection when dragging
		$this.unbind('dragstart', settings.events.dragStart);
	};

	var initElements = function (options) {
		this
		.addClass(ACTIVE_CLASS)
		.each(function () {

			var settings = $.extend({}, DEFAULT_SETTINGS, options);

			var self = this
			, $this = $(this)
			, xpos
			, prevXPos = false
			, ypos
			, prevYPos = false
			, mouseDown = false
			, scrollLeft
			, scrollTop
			, throttleTimeout = 1000 / settings.throttleFPS
			, lastMove
			, elementFocused
			;

			settings.velocity = 0;
			settings.velocityY = 0;

			// make sure we reset everything when mouse up
			var resetMouse = function () {
				xpos = false;
				ypos = false;
				mouseDown = false;
			};
			$(document).mouseup(resetMouse).click(resetMouse);

			var calculateVelocities = function () {
				settings.velocity = capVelocity(prevXPos - xpos, settings.maxvelocity);
				settings.velocityY = capVelocity(prevYPos - ypos, settings.maxvelocity);
			};
			var useTarget = function (target) {
				if ($.isFunction(settings.filterTarget)) {
					return settings.filterTarget.call(self, target) !== false;
				}
				return true;
			};
			var start = function (clientX, clientY) {
				mouseDown = true;
				settings.velocity = prevXPos = 0;
				settings.velocityY = prevYPos = 0;
				xpos = clientX;
				ypos = clientY;
			};
			var end = function () {
				if (xpos && prevXPos && settings.decelerate === false) {
					settings.decelerate = true;
					calculateVelocities();
					xpos = prevXPos = mouseDown = false;
					move($this, settings);
				}
			};
			var inputmove = function (clientX, clientY) {
				if (!lastMove || new Date() > new Date(lastMove.getTime() + throttleTimeout)) {
					lastMove = new Date();

					if (mouseDown && (xpos || ypos)) {
						if (elementFocused) {
							$(elementFocused).blur();
							elementFocused = null;
							$this.focus();
						}
						settings.decelerate = false;
						settings.velocity = settings.velocityY = 0;
						$this[0].scrollLeft = settings.scrollLeft = settings.x ? $this[0].scrollLeft - (clientX - xpos) : $this[0].scrollLeft;
						$this[0].scrollTop = settings.scrollTop = settings.y ? $this[0].scrollTop - (clientY - ypos) : $this[0].scrollTop;
						prevXPos = xpos;
						prevYPos = ypos;
						xpos = clientX;
						ypos = clientY;

						calculateVelocities();
						setMoveClasses.call($this, settings, settings.movingClass);

						if (typeof settings.moved === 'function') {
							settings.moved.call($this, settings);
						}
					}
				}
			};

			// Events
			settings.events = {
				touchStart: function (e) {
					if (useTarget(e.target)) {
						start(e.touches[0].clientX, e.touches[0].clientY);
						e.stopPropagation();
					}
				},
				touchMove: function (e) {
					if (mouseDown) {
						inputmove(e.touches[0].clientX, e.touches[0].clientY);
						if (e.preventDefault) { e.preventDefault(); }
					}
				},
				inputDown: function (e) {
					if (useTarget(e.target)) {
						start(e.clientX, e.clientY);
						elementFocused = e.target;
						if (e.target.nodeName === 'IMG') {
							e.preventDefault();
						}
						e.stopPropagation();
					}
				},
				inputEnd: function (e) {
					end();
					elementFocused = null;
					if (e.preventDefault) { e.preventDefault(); }
				},
				inputMove: function (e) {
					if (mouseDown) {
						inputmove(e.clientX, e.clientY);
						if (e.preventDefault) { e.preventDefault(); }
					}
				},
				inputClick: function (e) {
					if (Math.abs(settings.velocity) > 0) {
						e.preventDefault();
						return false;
					}
				},
				// prevent drag and drop images in ie
				dragStart: function (e) {
					if (elementFocused) {
						return false;
					}
				}
			};

			attachListeners($this, settings);
			$this.data(SETTINGS_KEY, settings).css("cursor", "move");

			if (settings.triggerHardware) {
				$this.css('-webkit-transform', 'translate3d(0,0,0)');
			}
		});
	};

	$.kinetic = {
		settingsKey: SETTINGS_KEY,
		callMethods: {
			start: function (settings, options) {
				var $this = $(this);
				settings = $.extend(settings, options);
				if (settings) {
					settings.decelerate = false;
					move($this, settings);
				}
			},
			end: function (settings, options) {
				var $this = $(this);
				if (settings) {
					settings.decelerate = true;
				}
			},
			stop: function (settings, options) {
				settings.velocity = 0;
				settings.velocityY = 0;
				settings.decelerate = true;
			},
			detach: function (settings, options) {
				var $this = $(this);
				detachListeners($this, settings);
				$this
				.removeClass(ACTIVE_CLASS)
				.css("cursor", "");
			},
			attach: function (settings, options) {
				var $this = $(this);
				attachListeners($this, settings);
				$this
				.addClass(ACTIVE_CLASS)
				.css("cursor", "move");
			}
		}
	};
	$.fn.kinetic = function (options) {
		if (typeof options === 'string') {
			callOption.apply(this, arguments);
		} else {
			initElements.call(this, options);
		}
		return this;
	};

} (window.jQuery || window.Zepto));

(function (e) { e.widget("thomaskahn.smoothDivScroll", { options: { scrollingHotSpotLeftClass: "scrollingHotSpotLeft", scrollingHotSpotRightClass: "scrollingHotSpotRight", scrollableAreaClass: "scrollableArea", scrollWrapperClass: "scrollWrapper", hiddenOnStart: !1, getContentOnLoad: {}, countOnlyClass: "", startAtElementId: "", hotSpotScrolling: !0, hotSpotScrollingStep: 15, hotSpotScrollingInterval: 10, hotSpotMouseDownSpeedBooster: 3, visibleHotSpotBackgrounds: "hover", hotSpotsVisibleTime: 5e3, easingAfterHotSpotScrolling: !0, easingAfterHotSpotScrollingDistance: 10, easingAfterHotSpotScrollingDuration: 300, easingAfterHotSpotScrollingFunction: "easeOutQuart", mousewheelScrolling: "", mousewheelScrollingStep: 70, easingAfterMouseWheelScrolling: !0, easingAfterMouseWheelScrollingDuration: 300, easingAfterMouseWheelScrollingFunction: "easeOutQuart", manualContinuousScrolling: !1, autoScrollingMode: "", autoScrollingDirection: "endlessLoopRight", autoScrollingStep: 1, autoScrollingInterval: 10, touchScrolling: !1, scrollToAnimationDuration: 1e3, scrollToEasingFunction: "easeOutQuart" }, _create: function () { var t = this, n = this.options, r = this.element; r.data("scrollWrapper", r.find("." + n.scrollWrapperClass)), r.data("scrollingHotSpotRight", r.find("." + n.scrollingHotSpotRightClass)), r.data("scrollingHotSpotLeft", r.find("." + n.scrollingHotSpotLeftClass)), r.data("scrollableArea", r.find("." + n.scrollableAreaClass)), r.data("scrollingHotSpotRight").length > 0 && r.data("scrollingHotSpotRight").detach(), r.data("scrollingHotSpotLeft").length > 0 && r.data("scrollingHotSpotLeft").detach(), r.data("scrollableArea").length === 0 && r.data("scrollWrapper").length === 0 ? (r.wrapInner("<div class='" + n.scrollableAreaClass + "'>").wrapInner("<div class='" + n.scrollWrapperClass + "'>"), r.data("scrollWrapper", r.find("." + n.scrollWrapperClass)), r.data("scrollableArea", r.find("." + n.scrollableAreaClass))) : r.data("scrollWrapper").length === 0 ? (r.wrapInner("<div class='" + n.scrollWrapperClass + "'>"), r.data("scrollWrapper", r.find("." + n.scrollWrapperClass))) : r.data("scrollableArea").length === 0 && (r.data("scrollWrapper").wrapInner("<div class='" + n.scrollableAreaClass + "'>"), r.data("scrollableArea", r.find("." + n.scrollableAreaClass))), r.data("scrollingHotSpotRight").length === 0 ? (r.prepend("<div class='" + n.scrollingHotSpotRightClass + "'></div>"), r.data("scrollingHotSpotRight", r.find("." + n.scrollingHotSpotRightClass))) : r.prepend(r.data("scrollingHotSpotRight")), r.data("scrollingHotSpotLeft").length === 0 ? (r.prepend("<div class='" + n.scrollingHotSpotLeftClass + "'></div>"), r.data("scrollingHotSpotLeft", r.find("." + n.scrollingHotSpotLeftClass))) : r.prepend(r.data("scrollingHotSpotLeft")), r.data("speedBooster", 1), r.data("scrollXPos", 0), r.data("hotSpotWidth", r.data("scrollingHotSpotLeft").innerWidth()), r.data("scrollableAreaWidth", 0), r.data("startingPosition", 0), r.data("rightScrollingInterval", null), r.data("leftScrollingInterval", null), r.data("autoScrollingInterval", null), r.data("hideHotSpotBackgroundsInterval", null), r.data("previousScrollLeft", 0), r.data("pingPongDirection", "right"), r.data("getNextElementWidth", !0), r.data("swapAt", null), r.data("startAtElementHasNotPassed", !0), r.data("swappedElement", null), r.data("originalElements", r.data("scrollableArea").children(n.countOnlyClass)), r.data("visible", !0), r.data("enabled", !0), r.data("scrollableAreaHeight", r.data("scrollableArea").height()), r.data("scrollerOffset", r.offset()), r.data("initialAjaxContentLoaded", !1), n.touchScrolling && r.data("enabled") && r.data("scrollWrapper").kinetic({ y: !1, moved: function (e) { n.manualContinuousScrolling && (r.data("scrollWrapper").scrollLeft() <= 0 ? t._checkContinuousSwapLeft() : t._checkContinuousSwapRight()) }, stopped: function (e) { r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling() } }), r.data("scrollingHotSpotRight").bind("mousemove", function (e) { if (n.hotSpotScrolling) { var t = e.pageX - (this.offsetLeft + r.data("scrollerOffset").left); r.data("scrollXPos", Math.round(t / r.data("hotSpotWidth") * n.hotSpotScrollingStep)), (r.data("scrollXPos") === Infinity || r.data("scrollXPos") < 1) && r.data("scrollXPos", 1) } }), r.data("scrollingHotSpotRight").bind("mouseover", function () { n.hotSpotScrolling && (r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling(), r.data("rightScrollingInterval", setInterval(function () { r.data("scrollXPos") > 0 && r.data("enabled") && (r.data("scrollWrapper").scrollLeft(r.data("scrollWrapper").scrollLeft() + r.data("scrollXPos") * r.data("speedBooster")), n.manualContinuousScrolling && t._checkContinuousSwapRight(), t._showHideHotSpots()) }, n.hotSpotScrollingInterval)), t._trigger("mouseOverRightHotSpot")) }), r.data("scrollingHotSpotRight").bind("mouseout", function () { n.hotSpotScrolling && (clearInterval(r.data("rightScrollingInterval")), r.data("scrollXPos", 0), n.easingAfterHotSpotScrolling && r.data("enabled") && r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollWrapper").scrollLeft() + n.easingAfterHotSpotScrollingDistance }, { duration: n.easingAfterHotSpotScrollingDuration, easing: n.easingAfterHotSpotScrollingFunction })) }), r.data("scrollingHotSpotRight").bind("mousedown", function () { r.data("speedBooster", n.hotSpotMouseDownSpeedBooster) }), e("body").bind("mouseup", function () { r.data("speedBooster", 1) }), r.data("scrollingHotSpotLeft").bind("mousemove", function (e) { if (n.hotSpotScrolling) { var t = this.offsetLeft + r.data("scrollerOffset").left + r.data("hotSpotWidth") - e.pageX; r.data("scrollXPos", Math.round(t / r.data("hotSpotWidth") * n.hotSpotScrollingStep)), (r.data("scrollXPos") === Infinity || r.data("scrollXPos") < 1) && r.data("scrollXPos", 1) } }), r.data("scrollingHotSpotLeft").bind("mouseover", function () { n.hotSpotScrolling && (r.data("scrollWrapper").stop(!0, !1), t.stopAutoScrolling(), r.data("leftScrollingInterval", setInterval(function () { r.data("scrollXPos") > 0 && r.data("enabled") && (r.data("scrollWrapper").scrollLeft(r.data("scrollWrapper").scrollLeft() - r.data("scrollXPos") * r.data("speedBooster")), n.manualContinuousScrolling && t._checkContinuousSwapLeft(), t._showHideHotSpots()) }, n.hotSpotScrollingInterval)), t._trigger("mouseOverLeftHotSpot")) }), r.data("scrollingHotSpotLeft").bind("mouseout", function () { n.hotSpotScrolling && (clearInterval(r.data("leftScrollingInterval")), r.data("scrollXPos", 0), n.easingAfterHotSpotScrolling && r.data("enabled") && r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollWrapper").scrollLeft() - n.easingAfterHotSpotScrollingDistance }, { duration: n.easingAfterHotSpotScrollingDuration, easing: n.easingAfterHotSpotScrollingFunction })) }), r.data("scrollingHotSpotLeft").bind("mousedown", function () { r.data("speedBooster", n.hotSpotMouseDownSpeedBooster) }), r.data("scrollableArea").mousewheel(function (e, i, s, u) { if (r.data("enabled") && n.mousewheelScrolling.length > 0) { var a; n.mousewheelScrolling === "vertical" && u !== 0 ? (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * u * -1), t.move(a)) : n.mousewheelScrolling === "horizontal" && s !== 0 ? (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * s * -1), t.move(a)) : n.mousewheelScrolling === "allDirections" && (t.stopAutoScrolling(), e.preventDefault(), a = Math.round(n.mousewheelScrollingStep * i * -1), t.move(a)) } }), n.mousewheelScrolling && r.data("scrollingHotSpotLeft").add(r.data("scrollingHotSpotRight")).mousewheel(function (e) { e.preventDefault() }), e(window).bind("resize", function () { t._showHideHotSpots(), t._trigger("windowResized") }), jQuery.isEmptyObject(n.getContentOnLoad) || t[n.getContentOnLoad.method](n.getContentOnLoad.content, n.getContentOnLoad.manipulationMethod, n.getContentOnLoad.addWhere, n.getContentOnLoad.filterTag), n.hiddenOnStart && t.hide(), e(window).load(function () { n.hiddenOnStart || t.recalculateScrollableArea(), n.autoScrollingMode.length > 0 && !n.hiddenOnStart && t.startAutoScrolling(); if (n.autoScrollingMode !== "always") switch (n.visibleHotSpotBackgrounds) { case "always": t.showHotSpotBackgrounds(); break; case "onStart": t.showHotSpotBackgrounds(), r.data("hideHotSpotBackgroundsInterval", setTimeout(function () { t.hideHotSpotBackgrounds(250) }, n.hotSpotsVisibleTime)); break; case "hover": r.mouseenter(function (e) { n.hotSpotScrolling && (e.stopPropagation(), t.showHotSpotBackgrounds(250)) }).mouseleave(function (e) { n.hotSpotScrolling && (e.stopPropagation(), t.hideHotSpotBackgrounds(250)) }); break; default: } t._showHideHotSpots(), t._trigger("setupComplete") }) }, _setOption: function (e, t) { var n = this, r = this.options, i = this.element; r[e] = t, e === "hotSpotScrolling" ? t === !0 ? n._showHideHotSpots() : (i.data("scrollingHotSpotLeft").hide(), i.data("scrollingHotSpotRight").hide()) : e === "autoScrollingStep" || e === "easingAfterHotSpotScrollingDistance" || e === "easingAfterHotSpotScrollingDuration" || e === "easingAfterMouseWheelScrollingDuration" ? r[e] = parseInt(t, 10) : e === "autoScrollingInterval" && (r[e] = parseInt(t, 10), n.startAutoScrolling()) }, showHotSpotBackgrounds: function (e) { var t = this, n = this.element, r = this.option; e !== undefined ? (n.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"), n.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"), n.data("scrollingHotSpotLeft").add(n.data("scrollingHotSpotRight")).fadeTo(e, .35)) : (n.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"), n.data("scrollingHotSpotLeft").removeAttr("style"), n.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"), n.data("scrollingHotSpotRight").removeAttr("style")), t._showHideHotSpots() }, hideHotSpotBackgrounds: function (e) { var t = this.element, n = this.option; e !== undefined ? (t.data("scrollingHotSpotLeft").fadeTo(e, 0, function () { t.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible") }), t.data("scrollingHotSpotRight").fadeTo(e, 0, function () { t.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible") })) : (t.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible").removeAttr("style"), t.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible").removeAttr("style")) }, _showHideHotSpots: function () { var e = this, t = this.element, n = this.options; n.hotSpotScrolling ? n.manualContinuousScrolling && n.hotSpotScrolling && n.autoScrollingMode !== "always" ? (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").show()) : n.autoScrollingMode !== "always" && n.hotSpotScrolling ? t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth() ? (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) : t.data("scrollWrapper").scrollLeft() === 0 ? (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").show(), e._trigger("scrollerLeftLimitReached"), clearInterval(t.data("leftScrollingInterval")), t.data("leftScrollingInterval", null)) : t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth() + t.data("scrollWrapper").scrollLeft() ? (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").hide(), e._trigger("scrollerRightLimitReached"), clearInterval(t.data("rightScrollingInterval")), t.data("rightScrollingInterval", null)) : (t.data("scrollingHotSpotLeft").show(), t.data("scrollingHotSpotRight").show()) : (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) : (t.data("scrollingHotSpotLeft").hide(), t.data("scrollingHotSpotRight").hide()) }, _setElementScrollPosition: function (t, n) { var r = this.element, i = this.options, s = 0; switch (t) { case "first": return r.data("scrollXPos", 0), !0; case "start": if (i.startAtElementId !== "" && r.data("scrollableArea").has("#" + i.startAtElementId)) return s = e("#" + i.startAtElementId).position().left, r.data("scrollXPos", s), !0; return !1; case "last": return r.data("scrollXPos", r.data("scrollableAreaWidth") - r.data("scrollWrapper").innerWidth()), !0; case "number": if (!isNaN(n)) return s = r.data("scrollableArea").children(i.countOnlyClass).eq(n - 1).position().left, r.data("scrollXPos", s), !0; return !1; case "id": if (n.length > 0 && r.data("scrollableArea").has("#" + n)) return s = e("#" + n).position().left, r.data("scrollXPos", s), !0; return !1; default: return !1 } }, jumpToElement: function (e, t) { var n = this, r = this.element; if (r.data("enabled") && n._setElementScrollPosition(e, t)) { r.data("scrollWrapper").scrollLeft(r.data("scrollXPos")), n._showHideHotSpots(); switch (e) { case "first": n._trigger("jumpedToFirstElement"); break; case "start": n._trigger("jumpedToStartElement"); break; case "last": n._trigger("jumpedToLastElement"); break; case "number": n._trigger("jumpedToElementNumber", null, { elementNumber: t }); break; case "id": n._trigger("jumpedToElementId", null, { elementId: t }); break; default: } } }, scrollToElement: function (e, t) { var n = this, r = this.element, i = this.options, s = !1; r.data("enabled") && n._setElementScrollPosition(e, t) && (r.data("autoScrollingInterval") !== null && (n.stopAutoScrolling(), s = !0), r.data("scrollWrapper").stop(!0, !1), r.data("scrollWrapper").animate({ scrollLeft: r.data("scrollXPos") }, { duration: i.scrollToAnimationDuration, easing: i.scrollToEasingFunction, complete: function () { s && n.startAutoScrolling(), n._showHideHotSpots(); switch (e) { case "first": n._trigger("scrolledToFirstElement"); break; case "start": n._trigger("scrolledToStartElement"); break; case "last": n._trigger("scrolledToLastElement"); break; case "number": n._trigger("scrolledToElementNumber", null, { elementNumber: t }); break; case "id": n._trigger("scrolledToElementId", null, { elementId: t }); break; default: } } })) }, move: function (e) { var t = this, n = this.element, r = this.options; n.data("scrollWrapper").stop(!0, !0); if (e < 0 && n.data("scrollWrapper").scrollLeft() > 0 || e > 0 && n.data("scrollableAreaWidth") > n.data("scrollWrapper").innerWidth() + n.data("scrollWrapper").scrollLeft()) r.easingAfterMouseWheelScrolling ? n.data("scrollWrapper").animate({ scrollLeft: n.data("scrollWrapper").scrollLeft() + e }, { duration: r.easingAfterMouseWheelScrollingDuration, easing: r.easingAfterMouseWheelFunction, complete: function () { t._showHideHotSpots(), r.manualContinuousScrolling && (e > 0 ? t._checkContinuousSwapRight() : t._checkContinuousSwapLeft()) } }) : (n.data("scrollWrapper").scrollLeft(n.data("scrollWrapper").scrollLeft() + e), t._showHideHotSpots(), r.manualContinuousScrolling && (e > 0 ? t._checkContinuousSwapRight() : t._checkContinuousSwapLeft())) }, getFlickrContent: function (t, n) { var r = this, i = this.element; e.getJSON(t, function (t) { function c(t, a) { var p = t.media.m, d = p.replace("_m", s[a].letter), v = e("<img />").attr("src", d); v.load(function () { this.height < i.data("scrollableAreaHeight") ? a + 1 < s.length ? c(t, a + 1) : h(this) : h(this); if (l === f) { switch (n) { case "addFirst": i.data("scrollableArea").children(":first").before(o); break; case "addLast": i.data("scrollableArea").children(":last").after(o); break; default: i.data("scrollableArea").html(o) } i.data("initialAjaxContentLoaded") ? r.recalculateScrollableArea() : i.data("initialAjaxContentLoaded", !0), r._showHideHotSpots(), r._trigger("addedFlickrContent", null, { addedElementIds: u }) } }) } function h(t) { var n = i.data("scrollableAreaHeight") / t.height, r = Math.round(t.width * n), s = e(t).attr("src").split("/"), a = s.length - 1; s = s[a].split("."), e(t).attr("id", s[0]), e(t).css({ height: i.data("scrollableAreaHeight"), width: r }), u.push(s[0]), o.push(t), l++ } var s = [{ size: "small square", pixels: 75, letter: "_s" }, { size: "thumbnail", pixels: 100, letter: "_t" }, { size: "small", pixels: 240, letter: "_m" }, { size: "medium", pixels: 500, letter: "" }, { size: "medium 640", pixels: 640, letter: "_z" }, { size: "large", pixels: 1024, letter: "_b"}], o = [], u = [], a, f = t.items.length, l = 0; i.data("scrollableAreaHeight") <= 75 ? a = 0 : i.data("scrollableAreaHeight") <= 100 ? a = 1 : i.data("scrollableAreaHeight") <= 240 ? a = 2 : i.data("scrollableAreaHeight") <= 500 ? a = 3 : i.data("scrollableAreaHeight") <= 640 ? a = 4 : a = 5, e.each(t.items, function (e, t) { c(t, a) }) }) }, getAjaxContent: function (t, n, r) { var i = this, s = this.element; e.ajaxSetup({ cache: !1 }), e.get(t, function (o) { var u; r !== undefined ? r.length > 0 ? u = e("<div>").html(o).find(r) : u = t : u = o; switch (n) { case "addFirst": s.data("scrollableArea").children(":first").before(u); break; case "addLast": s.data("scrollableArea").children(":last").after(u); break; default: s.data("scrollableArea").html(u) } s.data("initialAjaxContentLoaded") ? i.recalculateScrollableArea() : s.data("initialAjaxContentLoaded", !0), i._showHideHotSpots(), i._trigger("addedAjaxContent") }) }, getHtmlContent: function (t, n, r) { var i = this, s = this.element, o; r !== undefined ? r.length > 0 ? o = e("<div>").html(t).find(r) : o = t : o = t; switch (n) { case "addFirst": s.data("scrollableArea").children(":first").before(o); break; case "addLast": s.data("scrollableArea").children(":last").after(o); break; default: s.data("scrollableArea").html(o) } s.data("initialAjaxContentLoaded") ? i.recalculateScrollableArea() : s.data("initialAjaxContentLoaded", !0), i._showHideHotSpots(), i._trigger("addedHtmlContent") }, recalculateScrollableArea: function () { var t = 0, n = !1, r = this.options, i = this.element; i.data("scrollableArea").children(r.countOnlyClass).each(function () { r.startAtElementId.length > 0 && e(this).attr("id") === r.startAtElementId && (i.data("startingPosition", t), n = !0), t += e(this).outerWidth(!0) }), n || i.data("startAtElementId", ""), i.data("scrollableAreaWidth", t), i.data("scrollableArea").width(i.data("scrollableAreaWidth")), i.data("scrollWrapper").scrollLeft(i.data("startingPosition")), i.data("scrollXPos", i.data("startingPosition")) }, getScrollerOffset: function () { var e = this.element; return e.data("scrollWrapper").scrollLeft() }, stopAutoScrolling: function () { var e = this, t = this.element; t.data("autoScrollingInterval") !== null && (clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._showHideHotSpots(), e._trigger("autoScrollingStopped")) }, startAutoScrolling: function () { var e = this, t = this.element, n = this.options; t.data("enabled") && (e._showHideHotSpots(), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingStarted"), t.data("autoScrollingInterval", setInterval(function () { if (!t.data("visible") || t.data("scrollableAreaWidth") <= t.data("scrollWrapper").innerWidth()) clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null); else { t.data("previousScrollLeft", t.data("scrollWrapper").scrollLeft()); switch (n.autoScrollingDirection) { case "right": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (e._trigger("autoScrollingRightLimitReached"), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingIntervalStopped")); break; case "left": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (e._trigger("autoScrollingLeftLimitReached"), clearInterval(t.data("autoScrollingInterval")), t.data("autoScrollingInterval", null), e._trigger("autoScrollingIntervalStopped")); break; case "backAndForth": t.data("pingPongDirection") === "right" ? t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep) : t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), t.data("previousScrollLeft") === t.data("scrollWrapper").scrollLeft() && (t.data("pingPongDirection") === "right" ? (t.data("pingPongDirection", "left"), e._trigger("autoScrollingRightLimitReached")) : (t.data("pingPongDirection", "right"), e._trigger("autoScrollingLeftLimitReached"))); break; case "endlessLoopRight": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + n.autoScrollingStep), e._checkContinuousSwapRight(); break; case "endlessLoopLeft": t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() - n.autoScrollingStep), e._checkContinuousSwapLeft(); break; default: } } }, n.autoScrollingInterval))) }, _checkContinuousSwapRight: function () { var t = this.element, n = this.options; t.data("getNextElementWidth") && (n.startAtElementId.length > 0 && t.data("startAtElementHasNotPassed") ? (t.data("swapAt", e("#" + n.startAtElementId).outerWidth(!0)), t.data("startAtElementHasNotPassed", !1)) : t.data("swapAt", t.data("scrollableArea").children(":first").outerWidth(!0)), t.data("getNextElementWidth", !1)); if (t.data("swapAt") <= t.data("scrollWrapper").scrollLeft()) { t.data("swappedElement", t.data("scrollableArea").children(":first").detach()), t.data("scrollableArea").append(t.data("swappedElement")); var r = t.data("scrollWrapper").scrollLeft(); t.data("scrollWrapper").scrollLeft(r - t.data("swappedElement").outerWidth(!0)), t.data("getNextElementWidth", !0) } }, _checkContinuousSwapLeft: function () { var t = this.element, n = this.options; t.data("getNextElementWidth") && (n.startAtElementId.length > 0 && t.data("startAtElementHasNotPassed") ? (t.data("swapAt", e("#" + n.startAtElementId).outerWidth(!0)), t.data("startAtElementHasNotPassed", !1)) : t.data("swapAt", t.data("scrollableArea").children(":first").outerWidth(!0)), t.data("getNextElementWidth", !1)), t.data("scrollWrapper").scrollLeft() === 0 && (t.data("swappedElement", t.data("scrollableArea").children(":last").detach()), t.data("scrollableArea").prepend(t.data("swappedElement")), t.data("scrollWrapper").scrollLeft(t.data("scrollWrapper").scrollLeft() + t.data("swappedElement").outerWidth(!0)), t.data("getNextElementWidth", !0)) }, restoreOriginalElements: function () { var e = this, t = this.element; t.data("scrollableArea").html(t.data("originalElements")), e.recalculateScrollableArea(), e.jumpToElement("first") }, show: function () { var e = this.element; e.data("visible", !0), e.show() }, hide: function () { var e = this.element; e.data("visible", !1), e.hide() }, enable: function () { var e = this.element; e.data("enabled", !0) }, disable: function () { var e = this, t = this.element; e.stopAutoScrolling(), clearInterval(t.data("rightScrollingInterval")), clearInterval(t.data("leftScrollingInterval")), clearInterval(t.data("hideHotSpotBackgroundsInterval")), t.data("enabled", !1) }, destroy: function () { var t = this, n = this.element; t.stopAutoScrolling(), clearInterval(n.data("rightScrollingInterval")), clearInterval(n.data("leftScrollingInterval")), clearInterval(n.data("hideHotSpotBackgroundsInterval")), n.data("scrollingHotSpotRight").unbind("mouseover"), n.data("scrollingHotSpotRight").unbind("mouseout"), n.data("scrollingHotSpotRight").unbind("mousedown"), n.data("scrollingHotSpotLeft").unbind("mouseover"), n.data("scrollingHotSpotLeft").unbind("mouseout"), n.data("scrollingHotSpotLeft").unbind("mousedown"), n.unbind("mousenter"), n.unbind("mouseleave"), n.data("scrollingHotSpotRight").remove(), n.data("scrollingHotSpotLeft").remove(), n.data("scrollableArea").remove(), n.data("scrollWrapper").remove(), n.html(n.data("originalElements")), e.Widget.prototype.destroy.apply(this, arguments) } }) })(jQuery);

// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: " I said, ",      // [string]   auto text for non verb: "I said" bullocks
      auto_join_text_ed: " I ",                 // [string]   auto text for past tense: "I" surfed
      auto_join_text_ing: " I am ",             // [string]   auto tense for present tense: "I was" surfing
      auto_join_text_reply: " I replied to ",   // [string]   auto tense for replies: "I replied to" @someone "with"
      auto_join_text_url: " I was looking at ", // [string]   auto tense for urls: "I was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null,                   // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join} {text}",  // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.split('{'+key+'}').join(val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+
                         ((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+
                         '" class="tweet_hashtag">#$1</a>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function extract_relative_time(date) {
      var toInt = function(val) { return parseInt(val, 10); };
      var relative_to = new Date();
      var delta = toInt((relative_to.getTime() - date) / 1000);
      if (delta < 1) delta = 0;
      return {
        days:    toInt(delta / 86400),
        hours:   toInt(delta / 3600),
        minutes: toInt(delta / 60),
        seconds: toInt(delta)
      };
    }

    function format_relative_time(time_ago) {
      if ( time_ago.days > 2 )     return 'about ' + time_ago.days + ' days ago';
      if ( time_ago.hours > 24 )   return 'about a day ago';
      if ( time_ago.hours > 2 )    return 'about ' + time_ago.hours + ' hours ago';
      if ( time_ago.minutes > 45 ) return 'about an hour ago';
      if ( time_ago.minutes > 2 )  return 'about ' + time_ago.minutes + ' minutes ago';
      if ( time_ago.seconds > 1 )  return 'about ' + time_ago.seconds + ' seconds ago';
      return 'just now';
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/1/favorites.json?screen_name="+s.username[0]+"&page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      // The actual user name is not returned by all Twitter APIs, so please do not
      // file an issue if it is empty:
      o.name = item.from_user_name || item.user.name;
      o.retweet = typeof(item.retweeted_status) != 'undefined';

      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = format_relative_time(extract_relative_time(o.tweet_time));
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.retweeted_tweet_text = $([linkURLs(item.text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(o.retweet ? item.retweeted_status : item, (document.location.protocol === 'https:'));
      o.avatar_screen_name = o.retweet ? o.retweeted_screen_name : o.screen_name;
      o.avatar_profile_url = o.twitter_base+o.avatar_screen_name;

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t('<span class="tweet_join">{join_text}</span>', o) : '';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.retweeted_text = t('<span class="tweet_text">{retweeted_tweet_text}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    function render_tweets(widget, tweets) {
      var list = $('<ul class="tweet_list">');
      list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
        children('li:first').addClass('tweet_first').end().
        children('li:odd').addClass('tweet_even').end().
        children('li:even').addClass('tweet_odd');

      $(widget).empty().append(list);
      if (s.intro_text) list.before('<p class="tweet_intro">'+s.intro_text+'</p>');
      if (s.outro_text) list.after('<p class="tweet_outro">'+s.outro_text+'</p>');

      $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
      if (s.refresh_interval) {
        window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
      }
    }

    function load(widget) {
      var loading = $('<p class="loading">'+s.loading_text+'</p>');
      if (s.loading_text) $(widget).not(":has(.tweet_list)").empty().append(loading);
      $.getJSON(build_api_url(), function(data){
        var tweets = $.map(data.results || data, extract_template_data);
        tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
        $(widget).trigger("tweet:retrieved", [tweets]);
      });
    }

    return this.each(function(i, widget){
      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").
        bind({
          "tweet:load": function() { load(widget); },
          "tweet:retrieved": function(ev, tweets) {
            $(widget).trigger("tweet:render", [tweets])
          },
          "tweet:render": function(ev, tweets) {
            render_tweets($(widget), tweets);
          }
        }).trigger("tweet:load");
    });
  };
}));

/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 ;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
 b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
 function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
 function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
 !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
 a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
 "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
 0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
 setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
 d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
 d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
 f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
 a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
 keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
 i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);

/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.4
------------------------------------------------------------------------- */

(function($){$.prettyPhoto={version:'3.1.4'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({hook:'rel',animation_speed:'fast',ajaxcallback:function(){},slideshow:5000,autoplay_slideshow:false,opacity:0.80,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:'/',theme:'pp_default',horizontal_padding:20,hideflash:false,wmode:'opaque',autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> \
      <div class="ppt">&nbsp;</div> \
      <div class="pp_top"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
       <div class="pp_left"> \
       <div class="pp_right"> \
        <div class="pp_content"> \
         <div class="pp_loaderIcon"></div> \
         <div class="pp_fade"> \
          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
          <div class="pp_hoverContainer"> \
           <a class="pp_next" href="#">next</a> \
           <a class="pp_previous" href="#">previous</a> \
          </div> \
          <div id="pp_full_res"></div> \
          <div class="pp_details"> \
           <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous">Previous</a> \
            <p class="currentTextHolder">0/0</p> \
            <a href="#" class="pp_arrow_next">Next</a> \
           </div> \
           <p class="pp_description"></p> \
           <div class="pp_social">{pp_social}</div> \
           <a class="pp_close" href="#">Close</a> \
          </div> \
         </div> \
        </div> \
       </div> \
       </div> \
      </div> \
      <div class="pp_bottom"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
     </div> \
     <div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \
        <a href="#" class="pp_arrow_previous">Previous</a> \
        <div> \
         <ul> \
          {gallery} \
         </ul> \
        </div> \
        <a href="#" class="pp_arrow_next">Next</a> \
       </div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:'',social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},pp_settings);var matchedObjects=this,percentBased=false,pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width(),pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');e.preventDefault();break;case 39:$.prettyPhoto.changePage('next');e.preventDefault();break;case 27:if(!settings.modal)
$.prettyPhoto.close();e.preventDefault();break;};};};});};$.prettyPhoto.initialize=function(){settings=pp_settings;if(settings.theme=='pp_default')settings.horizontal_padding=16;if(settings.ie6_fallback&&$.browser.msie&&parseInt($.browser.version)==6)settings.theme="light_square";theRel=$(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(this).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):"";}):$.makeArray($(this).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):"";}):$.makeArray($(this).attr('title'));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray($(this).attr('href'),pp_images);rel_index=(isSet)?set_position:$("a["+settings.hook+"^='"+theRel+"']").index($(this));_build_overlay(this);if(settings.allow_resize)
$(window).bind('scroll.prettyphoto',function(){_center_overlay();});$.prettyPhoto.open();return false;}
$.prettyPhoto.open=function(event){if(typeof settings=="undefined"){settings=pp_settings;if($.browser.msie&&$.browser.version==6)settings.theme="light_square";pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray("");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=(arguments[3])?arguments[3]:0;_build_overlay(event.target);}
if($.browser.msie&&$.browser.version==6)$('select').css('visibility','hidden');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if(settings.deeplinking)
setHashtag();if(settings.social_tools){facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));$pp_pic_holder.find('.pp_social').html(facebook_like_link);}
if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());if(typeof pp_descriptions[set_position]!='undefined'&&pp_descriptions[set_position]!=""){$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));}else{$pp_pic_holder.find('.pp_description').hide();}
movie_width=(parseFloat(getParam('width',pp_images[set_position])))?getParam('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(getParam('height',pp_images[set_position])))?getParam('height',pp_images[set_position]):settings.default_height.toString();percentBased=false;if(movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);percentBased=true;}
if(movie_width.indexOf('%')!=-1){movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}
$pp_pic_holder.fadeIn(function(){(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');imgPreloader="";skipInjection=false;switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position<$(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=getParam('v',pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split('youtu.be/');movie_id=movie_id[1];if(movie_id.indexOf('?')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('?'));if(movie_id.indexOf('&')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('&'));}
movie='http://www.youtube.com/embed/'+movie_id;(getParam('rel',pp_images[set_position]))?movie+="?rel="+getParam('rel',pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=pp_dimensions['width']+'/embed/?moog_width='+pp_dimensions['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);break;case'quicktime':pp_dimensions=_fitToViewport(movie_width,movie_height);pp_dimensions['height']+=15;pp_dimensions['contentHeight']+=15;pp_dimensions['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':pp_dimensions=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':pp_dimensions=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);break;case'ajax':doresize=false;pp_dimensions=_fitToViewport(movie_width,movie_height);doresize=true;skipInjection=true;$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML);$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();});break;case'custom':pp_dimensions=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();doresize=false;pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height());doresize=true;$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader&&!skipInjection){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0)set_position=$(pp_images).size()-1;}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1)set_position=0;}else{set_position=direction;};rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');}
_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0;}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage;}else{currentGalleryPage=direction;};slide_speed=(direction=='next'||direction=='previous')?settings.animation_speed:0;slide_to=currentGalleryPage*(itemsPerPage*itemWidth);$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}
$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}
$.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;$.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if($.browser.msie&&$.browser.version==6)$('select').css('visibility','visible');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible');$(this).remove();$(window).unbind('scroll.prettyphoto');clearHashtag();settings.callback();doresize=true;pp_open=false;delete settings;});};function _showContent(){$('.pp_loaderIcon').hide();projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(pp_dimensions['containerHeight']/2));if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find('.pp_content').animate({height:pp_dimensions['contentHeight'],width:pp_dimensions['contentWidth']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':((windowWidth/2)-(pp_dimensions['containerWidth']/2)<0)?0:(windowWidth/2)-(pp_dimensions['containerWidth']/2),width:pp_dimensions['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])=="image"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}
if(settings.allow_expand){if(pp_dimensions['resized']){$('a.pp_expand,a.pp_contract').show();}else{$('a.pp_expand').hide();}}
if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();settings.changepicturecallback();pp_open=true;});_insert_gallery();pp_settings.ajaxcallback();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};_getDimensions(imageWidth,imageHeight);if((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight)){_fitToViewport(pp_containerWidth,pp_containerHeight)};};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+(settings.horizontal_padding*2),contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;if($.browser.msie&&$.browser.version==7)detailsHeight+=8;$pp_details.remove();$pp_title=$pp_pic_holder.find('.ppt');$pp_title.width(width);titleHeight=parseFloat($pp_title.css('marginTop'))+parseFloat($pp_title.css('marginBottom'));$pp_title=$pp_title.clone().appendTo($('body')).css({'position':'absolute','top':-10000});titleHeight+=$pp_title.height();$pp_title.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}
function _getFileType(itemSrc){if(itemSrc.match(/youtube\.com\/watch/i)||itemSrc.match(/youtu\.be/i)){return'youtube';}else if(itemSrc.match(/vimeo\.com/i)){return'vimeo';}else if(itemSrc.match(/\b.mov\b/i)){return'quicktime';}else if(itemSrc.match(/\b.swf\b/i)){return'flash';}else if(itemSrc.match(/\biframe=true\b/i)){return'iframe';}else if(itemSrc.match(/\bajax=true\b/i)){return'ajax';}else if(itemSrc.match(/\bcustom=true\b/i)){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);if(projectedTop<0)projectedTop=0;if(contentHeight>windowHeight)
return;$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height($(document).height()).width(windowWidth);};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"&&(settings.ie6_fallback&&!($.browser.msie&&parseInt($.browser.version)==6))){itemWidth=52+5;navWidth=(settings.theme=="facebook"||settings.theme=="pp_default")?50:30;itemsPerPage=Math.floor((pp_dimensions['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();}else{$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css('margin-left',-((galleryWidth/2)+(navWidth/2))).find('div:first').width(galleryWidth+5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<totalPage)?Math.floor(set_position/itemsPerPage):totalPage;$.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');}}
function _build_overlay(caller){if(settings.social_tools)
facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));settings.markup=settings.markup.replace('{pp_social}','');$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var i=0;i<pp_images.length;i++){if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname='default';img_src='';}else{classname='';img_src=pp_images[i];}
toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_gallery=$('.pp_pic_holder .pp_gallery'),$pp_gallery_li=$pp_gallery.find('li');$pp_gallery.find('.pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_gallery.find('.pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_gallery_li.each(function(i){$(this).find('a').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}
$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':$(window).width()}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});if(settings.allow_expand){$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});}
$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};if(!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=true;hashIndex=getHashtag();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf('/'));setTimeout(function(){$("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click');},50);}
return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize);};function getHashtag(){url=location.href;hashtag=(url.indexOf('#prettyPhoto')!==-1)?decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)):false;return hashtag;};function setHashtag(){if(typeof theRel=='undefined')return;location.hash=theRel+'/'+rel_index+'/';};function clearHashtag(){if(location.href.indexOf('#prettyPhoto')!==-1)location.hash="prettyPhoto";}
function getParam(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?"":results[1];}})(jQuery);var pp_alreadyInitialized=false;

/**
 * jQuery goMap
 *
 * @url		http://www.pittss.lv/jquery/gomap/
 * @author	Jevgenijs Shtrauss <pittss@gmail.com>
 * @version	1.3.2 2011.07.01
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(c($){b 3i=x h.g.3K();c 1r(t){3.14(t)};1r.1R=x h.g.4d();1r.1R.4b=c(){};1r.1R.4a=c(){};1r.1R.47=c(){};$.p={};$.46.p=c(5){s 3.45(c(){b p=$(3).m(\'p\');7(!p){b 1q=$.1v(B,{},$.1q);$(3).m(\'p\',1q.2N(3,5));$.p=1q}n{$.p=p}})};$.1q={2K:{C:\'\',G:44.9,F:24.1,2s:4,1E:42,2V:B,2X:B,32:\'41\',3g:\'40\',2F:\'3Z\',2h:B,11:{z:\'3Y\',N:\'2W\'},2e:B,10:{z:\'3X\',N:\'2W\'},2d:v,2a:B,3V:v,3T:H,28:v,25:v,e:[],D:[],1g:{P:\'#1f\',O:1.0,L:2},19:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},W:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},1Q:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},2O:\'3S\',2U:\'<1k 3P=3N>\',2Y:\'</1k>\',1s:v},t:H,1w:0,e:[],35:[],37:[],3d:[],3f:[],1x:[],1z:[],1h:v,1b:H,D:H,w:H,o:H,2n:H,2g:H,27:H,22:H,8:H,1K:H,2N:c(29,5){b 8=$.1v(B,{},$.1q.2K,5);3.o=$(29);3.8=8;7(8.C)3.12({C:8.C,1d:B});n 7($.2Z(8.e)&&8.e.u>0){7(8.e[0].C)3.12({C:8.e[0].C,1d:B});n 3.1K=x h.g.V(8.e[0].G,8.e[0].F)}n 3.1K=x h.g.V(8.G,8.F);b 34={1d:3.1K,28:8.28,2e:8.2e,25:8.25,10:{z:h.g.1J[8.10.z.18()],N:h.g.38[8.10.N.18()]},3a:h.g.3J[8.2O.18()],2h:8.2h,11:{z:h.g.1J[8.11.z.18()],N:h.g.3c[8.11.N.18()]},2d:8.2d,2a:8.2a,2s:8.2s};3.t=x h.g.3I(29,34);3.w=x 1r(3.t);3.D={1g:{q:\'2n\',y:\'35\',1y:\'3j\'},19:{q:\'2g\',y:\'37\',1y:\'2B\'},W:{q:\'27\',y:\'3d\',1y:\'2D\'},1Q:{q:\'22\',y:\'3f\',1y:\'2E\'}};3.2n=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.2g=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.27=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.22=$(\'<1k N="Q:1T;"/>\').1I(3.o);I(b j=0,l=8.e.u;j<l;j++)3.1F(8.e[j]);I(b j=0,l=8.D.u;j<l;j++)3[3.D[8.D[j].d].1y](8.D[j]);b p=3;7(8.1s==B||8.1s==\'3F\'){h.g.K.1o(p.t,\'21\',c(K){b 5={z:K.2L,1G:B};b 6=p.1F(5);h.g.K.1o(6,\'30\',c(K){6.14(H);p.2f(6.q)})})}n 7(8.1s==\'3E\'){h.g.K.1o(p.t,\'21\',c(K){7(!p.1L){b 5={z:K.2L,1G:B};b 6=p.1F(5);p.1L=B;h.g.K.1o(6,\'30\',c(K){6.14(H);p.2f(6.q);p.1L=v})}})}J 8.e;J 8.D;s 3},3B:c(f){h.g.K.3A(3.t,\'3z\',c(){s f()})},12:c(C,5){b p=3;1M(c(){3i.12({\'C\':C.C},c(1N,1u){7(1u==h.g.1O.2l&&C.1d)p.t.3y(1N[0].2r.2x);7(1u==h.g.1O.2l&&5&&5.E)5.E.3w(1N[0].2r.2x);n 7(1u==h.g.1O.2l&&5){7(p.1h){p.1h=v;5.z=1N[0].2r.2x;5.12=B;p.1F(5)}}n 7(1u==h.g.1O.3t){p.12(C,5)}})},3.8.1E)},23:c(){7(3.1z.u>0&&!3.1h){3.1h=B;b 17=3.1z.1H(0,1);3.12({C:17[0].C},17[0])}n 7(3.1h){b p=3;1M(c(){p.23()},3.8.1E)}},14:c(5){J 5.3a;7(5.C){3.12({C:5.C,1d:B});J 5.C}n 7(5.G&&5.F){5.1d=x h.g.V(5.G,5.F);J 5.F;J 5.G}7(5.10&&5.10.z)5.10.z=h.g.1J[5.10.z.18()];7(5.10&&5.10.N)5.10.N=h.g.38[5.10.N.18()];7(5.11&&5.11.z)5.11.z=h.g.1J[5.11.z.18()];7(5.11&&5.11.N)5.11.N=h.g.3c[5.11.N.18()];3.t.1S(5)},2I:c(){s 3.t},2J:c(d,K,m){b 1l;7(1B d!=\'2M\')d={d:d};7(d.d==\'t\')1l=3.t;n 7(d.d==\'6\'&&d.6)1l=$(3.o).m(d.6);n 7(d.d==\'k\'&&d.6)1l=$(3.o).m(d.6+\'k\');7(1l)s h.g.K.1o(1l,K,m);n 7((d.d==\'6\'||d.d==\'k\')&&3.2b()!=3.2c())b p=3;1M(c(){p.2J(d,K,m)},3.8.1E)},2Q:c(2R){h.g.K.2Q(2R)},2S:c(6,A){b p=3;A.1n=p.8.2U+A.1n+p.8.2Y;b M=x h.g.3s(A);M.X=v;$(p.o).m(6.q+\'k\',M);7(A.3r){p.2j(M,6,A);M.X=B}h.g.K.1o(6,\'21\',c(){7(M.X&&p.8.2V){M.1p();M.X=v}n{p.2j(M,6,A);M.X=B}})},2j:c(M,6,A){7(3.8.2X)3.31();7(A.1X){M.2m(3.t,6);$.1X({3q:A.1X,3p:c(A){M.2p(A)}})}n 7(A.q){M.2p($(A.q).A());M.2m(3.t,6)}n M.2m(3.t,6)},3n:c(q,1Z){b k=$(3.o).m(q+\'k\');7(1B 1Z==\'2M\')k.1S(1Z);n k.2p(1Z)},3m:c(q,39){b k=$(3.o).m(q+\'k\').3O();7(39)s $(k).A();n s k},31:c(){I(b i=0,l=3.e.u;i<l;i++){b k=$(3.o).m(3.e[i]+\'k\');7(k){k.1p();k.X=v}}},2v:c(d,e){b p=3;7(3.2b()!=3.2c())1M(c(){p.2v(d,e)},3.8.1E);n{3.1b=x h.g.2w();7(!d||(d&&d==\'3l\')){I(b i=0,l=3.e.u;i<l;i++){3.1b.1v($(3.o).m(3.e[i]).z)}}n 7(d&&d==\'1A\'){I(b i=0,l=3.e.u;i<l;i++){7(3.1D(3.e[i]))3.1b.1v($(3.o).m(3.e[i]).z)}}n 7(d&&d==\'e\'&&$.2Z(e)){I(b i=0,l=e.u;i<l;i++){3.1b.1v($(3.o).m(e[i]).z)}}3.t.2v(3.1b)}},2z:c(){s 3.t.2z()},3j:c(a){a.d=\'1g\';s 3.1C(a)},2B:c(a){a.d=\'19\';s 3.1C(a)},2D:c(a){a.d=\'W\';s 3.1C(a)},2E:c(a){a.d=\'1Q\';s 3.1C(a)},1C:c(a){b w=[];7(!a.q){3.1w++;a.q=3.8.3g+3.1w}3e(a.d){16\'1g\':7(a.T.u>0){I(b j=0,l=a.T.u;j<l;j++)w.U(x h.g.V(a.T[j].G,a.T[j].F));w=x h.g.3o({t:3.t,2o:w,1Y:a.P?a.P:3.8.1g.P,1W:a.O?a.O:3.8.1g.O,1V:a.L?a.L:3.8.1g.L})}n s v;Y;16\'19\':7(a.T.u>0){I(b j=0,l=a.T.u;j<l;j++)w.U(x h.g.V(a.T[j].G,a.T[j].F));w=x h.g.3u({t:3.t,2o:w,1Y:a.P?a.P:3.8.19.P,1W:a.O?a.O:3.8.19.O,1V:a.L?a.L:3.8.19.L,S:a.S?a.S:3.8.19.S,R:a.R?a.R:3.8.19.R})}n s v;Y;16\'W\':w=x h.g.3v({t:3.t,1d:x h.g.V(a.G,a.F),2C:a.2C,1Y:a.P?a.P:3.8.W.P,1W:a.O?a.O:3.8.W.O,1V:a.L?a.L:3.8.W.L,S:a.S?a.S:3.8.W.S,R:a.R?a.R:3.8.W.R});Y;16\'1Q\':w=x h.g.3x({t:3.t,1b:x h.g.2w(x h.g.V(a.1t.G,a.1t.F),x h.g.V(a.1j.G,a.1j.F)),1Y:a.P?a.P:3.8.W.P,1W:a.O?a.O:3.8.W.O,1V:a.L?a.L:3.8.W.L,S:a.S?a.S:3.8.W.S,R:a.R?a.R:3.8.W.R});Y;26:s v;Y}3.36(a,w);s w},36:c(a,w){$(3[3.D[a.d].q]).m(a.q,w);3[3.D[a.d].y].U(a.q)},3C:c(d,w,5){w=$(3[3.D[d].q]).m(w);7(5.T&&5.T.u>0){b y=[];I(b j=0,l=5.T.u;j<l;j++)y.U(x h.g.V(5.T[j].G,5.T[j].F));5.2o=y;J 5.T}n 7(5.1j&&5.1t){5.1b=x h.g.2w(x h.g.V(5.1t.G,5.1t.F),x h.g.V(5.1j.G,5.1j.F));J 5.1j;J 5.1t}n 7(5.G&&5.F){5.1d=x h.g.V(5.G,5.F);J 5.G;J 5.F}w.1S(5)},3D:c(d,w,Q){7(1B Q===\'2i\'){7(3.2T(d,w))Q=v;n Q=B}7(Q)$(3[3.D[d].q]).m(w).14(3.t);n $(3[3.D[d].q]).m(w).14(H)},2T:c(d,w){7($(3[3.D[d].q]).m(w).2I())s B;n s v},3G:c(d){s 3[3.D[d].y].u},3H:c(d,w){b 1i=$.3b(w,3[3.D[d].y]),17;7(1i>-1){17=3[3.D[d].y].1H(1i,1);b E=17[0];$(3[3.D[d].q]).m(E).14(H);$(3[3.D[d].q]).1m(E);s B}s v},3L:c(d){I(b i=0,l=3[3.D[d].y].u;i<l;i++){b E=3[3.D[d].y][i];$(3[3.D[d].q]).m(E).14(H);$(3[3.D[d].q]).1m(E)}3[3.D[d].y]=[]},3M:c(6,Q){7(1B Q===\'2i\'){7(3.1D(6)){$(3.o).m(6).1c(v);b k=$(3.o).m(6+\'k\');7(k&&k.X){k.1p();k.X=v}}n $(3.o).m(6).1c(B)}n $(3.o).m(6).1c(Q)},3k:c(13,Q){I(b i=0,l=3.e.u;i<l;i++){b E=3.e[i];b 6=$(3.o).m(E);7(6.13==13){7(1B Q===\'2i\'){7(3.1D(E)){6.1c(v);b k=$(3.o).m(E+\'k\');7(k&&k.X){k.1p();k.X=v}}n 6.1c(B)}n 6.1c(Q)}}},1D:c(6){s $(3.o).m(6).3Q()},2b:c(){s 3.e.u},2c:c(){s 3.1x.u},3R:c(){s 3.1P(\'2H\').u},3U:c(13){s 3.1P(\'13\',13).u},1P:c(d,2A){b y=[];3e(d){16"3W":I(b i=0,l=3.e.u;i<l;i++){b 1a="\'"+i+"\': \'"+$(3.o).m(3.e[i]).1U().2k()+"\'";y.U(1a)}y="{\'e\':{"+y.3h(",")+"}}";Y;16"m":I(b i=0,l=3.e.u;i<l;i++){b 1a="6["+i+"]="+$(3.o).m(3.e[i]).1U().2k();y.U(1a)}y=y.3h("&");Y;16"33":I(b i=0,l=3.e.u;i<l;i++){7(3.2P($(3.o).m(3.e[i]).1U()))y.U(3.e[i])}Y;16"2H":I(b i=0,l=3.e.u;i<l;i++){7(3.1D(3.e[i]))y.U(3.e[i])}Y;16"13":7(2A)I(b i=0,l=3.e.u;i<l;i++){7($(3.o).m(3.e[i]).13==2A)y.U(3.e[i])}Y;16"e":I(b i=0,l=3.e.u;i<l;i++){b 1a=$(3.o).m(3.e[i]);y.U(1a)}Y;26:I(b i=0,l=3.e.u;i<l;i++){b 1a=$(3.o).m(3.e[i]).1U().2k();y.U(1a)}Y}s y},43:c(){s 3.1P(\'33\')},1F:c(6){7(!6.12){3.1w++;7(!6.q)6.q=3.8.32+3.1w;3.1x.U(6.q)}7(6.C&&!6.12){3.1z.U(6);3.23()}n 7(6.G&&6.F||6.z){b 5={t:3.t};5.q=6.q;5.13=6.13?6.13:3.8.2F;5.2q=6.2q?6.2q:0;5.2t=6.2t?6.2t:0;7(6.1A==v)5.1A=6.1A;7(6.2u)5.2u=6.2u;7(6.1G)5.1G=6.1G;7(6.r&&6.r.1e){5.r=6.r.1e;7(6.r.Z)5.Z=6.r.Z}n 7(6.r)5.r=6.r;n 7(3.8.r&&3.8.r.1e){5.r=3.8.r.1e;7(3.8.r.Z)5.Z=3.8.r.Z}n 7(3.8.r)5.r=3.8.r;5.z=6.z?6.z:x h.g.V(6.G,6.F);b 20=x h.g.48(5);7(6.A){7(!6.A.1n&&!6.A.1X&&!6.A.q)6.A={1n:6.A};n 7(!6.A.1n)6.A.1n=H;3.2S(20,6.A)}3.1s(20);s 20}},1s:c(6){$(3.o).m(6.q,6);3.e.U(6.q)},49:c(6,5){b 2y=$(3.o).m(6);J 5.q;J 5.1A;7(5.r){b 15=5.r;J 5.r;7(15&&15==\'26\'){7(3.8.r&&3.8.r.1e){5.r=3.8.r.1e;7(3.8.r.Z)5.Z=3.8.r.Z}n 7(3.8.r)5.r=3.8.r}n 7(15&&15.1e){5.r=15.1e;7(15.Z)5.Z=15.Z}n 7(15)5.r=15}7(5.C){3.12({C:5.C},{E:2y});J 5.C;J 5.G;J 5.F;J 5.z}n 7(5.G&&5.F||5.z){7(!5.z)5.z=x h.g.V(5.G,5.F)}2y.1S(5)},2f:c(6){b 1i=$.3b(6,3.e),17;7(1i>-1){3.1x.1H(1i,1);17=3.e.1H(1i,1);b E=17[0];b 6=$(3.o).m(E);b k=$(3.o).m(E+\'k\');6.1c(v);6.14(H);$(3.o).1m(E);7(k){k.1p();k.X=v;$(3.o).1m(E+\'k\')}s B}s v},4c:c(){I(b i=0,l=3.e.u;i<l;i++){b E=3.e[i];b 6=$(3.o).m(E);b k=$(3.o).m(E+\'k\');6.1c(v);6.14(H);$(3.o).1m(E);7(k){k.1p();k.X=v;$(3.o).1m(E+\'k\')}}3.1L=v;3.1h=v;3.e=[];3.1x=[];3.1z=[]},2P:c(2G){s 3.t.2z().4e(2G)}}})(4f);',62,264,'|||this||options|marker|if|opts||poly|var|function|type|markers||maps|google|||info||data|else|mapId|goMap|id|icon|return|map|length|false|overlay|new|array|position|html|true|address|overlays|markerId|longitude|latitude|null|for|delete|event|weight|infowindow|style|opacity|color|display|fillOpacity|fillColor|coords|push|LatLng|circle|show|break|shadow|mapTypeControlOptions|navigationControlOptions|geocode|group|setMap|toption|case|current|toUpperCase|polygon|temp|bounds|setVisible|center|image|FF0000|polyline|lockGeocode|index|ne|div|target|removeData|content|addListener|close|goMapBase|MyOverlay|addMarker|sw|status|extend|count|tmpMarkers|create|geoMarkers|visible|typeof|createOverlay|getVisibleMarker|delay|createMarker|draggable|splice|appendTo|ControlPosition|centerLatLng|singleMarker|setTimeout|results|GeocoderStatus|getMarkers|rectangle|prototype|setOptions|none|getPosition|strokeWeight|strokeOpacity|ajax|strokeColor|text|cmarker|click|rId|geoMarker||streetViewControl|default|cId|disableDoubleClickZoom|el|scrollwheel|getMarkerCount|getTmpMarkerCount|scaleControl|mapTypeControl|removeMarker|pgId|navigationControl|undefined|openWindow|toUrlValue|OK|open|plId|path|setContent|zIndex|geometry|zoom|zIndexOrg|title|fitBounds|LatLngBounds|location|tmarker|getBounds|name|createPolygon|radius|createCircle|createRectangle|groupId|latlng|visiblesInMap|getMap|createListener|defaults|latLng|object|init|maptype|isVisible|removeListener|listener|setInfoWindow|getVisibleOverlay|html_prepend|hideByClick|DEFAULT|oneInfoWindow|html_append|isArray|dblclick|clearInfo|prefixId|visiblesInBounds|myOptions|polylines|addOverlay|polygons|MapTypeControlStyle|hideDiv|mapTypeId|inArray|NavigationControlStyle|circles|switch|rectangles|polyId|join|geocoder|createPolyline|showHideMarkerByGroup|all|getInfo|setInfo|Polyline|success|url|popup|InfoWindow|OVER_QUERY_LIMIT|Polygon|Circle|setPosition|Rectangle|setCenter|bounds_changed|addListenerOnce|ready|setOverlay|showHideOverlay|single|multi|getOverlaysCount|removeOverlay|Map|MapTypeId|Geocoder|clearOverlays|showHideMarker|gomapMarker|getContent|class|getVisible|getVisibleMarkerCount|HYBRID|directionsResult|getMarkerByGroupCount|directions|json|TOP_RIGHT|TOP_LEFT|gogroup|gopoly|gomarker|200|getVisibleMarkers|56|each|fn|draw|Marker|setMarker|onRemove|onAdd|clearMarkers|OverlayView|contains|jQuery'.split('|'),0,{}))
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function v(a){i.cssText=a}function w(a,b){return v(l.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:s(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var A in m)u(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),h=j=null,e._version=d,e._prefixes=l,e.testStyles=s,e}(this,this.document);