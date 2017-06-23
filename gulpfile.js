var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    path = require('path');

console.log('\x1b[44m', '\x1b[37m', '\x1b[1m', ' Listening on port 3000 ', '\x1b[0m');

var tinylr;
gulp.task('livereload', function () {
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

gulp.task('express', function () {
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

gulp.task('compress', function() {
    return gulp.src([
            'app/app.module.js',
            'app/app.routes.js',
            'app/components/account/*.js',
            'app/components/core/header/*.js',
            'app/components/core/footer/*.js',
            'app/components/core/error/*.js',
            'app/components/core/dialog/*.js',
            'app/components/core/flyout/*.js',
            'app/components/catalog/*.js',
            'app/components/home/*.js',
            'app/components/shared/**/*.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('assets/js'));
});
gulp.task('compressAngularJS', function() {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/angular-resource/angular-resource.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/angular-animate/angular-animate.min.js'
        ])
        .pipe(concat('angular.min.js'))
        .pipe(gulp.dest('assets/js'));
});
gulp.task('compressUtilityJS', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'assets/lib/foundation/vendor/modernizr.js',
            'assets/lib/foundation/foundation.min.js',
            'assets/lib/select2/select2.min.js'
        ])
        .pipe(concat('utility.min.js'))
        .pipe(gulp.dest('assets/js'));
});
gulp.task('compressUtilityCSS', function() {
    return gulp.src([
            'assets/lib/font-awesome/css/font-awesome.min.css',
            'assets/lib/select2/select2.min.css'
        ])
        .pipe(concat('utility.min.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch('./app/**/*.js', ['compress']);
    gulp.watch('./**/*.html', notifyLiveReload);
    gulp.watch('./app/**/*.js', notifyLiveReload);
});

gulp.task('default', ['sass', 'compress', 'compressAngularJS', 'compressUtilityJS', 'compressUtilityCSS', 'express', 'livereload', 'sass:watch'], function () {
});

module.exports = gulp;
