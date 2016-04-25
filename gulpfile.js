var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var scripts = [
    'angular/angular.min.js',
    'angular-animate/angular-animate.min.js',
    'angular-resource/angular-resource.min.js'
];

elixir(function(mixr) {
    mixr.sass('app.scss')
        .scripts(scripts, 'public/js/vendor.js', 'node_modules')
        .browserify('bootstrap.js', 'public/js/app.js', 'angular')
        .version('public/js/app.js');
});
