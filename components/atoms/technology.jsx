export default function Technology({ technology }) {
  return (
    <li className="tech-single">
      <div className="tech-card">
        <div className="tech-card-front">
          <img alt={technology.name} src={technology.image.url} />
          <h2>{technology.name}</h2>
        </div>
        <div className="tech-card-back">
          <ul className="skills">
            {technology.details.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
