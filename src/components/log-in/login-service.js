/**
 * Created by prem on 2/7/2017.
 */
(function () {
    'use strict';
    angular.module('app.login',[])
        .factory('loginService',loginService);

    loginService.$inject = ['$http','$q','endPointService'];

    function loginService($http,$q,endPointService) {
        var service={
            validateUser:validateUser
        };

        return service;

        function validateUser(id) {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('login'+'/'+id))
                .success(function (res) {
                    deferred.resolve(res);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
        }
    }
})();
