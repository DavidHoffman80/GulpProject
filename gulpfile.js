'use strict';

/***** requirements *****/
const gulp = require('gulp');
// gulp-sass converts sass files to css files
const sass = require('gulp-sass');
// gulp-sourcemaps maps sass to css compilation
const sourcemaps = require('gulp-sourcemaps');
// gulp-autoprefixer automatically adds browser prefixes
const autoprefixer = require('gulp-autoprefixer');

// Default gulp task
gulp.task('default', function() {
	gulp.watch('src/*.html', ['copyHTML']);
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['copyJS']);
	gulp.watch('src/img/*', ['copyIMG']);
});

// Copy HTML files to dist folder
gulp.task('copyHTML', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('./dist'));
});

// Copy, add source map, compress, and autoprefix SASS files to dist/css folder
gulp.task('styles', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

// Copy all js files into the dist/js folder
gulp.task('copyJS', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('dist/js'));
});

// Copy all images into the dist/img folder
gulp.task('copyIMG', function() {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));
});