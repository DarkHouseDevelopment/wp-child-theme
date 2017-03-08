var 	gulp = require("gulp"),
		sass = require("gulp-sass"),
		compass = require('gulp-compass'),
		watch = require('gulp-watch'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify');


// Compiles all gulp tasks
gulp.task("default", ["sass", "js", "watch" ]);


// Concat JS
gulp.task("js", function() {
	gulp.src("_source/js/*")
	.pipe(
		uglify({
			preserveComments: 'some'
		})
	)
	.pipe(gulp.dest("assets/js/"))

});

// Compile SASS files
gulp.task("sass", function() {
	gulp.src("_source/scss/styles.scss")
		.pipe(compass({
	      config_file: 'config.rb',
	      css: 'assets/css',
	      sass: '_source/scss'
	    })
		.on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))

		.pipe(gulp.dest("assets/css/"));
});

// Watch
gulp.task("watch", function() {
	watch('_source/scss/**/*.scss', function() { gulp.start('sass'); });
	watch('_source/js/**/*.js', function() { gulp.start('js'); });
});