<h1 align="center">
  Sobek's Developer Portfolio
</h1>

This portfolio is a showcase of my skills and known technologies, as well as brief description about me and projects that i've made. It's made with Next.js, Sass and Gulp. Hosted on AWS S3. Modern, simple and clear. Hopefully somewhat eye-pleasing :wink:

## How it's working?
<img
  align="center"
  alt="Project Block Diagram"
  src="https://user-images.githubusercontent.com/74379676/111088724-d691d680-8528-11eb-9cf4-5b483fe26f53.png"
/>

The site's core is Next.js and Sass, Next is firstly build and then exported into static files. Sass is complied into one chonky optimized .css file. Then most of the tasks are automated with Gulp, such as committing to GitHub, creating development enviroments etc.

## How to run it locally?
Running various tasks is alot easier thanks to Gulp, and chaining tasks with him. To run development enviroment simply use:
```
npm run dev
```
which will run **`next dev`** and **`gulp dev`**.
To do building process run:
```
npm run build -- -m "<your message>"
```
which will run **`next build`**, **`next export`** and **`gulp build`**. Everything with 1 command! Remember: to to run build command you must either have development branch in your git repository, or change branch name in the **`gulpfile.js`**.

## Contribution
If you'd like to contribute in any way, feel free to. Write a message to me in any media im in. If you have literally any idea, any bug, anything - just write me it. You can find my media on my main README file on GitHub. If you have read up to this point, thank you! It means alot to me.
