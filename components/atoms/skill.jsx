export default function Skill({ skill }) {
  return (
    <section className="skill-single">
      <img className="skill-img" alt={skill.name} src={skill.image.asset.url} />
      <div className="skill-desc">
        <h2 className="skill-title">{skill.name}</h2>
        <ul className="skill-details">
          {skill.details.map((detail) => (
            <li className="skill-detail" key={detail}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
