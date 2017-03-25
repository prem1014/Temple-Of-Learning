(function(){
    'use strict';
    angular.module('app.dataGrid',[])
        .controller('schoolDataGridController',schoolDataGridController);

    function schoolDataGridController(){
         var ctrl = this;


         onInit();

         function formatRowData(){
         var result = []
             _.forEach(ctrl.gridOptions.rowData,function(rowData,index){
                   _.forEach(ctrl.gridOptions.columnDefinition,function(colDef,colDefIndex){
                          result.push(rowData[colDef.field])
                   });
             });
         }
         function onInit(){
             formatRowData()
             console.log(ctrl.gridOptions)
         }
     }

})();
