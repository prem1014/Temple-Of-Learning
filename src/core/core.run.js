(function(){
	angular.module('app.core')
	.run(runAppCore);

runAppCore.$inject=['$rootScope','$state', '$location','$cookieStore']

	function runAppCore($rootScope,$state, $location,$cookieStore){
		        // keep user logged in after page refresh
	    $rootScope.userDetails = $cookieStore.get('userDetails') || {};

		/*$rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.userDetails.userName) {
                $location.path('/login');
            }
            else if($location.path() === '/home'){
            	$location.path('/home');
            }
        });*/
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !$rootScope.userDetails.userName){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
    }
  });
	}
})();