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
    			initGrid(ctrl.studentList);
    		})
    	}

    	function initGrid(rowData){
    		var columnDefinition = [
    		     {
    		          headerName:'Name',field:'studentName'
    		     },
    		     {
    		          headerName:'Father Name',field:'fName'
    		     },
    		     {
    		          headerName:'Mother Name',field:'mName'
    		     },
    		     {
    		          headerName:'Date Of Birth',field:'studentDOB'
    		     },
    		     {
    		          headerName:'Name',field:'name'
    		     },
    		     {
    		          headerName:'Name',field:'name'
    		     },
    		     {
    		          headerName:'Name',field:'name'
    		     },
    		     {
    		          headerName:'Name',field:'name'
    		     },
    		]

    		ctrl.gridOptions = {
    		     columnDefinition:columnDefinition,
    		     rowData:rowData
    		}
    	}
    	function onInit(){
    		getAllStudents();
    	}
    }
})();
