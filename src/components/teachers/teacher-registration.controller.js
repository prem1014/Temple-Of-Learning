/**
 * Created by abhis_000 on 3/12/2017.
 */
'use strict';

(function () {
    angular.module('app.teachers',[])
        .controller('teacherRegistrationController',teacherRegistrationController);

    teacherRegistrationController.$inject = [];

    function teacherRegistrationController() {
        var ctrl = this;

        ctrl.saveTeachersDetails = saveTeachersDetails;

        function saveTeachersDetails() {
            console.log(ctrl.teacherDetails)
            ctrl.teacherDetails.name = 'Hello '+ctrl.teacherDetails.name
        }
    }
})();
