/**
 * Created by prem on 2/4/2017.
 */
(function () {
    angular.module('app.schoolReg',[])
        .controller('schoolRegController',schoolRegController);

    schoolRegController.$inject=['schoolRegService'];

    function schoolRegController(schoolRegService) {
        var ctrl = this;

        onInit();

        function onInit() {
            ctrl.country = [];
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
                    });

                })
                .catch(function (error) {
                    console.log('error')
                })
        }
    }
})();
