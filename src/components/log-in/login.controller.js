/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.login')
        .controller('loginController',loginController);

    loginController.$inject=['loginService'];

    function loginController(loginService) {
        var ctrl=this;

        ctrl.validateUser=validateUser;
        ctrl.signUp = signUp;
        ctrl.getSchoolDetailsById = getSchoolDetailsById;

        function validateUser() {
            loginService.validateUser(ctrl.userId)
                .then(function () {

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
    }
})();
