/**
 * Created by prem on 2/15/2017.
 */
(function () {
    angular.module('app.schoolList',[])
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
    		})
    	}

    	function onInit(){
    		getAllSchool();
    	}
    }
})();
