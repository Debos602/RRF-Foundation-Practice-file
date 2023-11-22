(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		$(".projects-titles li").on("click", function () {
			// Remove the "active" class from all li elements
			$(".projects-titles li").removeClass("active");

			// Add the "active" class to the clicked li element
			$(this).addClass("active");

			var selector = $(this).attr("data-filter");
			$(".projects-list").isotope({
				filter: selector,
			});
		});
	});

	jQuery(window).load(function () {
		jQuery(".projects-list").isotope();
	});
})(jQuery);
