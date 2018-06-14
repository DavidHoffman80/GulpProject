'use strict';

/***** requirements *****/
const gulp = require('gulp');
// gulp-sass converts sass files to css files
const sass = require('gulp-sass');
// gulp-sourcemaps maps sass to css compilation
const sourcemaps = require('gulp-sourcemaps');
// gulp-autoprefixer automatically adds browser prefixes
const prefixer = require('gulp-autoprefixer');

// Default gulp task
gulp.task('default', function() {
	gulp.watch('src/sass/**/*.scss', ['styles']);
});

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