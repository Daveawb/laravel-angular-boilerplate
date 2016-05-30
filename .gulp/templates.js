var elixir 		  = require('laravel-elixir'),
    gulp 		  = require("gulp"),
    templateCache = require('gulp-angular-templatecache'),
    insert 		  = require('gulp-insert');

var Task = elixir.Task;

elixir.extend("templates", function(options, from, to, wrap) {
    new Task('templates', function() {
        var flow = gulp.src(from)
            .pipe(templateCache(options));

        if (wrap) {
            flow = flow.pipe(insert.wrap('(function(angular) {', '})(angular);'))
        }

        return flow.pipe(gulp.dest(to));
    }).watch(from, 'default');
});