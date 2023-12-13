(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		// console.log("data");
		$(".listing-carousel").owlCarousel({
			items: 3,
			loop: true,
			autoplay: false,
			nav: true,
			navText: [
				'<i class="fas fa-angle-left"></i>',
				'<i class="fas fa-angle-right"></i>',
			],
			margin: 30,
			dots: true,
		});
	});
	jQuery(window).load(function () {});
})(jQuery);
