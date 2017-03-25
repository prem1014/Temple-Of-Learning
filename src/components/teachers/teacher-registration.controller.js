/**
 * Created by abhis_000 on 3/12/2017.
 */
'use strict';

(function () {
    angular.module('app.teacher')
        .controller('teacherRegistrationController',teacherRegistrationController);

    teacherRegistrationController.$inject = ['teacherRegService'];

    function teacherRegistrationController(teacherRegService) {
        var ctrl = this;

        ctrl.saveTeachersDetails = saveTeachersDetails;

        function saveTeachersDetails() {
            ctrl.teacherDetails.schoolName = 'K N sharama';
            teacherRegService.saveTeachersDetails(ctrl.teacherDetails)
                .then(function(res){
                    alert('Data save');
                })
        }
    }
})();
