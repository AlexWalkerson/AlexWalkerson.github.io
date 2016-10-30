(function( $ ) {
	$.fn.slideshow = function( options ) {
		options = $.extend({
			wrapper: ".slid-wrapper",
			slides: ".slide",

			previous: ".arrow.prev",
			next: ".arrow.next",
			

			speedAuto:1000,
			speed: 500,
			easing: "linear",
			endSlide: 4,
		}, options);

		$.fn.slideshow.index = 0;

		var timer = null; 
		var total = null;				
		
		var slideTo = function( slide, element ) {
			var $currentSlide = $( options.slides, element ).eq( slide );
			
			$( options.wrapper, element ).
			animate({
				left: - $currentSlide.position().left
			}, options.speed, options.easing );	
			
		};



		var autoSlide = function( element, next, prev ) {
			// Инициализируем последовательность
			timer = setInterval(function() {				
				$.fn.slideshow.index++; // Увеличим курсор на 1
				if( $.fn.slideshow.index == $.fn.slideshow.total) {
					$.fn.slideshow.index = 0; // Обнулим курсор
					prev.addClass('disabled');
				}else{
					prev.removeClass('disabled');
				}
				if( $.fn.slideshow.index == $.fn.slideshow.total-1) {
					next.addClass('disabled');
				}else{
					next.removeClass('disabled');
				}

				slideTo( $.fn.slideshow.index, element );
			}, options.speedAuto);
		};
		
		var startStop = function( element, next, prev  ) {
			element.hover(function() { // Останавливаем анимацию
				clearInterval( timer );
				timer = null;	
			}, function() {
				autoSlide( element, next, prev); // Возобновляем анимацию	
			});
		};

		return this.each(function() {
			var $element = $( this ),
			$previous = $( options.previous, $element ),
			$next = $( options.next, $element );

			if(options.endSlide) {
				$.fn.slideshow.total = options.endSlide;
			}else{
				$.fn.slideshow.total = $( options.slides, $element ).length;
			}
			
			$previous.addClass('disabled');
			autoSlide( $element , $next,  $previous);
			startStop( $element , $next,  $previous);
			
			$next.on( "click", function() {				
				$.fn.slideshow.index++;
				$previous.removeClass('disabled');
				if( $.fn.slideshow.index == $.fn.slideshow.total - 1) {
					$.fn.slideshow.index = $.fn.slideshow.total - 1;
					$next.addClass('disabled');
				}
				slideTo( $.fn.slideshow.index, $element );	
			});

			$previous.on( "click", function() {				
				$.fn.slideshow.index--;
				$next.removeClass('disabled');
				if( $.fn.slideshow.index == 0 ) {
					$.fn.slideshow.index = 0;
					$previous.addClass('disabled');
				}
				slideTo( $.fn.slideshow.index, $element );	
			});

		});
	};
})( jQuery );

