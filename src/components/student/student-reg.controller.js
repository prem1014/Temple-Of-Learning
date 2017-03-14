/**
 * Created by vivek on 3/8/2017.
 */

(function () {
    angular.module('app.student',[])
        .controller('studentRegController',studentRegController);

   
    studentRegController.$inject=['studentRegService','schoolRegService'];

    function studentRegController(studentRegService,schoolRegService) {
    	var ctrl =this;

    	ctrl.saveStudentDetails = saveStudentDetails;
        ctrl.onCountryChange = onCountryChange;
        ctrl.onStateChange = onStateChange;

        onInit();

    	function saveStudentDetails(){
    		studentRegService.saveStudentDetails(ctrl.studentDetails)
    		   .then(function(response){

    		   })}
               function getAllCountry() {
            ctrl.isSearchingCountry = true;
            schoolRegService.getCountry()
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.countryName!==null){
                            ctrl.country.push(
                                {
                                    id:data._id,
                                    name:data.countryName
                                }
                            )
                        }
                        ctrl.isSearchingCountry = false;
                    });
                })
                .catch(function (error) {
                    console.log('error')
                    ctrl.isSearchingCountry = false;
                });
        
    	}

        function onCountryChange() {
            getStateByCountryId();
        }

        function onStateChange() {
            getDistrictByStateId();
        }

        function getAllCountry() {
            ctrl.isSearchingCountry = true;
            schoolRegService.getCountry()
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.countryName!==null){
                            ctrl.country.push(
                                {
                                    id:data._id,
                                    name:data.countryName
                                }
                            )
                        }
                        ctrl.isSearchingCountry = false;
                    });
                })
                .catch(function (error) {
                    console.log('error')
                    ctrl.isSearchingCountry = false;
                });
        }

        function getStateByCountryId() {
            ctrl.state = [];
            ctrl.isSearchingState = true;
            schoolRegService.getStateByCountryId(ctrl.studentDetails.selectedCountry)
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.stateName!==null){
                            ctrl.state.push(
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

        function getDistrictByStateId() {
            ctrl.district = [];
            ctrl.isSearchingDistrict = true;
            schoolRegService.getDistrictByStateId(ctrl.studentDetails.selectedState)
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data.districtName!==null){
                            ctrl.district.push(
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

        function onInit() {
            ctrl.country = [];
            getAllCountry();
        }
    }
})();

