export default function Project({ project }) {
  return (
    <li className="project-single">
      <div className="project-name">
        <img alt="Logo" className="logo" src={project.logo.url} />
        <a href={project.links.website} target="_blank">
          <h2 title="Open live website">{project.title}</h2>
        </a>
        <a className="code-link" href={project.links.code} target="_blank">
          <h2 role="img" title="Open code on GitHub">
            {"</>"}
          </h2>
        </a>
      </div>
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <p>{project.descriptions.long}</p>
    </li>
  );
}
