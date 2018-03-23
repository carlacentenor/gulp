var gulp = require('gulp'); // npm i gulp -D instalar gulp
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minifycss = require('gulp-minify-css'); //npm i gulp-minify-css -D
var sass = require('gulp-sass'); //npm install gulp-sass -D

// minificar js
gulp.task('js',function(){ // instalar  npm i gulp-concat gulp-uglify gulp-babel -D
    return gulp.src('src/js/*.js')// todos los archivos con extension js de la carpeta js
    .pipe(concat('app.min.js')) // 1ero concatena
    .pipe(babel({presets:['env']})) // 2do transpila
    .pipe(uglify()) // minimiza
    .pipe(gulp.dest('dist/js/')) 
})

// npm install babel-core babel-preset-env -D instalarlos para que se ejecute

// minificar css
gulp.task('css',function(){
    return gulp.src(['src/css/*.css','src/sass/*.scss']) // se agrega la nueva ruta donde se encuentra los sass
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
})

// una tarea que ejecuta todo
gulp.task('minifica-todo',['css','js'])

// va actualizando ante cualquier cambio
gulp.task('watch', function(){
    gulp.watch(['src/css/*.css', 'src/sass/*.scss'], ['css']);
    gulp.watch('src/js/*.js', ['js']);
  })

  // investigar gulp-gh-pages