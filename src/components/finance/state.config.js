(function () {
    'use strict';

    var core = angular.module('app.finance');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
               .state("dashboard.finance-section",{
                     url:"/finance-section",
                     templateUrl: "/src/components/finance/finance-section.html",
                     controller:'financeSectionController',
                     controllerAs:'vm',
                     authenticate: true
                });
         $urlRouterProvider.otherwise("/dashboard");
    }
})();
