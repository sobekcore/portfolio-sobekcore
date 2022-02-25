"use strict";

const { src, dest, watch, series } = require("gulp");
const { argv } = require("yargs");
const sass = require("gulp-sass");
const git = require("gulp-git");

const awspublish = require("gulp-awspublish");
const aws = require("aws-sdk");

// AWS S3 Publish Credentials
const publisher = awspublish.create({
  region: "eu-central-1",
  params: { Bucket: "www.sobekcore.com" },
  credentials: new aws.SharedIniFileCredentials({
    profile: "default",
  }),
});

/**
 * DEVELOPMENT
 *
 * Watches for changes in Sass files and
 * compile them into a single CSS file.
 */
{
  function compileSassToCss(done) {
    return src("./styles/sass/index.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(dest("./styles"))
      .on("end", () => done());
  }

  function watchSassForChanges() {
    watch("./styles/sass/**/*", compileSassToCss);
  }

  exports.dev = series(
    watchSassForChanges,
  );
}

/**
 * BUILD
 *
 * 1. Adds changes to the git staging environment.
 * 2. Commits changes to the current branch.
 * 3. Pushes development branch to the remote origin.
 */
{
  function stageAllFiles(done) {
    return src(".")
      .pipe(git.add())
      .on("end", () => done());
  }

  function commitAllChanges(done) {
    if (argv.m) {
      return src(".")
        .pipe(git.commit(argv.m))
        .on("end", () => done());
    }

    console.error("Commit message is missing.");
  }

  function pushToDevelopment(done) {
    git.push("origin", "development", (err) => {
      if (err) throw err;
      return done();
    });
  }

  exports.build = series(
    stageAllFiles,
    commitAllChanges,
    pushToDevelopment,
  );
}

/**
 * PRODUCTION
 *
 * 1. Checkouts to the master branch.
 * 2. Merges changes from the development branch.
 * 3. Pushes changes to the master branch.
 * 4. Goes back to the development branch.
 */
{
  function checkoutToMaster(done) {
    git.checkout("master", (err) => {
      if (err) throw err;
      return done();
    });
  }

  function mergeDevelopment(done) {
    git.merge("development", function (err) {
      if (err) throw err;
      return done();
    });
  }

  function pushToMaster(done) {
    git.push("origin", "master", (err) => {
      if (err) throw err;
      return done();
    });
  }

  function checkoutToDevelopment(done) {
    git.checkout("development", (err) => {
      if (err) throw err;
      return done();
    });
  }

  function pushToAWS(done) {
    return src("./out/**/*")
      .pipe(publisher.publish())
      .pipe(publisher.sync())
      .pipe(awspublish.reporter())
      .on("end", () => done());
  }

  exports.production = series(
    checkoutToMaster,
    mergeDevelopment,
    pushToMaster,
    checkoutToDevelopment,
    pushToAWS,
  );
}
