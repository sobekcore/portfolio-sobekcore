"use strict"

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const argv = require("yargs").argv;
const git = require("gulp-git");

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

// Build Gulp setup
function add()
{
  return src('.')
    .pipe(git.add());
}

function commit()
{
  if(argv.m)
  {
    return src('.')
      .pipe(git.commit(argv.m));
  }
  else
  { console.log("Commit message is missing!") }
}

function push()
{
  git.push("origin", "development", function(err)
    { if(err) throw err; }
  );
}

exports.build = series(add, commit, push);
