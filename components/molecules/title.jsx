import TitleLogo from "../atoms/title-logo";
import TitleButtons from "../atoms/title-buttons";

export default function Title()
{
  return(
    <header id="title">
      <TitleLogo />
      <section id="buttons">
        <TitleButtons />
      </section>
    </header>
  );
}
