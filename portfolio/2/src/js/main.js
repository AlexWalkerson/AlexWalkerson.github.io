+function ($) {
/*
Slider
*/
if( $( window ).width() < 480 ) {
	$("#slider").slideshow({
		speedAuto: 4000,
		endSlide: 6
	});
}
if( $( window ).width() >= 480 && $( window ).width() < 768 ) {
	$("#slider").slideshow({
		speedAuto: 4000,
		endSlide: 5
	});
}
if( $( window ).width() >= 768 ) {
	$("#slider").slideshow({
		speedAuto: 4000,
		endSlide: 4
	});
}

/*
Dropdown
*/
$('.dropdown').dropdown();

/*
local scroll
*/
// $('#navbar-collapse').find('a[href*="#"]:not(a[href="#"])').click(function (e) {
// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 		var target = $(this.hash);
// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 		if (target.length) {
// 			$('html,body').animate({
// 				scrollTop: (target.offset().top - 40)
// 			}, 1000);
// 			if ($('.navbar-toggle').css('display') != 'none') {
// 				$(this).parents('.navbar').find(".navbar-toggle").trigger("click");
// 			}
// 			return false;
// 		}
// 	}
// });


// $(window).scroll(function () {
// 	if ($(this).scrollTop() > 300) {
// 		$('.navbar').fadeIn(300);
// 		$('.navbar').addClass('fixed');

// 	} else {

// 		$('.navbar').removeClass('fixed');
// 	}
// });

/*
Navigation change
*/
var nav_container = $("#header-slider");
var nav = $(".navbar");

var top_spacing = 0;
var waypoint_offset = nav_container.outerHeight();

nav_container.waypoint({
	handler: function(event, direction) {

		if (direction == 'down') {		
			nav.stop().addClass("fixed").css("top",-nav.outerHeight()).animate({"top":top_spacing});

		} else {			
			nav.stop().removeClass("fixed").css("top", nav.outerHeight()+waypoint_offset).animate({"top":""}, 500);

		}

	},
	offset: function() {
		return -nav.outerHeight()-waypoint_offset+100;
	}

});

var navigation_links = $('#navbar-collapse').find('a[href*="#"]:not(a[href="#"])');

/*
LocalScroll
*/
navigation_links.click( function(event) {

	$.scrollTo(
		$(this).attr("href"),
		{
			duration: 600,
			offset: { 'left':0, 'top':-nav.outerHeight() },
			onAfter: function (e) {
				if ($('.navbar-toggle').css('display') != 'none') {
					$(".navbar-toggle").trigger("click");
				}
			}
		}
		);
});

/*
Modal
*/
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

}( jQuery );

