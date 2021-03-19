import ContactText from "../atoms/contact-text";
import ContactIcons from "../atoms/contact-icons";

export default function Contact()
{
  return(
    <div id="contact">
      <div id="contact-intro">
        <ContactText />
        <ContactIcons />
      </div>
      {/*
      <form action="mailto:sobekcore@gmail.com">
        <input type="email" valuename="email" autoComplete="off" placeholder="your@email.com"></input>
        <textarea id="message" placeholder="Message..."></textarea>
        <button>Send</button>
      </form>
      */}
    </div>
  );
}
