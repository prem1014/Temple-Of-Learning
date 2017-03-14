/**
 * Created by prem on 2/10/2017.
 */
(function () {
    'use strict';
    angular.module('app.student')
        .factory('studentRegService',studentRegService);

    studentRegService.$inject = ['$http','$q','endPointService'];

    function studentRegService($http,$q,endPointService) {
        var service = {
            saveStudentDetails:saveStudentDetails
        };

        return service;

        function saveStudentDetails(studentDetails){
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

    }
})();
