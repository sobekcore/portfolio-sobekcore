import Technologies from "../molecules/technologies";

export default function TechSection() {
  return (
    <div id="tech-page">
      <img id="tech-separator" src="separator-tech.svg" />
      <article>
        <h1 id="technologies">Technologies</h1>
        <Technologies />
      </article>
    </div>
  );
}
