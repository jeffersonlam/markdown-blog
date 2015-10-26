var gulp = require('gulp');
var browserSync = require('browser-sync');
var markdown = require('gulp-markdown');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream:true}));
});

gulp.task('markdown', function () {
  return gulp.src('markdown/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('dist/md'));
});

gulp.task('watch', function() {
  gulp.watch('markdown/*.md', ['markdown']);
  gulp.watch('scss/**/*.scss', ['scss']);
  gulp.watch('js/*.js', ['jshint', 'js']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['html', 'markdown', 'browser-sync', 'watch']);
