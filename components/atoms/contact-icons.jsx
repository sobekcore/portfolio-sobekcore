import { useState } from "react";

export default function ContactIcons() {
  const [isFlying, setFlying] = useState(false);

  const planeFly = () => {
    setFlying(true);

    setTimeout(function () {
      setFlying(false);
    }, 1600);
  };

  return (
    <div id="contact-icons">
      <a href="https://twitter.com/sobekcore" target="_blank">
        <img alt="Twitter" src="./icons/twitter.svg" />
      </a>
      <a href="https://www.linkedin.com/in/dawid-sobotka/" target="_blank">
        <img alt="LinkedIn" src="./icons/linkedin.svg" />
      </a>
      <a
        id={isFlying ? "paper-plane-flying" : "paper-plane"}
        onClick={planeFly}
        href="mailto:sobekcore@gmail.com">
        <img alt="Email" src="./icons/mail.svg" />
      </a>
      <a alt="GitHub" href="https://github.com/sobekcore" target="_blank">
        <img alt="Github" src="./icons/github.svg" />
      </a>
    </div>
  );
}
