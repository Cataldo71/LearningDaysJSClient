'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','Templates', 'azureBlob',function($scope,Templates, azureBlob) {

        $scope.templates = angular.fromJson(Templates.get());

//        $scope.templates = {templateId:2};
        $scope.getTemplateUrl = function(templateId) {
            if(templateId > 0)
            return 'http://localhost:8080/ic/contentservice/v1/templates/' + templateId;
            else
            return '';
        };

        $scope.getTemplateImage = function(category) {
            if(category == "Part")
                return 'images/part.png';
            if(category == "Assembly")
                return '/images/assembly.png';
            return 'images/drawing.png';
        }

//initiate an array to hold all active tabs
        $scope.activeTabs = ['tab one'];


        //check if the tab is active
        $scope.isOpenTab = function (tab) {
            //check if this tab is already in the activeTabs array
            if ($scope.activeTabs.indexOf(tab) > -1) {
                //if so, return true
                return true;
            } else {
                //if not, return false
                return false;
            }
        }

        //function to 'open' a tab
        $scope.openTab = function (tab) {
            //check if tab is already open
            if ($scope.isOpenTab(tab)) {
                //if it is, remove it from the activeTabs array
                $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
            } else {
                //if it's not, add it!
                $scope.activeTabs.push(tab);
            }
        }
        $scope.getReadableFileSizeString = function(fileSizeInBytes) {

            var i = -1;
            var byteUnits = [' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
            do {
                fileSizeInBytes = fileSizeInBytes / 1024;
                i++;
            } while (fileSizeInBytes > 1024);

            return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
        };
        $scope.onSelectTemplate = function(template) {
            // update the properties area with the new template info
            //
            $scope.activeTemplate = template;
            $scope.activeTemplate.fileSizeReadable = $scope.getReadableFileSizeString(template.fileSize);
        }
}]);