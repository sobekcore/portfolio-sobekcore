import Link from "next/link";

export default function Title()
{
  return(
    <header id="title">
      <h1><span id="home-path">~$</span> Hello! I'm Sobek</h1>
      <h1>Front-end developer</h1>
      <p>
        Greetings fellow traveler. Thanks for visiting my portfolio website. <br />
        You probably came here for information about me so... <br />
        I'm a 20 yo male human being from Poland. Programming and designing is <br />
        one of my biggest passions, and things that i'm the most committed to. <br />
        I try to make things as good as i possibly can. <br />
      </p>
      <section id="buttons">
        <Link href="#technologies">
          <button>Get to know <span className="violet">technologies</span> that i use</button>
        </Link>
        <Link href="#projects">
          <button>Check out my <span className="violet">projects</span></button>
        </Link>
      </section>
    </header>
  );
}
