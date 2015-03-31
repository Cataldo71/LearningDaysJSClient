'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','Templates',function($scope,Templates) {

        $scope.templates = Templates.get();
//        $scope.templates = {templateId:2};
        $scope.getTemplateUrl = function(templateId) {
            return 'http://localhost:8080/ic/contentservice/v1/templates/' + templateId;
        };


}]);