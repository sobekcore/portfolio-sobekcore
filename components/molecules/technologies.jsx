import React from "react";
import Technology from "../atoms/technology";

export default function Technologies({ technologies }) {
  return (
    <section>
      <ul id="tech-all">
        {technologies.map((technology) => (
          <React.Fragment key={technology.name}>
            {technology.visibility && <Technology technology={technology} />}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
