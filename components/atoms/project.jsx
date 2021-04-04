export default function Project() {
  return (
    <>
      <li className="project-single">
        <div className="project-name">
          <img alt="Logo" className="logo" src="./projects/keyboards-world-logo.png" />
          <a href="https://keyboards-world.netlify.app" target="_blank">
            <h2 title="Open live website">
              Keyboards World <img alt="Link" src="./icons/link.svg" />
            </h2>
          </a>
          <a
            className="code-link"
            href="https://github.com/sobekcore/keyboards-world"
            target="_blank">
            <h2 role="img" title="Open code on GitHub">
              {"</>"}
            </h2>
          </a>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Contentful</li>
          <li>Webpack</li>
        </ul>
        <p>
          Keyboards World is a example e-commerce website. It's made with the most basic web tools,
          yet has great performance. It contains finished shop managed by Contentful and ready to
          connect paying system out of the box.
        </p>
      </li>

      <li className="project-single">
        <div className="project-name">
          <img alt="Logo" className="logo" src="./projects/gamedev-logo.png" />
          <a href="https://gamedev-example.vercel.app" target="_blank">
            <h2 title="Open live website">
              Gamedev Website <img alt="Link" src="./icons/link.svg" />
            </h2>
          </a>
          <a
            className="code-link"
            href="https://github.com/sobekcore/gamedev-website"
            target="_blank">
            <h2 role="img" title="Open code on GitHub">
              {"</>"}
            </h2>
          </a>
        </div>
        <ul>
          <li>Next.js</li>
          <li>CSS</li>
          <li>Sanity.io</li>
          <li>Vercel</li>
        </ul>
        <p>
          Gamedev Website is a simple Server Side Rendered site. It has CMS managed blog, and
          comments system where every visitor can comment any blog post they want to! It's highly
          flexible and can be adjusted to any requirements.
        </p>
      </li>

      <li className="project-single">
        <div className="project-name">
          <img alt="Logo" className="logo" src="./projects/druidism-logo.png" />
          <a href="https://druidism.net" target="_blank">
            <h2 title="Open live website">
              Druidism <img alt="Link" src="./icons/link.svg" />
            </h2>
          </a>
          <a
            className="code-link"
            href="https://github.com/sobekcore/druidism-web-game"
            target="_blank">
            <h2 role="img" title="Open code on GitHub">
              {"</>"}
            </h2>
          </a>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Netlify</li>
        </ul>
        <p>
          Druidism is a web browser platformer game. The game is focused on skill expression thanks
          do advanced and precise movement. It's made with Vanilla JavaScript and HTML Canvas tag.
        </p>
      </li>

      <li className="project-single">
        <div className="project-name">
          <img alt="Logo" className="logo" src="./projects/react-vs-vanilla-logo.png" />
          <a href="https://react-vs-vanilla.netlify.app" target="_blank">
            <h2 title="Open live website">
              React vs Vanilla <img alt="Link" src="./icons/link.svg" />
            </h2>
          </a>
          <a
            className="code-link"
            href="https://github.com/sobekcore/react-vs-vanilla"
            target="_blank">
            <h2 role="img" title="Open code on GitHub">
              {"</>"}
            </h2>
          </a>
        </div>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Netlify</li>
        </ul>
        <p>
          A simple Single Page App made with React, which focus is to show main differences between
          React and Vanilla JavaScript. It contains a lot of animations and modern and clear design.
        </p>
      </li>
    </>
  );
}
