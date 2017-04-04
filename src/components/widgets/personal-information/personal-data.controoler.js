(function(){
    'use strict';
    angular.module('app.perosnal.infromation',[])
         .controller('personalDataController',personalDataController);

     personalDataController.$inject = ['$scope','locationService'];

     function personalDataController($scope,locationService){
        var ctrl = this;

        ctrl.onCountryChange = onCountryChange;
        ctrl.onStateChange = onStateChange;
        ctrl.onDistrictChange = onDistrictChange;

        function onCountryChange(){
            getStateByCountryId(ctrl.personalData.country.selectedCountryId);
            ctrl.personalData.country.name =
             getCountryNameById(ctrl.personalData.country.selectedCountryId,ctrl.personalData.country.allCountry);
        }

        function onStateChange(){
            getDistrictByStateId(ctrl.personalData.state.selectedStateId);
            ctrl.personalData.state.name =
             getSateNameById(ctrl.personalData.state.selectedStateId,ctrl.personalData.state.allState);
        }

        function onDistrictChange(){
            ctrl.personalData.district.name =
            getDistrictNameById(ctrl.personalData.district.selectedDistrictId,ctrl.personalData.district.allDistrict);
        }

         onInit();

         function getAllCountry(){
            locationService.getCountry()
                 .then(function(response){
                    _.forEach(response,function (data) {
                        if(data.countryName!==null){
                            ctrl.personalData.country.allCountry.push(
                                {
                                    id:data._id,
                                    name:data.countryName
                                }
                            )
                        }
                    });
                    if(ctrl.personalData.country.selectedCountryId){
                        onCountryChange();
                    }
                    if(ctrl.personalData.state.selectedStateId){
                        onStateChange();
                    }
                 })
         }

        function getStateByCountryId(id) {
            ctrl.isSearchingState = true;
            locationService.getStateByCountryId(id)
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.stateName!==null){
                            ctrl.personalData.state.allState.push(
                                {
                                    id:data._id,
                                    name:data.stateName
                                }
                            )
                        }
                        ctrl.isSearchingState = false;
                    });
                })
                .catch(function (error) {
                    console.log('error')
                    ctrl.isSearchingState = false;
                });
        }

        function getDistrictByStateId(id) {
            ctrl.isSearchingDistrict = true;
            locationService.getDistrictByStateId(id)
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.districtName!==null){
                            ctrl.personalData.district.allDistrict.push(
                                {
                                    id:data._id,
                                    name:data.districtName
                                }
                            )
                        }
                        ctrl.isSearchingDistrict = false;
                    });
                })
                .catch(function (error) {
                    console.log('error')
                    ctrl.isSearchingDistrict =false;
                });
        }

        function getCountryNameById(id,country) {
            var countryDetails = _.find(country,function (data) {
                return data.id===id;
            });

            return countryDetails.name;
        }

        function getSateNameById(id,state) {
            var stateDetails = _.find(state,function (data) {
                return data.id===id;
            });

            return stateDetails.name;
        }

        function getDistrictNameById(id,district) {
            var districtDetails = _.find(district,function (data) {
                return data.id===id;
            });

            return districtDetails.name;
        }

         function onInit(){
             if(ctrl.personalData===undefined){
                 ctrl.personalData = {
                     country:{
                         allCountry:[],
                         selectedCountryId:null
                     },
                     state:{
                         allState:[],
                         selectedStateId:null
                     },
                     district:{
                         allDistrict:[],
                         selectedDistrictId:null
                     }
                 }
             }
             else{
             ctrl.personalData.country.allCountry = [];
             ctrl.personalData.state.allState = [];
             ctrl.personalData.district.allDistrict = [];
             }
            getAllCountry();
         }
     }
})();
