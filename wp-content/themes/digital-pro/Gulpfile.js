var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
	var processors = [
		autoprefixer
	];

	return gulp.src('custom-styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('.'))
});

// Watch task
gulp.task('watch-sass', function(){
	gulp.watch('custom-styles.scss',['sass']);
});


