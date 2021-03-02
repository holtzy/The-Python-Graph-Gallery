import { Link } from "gatsby";
import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { functionDescriptions } from "../util/functionDescriptions";
import './functionExploration.css'

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function FunctionExploration({ functionName }) {

    // Get the right function
    const functionInfo = functionDescriptions[functionName]

    // Get the right parameter
    const [selectedParameter, setSelectedParameter] = React.useState(functionInfo.parameters[0].name)
    const selectedParameterInfo = functionInfo.parameters.filter(param => param.name === selectedParameter)[0]

    const allButtons = functionInfo.parameters.map(
        (item, i) =>
            <ToggleButton
                type="radio"
                active={true}
                key={i}
                className={"functionButton"}
                variant="secondary"
                size="sm"
                value={item.name}
                checked={selectedParameter === item.name}
                onChange={(e) => setSelectedParameter(e.currentTarget.value)}
            >
                {item.name}
            </ToggleButton>
    )

    return (
        <>
            <h2 id={capitalize(functionName + "()" + " details")}>&#128270; <code>{functionName}</code> function parameters<a style={{ marginLeft: "15px", fontSize: "14px" }} href={functionInfo.docUrl}>&rarr; see full doc</a></h2>
            <ButtonGroup toggle>{allButtons}</ButtonGroup>
            <div>
                <code>string</code>
                <span>&rarr; {selectedParameterInfo.description}</span>
            </div>
            {/* <div style={{ paddingLeft: "6px", fontSize: "14px" }}><Link to={selectedParameterInfo.relatedChart}>check a chart using it</Link></div> */}
            <br />
            <br />
        </>
    )
}
