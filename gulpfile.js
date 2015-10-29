'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tapColorize = require('tap-colorize');
var source = ['*.js', 'bin/*.js', 'lib/*.js', 'test/*.js'];

gulp.task('lint', function() {
    var eslint = plugins.eslint;
    return gulp.src(source)
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

gulp.task('dev', function() {
    return gulp.watch(source, ['build']);
});

gulp.task('build', ['test'], function () {
    return gulp.src('lib/index.js')
        .pipe(plugins.webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['test']);