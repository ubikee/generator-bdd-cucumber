var gulp       = require('gulp')
  , cucumber   = require('gulp-cucumber')
  , cache      = require('gulp-cached');

gulp.task('test', function () {
    return gulp.src(['*features/*.feature'])
        .pipe(cache('features'))
        .pipe(cucumber({
            'steps'   : '*features/steps/*.js',
            'support' : '*features/support/*.js',
            'format'  : 'pretty',
            'tags'    : '~@ignore'
        }));
});

gulp.task('testing', function () {
    gulp.watch(['*features/*.feature'],['test'])
});