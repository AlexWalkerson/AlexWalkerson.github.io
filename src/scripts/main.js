/*
*
*  Main
*
*
*/
"use strict";


jQuery(document).ready(function ($) {

	$('body').on('click', '.disabled, a[href="#"], a[href=""]', function (event) {
		event.preventDefault();
	});


	// Magic popup
	$('.popup_img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		fixedContentPos: true,

		zoom: {
			enabled: true,
			duration: 300, 
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('.popup_img') ? openerElement : openerElement.find('.popup_img');
			}
		}

	});  

	//Isotop
	$(function () {
	  // init Isotope
	  var $grid = $('.portfolio-child').isotope({
	  	itemSelector: '.portfolio-item',
	  	layoutMode: 'fitRows'
	  });
	  // filter functions
	  var filterFns = {};
	  
	  // bind filter button click
	  $('.portfolio-menu').on('click', 'button', function () {
	  	var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({filter: filterValue});

      //add class .is-checked to current button
      $('.portfolio-menu-item').removeClass('is-checked');
      $(this).addClass('is-checked');
    });

	});




}); //End