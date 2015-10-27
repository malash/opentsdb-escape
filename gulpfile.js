'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tapColorize = require('tap-colorize');

gulp.task('lint', function() {
    var eslint = plugins.eslint;
    return gulp.src(['*.js', 'bin/*.js', 'lib/*.js', 'test/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', ['lint'], function() {
    return gulp.src('test/index.js')
        .pipe(plugins.tape({
            reporter: tapColorize()
        }));
});

gulp.task('default', ['test']);