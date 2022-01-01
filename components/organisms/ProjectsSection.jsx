import Projects from "@/components/molecules/Projects";

export default function ProjectsSection({ projects }) {
  return (
    <article id="projects">
      <Projects projects={projects} />
    </article>
  );
}
