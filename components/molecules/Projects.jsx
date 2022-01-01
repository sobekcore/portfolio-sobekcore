import React from "react";
import Project from "@/components/atoms/Project";

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
