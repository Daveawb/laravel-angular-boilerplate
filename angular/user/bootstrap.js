"use strict";

require('./components/navigation');
require('./modules/dashboard');
require('./modules/users');
require('../common/directives');

angular.module('User', [
    'Templates',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'Common.Directives',
    'Component.NavBar',
    'Module.Dashboard',
    'Module.Users'
])

    .factory('RandString', require('../common/randomstring'))
    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/admin");
    }])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('base', {
            abstract: true,
            views: {
                'navbar@' : {
                    templateUrl: 'templates/components/navigation/navbar.html',
                    controller: 'NavbarController as navbar'
                }
            }
        });
    }]);