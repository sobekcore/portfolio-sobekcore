"use strict"

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const argv = require("yargs").argv;
const git = require("gulp-git");
const awspublish = require("gulp-awspublish");
const aws = require("aws-sdk");

// AWS S3 publish credentials
var publisher = awspublish.create(
  {
    region: "eu-central-1",
    params: {
      Bucket: "portfolio-sobekcore"
    },
    credentials: new aws.SharedIniFileCredentials({ profile: "default" })
  }
);

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

exports.dev = watch_sass;

// Build Gulp setup
function add()
{
  return src(".")
    .pipe(git.add());
}

function commit()
{
  if(argv.m)
  {
    return src(".")
      .pipe(git.commit(argv.m));
  }
  else
  { console.log("Commit message is missing!") }
}

function push(done)
{
  git.push("origin", "development", function(err)
    { if(err) throw err; });
  done();
}

exports.build = series(add, commit, push);

// Production Gulp setup
function checkout(done)
{
  git.checkout("master", function(err)
    { if (err) throw err; });
  done();
}

function merge(done)
{
  git.merge("development", function(err)
    { if(err) throw err; });
  done();
}

function aws_s3()
{
  return src("./out/**/*")
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
}

exports.production = series(checkout, merge, aws_s3);
