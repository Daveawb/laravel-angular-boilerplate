(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./components/sidebar/sidebar.js');
require('./components/navbar/navbar.js');

angular.module('Application', ['Templates', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'Application.SideBar', 'Application.NavBar']).config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
}]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('base', {
        abstract: true,
        views: {
            '@': {
                templateUrl: 'templates/bootstrap.html'
            }
        }
    }).state('base.root', {
        url: '/',
        views: {
            'navbar@base': {
                templateUrl: 'templates/components/navbar/navbar.html',
                controller: 'NavbarController as navbar'
            },
            'sidebar@base': {
                templateUrl: 'templates/components/sidebar/sidebar.html',
                controller: 'SideBarController as sidebar'
            }
        }
    });
}]);

},{"./components/navbar/navbar.js":3,"./components/sidebar/sidebar.js":5}],2:[function(require,module,exports){
"use strict";

var Controller = function Controller() {
    this.isCollapsed = true;
};

Controller.$inject = [];

module.exports = Controller;

},{}],3:[function(require,module,exports){
'use strict';

angular.module('Application.NavBar', []).controller('NavbarController', require('./controller')).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('root', {
        views: {
            'navbar@root': {
                templateUrl: 'templates/components/navbar/navbar.html',
                controller: 'NavbarController as navbar'
            }
        }
    });
}]);

},{"./controller":2}],4:[function(require,module,exports){
"use strict";

var Controller = function Controller() {};

Controller.$inject = [];

module.exports = Controller;

},{}],5:[function(require,module,exports){
'use strict';

angular.module('Application.SideBar', []).controller('SideBarController', require('./controller'));

},{"./controller":4}]},{},[1]);

//# sourceMappingURL=app.js.map
