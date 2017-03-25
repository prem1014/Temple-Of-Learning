/**
 * Created by abhis_000 on 3/25/2017.
 */
(function(){
    'use strict';
    angular.module('app.teacher.list',[])
        .controller('teacherListController',teacherListController);

    teacherListController.$inject = ['teacherRegService'];

    function teacherListController(teacherRegService) {
        var ctrl =this;

        onInit();
         function getAllTeachers() {
             teacherRegService.getAllTeachers()
                 .then(function (response) {
                     ctrl.teacherList = response;
                 })
         }
        function onInit() {
            getAllTeachers();
        }
    }
})();
