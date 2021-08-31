import React from "react";
import Other from "../atoms/other";

export default function Others({ others }) {
  return (
    <div className="other-content">
      {others.map((other) => (
        <React.Fragment key={other.title}>
          {other.visibility && <Other other={other} />}
        </React.Fragment>
      ))}
    </div>
  );
}
