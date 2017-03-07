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

    	onInit();

    	function approve(event){
    		event.preventDefault();
    		
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
