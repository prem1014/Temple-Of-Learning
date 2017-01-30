(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
             .state("home", {
                 url: "/home",
                 templateUrl: "/src/components/home/home.html",
                 authenticate: false
             })
             .state("aboutMe",{
                url:"/about-me",
                templateUrl: "/src/components/about-me/aboutMe.html",
                authenticate: false
             })           
         // Send to login if the URL was not found
         $urlRouterProvider.otherwise("/home");
    }
})();
