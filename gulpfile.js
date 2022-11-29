const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const reload = browserSync.reload;
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const concat = require("gulp-concat");


function bindlessStyles() {
    return gulp.src('./css/**/*.scss')
        .pipe(concat('./style.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "IE 9"]
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/'));
}

function server () {
    browserSync.init({
        baseDir: "./",
        watch: true,
        server: "./"
    });
    gulp.watch(('./css/**/*.scss'), bindlessStyles)
    gulp.watch("./**/*.html").on('change', reload);
}

gulp.task('serve',server);

exports.bindlessStyles = bindlessStyles

gulp.task('default', gulp.series(['serve']));
