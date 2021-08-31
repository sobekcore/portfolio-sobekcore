import React from "react";
import Project from "../atoms/project";

export default function Projects({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <React.Fragment key={project.title}>
          {project.visibility && <Project project={project} />}
        </React.Fragment>
      ))}
    </>
  );
}
