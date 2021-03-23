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
      {/* eslint-disable */}
      <a
        title="Follow my Twitter"
        href="https://twitter.com/sobekcore"
        target="_blank">
        <img src="icons/twitter.svg" />
      </a>
      <a
        title="Find me on LinkedIn"
        href="https://www.linkedin.com/in/dawid-sobotka/"
        target="_blank">
        <img src="icons/linkedin.svg" />
      </a>
      <a
        id={isFlying ? "paper-plane-flying" : "paper-plane"}
        onClick={planeFly}
        title="Send me an email"
        href="mailto:sobekcore@gmail.com">
        <img src="icons/mail.svg" />
      </a>
      <a
        title="Check out my GitHub"
        href="https://github.com/sobekcore"
        target="_blank">
        <img src="icons/github.svg" />
      </a>
      {/* eslint-enable */}
    </div>
  );
}
