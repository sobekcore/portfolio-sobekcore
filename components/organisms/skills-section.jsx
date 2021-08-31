import Skills from "../molecules/skills";

export default function SkillsSection({ skills }) {
  return (
    <article id="skills">
      <Skills skills={skills} />
    </article>
  );
}
