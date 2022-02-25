import { Fragment as ReactFragment } from "react";
import Project from "@/components/atoms/Project";

export default function Projects({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ReactFragment key={project.title}>
          {project.visibility && <Project project={project} />}
        </ReactFragment>
      ))}
    </>
  );
}
