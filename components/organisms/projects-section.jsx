import Projects from "../molecules/projects";

export default function ProjectsSection({ projects }) {
  return (
    <div id="projects-page">
      <article>
        <h1 id="projects">Projects</h1>
        <Projects projects={projects} />
      </article>
    </div>
  );
}
