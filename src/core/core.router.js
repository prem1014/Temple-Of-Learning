(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
             .state("home", {
                 url: "/home",
                 templateUrl: "/src/components/home/home.html",
                 authenticate: false
             })
             .state("aboutMe",{
                url:"/about-me",
                templateUrl: "/src/components/about-me/aboutMe.html",
                authenticate: false
             })
             .state('blog',{
                url:'/my-blogs',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
              .state('ang-basic',{
                url:'/angular-basic',
                templateUrl:'/src/components/blogs/angular/ang-basic.html',
                authenticate:false
             })
              .state('views-directives',{
                url:'/views-directives',
                templateUrl:'/src/components/blogs/angular/views-directives.html',
                authenticate:false
             })
             .state('angular-scope',{
                url:'/angular-scope',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-forms',{
                url:'/angular-events',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })             
             .state('ang-event',{
                url:'/angular-events',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-provider',{
                url:'/angular-providers',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-services',{
                url:'/angular-services',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-di',{
                url:'/angular-di',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-ajax',{
                url:'/angular-ajax',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-routes',{
                url:'/angular-routes',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-custom-directive',{
                url:'/angular-custom-directive',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })
             .state('ang-digest',{
                url:'/angular-digest-cycle',
                templateUrl:'/src/components/blogs/blog.html',
                authenticate:false
             })            
         // Send to login if the URL was not found
         $urlRouterProvider.otherwise("/home");
    }
})();
