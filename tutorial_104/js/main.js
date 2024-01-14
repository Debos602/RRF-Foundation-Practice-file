(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".product-carousel").owlCarousel({
			items: 3,
			margin: 10,
			loop: true,
			autoplayTimeout: 1000,
			nav: true,
			navText: [
				"<i class='fa-solid fa-angle-left'></i>",
				"<i class='fa-solid fa-angle-right'></i>",
			],
		});
	});
})(jQuery);
