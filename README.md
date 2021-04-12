<h1 align="center">
  Sobek's Developer Portfolio
</h1>

This portfolio is a showcase of my skills and known technologies, as well as brief description about me and projects that i've made. It's made with Next.js, Sass and Gulp. Hosted on AWS S3. Uses best web practises and modern front-end technologies. Hopefully also somewhat eye-pleasing...

## How it's working?
<img
  align="center"
  alt="Project Block Diagram"
  title="Click if its too small"
  src="https://user-images.githubusercontent.com/74379676/112515748-d8646100-8d96-11eb-84b4-4acd577de46f.png"
/>

The site's core is **`Next.js`** and **`Sass`**, Next is firstly built into optimized build and then exported into static files. In the meantime **`ESLint`**, **`Stylelint`** and **`Prettier`** helps me with maintaining same coding style all along. After that Sass is complied into one chonky optimized .css file. Then most of the tasks are automated with **`Gulp`** combined with **`npm scripts`**, it helps alot with development and deployment. The automated tasks are:
* creating development enviroment (node server, watching .scss files, compiling it to .css)
* building & exporting static Next.js site with pushing to development GitHub branch
* creating production build and pushing files to AWS S3, as well as pushing to master branch
* running linter through whole project in the form of ESLint, Stylelint and Prettier

Everything might seems simple, but **`AWS`** is a whole different beast, and its a lot more complicated than i've shown here. If you are interested in a bit more detailed AWS setup, then this section is for you. Below there is a diagram which shows more or less how my AWS is setted up.

<img
  align="center"
  alt="AWS Block Diagram"
  title="Click if its too small"
  src="https://user-images.githubusercontent.com/74379676/112554171-19c03500-8dc6-11eb-8fc4-e24975573ded.png"
/>

As you can see firstly static files are imported into AWS S3 which is configured in a way to serve static websites. Then it is passed thru CloudFront which certificates site with SSL as well as optimizes it to work as fast and as good as possible. Then the optimized site is connected to Route 53 which holds domain from Google Domains with DNS, and then connects the bucket static site to the domain.

After all of that one last thing is to check on the bucket temporary website link if the site looks fine, if everything looks OK i can allow acces to the CloudFront to fetch files from the S3 bucket, then the website goes live. That's how it works in a nutshell.

## How to run it locally?
Running various tasks is a lot easier thanks to Gulp and npm scripts, and chaining tasks with them. For example, one of the convenient commands is to run development environment, to do so use:
```
npm run dev
```
which will run **`next dev`** and **`gulp dev`**. \
To do building process run:
```
npm run build -- -m "<your message>"
```
which will run **`next build`**, **`next export`** and **`gulp build`**. Everything with 1 command! Remember: to run build command you must either have development branch in your git repository, or change branch name in the **`gulpfile.js`**.

However, if you'd like to publish it on your own AWS S3 bucket, type:
```
npm run production
```
which will run **`gulp production`**. And before that you must setup your AWS locally and your bucket. There are few things you must do, like enable public bucket, configure user rights & create admin profile on AWS IAM etc. You'll find tons of great tutorials on the web how to do so for sure.

If you cant get it right tho, you can setup your own publishing system on any platform you want! The project base should be compatible most of the hosting services available out there.

## Project structure
Project is made with Atomic Design, which is focused on creating better maintained components & breaking them into more simpler ones. You can find all the smallest possible components in **`/components/atoms`** folder, there should be stuff like single buttons, inputs, titles etc. Slightly bigger ones like collections of buttons, multiple entries listed etc. should be in **`/components/molecules`** folder. And the biggest ones like whole forms, sections etc. should be in the **`/components/organisms`** folder. From on there you can "build" your pages in either templates folder or if its SPA simply in index.jsx.

Branches are structured in a way that all the smaller builds are deployed to **`development`** branch and are avaiable there, those might be sometimes ahead of the current live website state. However main builds that are live on the website are avaiable on **`master`** branch, and are 100% matched with the current website state.

## Contribution
If you'd like to contribute in any way, feel free to. Write a message to me in any media im in. If you have literally any idea, any bug, anything - just write me it. You can find my media on my main README file on GitHub. If you have read up to this point, thank you! It means alot to me.
