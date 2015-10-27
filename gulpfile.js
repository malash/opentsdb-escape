'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    tapColorize = require('tap-colorize');

gulp.task('test', function() {
    return gulp.src('test/index.js')
        .pipe(plugins.tape({
            reporter: tapColorize()
        }));
});

gulp.task('default', ['test']);