
var app = angular.module('myApp');

  app.controller('homecontroller',
  function($scope, $rootScope, $stateParams, $state, loginservice) {
    $scope.user = $rootScope.userName;

  });
