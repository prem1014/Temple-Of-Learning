/**
 * Created by prem on 2/10/2017.
 */
(function () {
    'use strict';
    angular.module('app.schoolReg')
        .factory('schoolRegService',schoolRegService);

    schoolRegService.$inject = ['$http','$q','endPointService'];

    function schoolRegService($http,$q,endPointService) {
        var service = {
            getCountry:getCountry,
            getStateByCountryId:getStateByCountryId,
            getDistrictByStateId:getDistrictByStateId,
            saveSchoolReg:saveSchoolReg,
            getAllSchool:getAllSchool
        };

        return service;

        function getCountry() {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('country'))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                   deferred.reject(error);
                });
            return deferred.promise;
        }

        function  getStateByCountryId(countryId) {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('state'+'/'+countryId))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getDistrictByStateId(stateId) {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('district'+'/'+stateId))
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function saveSchoolReg(schoolDetails) {
            var deferred = $q.defer();
            $http.post(endPointService.getEndPoint('school'),schoolDetails)
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
    }
})();
