var elixir 		  = require('laravel-elixir'),
    gulp 		  = require("gulp"),
    templateCache = require('gulp-angular-templatecache'),
    insert 		  = require('gulp-insert');

var Task = elixir.Task;

elixir.extend("templates", function(options, from, to, wrap)
{
    new Task('templates', function()
    {
        if (wrap)
        {
            return gulp.src(from)
                .pipe(templateCache(options))
                .pipe(insert.wrap('(function(angular) {', '})(angular);'))
                .pipe(gulp.dest(to));
        }
        else
        {
            return gulp.src(from)
                .pipe(templateCache(options))
                .pipe(gulp.dest(to));
        }
    }).watch(from);

});