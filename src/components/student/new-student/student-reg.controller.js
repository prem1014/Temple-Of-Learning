/**
 * Created by vivek on 3/8/2017.
 */

(function () {
    angular.module('app.student')
        .controller('studentRegController',studentRegController);

   
    studentRegController.$inject=['$state','studentRegService','schoolRegService'];

    function studentRegController($state,studentRegService,schoolRegService) {
    	var ctrl =this;

    	ctrl.saveStudentDetails = saveStudentDetails;
        ctrl.onCountryChange = onCountryChange;
        ctrl.onStateChange = onStateChange;
        ctrl.onDistrictChange = onDistrictChange;

        onInit();

    	function saveStudentDetails(){
            ctrl.studentDetails.schoolName = 'K N sharama'
    		studentRegService.saveStudentDetails(ctrl.studentDetails)
    		   .then(function(response){
                   alert('data saved');
                   $state.go('dashboard');
    		   })
            }


        function onCountryChange() {
            getStateByCountryId();

           ctrl.studentDetails.countryName = getFilteredDataById(ctrl.country,ctrl.studentDetails.selectedCountryId)[0].name;
        }

        function onDistrictChange(){
              ctrl.studentDetails.districtName = getFilteredDataById(ctrl.district,ctrl.studentDetails.selectedDistrictId)[0].name;
        }
        function onStateChange() {
            getDistrictByStateId();
            ctrl.studentDetails.stateName = getFilteredDataById(ctrl.state,ctrl.studentDetails.selectedStateId)[0].name;
        }

        function getFilteredDataById(dataToFiltered,id){
           var filtererdCountry= _.filter(dataToFiltered,function(data){
                return data.id===id;
            });
           return filtererdCountry;
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
            schoolRegService.getStateByCountryId(ctrl.studentDetails.selectedCountryId)
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
            schoolRegService.getDistrictByStateId(ctrl.studentDetails.selectedStateId)
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

