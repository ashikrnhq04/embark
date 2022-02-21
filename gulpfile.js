const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const watch = require("gulp-watch");

gulp.task("styles", () => {
  return gulp
    .src("assets/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

/* gulp.task("clean", () => {
  return del(["assets/css/style.css"]);
}); */

gulp.task("watch", () => {
  gulp.watch(["assets/sass/*.scss", "assets/sass/*/*.scss"], (done) => {
    gulp.series(["styles"])(done);
  });
});

gulp.task("default", gulp.series(["watch"]));
