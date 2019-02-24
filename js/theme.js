(function ($) {
    "use strict";

    // Görgetés a jQuery segítségével
    // jQuery az oldal görgetéshez - a jQuery Easing plugin szükséges hozzá

    $(function () {
        $('a.scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                //
            });
        });