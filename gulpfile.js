const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const batch = require('gulp-batch')

const scssPath = 'src/client/assets/scss'
const cssPath = 'dist'
const compPath = 'src/client/components'
const containersPath = 'src/client/containers'

gulp.task('sass', function() {
   return gulp.src(scssPath + '/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssPath))
})

gulp.task('watch-sass', function() {
  gulp.watch([
		scssPath + '/meta/*',
		scssPath + '/common.scss',
		scssPath + '/style.scss',
		compPath + '/**/*.scss',
		containersPath + '/**/*.scss'
	], gulp.series('sass'))
})
