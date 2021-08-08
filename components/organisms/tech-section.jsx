import Technologies from "../molecules/technologies";

export default function TechSection({ technologies }) {
  return (
    <div id="tech-page">
      <article>
        <h1 id="technologies">Technologies</h1>
        <Technologies technologies={technologies} />
      </article>
    </div>
  );
}
