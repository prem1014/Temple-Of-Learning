/**
 * Created by abhis_000 on 3/12/2017.
 */
'use strict';

(function () {
    angular.module('app.teacher')
        .factory('teacherRegService',teacherRegService);

    teacherRegService.$inject = ['$http','$q','endPointService'];

    function teacherRegService($http,$q,endPointService) {
        var service = {
            saveTeachersDetails:saveTeachersDetails,
            getAllTeachers:getAllTeachers
        };

        return service;

        function saveTeachersDetails(teacherDetails) {
            var deferred = $q.defer();
            $http.post(endPointService.getEndPoint('teacher'),teacherDetails)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getAllTeachers() {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('teacher'))
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
