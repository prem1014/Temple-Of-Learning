/**
 * Created by vivek on 3/8/2017.
 */

(function () {
    angular.module('app.student')
        .controller('viewEditStudentController',viewEditStudentController);


    viewEditStudentController.$inject=['$state','viewEditStudentService','studentRegService'];

    function viewEditStudentController($state,viewEditStudentService,studentRegService) {
    	var vm =this;

        onInit();

        function getStudentDetailsById(studentId){
            studentRegService.getStudentDetailsById(studentId)
                .then(function(response){
                    vm.studentDetails = response[0];
                    vm.isSearchCompleted=true;
                })
        }
        function onInit() {
           getStudentDetailsById($state.params.studentId)
        }
    }
})();

