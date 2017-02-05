var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

var files = [
	'./src/game/game.js',
];

var DEST = 'dist';

gulp.task('js-build', function () {
	return gulp.src(files)
		.pipe(gulp.dest(DEST))
		.pipe(concat('game.js'))
		.pipe(uglify())
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest(DEST));
});

gulp.task('default', ['js-build'], function(){});
