/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.login',[])
        .controller('loginController',loginController);

    loginController.$inject=['$scope','$http'];

    function loginController($scope,$http) {
        $scope.getUserDetails=function () {
            $http.get('http://localhost:8080/api/login')
                .success(function (res) {
                    console.log(res);
                })
        }
    }
})();
