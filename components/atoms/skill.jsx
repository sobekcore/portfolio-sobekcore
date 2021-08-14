export default function Skill({ skill }) {
  return (
    <li className="skill-single">
      <div className="skill-card">
        <div className="skill-card-front">
          <img alt={skill.name} src={skill.image.asset.url} />
          <h2>{skill.name}</h2>
        </div>
        <div className="skill-card-back">
          <ul className="skills">
            {skill.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
