/**
 * Created by vivek on 3/8/2017.
 */

(function () {
    angular.module('app.student')
        .controller('viewEditStudentController',viewEditStudentController);

   
    viewEditStudentController.$inject=['$state','viewEditStudentService','schoolRegService'];

    function viewEditStudentController($state,viewEditStudentService,schoolRegService) {
    	var ctrl =this;

    	
        ctrl.onCountryChange = onCountryChange;
        ctrl.onStateChange = onStateChange;
        ctrl.onDistrictChange = onDistrictChange;
        ctrl.getAllStudents=getAllStudents;

        onInit();

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
         function getAllStudents() {
            ctrl.isSearchingCountry = true;
            viewEditStudentService.getAllStudents() 
                .then(function (response) {
                    _.forEach(response,function (data) {
                        if(data!==null){
                            ctrl.studentDetails=data;
                        }
                        ctrl.isSearchingCountry = false;
                    });
                })
                .catch(function (error) {
                    console.log('error')
                    ctrl.isSearchingCountry = false;
                });
        }

        function onInit() {
            ctrl.country = [];
            getAllCountry();
            getAllStudents(); 
        }
    }
})();

