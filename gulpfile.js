'use strict';

/***** requirements *****/
const gulp = require('gulp');
// gulp-sass converts sass files to css files
const sass = require('gulp-sass');
// gulp-sourcemaps maps sass to css compilation
const sourcemaps = require('gulp-sourcemaps');

// Default gulp runs
gulp.task('default', function() {
	gulp.watch('src/sass/**/*.scss')
});

gulp.task('styles', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});