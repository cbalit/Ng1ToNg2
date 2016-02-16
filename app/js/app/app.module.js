(function () {
    'use strict';

    angular
        .module('movieapp', [
            'movieapp-core',
            'movieapp-home',
            'movieapp-movies',
            'movieapp-editMovie',
            'ngRoute'
        ])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/home/home.html',
                controller: 'HomeController',
                controllerAs : 'HomeCtrl'
            })
            .when('/movies', {
                templateUrl: 'js/movies/movies.html',
                controller: 'MoviesController',
                controllerAs : 'MoviesCtrl'
            })
            .when('/movies/edit/:id', {
                templateUrl: 'js/editMovie/edit.html',
                controller: 'EditMovieController',
                controllerAs : 'EditCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
})();
