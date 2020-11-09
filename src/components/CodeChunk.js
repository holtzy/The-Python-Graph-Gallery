import React from "react";
import Prism from "../prism/prism";
import "../prism/prism.css";

export default function CodeChunk({ children }) {
  React.useEffect(() => {
    console.log("hhhhhh")
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <pre>
        <code
          style={{ outline: "0px solid transparent" }}
          className={`language-javascript`}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
