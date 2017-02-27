/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.schoolReg',[])
        .controller('schoolRegController',schoolRegController);

    schoolRegController.$inject=['$scope','schoolRegService'];

    function schoolRegController($scope,schoolRegService) {
        var ctrl = this;

        ctrl.onCountryChange = onCountryChange;
        ctrl.onStateChange = onStateChange;
        ctrl.saveSchoolReg = saveSchoolReg;

        onInit();

        function onCountryChange() {
            getStateByCountryId();
        }

        function onStateChange() {
            getDistrictByStateId();
        }

        function saveSchoolReg() {
            var schoolDetails = {
                schoolName:ctrl.schoolName,
                cityName:ctrl.cityName,
                stateName:getSateNameById(ctrl.selectedState).name,
                districtName:getDistrictNameById(ctrl.selectedDistrict).name,
                pinCode:ctrl.pinCode,
                mobileNo:ctrl.mobileNo,
                emailId:ctrl.emailId,
                schoolUID:ctrl.schoolUID,
                message:ctrl.message,
                countryName:getCountryNameById(ctrl.selectedCountry).name
            };
            schoolRegService.saveSchoolReg(schoolDetails)
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
            schoolRegService.getStateByCountryId(ctrl.selectedCountry)
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
            schoolRegService.getDistrictByStateId(ctrl.selectedState)
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

        function getCountryNameById(id) {
            var countryDetails = _.find(ctrl.country,function (data) {
                return data.id===id;
            });

            return countryDetails;
        }

        function getSateNameById(id) {
            var stateDetails = _.find(ctrl.state,function (data) {
                return data.id===id;
            });

            return stateDetails;
        }

        function getDistrictNameById(id) {
            var districtDetails = _.find(ctrl.district,function (data) {
                return data.id===id;
            });

            return districtDetails;
        }

        function onInit() {
            ctrl.country = [];
            getAllCountry();
        }
    }
})();
