/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.school')
        .controller('schoolListController',schoolListController);

    schoolListController.$inject = ['$scope','schoolRegService'];

    function schoolListController($scope,schoolRegService) {
    	var ctrl = this;

    	ctrl.approve = approve;
    	ctrl.reject = reject;
        ctrl.deleteReq = deleteReq;

    	onInit();

    	function approve(event,index){
    		event.preventDefault();
    		var requestData = {
    		    schoolId:ctrl.schoolList[index]._id,
                currentStatus:'Approved'
            };
            schoolRegService.approveRequest(requestData)
                .then(function (response) {
                    if(response.message === 'success'){
                        alert('request approved');
                        getAllSchool();
                    }
                })
    	}

        function reject(event,index){
            event.preventDefault();
            var requestData = {
                schoolId:ctrl.schoolList[index]._id,
                currentStatus:'Rejected'
            };
            schoolRegService.rejectRequest(requestData)
                .then(function (response) {
                    if(response.message === 'success'){
                        alert('request rejected');
                        getAllSchool();
                    }
                })
        }

        function deleteReq(event,index){
            event.preventDefault();
            schoolRegService.deleteReq(ctrl.schoolList[index]._id)
                 .then(function(response){
                    if(response.message === 'success'){
                        alert('Data deleted');
                        getAllSchool();
                    }
                 });
        }

    	function getAllSchool(){
    		schoolRegService.getAllSchool()
    		.then(function(response){
    			ctrl.schoolList = response;
    			ctrl.isSearching = false;
    			ctrl.gridOptions.api.setRowData(response);
    		})
    	}
 $scope.deleteRecord = function(params,rowIndex){
     //delete from map using index
     // map.splice(1,rowIndex);
     alert('delete')
 }
    	function onInit(){
    		getAllSchool();
    		    var columnDefs = [
                    {headerName: "School Id", field: "_id"},
                    {headerName: "School Name", field: "schoolName"},
                    {headerName: "City", field: "cityName"},
                    {headerName: "State", field: "stateName"},
                    {headerName: "Status", field: "currentStatus"}
                ];

                ctrl.gridOptions = {
                    columnDefs: columnDefs
                };

                function rejectRequest(params){
                    var html =
                    '<button title="Remove" ng-click="alert(' + params+ ')">Reject</button>';
                    return html;
                }
    	}
    }
})();
