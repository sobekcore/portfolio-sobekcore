import Footer from "@/components/molecules/Footer";
import enums from "@/utility/enums.js";

export default function FooterSection() {
  return (
    <>
      <img className="footer-separator" src={enums.DECORATORS + "separator-footer.svg"} />
      <Footer />
    </>
  );
}
