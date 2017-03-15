/**
 * Created by prem on 2/7/2017.
 */
(function () {
    'use strict';
    angular.module('app.login',[])
        .factory('loginService',loginService);

    loginService.$inject = ['$http','$q','$cookieStore','endPointService'];

    function loginService($http,$q,$cookieStore,endPointService) {
        var service={
            validateUser:validateUser,
            getSchoolDetailsById:getSchoolDetailsById,
            saveSchoolSignUpDetails:saveSchoolSignUpDetails,
            setUserCredentials:setUserCredentials,
            logOut:logOut
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
            return deferred.promise;
        }

        function getSchoolDetailsById(id) {
            var deferred = $q.defer();
            $http.get(endPointService.getEndPoint('school'+'/'+id))
                .success(function (res) {
                    console.log(res);
                    deferred.resolve(res);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function saveSchoolSignUpDetails(signUpDetails) {
            var deferred = $q.defer();
            $http.post(endPointService.getEndPoint('login'),signUpDetails)
                .success(function (res) {
                    console.log(res);
                    deferred.resolve(res);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function setUserCredentials(userName){
            var userCredentials ={
                userName:userName
            }
            $cookieStore.put('userCredentials', userCredentials);
        }

        function logOut(){
            $cookieStore.remove('userCredentials');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }
    }
})();
