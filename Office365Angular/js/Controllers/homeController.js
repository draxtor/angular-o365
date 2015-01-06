app.controller('HomeCtrl',
  ['$scope', '$location', 'authSettings', '$http', 'authService', 'localStorageService',
  function ($scope, $location, authSettings, $http, authService, localStorageService) {
        var serviceBase = authSettings.apiServiceBaseUri;
        $scope.logOut = function () {
            authService.logOut();
            $location.path('/signin');
        };
     
        //$scope.init = function () {
          $scope.siteTitle = "Office 365 site title goes here";
		    // Read that value back
		   $scope.userName=localStorageService.get('lsName');
        //};
        //$scope.siteTitle = "";
}]);