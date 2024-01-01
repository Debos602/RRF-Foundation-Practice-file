(function ($) {
	"use strict";

	$(document).ready(function () {
		// $(".portfolio-list").masonry();
		$(".featured-projects").owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			loop: true,
		});
	});
})(jQuery);
