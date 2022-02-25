import { Fragment as ReactFragment } from "react";
import Skill from "@/components/atoms/Skill";

export default function Skills({ skills }) {
  return (
    <>
      {skills.map((skill) => (
        <ReactFragment key={skill.name}>
          {skill.visibility && <Skill skill={skill} />}
        </ReactFragment>
      ))}
    </>
  );
}
