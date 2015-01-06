var app = angular.module('O365App', ['ui.router','LocalStorageModule']).config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('demoPrefix');
  // localStorageServiceProvider.setStorageCookieDomain('example.com');
  // localStorageServiceProvider.setStorageType('sessionStorage');
})
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('signin', {
                url: '/signin',
                templateUrl: 'views/signin.html',
                controller: 'loginController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });
      
        $urlRouterProvider.otherwise('/signin');
    });
/*
app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push(
       'authInterceptorService');
});
*/
app.constant('authSettings', {
    apiServiceBaseUri: 'http://localhost:84/sahil/',
    clientId: 'O365App'
});