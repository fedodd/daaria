const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const uglify = require('gulp-uglify');

module.exports = () => {
  return gulp.src('app/assets/scripts/app/**')
    .pipe($.changed('assets'))
    .pipe(gulp.dest('build/assets/scripts/app'));
};
