var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var concat = require('gulp-concat');
var scss = require('gulp-scss');
var scsslint = require('gulp-scss-lint');
var runSequence = require('run-sequence');


var config = {
  port: 5000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist',
    images: './src/images/*',
    js: './src/**/*.js',
    scss: './src/scss/**/*.scss',
    indexJs: './src/index.js',
    cssBundleDistIncludes: [
      './dist/css/includes/lib/bootstrap.css',
      './dist/css/includes/styles.css'
    ]
  },
}
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    fallback: 'dist/index.html',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.indexJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('bundle-css', ['scss-lint'], function() {
  runSequence('scss', function() {
    gulp.src(config.paths.cssBundleDistIncludes)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
      .on('error', console.error.bind(console))
      .pipe(connect.reload());
  });
});

gulp.task('scss-lint', function() {
  return gulp.src(config.paths.scss)
    .pipe(scsslint())
});

gulp.task('scss', function() {
  gulp.src(config.paths.scss)
    .pipe(scss())
    .pipe(gulp.dest(config.paths.dist + '/css/includes'));
});

gulp.task('css', function () {
  gulp.src(config.paths.scss)
  .pipe(pleeease({
    out: 'out.min.css'
  }))
  .pipe(gulp.dest(config.paths.dist + '/css/includes'));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.scss, ['scss', 'scss-lint', 'bundle-css']);
});

gulp.task('default', ['html', 'images', 'js', 'bundle-css', 'connect', 'watch'])