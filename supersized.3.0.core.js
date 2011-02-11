/*
Supersized - Fullscreen Slideshow jQuery Plugin
Version 3.0 - Core
By Sam Dunn (www.buildinternet.com // www.onemightyroar.com)
Version: supersized.3.0.js
Website: www.buildinternet.com/project/supersized
*/

(function($){

	//Resize image on ready or resize
	$.fn.supersized = function( options ) {
		
		var element = this;
		
		if ( options ) {
			//Pull from both defaults and supplied options
			var options = $.extend( {}, $.fn.supersized.defaults, options);
		}else{
			//Only pull from default settings
			var options = $.extend( {}, $.fn.supersized.defaults)
		}
		
		$.currentSlide = 0;
		
		//Set current image
		$("<img/>").attr("src", options.slides[$.currentSlide].image).appendTo(element);
		
		$(window).bind("load", function(){
			
			$('#loading').hide();
			element.fadeIn('fast');

			resizenow(element, options);
			
		});
				
		$(document).ready(function() {
			resizenow(element, options);
		});
		
		
		$(window).bind("resize", function(){
    		resizenow(element, options); 
		});
		
		element.hide();
	};
	
	//Adjust image size
	function resizenow(element, options) {
		
		console.log('Testing Stuff');
		console.log(element);
		console.log(options);
		
		var t = element;
	  	return t.each(function() {
	  		
			//Define image ratio
			var ratio = options.startheight/options.startwidth;
			
			//Gather browser and current image size
			var imagewidth = t.width();
			var imageheight = t.height();
			var browserwidth = $(window).width();
			var browserheight = $(window).height();
			var offset;

			//Resize image to proper ratio
			if ((browserheight/browserwidth) > ratio){
			    t.height(browserheight);
			    t.width(browserheight / ratio);
			    t.children().height(browserheight);
			    t.children().width(browserheight / ratio);
			} else {
			    t.width(browserwidth);
			    t.height(browserwidth * ratio);
			    t.children().width(browserwidth);
			    t.children().height(browserwidth * ratio);
			}
			if (options.vertical_center == 1){
				t.children().css('left', (browserwidth - t.width())/2);
				t.children().css('top', (browserheight - t.height())/2);
			}
			return false;
		});
	};
		
	$.fn.supersized.defaults = { 
			startwidth: 4,  
			startheight: 3,
			vertical_center: 1
	};
	
})(jQuery);