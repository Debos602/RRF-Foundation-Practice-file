(function ($) {
	"use strict";
	$(document).ready(function () {
		var homepageSlides = $(".welcome-area");

		homepageSlides.owlCarousel({
			items: 1,
			margin: 10,
			loop: true,
			dot: true,
			autoplayTimeout: 1000,
			nav: true,
			navText: [
				"<i class='fa-solid fa-arrow-left-long'></i>",
				"<i class='fa-solid fa-arrow-right-long'></i>",
			],
		});
		homepageSlides.on("translate.owl.carousel", function (event) {
			$(".welcome-area-text h4").removeClass("animated animate__rotateIn");
			$(".welcome-area-text h1").removeClass("animated animate__bounceIn");
			$(".welcome-area-text p").removeClass("animated animate__fadeIn");
		});
		homepageSlides.on("translated.owl.carousel", function (event) {
			$(".welcome-area-text h4").addClass("animated animate__rotateIn");
			$(".welcome-area-text h1").addClass("animated animate__bounceIn");
			$(".welcome-area-text p").addClass("animated animate__fadeIn");
		});
		jQuery("[data-vbg]").youtube_background();

		const videoBackgrounds = VIDEO_BACKGROUNDS;
		var homepageSlides = $(".welcome-area");
	});
})(jQuery);
