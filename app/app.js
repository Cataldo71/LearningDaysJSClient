'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
    'ngResource'
])
    .constant("RootUrl",'http://ldays.cloudapp.net/ic-war/contentservice/v1/' )
    //.constant("RootUrl",'http://localhost:8080/ic/contentservice/v1/' )
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    // note, this factory should be broken out into a sub-module
    .factory("Templates", ['RootUrl', '$resource', function(RootUrl,$resource) {

        return angular.fromJson($resource(RootUrl + 'templates'));
}]);
