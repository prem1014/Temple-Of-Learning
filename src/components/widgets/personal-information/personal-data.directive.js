(function(){
	'use strict';
	angular.module('app.perosnal.infromation')
	     .directive('personalInformation',personalInformation);

	 function personalInformation(){
	 	var directive = {
	 		restrict:'E',
	 		templateUrl:'/src/components/widgets/personal-information/personal-data.html',
	 		controller:'personalDataController',
	 		controllerAs:'vm',
	 		bindToController:true,
	 		scope:{
	 			personalData:'='
	 		}
	 	}

	 	return directive;
	 }    
})();