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
             .state("schoolReg",{
                 url:"/school-registration",
                 templateUrl: "/src/components/school/school-reg/school-reg.html",
                 controller:'schoolRegController',
                 controllerAs:'schoolRegCtrl',
                 authenticate: false
             })
             .state("login",{
                 url:"/log-in",
                 templateUrl: "/src/components/log-in/log-in.html",
                 controller:'loginController',
                 controllerAs:'loginCtrl',
                 authenticate: false
             })
            .state("dashboard",{
                url:"/dashboard",
                templateUrl: "/src/components/dashboard/dashboard.html",
                controller:'dashBoardController',
                controllerAs:'dashBoardCtrl',
                authenticate: false
                })
            .state("dashboard.school-reg-req",{
            url:"/pending-request",
            templateUrl: "/src/components/school/school-list/school-list.html",
            controller:'schoolListController',
            controllerAs:'schoolListCtrl',
            authenticate: false
        })
            .state("dashboard.student-reg",{
                url:"/student-reg",
                templateUrl: "/src/components/student/student-reg.html",
                controller:'studentRegController',
                controllerAs:'studentRegCtrl',
                authenticate: false
            });

         // Send to login if the URL was not found
         $urlRouterProvider.otherwise("/home");
    }
})();
