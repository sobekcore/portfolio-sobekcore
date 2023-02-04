import Loader from "../components/atoms/loader";
import HomeSection from "../components/organisms/home-section";
import TechSection from "../components/organisms/tech-section";
import ProjectsSection from "../components/organisms/projects-section";
import FooterSection from "../components/organisms/footer-section";

import projects from "../data/projects.json";
import skills from "../data/skills.json";

export default function HomePage() {
  return (
    <>
      <Loader />
      <HomeSection />
      <TechSection technologies={skills} />
      <ProjectsSection projects={projects} />
      <FooterSection />
    </>
  );
}
