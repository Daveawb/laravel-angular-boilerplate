angular.module('Module.Users', [])
    .controller('UsersController', require('./controller'))
    .controller('CreateUsersController', require('./create/controller'))
    .controller('InviteUsersController', require('./invite/controller'))
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('base.users', {
            url: '/users',
            views: {
                'content@' : {
                    templateUrl: 'templates/modules/users/users.html',
                    controller: 'UsersController as users'
                }
            }
        });

        $stateProvider.state('base.users.create', {
            url: '/create',
            views: {
                'content@' : {
                    templateUrl: 'templates/modules/users/create/create-user.html',
                    controller: 'CreateUsersController as createusers'
                }
            }
        });

        $stateProvider.state('base.users.invite', {
            url: '/invite',
            views: {
                'content@' : {
                    templateUrl: 'templates/modules/users/create/create-user.html',
                    controller: 'InviteUsersController as inviteusers'
                }
            }
        });
    }]);