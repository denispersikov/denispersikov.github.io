var gulp = require('gulp'),
    sass = require('gulp-sass'); 

gulp.task('sass', function() {
    return gulp.src('hardware-store/**/*.scss')   
    .pipe(sass())
    .pipe(gulp.dest('hardware-store/css'))                      
});


gulp.task('watch', function(){
    gulp.watch('hardware-store/**/*.scss', gulp.series ('sass'))
});