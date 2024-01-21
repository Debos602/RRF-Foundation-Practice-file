(function ($) {
	"use strict";
	$(document).ready(function () {
		$("#myTable").DataTable();
		$(".portfolio-items").owlCarousel({
			items: 5,
			loop: true,
			nav: true,
			dots: true,
		});
	});
})(jQuery);
