var gulp = require('gulp'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    scp = require('gulp-scp2'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('watch', function() {
  gulp.watch('./*.less', ['less'])
})


gulp.task('default', function() {});

//Compile

gulp.task('less', function() {
  return gulp.src('*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('.'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

// Upload
 
gulp.task('upload-css', function() {
  return gulp.src('**/*.css')
  .pipe(scp({
    host: 'wp-dev',
    username: 'strategy',
    password: 'lesw3bt3@ms',
    dest: '/var/www/html/wordpress/wp-content/themes/montreal'
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
    dest: '/var/www/html/wordpress/wp-content/themes/montreal'
  }))
  .on('error', function(err) {
    console.log(err);
  });
});