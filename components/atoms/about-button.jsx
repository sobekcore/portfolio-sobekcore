import Link from "next/link";

export default function AboutButton() {
  return (
    <button className="about-button" type="button">
      <Link href="/resume.pdf">
        <a className="about-button-link" target="_blank">
          Check out my Resume
        </a>
      </Link>
    </button>
  );
}
