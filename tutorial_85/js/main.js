(function ($) {
	"use strict";

	$(document).ready(function () {
		$(".testimonial-carousel").owlCarousel({
			items: 1,
			dots: true,
			nav: true,
			navText: [
				"<i class='fa-solid fa-angle-left'></i><i class='fa-solid fa-angle-right'></i>",
			],
			loop: true,
			autoplay: false,
		});
	});
})(jQuery);
