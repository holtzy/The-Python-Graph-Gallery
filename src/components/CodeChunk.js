import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeChunk({ children, setInput }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div onChange={() => console.log("iii")}>
      <pre>
        <code
          style={{ outline: "0px solid transparent" }}
          contentEditable="false"
          className={`language-js`}
          onInput={function (e) {
            setInput(e.currentTarget.innerText);
          }}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
