const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src('build/*.html')
    .pipe($.revReplace({ manifest: gulp.src('build/rev-manifest.json') }))
    .pipe(gulp.dest('build'));
};
