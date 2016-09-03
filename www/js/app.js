// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','starter.controllers', 'starter.services', 'starter.mapa'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function()
   {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.cordova)
    {
      db = $cordovaSQLite.openDB("datos.db");
    }
    else 
    {
      db = window.openDatabase("datos.db","1.0","datos",-1);
    }
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS users (id integer primary key, name text)");
  });
})
.config(function($stateProvider, $urlRouterProvider)
{
    $stateProvider
      .state("users", {
        url: "/users",
        templateUrl: "templates/users.html",
        controller: "usersCtrl",
        cache: false
      })
      .state("addUsers", {
        url: "/users/add",
        templateUrl: "templates/add.html",
        controller: "usersCtrl"
      })
      .state("editUsers", {
        url: "/users/:userId",
        templateUrl: "templates/edit.html",
        controller: "usersCtrl"
      })
      .state("mapaUsers", {
        url: "/users/mapa",
        templateUrl: "templates/mapa.html",
        controller: "MapController"
      })


    $urlRouterProvider.otherwise("/users");
})