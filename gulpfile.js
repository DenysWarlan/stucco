const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const reload = browserSync.reload;
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const concat = require("gulp-concat");


function concatStyles() {
    return gulp.src('./css/**/*.scss')
        .pipe(concat('./style.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
}

// function buildgcmq() {
//     return  gulp.src('./css/***.css')
//         .pipe(gcmq())
//         .pipe(gulp.dest('css'));
//
// }

function server () {
    // Serve files from the root of this project
    browserSync.init({
        baseDir: "./",
        watch: true,
        server: "./"
    });
    gulp.watch(('./css/**/*.scss'), gulp.series(['css']))
    gulp.watch("./**/*.html").on('change', reload);
}

gulp.task('css', concatStyles);
// gulp.task('buildStyles', buildStyles);
// gulp.task('css', gulp.series(['concatStyles', 'buildStyles']));
// gulp.task('gcmq', buildgcmq);

gulp.task('serve',server);

const styleWatch = () => {
    gulp.watch(('./css/**/*.scss'), concatStyles)

}

exports.compileScss = styleWatch

gulp.task('default', gulp.series(['serve']));
