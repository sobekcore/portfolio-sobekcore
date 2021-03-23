import ContactText from "../atoms/contact-text";
import ContactIcons from "../atoms/contact-icons";

export default function Contact() {
  return (
    <div id="contact">
      <div id="contact-intro">
        <ContactText />
        <ContactIcons />
      </div>
    </div>
  );
}
