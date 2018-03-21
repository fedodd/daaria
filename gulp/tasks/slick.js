const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = () => {
  return gulp.src('app/assets/slick/**')
    .pipe($.changed('build'))
    .pipe(gulp.dest('build/assets/slick'));
};
