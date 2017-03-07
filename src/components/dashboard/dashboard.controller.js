/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.dashboard',[])
        .controller('dashBoardController',dashBoardController);

    dashBoardController.$inject = ['$scope','schoolRegService'];

    function dashBoardController($scope,schoolRegService) {
        var ctrl = this;

        onInit();

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
