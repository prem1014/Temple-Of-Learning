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
    			ctrl.isSearching = false;
    			ctrl.gridOptions.api.setRowData(response);
    		})
    	}

    	function initGrid(rowData){
    		    var columnDefs = [
                    {headerName: "Id", field: "_id"},
                    {headerName: "Name", field: "studentName"},
                    {headerName: "Father Name", field: "fName"},
                    {headerName: "Mother Name", field: "mName"},
                    {headerName: "City", field: "personalInfo.cityName"},
                    {headerName: "District", field: "personalInfo.district.name"},
                    {headerName: "State", field: "personalInfo.state.name"},
                    {headerName: "Address", field: "personalInfo.address"}
                ];

                ctrl.gridOptions = {
                    columnDefs: columnDefs
                };
    	}
    	function onInit(){
          	initGrid();
    		getAllStudents();
    	}
    }
})();
