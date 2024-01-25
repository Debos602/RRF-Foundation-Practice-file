jQuery(function ($) {
	// using failsafe $ alias here, see https://api.jquery.com/jQuery/#jQuery3
	"use strict";

	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

	var $counters = $(".counter"); // see https://api.jquery.com/jQuery/#jQuery1

	/* Start counting, do this on DOM ready or with Waypoints. */
	$counters.each(function (ignore, counter) {
		// see https://api.jquery.com/each/
		counterUp(counter, {
			duration: 1000,
			delay: 16,
		});
	});
});
