var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var cached = require('gulp-cached');
var remember = require('gulp-remember');

var scriptsGlob = 'src/**/*.js';

gulp.task('scripts', function() {
  return gulp.src(scriptsGlob)
      .pipe(cached('scripts'))        // only pass through changed files
      .pipe(jshint())                 // do special things to the changed files...
      .pipe(header('(function () {')) // e.g. jshinting ^^^
      .pipe(footer('})();'))          // and some kind of module wrapping
      .pipe(remember('scripts'))      // add back all files to the stream
      .pipe(concat('app.js'))         // do things that require all files
      .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
  var watcher = gulp.watch(scriptsGlob, ['scripts']); // watch the same files in our scripts task
  watcher.on('change', function (event) {
    if (event.type === 'deleted') {                   // if a file is deleted, forget about it
      delete cached.caches.scripts[event.path];       // gulp-cached remove api
      remember.forget('scripts', event.path);         // gulp-remember remove api
    }
  });
});