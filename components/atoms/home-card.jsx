export default function HomeCards({ name, title }) {
  let iconCode;

  if (name === "about") {
    iconCode = "perm_contact_calendar";
  } else if (name === "projects") {
    iconCode = "insights";
  } else if (name === "skills") {
    iconCode = "code";
  } else if (name === "funfacts") {
    iconCode = "feed";
  } else {
    iconCode = "error";
  }

  return (
    <section className="home-card" id={`${name}-home-card`}>
      <a href={`#${name}`}>
        <div className="card-content">
          <span className="material-icons card-icon">{iconCode}</span>
          <h2>{title}</h2>
        </div>
      </a>
    </section>
  );
}
