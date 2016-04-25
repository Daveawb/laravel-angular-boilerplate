var elixir = require('laravel-elixir');

require('./.gulp/templates');

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
    'angular-resource/angular-resource.min.js',
    'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'angular-ui-router/release/angular-ui-router.min.js'
];

elixir(function(mixr) {
    mixr.sass('app.scss')
        .scripts(scripts, 'public/js/vendor.js', 'node_modules')
        .browserify('bootstrap.js', 'public/js/app.js', 'angular')
        .templates({
                module : 'Templates',
                root   : 'templates',
                standalone : true
            },
            'angular/**/*.html',
            'public/js',
            'templates'
        )
        .version([
            'public/js/app.js',
            'public/css/app.css',
            'public/js/templates.js'
        ]);
});
