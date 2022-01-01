import { useState } from "react";
import enums from "@/utility/enums.js";

export default function ContactIcons() {
  const [isFlying, setFlying] = useState(false);

  const planeFly = () => {
    setFlying(true);

    setTimeout(() => {
      window.location.href = `mailto:${enums.EMAIL}`;
    }, 800);

    setTimeout(() => {
      setFlying(false);
    }, 1600);
  };

  return (
    <div className="contact-icons">
      <a className="contact-link" href="https://twitter.com/sobekcore" target="_blank">
        <img className="contact-icon-img" alt="Twitter" src={enums.ICONS + "twitter.svg"} />
      </a>
      <a className="contact-link" href="https://www.linkedin.com/in/dawid-sobotka/" target="_blank">
        <img className="contact-icon-img" alt="LinkedIn" src={enums.ICONS + "linkedin.svg"} />
      </a>
      <a
        className="contact-link"
        id={isFlying ? "paper-plane-flying" : "paper-plane"}
        onClick={planeFly}>
        <img className="contact-icon-img" alt="Email" src={enums.ICONS + "mail.svg"} />
      </a>
      <a className="contact-link" alt="GitHub" href="https://github.com/sobekcore" target="_blank">
        <img className="contact-icon-img" alt="Github" src={enums.ICONS + "github.svg"} />
      </a>
    </div>
  );
}
