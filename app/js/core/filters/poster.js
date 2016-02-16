(function() {
    'use strict';

    angular
        .module('movieapp-core')
        .filter('poster', PosterFilter);

    function PosterFilter() {
        return function(posterUrl) {
            if(!posterUrl){
                return "img/no-poster.jpg";
            } else {
                return posterUrl;
            }
        };
    }
})();