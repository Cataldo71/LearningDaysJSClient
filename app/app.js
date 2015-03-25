'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
    'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    // note, this factory should be broken out into a sub-module
    .factory("Templates", function($resource) {
        // deployed environment
        //
        //return $resource('http://ldays.cloudapp.net/ic-war/contentservice/v1/templates');

        // local environment
        //
        return angular.fromJson($resource('http://localhost:8080/ic/contentservice/v1/templates'));
});
