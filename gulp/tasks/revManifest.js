const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src(['build/assets/styles/*.css', 'build/assets/scripts/*.js'], { base: 'build' })
    .pipe($.rev())
    .pipe($.revDeleteOriginal())
    .pipe(gulp.dest('build'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('build'));
};
