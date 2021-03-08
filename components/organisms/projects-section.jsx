import Projects from "../molecules/projects";

export default function ProjectsSection()
{
  return(
    <div id="projects-page">
      <article>
        <h1 id="projects">Projects</h1>
        <Projects />
      </article>
      <img id="footer-separator" src="separator-footer.svg" />
    </div>
  );
}
