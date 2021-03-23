import Link from "next/link";

export default function TitleButtons() {
  return (
    <>
      <Link href="#technologies">
        <button>
          Get to know <span className="violet">technologies</span> that i use
        </button>
      </Link>
      <Link href="#projects">
        <button>
          Check out my <span className="violet">projects</span>
        </button>
      </Link>
    </>
  );
}
