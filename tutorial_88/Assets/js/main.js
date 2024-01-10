jQuery(document).ready(function ($) {
	$(".slider-area").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
	});
	$(".logo-carousel").owlCarousel({
		items: 5,
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
	});
});
