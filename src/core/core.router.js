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
                authenticate: true
                })
            .state("dashboard.school-reg-req",{
            url:"/pending-request",
            templateUrl: "/src/components/school/school-list/school-list.html",
            controller:'schoolListController',
            controllerAs:'schoolListCtrl',
            authenticate: false
        })
            .state('dashboard.teacher-registration',{
                url:'/teacher-regitration',
                templateUrl:'/src/components/teachers/teacher-reg.html',
                controller:'teacherRegistrationController',
                controllerAs:'teacherRegCtrl',
                authenticate:false
            })
            .state("dashboard.student-reg",{
                url:"/student-reg",
                templateUrl: "/src/components/student/new-student/student-reg.html",
                controller:'studentRegController',
                controllerAs:'studentRegCtrl',
                authenticate: true
            })
            .state("dashboard.view-edit-student",{
                url:"/view-edit-student/{studentId}",
                templateUrl: "/src/components/student/view-edit-student/view-edit-student.html",
                controller:'viewEditStudentController',
                controllerAs:'vm',
                authenticate: true
            })
            .state("dashboard.student-list",{
                url:"/student-list",
                templateUrl: "/src/components/student/student-list/student-list.html",
                controller:'studentListController',
                controllerAs:'vm',
                authenticate: true
            });

         // Send to login if the URL was not found
         $urlRouterProvider.otherwise("/home");
    }
})();
