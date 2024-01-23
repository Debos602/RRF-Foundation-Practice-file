(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".portfolio-list").masonry();

		$(".single-portfolio-item").hover(
			function () {
				$(this)
					.find(".portfolio-hover h2")
					.addClass("animate__animated animate__flipInX");
			},
			function () {
				$(this)
					.find(".portfolio-hover h2")
					.removeClass("animate__animated animate__flipInX");
			}
		);
		$(".menu-trigger").on("click", function () {
			$(".offcanvs-menu").addClass("active");
			$(".offcanvas-overlay").addClass("active");
		});
		$(".menu-close,.offcanvas-overlay").on("click", function () {
			$(".offcanvs-menu").removeClass("active");
			$(".offcanvas-overlay").removeClass("active");
		});
	});
})(jQuery);
