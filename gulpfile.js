/* gulp dependencies */
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var gulpFilter = require('gulp-filter');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var lessDependents = require('gulp-less-dependents');
var bower = require('gulp-bower');
var concat_vendor = require('gulp-concat-vendor');
var jshint = require('gulp-jshint');

/* path def */
var path = {
  MARKUP: [
  	'src/*.hbs', 
  	'src/partials/*.hbs'
  ],
  JS: [
  	'src/assets/js/*.js'
  ],
  LESS: [
  	'src/assets/less/style.less'
  ],
  LESS_ALL: [
  	'src/assets/less/*.less',
  	'src/assets/less/**/*.less'
  ], 
  FONTS: [
	  'src/assets/fonts/**'
  ],
  IMG: [
  	'src/assets/img/**'
  ],
  VENDOR: [
    'bower_components/jquery/dist/jquery.js'
  ],
  DIST: './'
};

var all_tasks = ['lint', 'less', 'js', 'vendor', 'markup', 'img', 'misc'];

gulp.task('lint', function() {
  return gulp.src(path.JS)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

/* compile less */
gulp.task('less', function () {
  gulp.src(path.LESS)
  	.pipe(lessDependents())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.DIST + '/assets/css'));
});

/* concat and compress app scripts */
gulp.task('js', function () {
  gulp.src(path.JS)
  	.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(path.DIST + '/assets/js'));
});

/* copy over markups */
gulp.task('markup', function(){
  gulp.src(path.MARKUP, {base: 'src'})
    .pipe(gulp.dest(path.DIST));
});

/* compress images */
gulp.task('img', function(){
  gulp.src(path.IMG)
    .pipe(imagemin())
    .pipe(gulp.dest(path.DIST + '/assets/img'));
});

/* vendor js */
gulp.task('vendor', function() {
  gulp.src(path.VENDOR)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.DIST + '/assets/js'));
});

/* misc */
gulp.task('misc', function(){
	// favicon
  gulp.src('src/assets/favicon/*')
    .pipe(gulp.dest(path.DIST + '/assets/favicon'));
  // fonts
  gulp.src('src/assets/fonts/**')
  	.pipe(gulp.dest(path.DIST + '/assets/fonts'));
});

/* watch all changes */
gulp.task('watch', function () {
  gulp.watch(path.LESS_ALL, ['less']);
  gulp.watch(path.JS, ['lint', 'js']);
  gulp.watch(path.VENDOR, ['vendor']);
  gulp.watch(path.MARKUP, ['markup','misc']);
  gulp.watch(path.IMG, ['img']);
});


/* defualt */
gulp.task('default', all_tasks);
