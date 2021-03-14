"use strict"

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");

// Development Gulp setup
function compile_sass(done)
{
  src("./styles/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./styles/css"));
  done();
}

function watch_sass()
{ watch("./styles/sass/*", compile_sass); }

exports.dev = series(watch_sass);
