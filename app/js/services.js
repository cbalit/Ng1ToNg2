"use strict";

angularMovieApp.factory("Movie", function ($http) {
    var API_URI = '/api/movies';

    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(movie) {
            return  $http.post(API_URI, movie);
        },

        remove  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(movie) {
             return $http.put('/api/movies', movie);
        }

    };

});
