import Projects from "../molecules/projects";

export default function ProjectsSection({ projects }) {
  return (
    <article id="projects">
      <Projects projects={projects} />
    </article>
  );
}
