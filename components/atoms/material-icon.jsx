export default function MaterialIcon({ iconCode, className }) {
  return (
    <span className={"material-icons " + className} role="img">
      {iconCode}
    </span>
  );
}
