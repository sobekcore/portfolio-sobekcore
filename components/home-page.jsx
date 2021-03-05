import Lasers from "./lasers";
import Title from "./title";

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
