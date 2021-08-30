import MaterialIcon from "./material-icon";

export default function ScrollItem({ type, width }) {
  let iconCode;

  if (type === "projects") {
    iconCode = "table_view";
  } else if (type === "skills") {
    iconCode = "code";
  } else if (type === "about") {
    iconCode = "perm_contact_calendar";
  } else if (type === "other") {
    iconCode = "feed";
  } else {
    iconCode = "error";
  }

  return (
    <li className={"sidebar-scroll-item " + type} style={{ width: width + "%" }}>
      <a className="sidebar-scroll-link" href={"#" + type}>
        <MaterialIcon iconCode={iconCode} className="sidebar-scroll-icon" />
        {type.replace(/^\w/, (s) => s.toUpperCase())}
      </a>
    </li>
  );
}
