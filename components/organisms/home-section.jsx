import Lasers from "../molecules/lasers";
import Title from "../molecules/title";

export default function HomeSection() {
  return (
    <div id="home-page">
      <section id="main">
        <Lasers />
        <div id="container">
          <Title />
        </div>
      </section>
    </div>
  );
}
