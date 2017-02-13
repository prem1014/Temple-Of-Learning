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
            getCountry:getCountry
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
    }
})();
