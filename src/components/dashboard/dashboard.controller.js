/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.dashboard',[])
        .controller('dashBoardController',dashBoardController);

    dashBoardController.$inject = ['$rootScope','$scope','$state','schoolRegService','loginService'];

    function dashBoardController($rootScope,$scope,$state,schoolRegService,loginService) {
        var ctrl = this;

        ctrl.logOut = logOut;

        onInit();

        function logOut(){
            loginService.logOut();
            $rootScope.userCredentials = {};
            $state.go('login');
        }
        function getTotalSchoolCountWithPending() {
            ctrl.pendingRegReq = [];
            _.forEach(ctrl.allRegisteredSchool,function (allRegisteredSchool) {
                if(allRegisteredSchool.currentStatus==='pending'){
                    ctrl.pendingRegReq.push(
                        allRegisteredSchool
                    )
                }
            })
        }
        function onInit() {
            schoolRegService.getAllSchool()
                .then(function (response) {
                    ctrl.allRegisteredSchool = response;
                    getTotalSchoolCountWithPending();
                })
        }
    }
})();
