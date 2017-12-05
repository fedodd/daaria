const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src('app/assets/icons/**/*.svg')
    .pipe($.svgmin({
      js2svg: {
        pretty: true,
      },
      plugins: [{
        removeAttrs: { attrs: 'fill|stroke$|opacity' },
        removeDimensions: true,
      }],
    }))
    .pipe(gulp.dest('build/assets/icons'));
};
