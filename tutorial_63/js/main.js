(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".project-filter li").on("click", function () {
			$(".project-filter li").removeClass("active");
			$(this).addClass("active");
			const selector = $(this).attr("data-filter");
			$(".project-list").isotope({
				filter: selector,
				stagger: 30,
			});
		});
		$(".project-list").isotope();
	});

	jQuery(window).load(function () {});
})(jQuery);
