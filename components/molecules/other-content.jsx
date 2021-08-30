import OtherHeader from "../atoms/other-header";
import OtherItem from "../atoms/other-item";

export default function Otherontent() {
  return (
    <div className="other-content">
      <div className="other-section">
        <OtherHeader title="Achievements" iconCode="emoji_events" />
        <OtherItem text="I was able to get my first developer job without ever attending to any university." />
      </div>
      <div className="other-section">
        <OtherHeader title="Fun facts" iconCode="source" />
        <OtherItem text="Developing Web Software mostly in VS Code and Brave." />
        <OtherItem text={"A proud Linux user, my setup is Debian 10 & Xfce 4.12."} />
        <OtherItem
          text={"Hardcore tea & Yerba Mate drinker, i drink hectoliters of them every year!"}
        />
      </div>
    </div>
  );
}
