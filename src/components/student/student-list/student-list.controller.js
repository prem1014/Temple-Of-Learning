/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.student')
        .controller('studentListController',studentListController);

    studentListController.$inject = ['$scope','studentRegService'];

    function studentListController($scope,studentRegService) {
    	var ctrl = this;

    	onInit();
        
    	function getAllStudents(){
    		studentRegService.getAllStudents() 
    		.then(function(response){
    			ctrl.studentList = response;
    		})
    	}

    	function onInit(){
    		getAllStudents();
    	}
    }
})();
