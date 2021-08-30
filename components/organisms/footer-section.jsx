import Footer from "../molecules/footer";
import ENUMS from "../enums";

export default function FooterSection() {
  return (
    <>
      <img className="footer-separator" src={ENUMS.DECORATORS + "separator-footer.svg"} />
      <Footer />
    </>
  );
}
