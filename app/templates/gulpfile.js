var gulp       = require('gulp')
  , cucumber   = require('gulp-cucumber')
  , cache      = require('gulp-cached');

gulp.task('test', function () {
    var argv = require('yargs').default('feature','*').argv;
    var src = 'features/'+argv.feature+'.feature';
    return gulp.src([src])
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