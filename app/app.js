'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'angularFileUpload',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngResource',
    'azureBlobUpload',
    'ngProgress'
])
    //.constant("serviceUrl",'http://ldays.cloudapp.net/ic-war/contentservice/v1/' )
    .constant("serviceUrl",'http://localhost:8080/ic/contentservice/v1/' )
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    // This factory returns the templates resource. you can call methods on the Templates object that
    // will invoke the HTTP verbs on the REST API at the serviceUrl
    // get() = GET
    // save() = POST
    // update() = PUT
    // delete() = DELETE
    //
    .factory("Templates", ['serviceUrl', '$resource', function(serviceUrl,$resource) {
        return $resource(serviceUrl + 'templates');
    }]);
