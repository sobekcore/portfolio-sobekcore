import SidebarSection from "../components/organisms/sidebar-section";
import HomeSection from "../components/organisms/home-section";
import TechSection from "../components/organisms/tech-section";
import ProjectsSection from "../components/organisms/projects-section";
import FooterSection from "../components/organisms/footer-section";

import client from "../graphql/apollo-client";
import sanityQuery from "../graphql/sanity.query.gql";

export default function HomePage({ technologies, projects }) {
  return (
    <>
      <SidebarSection />
      <main id="content-wrapper">
        <HomeSection />
        <TechSection technologies={technologies} />
        <ProjectsSection projects={projects} />
        <FooterSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: sanityQuery });

  return {
    props: {
      technologies: data.allTechnologies,
      projects: data.allProjects,
    },
  };
}
