<h1 align="center">
  Sobek's Developer Portfolio
</h1>

This portfolio is a showcase of my skills and known technologies, as well as brief description about me and projects that i've made. It's made with Next.js, Sass and Gulp. Hosted on AWS S3. Modern, simple and clear. Hopefully somewhat eye-pleasing :wink:

## How it's working?
<img
  align="center"
  alt="Project Block Diagram"
  title="Click if its too small"
  src="https://user-images.githubusercontent.com/74379676/111089845-d21bec80-852d-11eb-8a9a-841a2d0e803f.png"
/>

The site's core is Next.js and Sass, Next is firstly build and then exported into static files. Sass is complied into one chonky optimized .css file. Then most of the tasks are automated with Gulp, it helps alot with development and deployment. The automated tasks are:
* creating development enviroment (node server, watching .scss files, compiling it to .css)
* building & exporting static Next.js site with pushing to development GitHub branch
* creating production build and pushing files to AWS S3, as well as pushing to master branch

## How to run it locally?
Running various tasks is a lot easier thanks to Gulp, and chaining tasks with him. For example, one of the convenient commands is to run development environment, to do so use:
```
npm run dev
```
which will run **`next dev`** and **`gulp dev`**. \
To do building process run:
```
npm run build -- -m "<your message>"
```
which will run **`next build`**, **`next export`** and **`gulp build`**. Everything with 1 command! Remember: to run build command you must either have development branch in your git repository, or change branch name in the **`gulpfile.js`**.

However, if you'd like to publish it on your own AWS S3 bucket type:
```
npm run production -- -m "<your master message>"
```
which will run **`gulp production`**. And before that you must setup your AWS locally and your bucket. There are few things you must do, like enable public bucket, configure user rights & create admin profile on AWS IAM etc. You'll find tons of great tutorial on the web for sure!

## Contribution
If you'd like to contribute in any way, feel free to. Write a message to me in any media im in. If you have literally any idea, any bug, anything - just write me it. You can find my media on my main README file on GitHub. If you have read up to this point, thank you! It means alot to me.
