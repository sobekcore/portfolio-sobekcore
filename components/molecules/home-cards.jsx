import HomeCard from "../atoms/home-card";

export default function HomeCards() {
  return (
    <>
      <HomeCard name="about" title="About" />
      <HomeCard name="projects" title="Projects" />
      <HomeCard name="technologies" title="Technologies" />
      <HomeCard name="funfacts" title="Fun Facts" />
    </>
  );
}
