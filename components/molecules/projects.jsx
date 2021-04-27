import React from "react";
import Project from "../atoms/project";

export default function Projects({ projects }) {
  return (
    <section>
      <ul id="projects-all">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            {project.visibility && <Project project={project} />}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
