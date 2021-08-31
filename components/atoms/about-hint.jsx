import ENUMS from "../enums";

export default function AboutHint() {
  return (
    <div className="about-hint-wrapper">
      <div className="about-hint">
        <img className="about-hint-arrow" src={ENUMS.DECORATORS + "pointer-arrow.svg"} />
        <p className="about-hint-desc">Currently in build</p>
      </div>
    </div>
  );
}
