/**
 * Created by abhis_000 on 3/25/2017.
 */
(function () {
    'use strict';

    var core = angular.module('app.finance');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
            .state("dashboard.teacher-list",{
                url:"/teacher-list",
                templateUrl: "/src/components/teachers/teacher-list/teacher-list.html",
                controller:'teacherListController',
                controllerAs:'vm',
                authenticate: true
            });
        $urlRouterProvider.otherwise("/dashboard");
    }
})();
