var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
gulp.task('log', function(){
	gutil.log('== My Log Task ==')
});
gulp.task('sass', function(){
	gulp.src('scss/app.scss')
	.pipe(sass({style: 'expanded'}))
		.on('error', gutil.log)
	.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);