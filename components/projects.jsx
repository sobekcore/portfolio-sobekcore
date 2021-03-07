import Link from "next/link";

export default function Projects()
{
  return(
    <section>
      <ul id="projects-all">
        <li className="project-single">
          <div className="project-name">
            <img className="logo" src="./projects/keyboards-world-logo.png" />
            <Link href="https://keyboards-world.netlify.app">
              <h2>Keyboards World</h2>
            </Link>
          </div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Contentful</li>
            <li>Netlify</li>
          </ul>
          <p>
            Keyboards World is a example e-commerce website. <br />
            It's made with the most basic web tools, yet has great <br />
            performance. It contains finished shop managed by Contentful <br />
            and ready to connect paying system out of the box.
          </p>
        </li>

        <li className="project-single">
          <div className="project-name">
            <img className="logo" src="./projects/gamedev-logo.png" />
            <Link href="https://gamedev-example.vercel.app">
              <h2>Gamedev Website</h2>
            </Link>
          </div>
          <ul>
            <li>Next.js</li>
            <li>CSS</li>
            <li>Sanity.io</li>
            <li>Vercel</li>
          </ul>
          <p>
            Gamedev Website is a simple Server Side Rendered site. <br />
            It has CMS managed blog, and comments system where every <br />
            visitor can comment any blog post they want to! It's highly <br />
            flexible and can be adjusted to any requirements.<br />
          </p>
        </li>

        <li className="project-single">
          <div className="project-name">
            <img className="logo" src="./projects/druidism-logo.png" />
            <Link href="https://druidism.net">
              <h2>Druidism</h2>
            </Link>
          </div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Netlify</li>
          </ul>
          <p>
            Druidism is a web browser platformer game. The game is focused <br />
            on skill expression thanks do advanced and precise movement. <br />
            It's made with Vanilla JavaScript and HTML Canvas tag. <br />
          </p>
        </li>

        <li className="project-single">
          <div className="project-name">
            <img className="logo" src="./projects/react-vs-vanilla-logo.png" />
            <Link href="https://react-vs-vanilla.netlify.app/">
              <h2>React vs Vanilla</h2>
            </Link>
          </div>
          <ul>
            <li>React</li>
            <li>Sass</li>
            <li>Netlify</li>
          </ul>
          <p>
            A simple Single Page App made with React, which focus is to <br />
            show main diferences between React and Vanilla JavaSciprt. <br />
            It's made with Vanilla JavaScript and HTML Canvas tag. <br />
          </p>
        </li>
      </ul>
    </section>
  );
}
