export default function MaterialIcon({ icon, className }) {
  let finalClassName = className ? `material-icons ${className}` : "material-icons";

  return (
    <span className={finalClassName} role="img">
      {icon}
    </span>
  );
}
