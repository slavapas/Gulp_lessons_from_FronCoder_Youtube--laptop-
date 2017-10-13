'use strict';

var gulp = require ('gulp'),
    gp   = require ('gulp-load-plugins')();


// add pug
gulp.task('pug', function(){
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

// add stylus
gulp.task('stylus', function(){
    return gulp.src('src/static/stylus/*.styl')
    // here you can add options from web site of this plugin between curly brackets (stylus)
        .pipe(gp.stylus({}))
        .pipe(gp.csso())
        .pipe(gulp.dest('build/static/css'));
});
