import Footer from "@/components/molecules/Footer";
import enums from "@/services/enums.js";

export default function FooterSection() {
  return (
    <>
      <img className="footer-separator" src={enums.DECORATORS + "separator-footer.svg"} />
      <Footer />
    </>
  );
}
