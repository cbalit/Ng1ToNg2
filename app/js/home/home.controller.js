(function() {
    'use strict';

    angular
        .module('movieapp-home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.user = 'Thierry LAU';
    }
})();
