/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.student')
        .controller('studentListController',studentListController);

    studentListController.$inject = ['$scope','$state','studentRegService'];

    function studentListController($scope,$state,studentRegService) {
    	var ctrl = this;

    	ctrl.onRowClick = onRowClick;

    	onInit();

    	function onRowClick(rowData){
    	     $state.go('dashboard.view-edit-student',{studentId:rowData._id});
    	     console.log(rowData);
    	}
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
    		          headerName:'Gender',field:'studentGender'
    		     },
    		     {
    		          headerName:'State',field:'stateName'
    		     },
    		     {
    		          headerName:'District',field:'districtName'
    		     },
    		     {
    		          headerName:'Mobile No',field:'mobileNo'
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
