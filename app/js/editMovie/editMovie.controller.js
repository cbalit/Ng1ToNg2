(function() {
    'use strict';

    angular
        .module('movieapp-editMovie')
        .controller('EditMovieController', EditMovieController);

    EditMovieController.$inject = ['Movies','$location','$routeParams'];

    function EditMovieController(Movies,$location,$routeParams) {
        var vm = this;

        var movieId = $routeParams.id;

        Movies.fetchOne(movieId).success(function(movie){
            vm.movie = movie;
        });

        vm.updateMovie = function(movie){
            Movies.update(movie)
                .success(function(){
                    $location.path('/movies');
                })
                .error(function(resp){
                    console.log(resp);
                });
        };
    }
})();
