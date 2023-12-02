(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		$(".homepages-slides").owlCarousel({
			items: 1,
			dots: true,
			nav: true,
			autoplay: false,
			navText: [
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>",
			],
			loop: true,
			// animateIns: "fadeIn",
			animateOut: "fadeOut",
		});
	});
	jQuery(window).load(function () {});
})(jQuery);
