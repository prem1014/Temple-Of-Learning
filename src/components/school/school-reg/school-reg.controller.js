/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.school')
        .controller('schoolRegController',schoolRegController);

    schoolRegController.$inject=['$scope','$state','schoolRegService','locationService'];

    function schoolRegController($scope,$state,schoolRegService,locationService) {
        var ctrl = this;

        ctrl.saveSchoolReg = saveSchoolReg;

        onInit();

        function saveSchoolReg() {
            ctrl.schoolDetails.cityName = ctrl.personalInfo.cityName;
            ctrl.schoolDetails.stateName = ctrl.personalInfo.state.name;
            ctrl.schoolDetails.districtName = ctrl.personalInfo.district.name;
            ctrl.schoolDetails.countryName = ctrl.personalInfo.country.name;
            ctrl.schoolDetails.mobileNo = ctrl.personalInfo.mobileNo;
            ctrl.schoolDetails.emailId = ctrl.personalInfo.emailId;
            ctrl.schoolDetails.countryId = ctrl.personalInfo.country.selectedCountryId;
            ctrl.schoolDetails.stateId = ctrl.personalInfo.state.selectedStateId;
            ctrl.schoolDetails.districtId = ctrl.personalInfo.district.selectedDistrictId;
            schoolRegService.saveSchoolReg(ctrl.schoolDetails)
                .then(function (res) {
                    if(res.message==='data saved'){
                        alert('data saved');
                    }
                    else {
                        alert('errors')
                    }
                })
                .catch(function (error) {
                    alert('errors')
                })
        }

        function onInit() {
        }
    }
})();
