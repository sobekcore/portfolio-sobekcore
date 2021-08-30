import MaterialIcon from "./material-icon";

export default function OtherHeader({ title, iconCode }) {
  return (
    <div className="other-header">
      <h3 className="other-title">{title}</h3>
      <MaterialIcon iconCode={iconCode} className="other-icon" />
    </div>
  );
}
