import Skills from "@/components/molecules/Skills";

export default function SkillsSection({ skills }) {
  return (
    <article id="skills">
      <Skills skills={skills} />
    </article>
  );
}
