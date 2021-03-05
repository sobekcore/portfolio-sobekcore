import Lasers from "../components/lasers";
import Title from "../components/title";

export default function HomePage()
{
  return(
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
