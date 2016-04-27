angular.module('Application.NavBar', [])
    .controller('NavbarController', require('./controller'))
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('root', {
            views: {
                'navbar@root' : {
                    templateUrl: 'templates/components/navbar/navbar.html',
                    controller: 'NavbarController as navbar'
                }
            }
        });
    }]);