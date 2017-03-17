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

    	onInit();

    	function approve(event,index){
    		event.preventDefault();
    		var requestData = {
    		    schoolId:ctrl.schoolList[index]._id,
                status:'Approved'
            };
            schoolRegService.approveRequest(requestData)
                .then(function (response) {
                    if(response.data === 'success'){
                        alert('request approved');
                    }
                })
    	}

        function reject(event,index){
            event.preventDefault();
            var requestData = {
                schoolId:ctrl.schoolList[index]._id,
                status:'Approved'
            };
            schoolRegService.rejectRequest(requestData)
                .then(function (response) {
                    if(response.data === 'success'){
                        alert('request rejected');
                    }
                })
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