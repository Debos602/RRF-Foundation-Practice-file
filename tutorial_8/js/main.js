(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".video-play-btn").magnificPopup({
			type: "video",
		});
		$(".staff-list").owlCarousel({
			items: 4,
			autoplay: false,
			margin: 30,
			loop: true,
			nav: true,
			navText: [
				"<i class='fa fa-long-arrow-alt-left'></i>",
				"<i class='fa fa-long-arrow-alt-right'></i>",
			],
		});
		jQuery(window).load(function () {});
	});
})(jQuery);
