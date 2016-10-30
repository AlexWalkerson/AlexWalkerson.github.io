(function( $ ) {

	$('#reception').on('click', function(e){
		e.preventDefault();
		$('#reception_p').bPopup();
	});
	$('#ask').on('click', function(e){
		e.preventDefault();
		$('#ask_p').bPopup();
	});



	$officers = $( 'a', '#officer' );
	$officers.on('click', function(e){
		e.preventDefault();
		var $a = $(this),
				$modal =  $a.attr('href').replace('/', '-');
		$('#'+$modal).bPopup();
	});

})( jQuery );

