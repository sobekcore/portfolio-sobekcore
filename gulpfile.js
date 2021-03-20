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
    params: { Bucket: "portfolio-sobekcore" },
    credentials: new aws.SharedIniFileCredentials(
      { profile: "default" })
  }
);

// DEVELOPMENT GULP SETUP
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

// BUILD GULP SETUP
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

// PRODUCTION GULP SETUP

// This task is written in a weird way due to AWS S3, because it's Gulp SDK works in async,
// which means some of the Git tasks may behave strangely, chaining it with ifs fixes that problem.
// Also this syntax help with error handling much more due to its stepped structure.
// Which of course is important when publishing to production.
function merge(done)
{
  // 1. Checkout to master branch
  git.checkout("master", function(err) {
    if(err) { throw err; }
    else {
      // 2. Merge from development branch
      git.merge("development", function(err) {
        if(err) throw err;
        else {
          // 3. Push to master
          git.push("origin", "master", function(err) {
            if(err) throw err;
            else {
              // 4. Go back to development branch
              git.checkout("development", function(err) {
                if(err) throw err;
              });
            }
          });
        }
      });
    }
  });

  done();
}

function aws_s3(done)
{
  src("./out/**/*")
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
  done();
}

exports.production = series(
  merge,
  aws_s3,
);
