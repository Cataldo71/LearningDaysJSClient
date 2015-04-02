'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','Templates', 'azureBlob', '$upload', 'ngProgress',
        function($scope,Templates,azureBlob,$upload, ngProgress) {

        $scope.uploadForm = {};
        $scope.onFileSelect = function($file) {
            $scope.uploadForm.templateFile = $file;
        }
        $scope.uploadForm.submitUpload = function() {
            var createTemplateRequest = {
                name : $scope.uploadForm.name,
                description : $scope.uploadForm.description,
                contributor : $scope.uploadForm.contributor,
                units : $scope.uploadForm.units,
                categories : [$scope.uploadForm.category],
                fileSize : $scope.uploadForm.file[0].size,
                fileName: $scope.uploadForm.file[0].name
            };
            // send the upload request

            var response = Templates.save(angular.toJson(createTemplateRequest),function (postResponse) {
                // success callback includes the response object
                // upload the file to Azure
                //
                var azureConfig = {
                    baseUrl:"https://portalvhdsk24ch13b1vchf.blob.core.windows.net/templates/" + postResponse.storageId,
                    sasToken: "?" + postResponse.uploadToken,
                    file: $scope.uploadForm.file[0],
                    progress: function() {},
                    complete:function() { ngProgress.complete(); alert("file uploadded successfully!!!!")},
                    error: function() { alert("Error uploading to Azure");}
                };

                azureBlob.upload(azureConfig);
                ngProgress.start();
            });

        }
}]);