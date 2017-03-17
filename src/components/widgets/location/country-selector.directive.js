(function(){
	'use strict';
	angular.module('app.widgets',[])
	     .directive('countrySelector',countrySelector);

	 function countrySelector(){
	 	var directive = {
	 		restrict:'E',
	 		templateUrl:'/src/components/widgets/location/country/country-selector.html',
	 		scope:{
	 			country:'=',
	 			onCountryChange:'&'
	 		}
	 	}

	 	return directive;
	 }    
})();