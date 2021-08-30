import MaterialIcon from "./material-icon";

export default function HomeCards({ name, title }) {
  let iconCode;

  if (name === "projects") {
    iconCode = "table_view";
  } else if (name === "skills") {
    iconCode = "code";
  } else if (name === "about") {
    iconCode = "perm_contact_calendar";
  } else if (name === "other") {
    iconCode = "feed";
  } else {
    iconCode = "error";
  }

  return (
    <section className="home-card" id={`${name}-home-card`}>
      <a className="home-card-link" href={`#${name}`}>
        <div className="home-card-content">
          <MaterialIcon iconCode={iconCode} className="home-card-icon" />
          <h2 className="home-card-title">{title}</h2>
        </div>
      </a>
    </section>
  );
}
