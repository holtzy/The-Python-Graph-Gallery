import { Link } from "gatsby";
import React, { useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { functionDescriptions } from "../util/functionDescriptions";
import "./functionExploration.css";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FunctionExploration({ functionName }) {
  // Get the right function
  const functionInfo = functionDescriptions[functionName];

  // Get the right parameter
  const [selectedParameter, setSelectedParameter] = useState(
    functionInfo.parameters[0].name
  );
  const [someString, setSomeString] = useState("hello");
  const selectedParameterInfo = functionInfo.parameters.filter(
    (param) => param.name === selectedParameter
  )[0];

  return (
    <>
      <h2 id={capitalize(functionName + "()" + " details")}>
        &#128270; <code>{functionName}</code> function parameters
        <a
          style={{ marginLeft: "15px", fontSize: "14px" }}
          href={functionInfo.docUrl}
        >
          &rarr; see full doc
        </a>
      </h2>

      <ToggleButtonGroup
        type="radio"
        size="sm"
        name="functionParameter"
        value={selectedParameter}
        onChange={(value) => setSelectedParameter(value)}
      >
        {functionInfo.parameters.map((item, i) => (
          <ToggleButton
            key={i}
            // variant="secondary"
            className={"functionButton"}
            id={`functionParameter-${item.name}`}
            value={item.name}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div>
        <code>string</code>
        <span>&rarr; {selectedParameterInfo.description}</span>
      </div>
      {/* <div style={{ paddingLeft: "6px", fontSize: "14px" }}><Link to={selectedParameterInfo.relatedChart}>check a chart using it</Link></div> */}
      <br />
      <br />
    </>
  );
}
