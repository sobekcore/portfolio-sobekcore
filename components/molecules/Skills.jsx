import React from "react";
import Skill from "@/components/atoms/Skill";

export default function Skills({ skills }) {
  return (
    <>
      {skills.map((skill) => (
        <React.Fragment key={skill.name}>
          {skill.visibility && <Skill skill={skill} />}
        </React.Fragment>
      ))}
    </>
  );
}
