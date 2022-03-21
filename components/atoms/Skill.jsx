export default function Skill({ skill }) {
  return (
    <section className="skill-single">
      <div className="skill-content">
        <img className="skill-img" alt={skill.name} src={skill.image.url} />
        <div className="skill-desc">
          <h3 className="skill-title">{skill.name}</h3>
          <ul className="skill-details">
            {skill.details.map((detail) => (
              <li className="skill-detail" key={detail}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
