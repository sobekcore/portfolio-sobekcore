import Technologies from "../molecules/technologies";

export default function TechSection({ technologies }) {
  return (
    <div id="tech-page">
      <img id="tech-separator" src="separator-tech.svg" />
      <article>
        <h1 id="technologies">Technologies</h1>
        <Technologies technologies={technologies} />
      </article>
    </div>
  );
}
