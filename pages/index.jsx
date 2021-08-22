import SidebarSection from "../components/organisms/sidebar-section";
import HomeSection from "../components/organisms/home-section";
import AboutSection from "../components/organisms/about-section";
import SkillsSection from "../components/organisms/skills-section";
import ProjectsSection from "../components/organisms/projects-section";
import OtherSection from "../components/organisms/other-section";
import FooterSection from "../components/organisms/footer-section";

import client from "../graphql/apollo-client";
import sanityQuery from "../graphql/sanity.query.gql";

export default function HomePage({ skills, projects }) {
  return (
    <>
      <SidebarSection />
      <main id="content-wrapper">
        <HomeSection />
        <div id="content-scrolable">
          <AboutSection />
          <ProjectsSection projects={projects} />
          <SkillsSection skills={skills} />
          <OtherSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: sanityQuery });

  return {
    props: {
      skills: data.allSkills,
      projects: data.allProjects,
    },
  };
}
