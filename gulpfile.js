var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 编译sass
gulp.task('sass', function() {
    // gulp.src('./scss/*.scss')
    //     .pipe(sass())
    //     .pipe(gulp.dest('./css'))
})

// 合并，压缩文件
gulp.task('scripts', function() {
    // gulp.src('./js/*js')
    //     .pipe(concat('all.js'))
    //     .pipe(gulp.dest('./dest'))
    //     .pipe(rename('all.min.js'))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('./dest'))
}) 



gulp.task('test', function(cb){
    setTimeout(()=> {
        console.log('this is test')
        cb && cb()
    }, 5000)
})

gulp.task('test1', ['test'], function() {
    console.log('this is test1')
})

// 默认任务
gulp.task('default', function() {
    // gulp.run('sass', 'scripts');

    // // 监听文件变化
    // gulp.watch('./js/*.js', function() {
    //     gulp.run('sass', 'scripts')
    // })    
})