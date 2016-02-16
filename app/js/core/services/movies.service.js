(function() {
    'use strict';

    angular
        .module('movieapp-core')
        .factory('Movies', Movies);

    Movies.$inject = ['$http'];

    function Movies($http) {
        var API_URI     = '/api/movies',
            service = {
                fetch          : fetch,
                fetchOne       : fetchOne,
                update         : update,
                create         : create,
                remove         : remove
            };

        return service;

        function fetch() {
            return $http.get(API_URI);
        }

        function fetchOne(id) {
            return $http.get(API_URI + '/' + id);
        }

        function update(movie) {
            return $http.put('/api/movies', movie);
        }

        function create(movie) {
            return  $http.post(API_URI, movie);
        }

        function remove(id) {
            return $http.delete(API_URI + '/' + id);
        }
    }
})();