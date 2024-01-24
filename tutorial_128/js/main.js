(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".video-play-btn").modalVideo();
		$(".video-play-btn").on("click", function () {
			return false;
		});
	});
})(jQuery);
