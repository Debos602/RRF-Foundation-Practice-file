(function () {
	"use strict";

	$(document).on("ready", function () {
		var footerHeight = $(".footer-area").height();
		$(".site-wrap").css("margin-bottom", footerHeight + "px");
		$(".counter-number span").counterUp({
			delay: 10,
			time: 1000,
		});
	});
})(jQuery);
