(function() {
  var app = angular.module('myApp', ['ui.router']);

   app.run(function($rootScope, $location, $state, loginservice) {
     console.clear();
     console.log('running');
    if(!loginservice.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });

  app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login.html',
        controller : 'logincontroller'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'home.html',
        controller : 'homecontroller'
      });

       $urlRouterProvider.otherwise('/login');
  }]);

})();
