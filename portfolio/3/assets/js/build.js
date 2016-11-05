(function() {
	
	function Slideshow( element, slides , interval ) {
		this.el = document.querySelector( element );
		this.interval = interval;
		this.slides = slides;
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.slides = this.el.querySelectorAll( this.slides );
			this.index = 0; // Курсор
			this.timer = null;  // Таймер  
			
			this.action();
			this.stopStart();	
		},

		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.click();
		},

		action: function() {
			var self = this;
			// Initializes the sequence
			self.timer = setInterval(function() {
				self.index++; // Увеличим курсор на 1
				if( self.index == self.slides.length ) {
					self.index = 0; // Обнулим курсор
				}
				self._slideTo( self.index );
				
			}, this.interval); // Тот же интервал, что и у перехода CSS 
		},
		stopStart: function() {
			var self = this;
			// Останавливаем анимацию
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			// Возобновляем анимацию
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};



	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#slider", ".slider-change", 4000);
		var slider2 = new Slideshow( "#iphone", ".dot", 4000);
		
	});
})();