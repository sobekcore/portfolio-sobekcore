import Technologies from "./technologies";

export default function TechPage()
{
  return(
    <div id="tech-page">
      <img src="separator.svg" />
      <article id="tech">
        <h1 id="technologies">Technologies</h1>
        <Technologies />
      </article>
    </div>
  );
}
