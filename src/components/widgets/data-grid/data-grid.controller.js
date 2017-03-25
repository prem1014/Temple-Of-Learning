(function(){
    'use strict';
    angular.module('app.dataGrid',[])
        .controller('schoolDataGridController',schoolDataGridController);

    function schoolDataGridController(){
         var ctrl = this;
         onInit();
         function onInit(){
             console.log(ctrl.gridOptions)
         }
     }

})();
