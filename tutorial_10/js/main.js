(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		
		$(".client-testimonial-carousel").owlCarousel({
			items: 3,
			autoplay: false,
			margin: 30,
			loop: true,
			nav: false,
		});
		jQuery(window).load(function () {});
	});
})(jQuery);
