import { useState, useRef } from "react";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { smoothScrollAsync } from "@/utility/scroll.js";

let alreadyClicked = false;
let alreadyInteracted = false;

export default function Project({ project }) {
  const [isAnimatedDetails, setAnimateDetails] = useState(true);
  const [isAnimatedImage, setAnimateImage] = useState(false);
  const [isToggled, setToggle] = useState(false);

  const projectElement = useRef();

  let projectDetailsClass = "static";
  let projectImageClass = "static";

  const toggleDescription = async () => {
    if (!alreadyClicked) {
      alreadyClicked = true;
      alreadyInteracted = true;

      await smoothScrollAsync(projectElement.current);

      setAnimateImage(!isAnimatedImage);
      setAnimateDetails(!isAnimatedDetails);

      setTimeout(() => {
        setToggle(!isToggled);
        alreadyClicked = false;
      }, 400);
    }
  };

  if (alreadyInteracted) {
    projectDetailsClass = isAnimatedDetails ? "forward" : "backward";
    projectImageClass = isAnimatedImage ? "forward" : "backward";
  }

  return (
    <section ref={projectElement} className="project-single" style={{ background: project.color }}>
      <div className="project-header">
        <img alt="Logo" className="project-logo" src={project.logo.asset.url} />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-short-desc">{project.short_description}</p>
        </div>
      </div>
      {!isToggled && (
        <img className={`project-img ${projectImageClass}`} src={project.thumbnail.asset.url} />
      )}
      {isToggled && (
        <div className={`project-details ${projectDetailsClass}`}>
          <div className="project-desc">{project.description}</div>
          <div className="project-details-bottom">
            <ul className="project-sites">
              {project.website_link && (
                <li className="project-site">
                  <a className="project-link" href={project.website_link} target="_blank">
                    <MaterialIcon icon="open_in_new" className="project-icon" />
                    <span className="project-link-title">Live preview</span>
                  </a>
                </li>
              )}
              {project.code_link && (
                <li className="project-site">
                  <a className="project-link" href={project.code_link} target="_blank">
                    <MaterialIcon icon="code" className="project-icon" />
                    <span className="project-link-title">Code</span>
                  </a>
                </li>
              )}
            </ul>
            <ul className="project-technologies">
              {project.technologies.map((technology) => (
                <li className="project-technology" key={technology}>
                  <span className="project-technology-name">{technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className={`project-details-toggle ${isToggled ? "left" : "right"}`}>
        {!isToggled && (
          <div className="project-details-toggle-click" onClick={toggleDescription}>
            Details <MaterialIcon icon="east" />
          </div>
        )}
        {isToggled && (
          <div className="project-details-toggle-click" onClick={toggleDescription}>
            <MaterialIcon icon="west" /> Thumbnail
          </div>
        )}
      </div>
    </section>
  );
}
