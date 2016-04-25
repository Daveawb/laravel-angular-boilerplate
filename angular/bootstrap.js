require('./components/sidebar/sidebar.js');
require('./components/navbar/navbar.js');

angular.module('Application', [
    'Templates',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'Application.SideBar',
    'Application.NavBar'
])

    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    }])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('base', {
            abstract: true,
            views: {
                '@' : {
                    templateUrl: 'templates/bootstrap.html'
                }
            }
        })
            .state('base.root', {
                url : '/',
                views: {
                    'navbar@base' : {
                        templateUrl: 'templates/components/navbar/navbar.html',
                        controller: 'NavbarController as navbar'
                    },
                    'sidebar@base' : {
                        templateUrl: 'templates/components/sidebar/sidebar.html',
                        controller: 'SideBarController as sidebar'
                    }
                }
            });
    }]);