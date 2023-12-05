(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		console.log("data");
		$(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: false,
			nav: false,
			dots: true,
		});
	});
	jQuery(window).load(function () {});
})(jQuery);
