/**
 * Created by prem on 2/7/2017.
 */
(function () {
    'use strict';

    angular.module('app.common',[])
        .factory('endPointService',endPointService);

    function endPointService() {
        var service={
            getEndPoint:getEndPoint
        };

        return service;

        function getEndPoint(module) {

            return 'http://localhost:8080/api/'+module;
        }
    }
})();
