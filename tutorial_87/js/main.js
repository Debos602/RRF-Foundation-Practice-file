(function ($) {
	"use strict";

	$(document).ready(function () {
		var owl = $(".homepage-slides");

		owl.owlCarousel({
			items: 1,
			dots: true,
			nav: true,
			navText: [
				"<i class='fa-solid fa-angle-left'></i>",
				"<i class='fa-solid fa-angle-right'></i>",
			],
			loop: true,
			autoplay: false,
		});

		$(".custom-navigation button").on("click", function () {
			console.log("Debos");
			var slideIndex = $(this).data("slide");
			console.log(slideIndex);
			owl.trigger("to.owl.carousel", [slideIndex, 300]);
		});
	});
})(jQuery);
