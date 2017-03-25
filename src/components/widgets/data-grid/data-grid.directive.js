(function(){
    'use strict';
    angular.module('app.dataGrid')
        .directive('schoolDataGrid',schoolDataGrid);

    function schoolDataGrid(){
          var directive = {
               restrict:'E',
               templateUrl:'/src/components/widgets/data-grid/data-grid.html',
               controller:'schoolDataGridController',
               controllerAs:'vm',
               bindToController:true,
               scope:{
                   gridOptions:'=',
                   onRowClick:'&'
               }
          }
          return directive;
     }

})();
