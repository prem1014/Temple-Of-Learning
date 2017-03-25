
(function () {
    angular.module('app.finance',[])
        .controller('financeSectionController',financeSectionController);


    financeSectionController.$inject=['$state','studentRegService','schoolRegService'];

    function financeSectionController($state,studentRegService,schoolRegService) {
         var vm = this;

         onInit();

         function onInit(){
             vm.expand = true;
         }
    }
})();

