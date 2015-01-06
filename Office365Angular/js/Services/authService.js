app.factory('authService', ['$http', '$q', 'localStorageService', 'authSettings',
    function ($http, $q, localStorageService, authSettings) {
        var serviceBase = authSettings.apiServiceBaseUri;
        var authServiceFactory = {};
      
        var _authentication = {
            isAuth: false,
            userName: ""
        };
      
        var _login = function (loginData) {
        };
      
        var _logOut = function () {
        };
      
        var _fillAuthData = function () {
        };
      
        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;
      
        return authServiceFactory;
}]);