import React from "react";
import "./tableOfContent.css";

export default function TableOfContent({ children }) {
  return (
    <div className="tableOfContent">
      {children}
    </div>
  );
}
