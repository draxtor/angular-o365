app.controller('loginController', ['$scope', '$location', 'localStorageService',  function($scope, $location,localStorageService) {
    $scope.loginData = {
        userName: "",
        password: "",
        client_id:""
    };
      
    $scope.message = "";
    $scope.login = function (ulogin) {
		if(ulogin.UserName!=""){
		// To add to local storage
  		localStorageService.set('lsName',ulogin.UserName);
            $location.path('/home'); // hardcoded for now
		}
    };
}]);