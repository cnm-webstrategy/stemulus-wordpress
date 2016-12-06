var gulp = require('gulp'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    scp = require('gulp-scp2'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('watch', function() {
  gulp.watch('./*.scss', ['scss'])
});

gulp.task('default', function() {});

//Compile

gulp.task('scss', function() {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('.'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

gulp.task('compress-js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js/'));
});

gulp.task('compress-css', function() {
  return gulp.src('**/*.css')
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'))
});
// Upload
 
gulp.task('upload-css', function() {
  return gulp.src('**/*.css')
  .pipe(scp({
    host: 'fusemakerspace.org',
    username: 'fusemake',
    password: 'lesw3bt3@ms',
    dest: '/home/fusemake/public_html/wp-content/themes/awaken-theme'
  }))
  .on('error', function(err) {
    console.log(err);
  });
});

gulp.task('upload-php', function() {
  return gulp.src('**/*.php')
  .pipe(scp({
    host: 'wp-dev',
    username: 'strategy',
    password: 'lesw3bt3@ms',
    dest: '/home/fusemake/public_html/wp-content/themes/awaken-theme'
  }))
  .on('error', function(err) {
    console.log(err);
  });
});