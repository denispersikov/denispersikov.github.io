const gulp = require('gulp');
const sass = require('gulp-sass'); 
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');


const src = './src/';
const www = './www/';
const scss = src + 'index.scss';
const scssWatch = src + '**/*.scss';
const html = src + 'pages/**/*.ejs';
const htmlWww = src + 'pages';
const htmlWatch = src + '**/*.ejs';


function onHtml() {
    return gulp.src(html)
        .pipe(ejs())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest(htmlWww));                
}
function onSass() {
    return gulp.src(scss)   
        .pipe(sass())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(www))                  
}

gulp.task('html', onHtml);

gulp.task('sass', onSass);

gulp.task('watch', () => {
    gulp.watch([scssWatch, htmlWatch], gulp.series(onHtml, onSass)) 
});

