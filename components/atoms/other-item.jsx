import MaterialIcon from "./material-icon";

export default function OtherItem({ text }) {
  return (
    <p className="other-item">
      <MaterialIcon iconCode="circle" className="other-item-icon" />
      {text}
    </p>
  );
}
