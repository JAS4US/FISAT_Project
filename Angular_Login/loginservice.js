//loginService.js
var app = angular.module('myApp');

  app.factory('loginservice', function() {
    var admin = 'admin';
    var pass = 'password';
    var isAuthenticated = false;

    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;

        return isAuthenticated;
      },
      isAuthenticated : f;
        return isAuthenticated;
      }
    };

  });
