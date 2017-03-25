/**
 * Created by prem on 2/10/2017.
 */
(function () {
    'use strict';
    angular.module('app.student')
        .factory('viewEditStudentService',viewEditStudentService);

    viewEditStudentService.$inject = ['$http','$q','endPointService'];

    function viewEditStudentService($http,$q,endPointService) {
        var service = {
            viewStudentDetails:viewStudentDetails,
            getAllStudents:getAllStudents
        };

        return service;

        function viewStudentDetails(studentDetails){
            var deferred = $q.defer();
            $http.post(endPointService.getEndPoint('student'),studentDetails)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getAllStudents(){
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('student'))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;            
        }
    }
})();
