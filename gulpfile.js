var gulp = require("gulp"),
    browserify = require("browserify"),
    reactify = require("reactify"),
    del = require("del"),
    source = require("vinyl-source-stream");

gulp.task("clean", function(cb) {
    del(["build"], cb);
});

gulp.task("browserify", function() {
    browserify("app/js/main.js")
        .transform("reactify")
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("copy", function() {
    gulp.src("app/index.html")
        .pipe(gulp.dest("dist"));
    gulp.src("app/css/*.*")
        .pipe(gulp.dest("dist/css"));
    gulp.src("app/js/vendors/*.*")
        .pipe(gulp.dest("dist/js/vendors"));
});

gulp.task("default", ["clean", "browserify", "copy"], function() {
    return gulp.watch("app/**/*.*", ["clean", "browserify", "copy"]);
});
