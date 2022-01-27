// 打包css代码

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // 专门用来将sass —> css
const minifyCSS = require('gulp-minify-css'); // 压缩css代码

gulp.task('sass', async function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});