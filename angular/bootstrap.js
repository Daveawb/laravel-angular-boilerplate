angular.module('Application', [
    'Templates',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate'
])

    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    }])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('root', {
            url: '/',
            templateUrl: 'templates/bootstrap.html'
        });
    }]);