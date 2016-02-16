(function() {
    'use strict';

    angular
        .module('movieapp-core')
        .filter('stars', StarsFilter);

    function StarsFilter() {
        var STARS = {
            1: '\u2605',
            2: '\u2605\u2605',
            3: '\u2605\u2605\u2605',
            4: '\u2605\u2605\u2605\u2605',
            5: '\u2605\u2605\u2605\u2605\u2605'
        };

        return function(startCount) {
            return STARS[startCount];
        };
    }
})();
