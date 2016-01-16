var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var compass = require('gulp-compass');

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);

    this.emit('end');
}

function build(bundler, file) {
  var stream = bundler.bundle();
  return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('public/javascripts'));
}

function smrt() {
  var bundler = browserify({
    debug: true
  });

  bundler.transform(babelify);

  bundler.require('app/javascripts/smrt.js', {entry: true});

  return bundler;
}
 
gulp.task('compass', function() {
  gulp.src('app/stylesheets/*.scss')
    .pipe(compass({
      sass: 'app/stylesheets',
      css: 'public/stylesheets',
      task: 'watch'
    }))
    .pipe(gulp.dest('public/temporary'));
});

gulp.task('smrt', function () {
  return build(smrt(), 'smrt.js');
})

gulp.task('default', ['compass'], function() {
  var bundler = watchify(smrt());

  bundler.on('update', function() {
    build(bundler, 'smrt.js');
    gutil.log('Rebundle...');
  });

  return build(bundler, 'smrt.js');
});











