/**
 * Created by abhis_000 on 3/12/2017.
 */
'use strict';

(function () {
    angular.module('app.teachers')
        .factory('teacherRegService',teacherRegService);

    teacherRegService.$inject = ['$http','$q','endPointService'];

    function teacherRegService($http,$q,endPointService) {
        var service = {
            saveTeachersDetails:saveTeachersDetails
        };

        return service;

        function saveTeachersDetails() {
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
    }
})();
