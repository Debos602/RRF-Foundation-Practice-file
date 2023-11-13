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
		jQuery(window).load(function () {
			$(".product-list").masonry();
			$(".homepage-slides").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				dots: false,
				nav: true,
				navText: [
					"<i class='fas fa-arrow-left'></i>",
					"<i class='fas fa-arrow-right'></i>",
				],
			});
			$(".product-promotion").owlCarousel({
				items: 1,
				loop: true,
				autoplay: false,
				dots: true,
				nav: false,
			});
			$(".menu-trigger").on("click", function () {
				console.log("text");
				$(".off-canvas-menu, .of-canvas-overlay").addClass("active");
				return false;
			});
			$(".menu-close, .of-canvas-overlay").on("click", function () {
				$(".off-canvas-menu, .of-canvas-overlay, .search-input").removeClass("active");
				return false;
			});
			$(".search-trigger").on("click", function () {
				$(".search-input, .of-canvas-overlay ").addClass("active");
				return false;
			});
			$(".btn-close").on("click", function () {
				$(".search-input, .of-canvas-overlay").removeClass("active");
				return false;
			});
		});
	});
})(jQuery);
