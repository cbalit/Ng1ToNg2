(function() {
    'use strict';

    angular
        .module('movieapp-movies')
        .controller('MoviesController', MoviesController);

    MoviesController.$inject = ['Movies'];

    function MoviesController(Movies) {
        var vm = this;
        // display mode by default
        vm.tableView = false;
        // icon by mode by default
        vm.tableViewIcon = 'icon-th-list icon-white';

        // function called when changing view mode
        vm.toogleView = function() {
            vm.tableView = !vm.tableView;

            if(vm.tableView === false){
                vm.tableViewIcon = 'icon-th-list icon-white';
            } else {
                vm.tableViewIcon = 'icon-th icon-white';
            }
        };

        Movies.fetch().success(function(resp){
            vm.movies = resp;
        });


        vm.deleteMovie = function(index){
            Movies.remove(vm.movies[index].id)
                .success(function(resp){
                        vm.movies.splice(index, 1);
                    }
                );
        };
    }
})();