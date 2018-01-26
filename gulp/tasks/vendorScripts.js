const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = () => {
  return gulp.src('app/assets/scripts/vendor/**')
    .pipe($.changed('assets'))
    .pipe(gulp.dest('build/assets/scripts/vendor'));
};
