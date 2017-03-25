/**
 * Created by prem on 2/10/2017.
 */
(function () {
    'use strict';
    angular.module('app.school')
        .factory('schoolRegService',schoolRegService);

    schoolRegService.$inject = ['$http','$q','endPointService'];

    function schoolRegService($http,$q,endPointService) {
        var service = {
            saveSchoolReg:saveSchoolReg,
            getAllSchool:getAllSchool,
            approveRequest:approveRequest,
            rejectRequest:rejectRequest,
            deleteReq:deleteReq
        };

        return service;

        function saveSchoolReg(schoolDetails) {
            var deferred = $q.defer();
            $http.post(endPointService.getEndPoint('teacher'),schoolDetails)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getAllSchool() {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('school'))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function approveRequest(requestData) {
            var deferred = $q.defer();

            $http.put(endPointService.getEndPoint('school'+'/'+requestData.schoolId),requestData)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error)
                });
            return deferred.promise;
        }

        function rejectRequest(requestData) {
            var deferred = $q.defer();

            $http.put(endPointService.getEndPoint('school'+'/'+requestData.schoolId),requestData)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error)
                });
            return deferred.promise;
        }

        function deleteReq(id){
            var deferred = $q.defer();

            $http.delete(endPointService.getEndPoint('school'+'/'+id))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error)
                });
            return deferred.promise;  
        }
    }

})();
