export default function ScrollItem({ type, width }) {
  let iconCode;

  if (type === "about") {
    iconCode = "perm_contact_calendar";
  } else if (type === "projects") {
    iconCode = "insights";
  } else if (type === "skills") {
    iconCode = "code";
  } else if (type === "other") {
    iconCode = "feed";
  } else {
    iconCode = "error";
  }

  return (
    <li className={"sidebar-scroll-item " + type} style={{ width: width + "%" }}>
      <a className="sidebar-scroll-link" href={"#" + type}>
        <span className="material-icons sidebar-scroll-icon">{iconCode}</span>
        {type.replace(/^\w/, (s) => s.toUpperCase())}
      </a>
    </li>
  );
}
