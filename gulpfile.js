
let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('./src/assets/sass/**/*.scss')
               .pipe(sass({
                   outputStyle: 'compressed'
                }).on('error', sass.logError))
               .pipe(autoprefixer({
                   browsers: ['last 2 versions'],
                   cascade: false
               }))
               .pipe(rename({
                    suffix: '.min'
                }))
               .pipe(gulp.dest('./public_html/assets/css'))
});

gulp.task('watch', () => {
    gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});
