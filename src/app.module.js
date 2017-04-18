agGrid.initialiseAgGridWithAngular1(angular);
(function(){

    angular.module('templeOfLearning.app',[
        'agGrid',
        'app.core',
        'app.common',
        'app.login',
        'app.school',
        'app.dashboard',
        'app.student',
        'app.teacher',
        'app.widgets',
        'app.finance'
    ]);
})();
