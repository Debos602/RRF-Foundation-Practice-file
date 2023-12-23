(function () {
	"use strict";

	$(document).on("ready", function () {
		var footerHeight = $(".footer-area").height();
		$(".site-wrap").css("margin-bottom", footerHeight + 'px');
	});
})(jQuery);
