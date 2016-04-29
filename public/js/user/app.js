(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Factory = function Factory() {
    return function epicRandomString() {
        function f(a) {
            for (var c = (Math.random() * eval("1e" + ~ ~(50 * Math.random() + 50))).toString(36).split(""), b = 3; b < c.length; b++) {
                b == ~ ~(Math.random() * b) + 1 && c[b].match(/[a-z]/) && (c[b] = c[b].toUpperCase());
            }c = c.join("");c = c.substr(~ ~(Math.random() * ~ ~(c.length / 3)), ~ ~(Math.random() * (c.length - ~ ~(c.length / 3 * 2) + 1)) + ~ ~(c.length / 3 * 2));if (24 > a) return a ? c.substr(c, a) : c;c = c.substr(c, a);if (c.length == a) return c;for (; c.length < a;) {
                c += f();
            }return c.substr(0, a);
        }var d = arguments,
            a,
            e;if (!d.length) return f();for (var b = 0; b < d.length; b++) {
            "string" == typeof d[b] && d[b].length && !a && (a = d[b]), "number" == typeof d[b] && d[b] && !e && (e = d[b]);
        }if (!a && !e) return f();if (!a) return f(e);if (!e) {
            a = window.btoa(escape(encodeURIComponent(a))).replace(/[^\w]/g, "");a = a.split("");for (b = a.length - 1; 0 < b; b--) {
                var d = Math.floor(Math.random() * (b + 1)),
                    g = a[b];a[b] = a[d];a[d] = g;
            }return a.join("");
        }a = window.btoa(escape(encodeURIComponent(a))).replace(/[^\w]/g, "");b = f(e - a.length);a = (a + b).split("");for (b = a.length - 1; 0 < b; b--) {
            d = Math.floor(Math.random() * (b + 1)), g = a[b], a[b] = a[d], a[d] = g;
        }a = a.join("");return a.length == e ? a : a.substr(0, e);
    };
};

Factory.$inject = [];

module.exports = Factory;

},{}],2:[function(require,module,exports){
"use strict";

require('./components/sidebar');
require('./components/navbar');
require('./modules/dashboard');
require('./modules/users');

angular.module('User', ['Templates', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'Component.SideBar', 'Component.NavBar', 'Module.Dashboard', 'Module.Users']).factory('RandString', require('../common/randomstring')).config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/admin");
}]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('base', {
        abstract: true,
        views: {
            'navbar@': {
                templateUrl: 'templates/components/navbar/navbar.html',
                controller: 'NavbarController as navbar'
            },
            'sidebar@': {
                templateUrl: 'templates/components/sidebar/sidebar.html',
                controller: 'SideBarController as sidebar'
            }
        }
    });
}]);

},{"../common/randomstring":1,"./components/navbar":4,"./components/sidebar":6,"./modules/dashboard":8,"./modules/users":11}],3:[function(require,module,exports){
"use strict";

var Controller = function Controller() {
    this.isCollapsed = true;
};

Controller.$inject = [];

module.exports = Controller;

},{}],4:[function(require,module,exports){
'use strict';

angular.module('Component.NavBar', []).controller('NavbarController', require('./controller')).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('root', {
        views: {
            'navbar@root': {
                templateUrl: 'templates/components/navbar/navbar.html',
                controller: 'NavbarController as navbar'
            }
        }
    });
}]);

},{"./controller":3}],5:[function(require,module,exports){
"use strict";

var Controller = function Controller() {
    this.links = [{
        sref: "base.dashboard",
        title: "Dashboard",
        icon: "fa-dashboard"
    }];
};

Controller.$inject = [];

module.exports = Controller;

},{}],6:[function(require,module,exports){
'use strict';

angular.module('Component.SideBar', []).controller('SideBarController', require('./controller'));

},{"./controller":5}],7:[function(require,module,exports){
'use strict';

var Controller = function Controller() {
    this.widgets = [{
        title: 'Users',
        colour: 'blue',
        info: 1,
        icon: 'fa-users'
    }, {
        title: 'Posts',
        colour: 'green',
        info: 42,
        icon: 'fa-newspaper-o'
    }, {
        title: 'Links',
        colour: 'yellow',
        info: 87,
        icon: 'fa-link'
    }, {
        title: 'Comments',
        colour: 'red',
        info: 293,
        icon: 'fa-comments'
    }];
};

Controller.$inject = [];

module.exports = Controller;

},{}],8:[function(require,module,exports){
"use strict";

angular.module('Module.Dashboard', []).controller('DashboardController', require('./controller')).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('base.dashboard', {
        url: '/admin',
        views: {
            'content@': {
                templateUrl: 'templates/modules/dashboard/dashboard.html',
                controller: 'DashboardController as dashboard'
            }
        }
    });
}]);

},{"./controller":7}],9:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],10:[function(require,module,exports){
'use strict';

var Controller = function Controller(RandString) {

    this.user = {};

    this.passwordDisplay = false;

    this.autogenerate = function () {
        var string = RandString(null, 6);
        this.user.password = string;
        this.user.confirmPassword = string;
    };

    this.showpassword = function () {
        this.passwordDisplay = !this.passwordDisplay;
    };

    this.uncheckCopyMe = function () {
        this.user.copyme = false;
    };
};

Controller.$inject = ['RandString'];

module.exports = Controller;

},{}],11:[function(require,module,exports){
"use strict";

angular.module('Module.Users', []).controller('UsersController', require('./controller')).controller('CreateUsersController', require('./create/controller')).controller('InviteUsersController', require('./invite/controller')).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('base.users', {
        url: '/admin/users',
        views: {
            'content@': {
                templateUrl: 'templates/modules/users/users.html',
                controller: 'UsersController as users'
            }
        }
    });

    $stateProvider.state('base.users.create', {
        url: '/create',
        views: {
            'content@': {
                templateUrl: 'templates/modules/users/create/create-user.html',
                controller: 'CreateUsersController as createusers'
            }
        }
    });

    $stateProvider.state('base.users.invite', {
        url: '/invite',
        views: {
            'content@': {
                templateUrl: 'templates/modules/users/create/create-user.html',
                controller: 'InviteUsersController as inviteusers'
            }
        }
    });
}]);

},{"./controller":9,"./create/controller":10,"./invite/controller":12}],12:[function(require,module,exports){
"use strict";

var Controller = function Controller() {};

Controller.$inject = [];

module.exports = Controller;

},{}]},{},[2]);

//# sourceMappingURL=app.js.map
