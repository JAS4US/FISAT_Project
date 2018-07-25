var app=angular.module('sample',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'login.html'
  })
  .when('/1',{
    templateUrl: 'page1.html'
  })
  .otherwise({
    redirectTo: 'page1.html'
  });
});

app.controller('loginCtrl',function($scope,$location){
  $scope.submit=function(){
    var uname=$scope.username;
    var pass=$scope.passwrd;
    //alert(uname+" "+pass);
    if(uname=="admin" && pass=="admin"){
      alert("Success!!!!!!");
      $location.path("/1");

    }
    else {
      alert("ERROR!!!!!!");
    }

  };
});
