(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".portfolio-list").masonry({
			horizontalOrder: true,
		});
		$(".portfolio-filter li").on("click", function () {
			$(".portfolio-filter li").removeClass("active");
			$(this).addClass("active");
			var filterData = $(this).attr("data-filter");
			$(".portfolio-list").isotope({
				filter: filterData,
				itemSelector: ".single-portfolio-item",
				percentPosition: true,
				masonry: {
					// use element for option
					columnWidth: ".single-portfolio-item",
					horizontalOrder: true,
				},
			});
		});
	});
})(jQuery);
