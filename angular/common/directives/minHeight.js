
var Directive = function ($window, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // Get navbar height
            var navbar = $window.document.getElementsByClassName('navbar');

            $timeout(minHeight); // make sure angular has proceeded the binding
            angular.element($window).bind('resize', minHeight);

            function minHeight() {
                var minHeight = $window.innerHeight - navbar[0].offsetHeight;
                element.css('min-height', minHeight + 'px');
            }
        }
    };
};

Directive.$inject =['$window', '$timeout'];

module.exports = Directive;