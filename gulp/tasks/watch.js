let gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create(),
	webpack = require('webpack');

	gulp.task('watch', function() {
		browserSync.init({
			notify: false,
			server: {
			baseDir: "app"
			}
	});
		
		watch('./app/index.html', function() {
			browserSync.reload();
		});
		
		watch('./app/assets/styles/**/*.css', function() {
			gulp.start('cssInject');
		});
	
		 watch('./app/assets/scripts/**/*.js', function() {
		 	gulp.start('scriptsRefresh');
		 });
			
		});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/style.css')
    	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba ,autoprefixer]))
  		.on('error', function(errorInfo) {
	  	console.log(errorInfo.toString());
  		this.emit('end');
  	})
    	.pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/style.css')
	  .pipe(browserSync.stream());
  });
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});

gulp.task('scripts', function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});

   gulp.task('scripts', function(callback) {
 	webpack(require('../../webpack.config.js'), function(err, stats) {
 		if (err) {
 			console.log(err.toString());
 		}
 		console.log(stats.toString());
 		callback();
 	});
 });