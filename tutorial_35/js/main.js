(function ($) {
    "use strict";

    $(document).ready(function () {
        // Initialize skrollr with the target element (e.g., 'body')
        var s = skrollr.init({
            forceHeight: false, // Set to true if you want to force the height of the document
            render: function (data) {
                // Code to be executed during rendering
            }
        });
    });

})(jQuery);
