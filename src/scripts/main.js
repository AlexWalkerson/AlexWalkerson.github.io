$(document).ready(function(){

	$(".disabled").click(function(event) {
		event.preventDefault();
	});
	$("a[href='']").click(function(event) {
		event.preventDefault();
	});


// Magic popup


$('.popup_img').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	fixedContentPos: false,

	zoom: {
    enabled: true,
    duration: 300, 
    easing: 'ease-in-out',
   opener: function(openerElement) {
      return openerElement.is('.popup_img') ? openerElement : openerElement.find('.popup_img');
    }
  }

});  




});