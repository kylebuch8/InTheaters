(function () {
    'use strict';

    var gulp = require('gulp'),
        colors = require('colors');

    gulp.task('build', function () {
        var uglify = require('gulp-uglify');

        gulp.src('app/scripts/**/*.js')
            .pipe(uglify({
                mangle: true,
                outSourceMap: true
            }))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('connect', function () {
        var connect = require('connect'),
            serveStatic = require('serve-static'),
            app = connect()
                .use(require('connect-livereload')({ port: 35729 }))
                .use(serveStatic('app'));

        require('http').createServer(app)
            .listen(9000)
            .on('listening', function () {
                console.log('Connected on port 9000');
            });
    });

    gulp.task('serve', ['connect'], function () {
        require('opn')('http://localhost:9000');
    });

    gulp.task('server', ['connect', 'serve'], function () {
        var livereload = require('gulp-livereload'),
            server = livereload();

        gulp.watch('app/**').on('change', function (file) {
            server.changed(file.path);
        });
    });

    gulp.task('default', ['server']);
}());