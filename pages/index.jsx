import Loader from "../components/loader";
import HomePage from "../components/home-page";
import TechPage from "../components/tech-page";
import ProjectsPage from "../components/projects-page";
import Footer from "../components/footer";

export default function Home()
{
  return(
    <>
      <Loader />
      <HomePage />
      <TechPage />
      <ProjectsPage />
      <Footer />
    </>
  );
}
