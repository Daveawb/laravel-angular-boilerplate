"use strict";

angular.module('Module.Dashboard', [])
    .controller('DashboardController', require('./controller'))
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('base.dashboard', {
            url: '/admin',
            views: {
                'content@' : {
                    templateUrl: 'templates/modules/dashboard/dashboard.html',
                    controller: 'DashboardController as dashboard'
                }
            }
        });
    }]);