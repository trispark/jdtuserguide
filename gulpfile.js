var paths = {
  templates: 'templates'
};

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    path = require('path');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// create a default task and just log a message
gulp.task('makedist',['fileinclude'],function() {
  return gutil.log('Finished makedist task.')
});


gulp.task('fileinclude',['move'], function() {
  return gulp.src(path.join(paths.templates, '*.tpl.html'))
      .pipe(fileinclude())
      .pipe(rename({
        extname: ""
      }))
      .pipe(rename({
        extname: ".html"
      }))
      .pipe(gulp.dest('dist'));
});


var filesToMove = [
  './css/**/*.*',
  './fonts/**/*.*',
  './js/**/*.*'
];

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
      .pipe(clean());
});

gulp.task('move',['clean'], function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './' })
      .pipe(gulp.dest('dist'));
});




