export default function Project({ project }) {
  return (
    <section className="project-single" style={{ background: project.color }}>
      <div className="project-name">
        <img alt="Logo" className="logo" src={project.logo.asset.url} />
        <h2>{project.title}</h2>
      </div>
      <img className="project-img" src={project.thumbnail.asset.url} />
      <p className="project-desc">{project.description}</p>
      <div className="project-details">
        <ul className="project-sites">
          <li className="project-site">
            <a className="project-link" href={project.website_link} target="_blank">
              <span className="material-icons project-icon">home</span>
            </a>
            <span className="project-badge live">Live</span>
          </li>
          <li className="project-site">
            <a className="project-link" href={project.code_link} target="_blank">
              <span className="material-icons project-icon">code</span>
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
