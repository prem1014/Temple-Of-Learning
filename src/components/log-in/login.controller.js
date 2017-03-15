/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.login')
        .controller('loginController',loginController);

    loginController.$inject=['$state','$rootScope','$cookieStore','loginService'];

    function loginController($state,$rootScope,$cookieStore,loginService) {
        var ctrl=this;

        ctrl.validateUser=validateUser;
        ctrl.signUp = signUp;
        ctrl.getSchoolDetailsById = getSchoolDetailsById;

        function validateUser() {
            loginService.validateUser(ctrl.userId)
                .then(function (response) {
                    console.log(response);
                    if(response[0].password === ctrl.password){
                        loginService.setUserCredentials(response[0].userName);
                        $rootScope.userCredentials = $cookieStore.get('userCredentials') || {};
                        $state.go('dashboard')
                    }
                })
                .catch(function (error) {

                })
        }

        function signUp() {
            var signUpDetails = {
                schoolId:ctrl.schoolid,
                password:ctrl.signUpPassword
            }
        }

        function getSchoolDetailsById() {
            loginService.getSchoolDetailsById(ctrl.schoolDetails._id)
                .then(function (response) {
                  ctrl.schoolDetails = response[0];
                })
                .catch(function (error) {

                })
        }

        function signUp() {
            loginService.saveSchoolSignUpDetails(ctrl.schoolDetails)
                .then(function (response) {
                    if(response.message==='success'){
                        alert('You have registered')
                    }
                })
        }
    }
})();
