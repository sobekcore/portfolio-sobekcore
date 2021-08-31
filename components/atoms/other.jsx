import MaterialIcon from "./material-icon";

export default function Other({ other }) {
  return (
    <section className="other-section">
      <div className="other-header">
        <h3 className="other-title">{other.title}</h3>
        <MaterialIcon iconCode={other.icon} className="other-icon" />
      </div>
      <ul className="other-list">
        {other.details.map((detail) => (
          <li className="other-item" key={detail}>
            <MaterialIcon iconCode="circle" className="other-item-icon" />
            {detail}
          </li>
        ))}
      </ul>
    </section>
  );
}
