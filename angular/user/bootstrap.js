require('./components/sidebar');
require('./components/navbar');
require('./modules/dashboard');
require('./modules/users');

angular.module('User', [
    'Templates',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'Component.SideBar',
    'Component.NavBar',
    'Module.Dashboard',
    'Module.Users'
])

    .factory('RandString', require('../common/randomstring'))
    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    }])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('base', {
            abstract: true,
            views: {
                'navbar@' : {
                    templateUrl: 'templates/components/navbar/navbar.html',
                    controller: 'NavbarController as navbar'
                },
                'sidebar@' : {
                    templateUrl: 'templates/components/sidebar/sidebar.html',
                    controller: 'SideBarController as sidebar'
                }
            }
        });
    }]);