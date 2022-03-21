import SidebarSection from "@/components/organisms/SidebarSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import FooterSection from "@/components/organisms/FooterSection";

// Import all the data from static definition files
import projects from "data/projects.json";
import skills from "data/skills.json";

export default function HomePage() {
  return (
    <>
      <SidebarSection />
      <main className="content-wrapper">
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <FooterSection />
      </main>
    </>
  );
}
