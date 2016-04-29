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
        .sass('marketing.scss')
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
        .scripts(scripts, 'public/js/vendor.js', 'node_modules')
        .browserify('bootstrap.js', 'public/js/admin/app.js', 'angular/admin/')
        .browserify('bootstrap.js', 'public/js/user/app.js', 'angular/user/')
        .templates({
                module : 'Templates',
                root   : 'templates',
                standalone : true
            },
            'angular/admin/**/*.html',
            'public/js/admin',
            'templates'
        )
        .templates({
                module : 'Templates',
                root   : 'templates',
                standalone : true
            },
            'angular/user/**/*.html',
            'public/js/user',
            'templates'
        )
        .version([
            'public/js/admin/app.js',
            'public/js/admin/templates.js',
            'public/js/user/app.js',
            'public/js/user/templates.js',
            'public/css/app.css',
            'public/css/marketing.css'
        ]);
});
