import MaterialIcon from "@/components/atoms/MaterialIcon";

export default function Project({ project }) {
  return (
    <section className="project-single" style={{ background: project.color }}>
      <div className="project-header">
        <img alt="Logo" className="project-logo" src={project.logo.asset.url} />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      </div>
      <img className="project-img" src={project.thumbnail.asset.url} />
      <div className="project-details">
        <ul className="project-sites">
          <li className="project-site">
            <a className="project-link" href={project.website_link} target="_blank">
              <MaterialIcon icon="home" className="project-icon" />
            </a>
            <span className="project-badge live">Live</span>
          </li>
          <li className="project-site">
            <a className="project-link" href={project.code_link} target="_blank">
              <MaterialIcon icon="code" className="project-icon" />
            </a>
            <span className="project-badge code">Code</span>
          </li>
        </ul>
        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li className="project-technology" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
