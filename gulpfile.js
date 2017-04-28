var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    path = require('path');

console.log('\x1b[44m', '\x1b[37m', '\x1b[1m', ' Listening on port 4000 ' ,'\x1b[0m');

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});
function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

// Gulp taks

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(path.join(__dirname, '.')));
  app.listen(3000, '0.0.0.0');
});

gulp.task('sass', function () {
  return gulp.src('./assets/scss/app.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(rename({suffix: '.min'}))
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest('./assets/css'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./app/*'),
        uglify(),
        gulp.dest('assets/js')
    ],
    cb
  );
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
  gulp.watch('./*/*.html', notifyLiveReload);
  gulp.watch('./app/*/*.js', notifyLiveReload);
});

gulp.task('default', ['sass', 'compress', 'express', 'livereload', 'sass:watch'], function() { });

module.exports = gulp;
