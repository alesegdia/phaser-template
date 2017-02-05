var gulp = require('gulp'),
	gulp_concat = require('gulp-concat'),
	gulp_rename = require('gulp-rename'),
	gulp_uglify = require('gulp-uglify');

var files = [
	'./src/game/game.js',
];

gulp.task('js-minified', function () {
	return gulp.src(files)
		.pipe(gulp_concat('game.js'))
		.pipe(gulp_uglify()),
		.pipe(gulp.dest('dist'));
});

gulp.task('js-single', function () {
	return gulp.src(files)
		.pipe(gulp_concat('game.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-minified', 'js-single'], function(){});
