import Loader from "../components/atoms/loader";
import HomeSection from "../components/organisms/home-section";
import TechSection from "../components/organisms/tech-section";
import ProjectsSection from "../components/organisms/projects-section";
import Footer from "../components/molecules/footer";

export default function HomePage()
{
  return(
    <>
      <Loader />
      <HomeSection />
      <TechSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
