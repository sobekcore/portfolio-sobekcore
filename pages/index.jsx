import SidebarSection from "@/components/organisms/SidebarSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import FooterSection from "@/components/organisms/FooterSection";

import client from "@/graphql/apollo-client.js";
import sanityQuery from "@/graphql/sanity.query.gql";

export default function HomePage({ skills, projects }) {
  return (
    <>
      <SidebarSection />
      <main id="content-wrapper">
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
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
