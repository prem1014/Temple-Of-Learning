/**
 * Created by vivek on 3/8/2017.
 */

(function () {
    angular.module('app.student')
        .controller('studentRegController',studentRegController);


    studentRegController.$inject=['$state','studentRegService','schoolRegService'];

    function studentRegController($state,studentRegService,schoolRegService) {
    	var ctrl =this;

    	ctrl.saveStudentDetails = saveStudentDetails;

        onInit();

    	function saveStudentDetails(){
            ctrl.studentDetails.schoolName = 'K N sharama';
    		studentRegService.saveStudentDetails(ctrl.studentDetails)
    		   .then(function(response){
                   alert('data saved');
                   $state.go('dashboard');
    		   })
            }

        function getFilteredDataById(dataToFiltered,id){
           var filtererdCountry= _.filter(dataToFiltered,function(data){
                return data.id===id;
            });
           return filtererdCountry;
        }

        function onInit() {
        }
    }
})();

