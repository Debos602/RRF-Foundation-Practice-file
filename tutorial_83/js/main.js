(function ($) {
	"use strict";

	$(document).ready(function () {
		$("#web-designprogressbar")
			.circleProgress({
				value: 0.9,
				size: 200,
				fill: "purple",
				thickness: 2,
				emptyFill: "#fff",
			})
			.on("circle-animation-progress", function (event, progress) {
				$(this)
					.find(".progressbar-percentage")
					.html(Math.round(90 * progress) + "<i>%</i>");
			});
		$("#php-designprogressbar")
			.circleProgress({
				value: 0.9,
				size: 200,
				fill: "brown",
				thickness: 2,
				emptyFill: "#fff",
			})
			.on("circle-animation-progress", function (event, progress) {
				$(this)
					.find(".progressbar-percentage")
					.html(Math.round(70 * progress) + "<i>%</i>");
			});
		$("#react-designprogressbar")
			.circleProgress({
				value: 0.9,
				size: 200,
				fill: "#177cf2",
				thickness: 2,
				emptyFill: "#fff",
			})
			.on("circle-animation-progress", function (event, progress) {
				$(this)
					.find(".progressbar-percentage")
					.html(Math.round(45 * progress) + "<i>%</i>");
			});
	});
})(jQuery);
