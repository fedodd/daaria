const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src('app/robots.txt')
    .pipe(gulp.dest('build/'));
};
