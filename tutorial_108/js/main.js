(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".homepage-slides").owlCarousel({
			items: 1,
			margin: 10,
			loop: true,
			autoplayTimeout: 1000,
			nav: true,
			navText: [
				"<i class='fa-solid fa-arrow-left-long'></i>",
				"<i class='fa-solid fa-arrow-right-long'></i>",
			],
		});
	});
})(jQuery);
