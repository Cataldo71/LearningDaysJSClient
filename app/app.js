'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
    'ngResource'
])
    //.constant("serviceUrl",'http://ldays.cloudapp.net/ic-war/contentservice/v1/' )
    .constant("serviceUrl",'http://localhost:8080/ic/contentservice/v1/' )
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    // note, this factory should be broken out into a sub-module
    .factory("Templates", ['serviceUrl', '$resource', function(serviceUrl,$resource) {

        return angular.fromJson($resource(serviceUrl + 'templates'));
}]);
