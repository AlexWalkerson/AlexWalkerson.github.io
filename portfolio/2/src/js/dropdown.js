(function( $ ) {
	$.fn.dropdown = function( options ) {
		options = $.extend({
			wrapper: '.wrapper',
			dropdownToggle: '.dropdown-toggle',
			dropdownMenu: '.dropdown-menu',
		}, options);


		var toggleClass = function(element){
			$(options.wrapper).on("click", function (event) {
				var toggle = $(options.dropdownToggle, element);

				if( !($( event.target ).parents('.dropdown').length) ){
					if(toggle.hasClass('open'))
						toggle.removeClass('open');
				}
				if( $( event.target ).get(0) == $( options.dropdownToggle, element ).get(0) ){
					toggle.toggleClass('open');
				}

			});

		}

		return this.each(function() {
			var $element = $( this ),
			$dropdownToggle = $( options.dropdownToggle, $element ),
			$dropdownMenu = $( options.dropdownMenu, $element );
			toggleClass($element);	
		});
	};	

})( jQuery ); 

