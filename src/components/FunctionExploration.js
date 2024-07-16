import { Link } from 'gatsby';
import React, { useState } from 'react';
import { functionDescriptions } from '../util/functionDescriptions';
import { Button, Col, Row } from 'react-bootstrap';
import ChartImage from './ChartImage';

import './functionExploration.css';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FunctionExploration({ functionName }) {
  // Get the right function
  const functionInfo = functionDescriptions[functionName];

  // Get the right parameter
  const [selectedParameter, setSelectedParameter] = useState(
    functionInfo.parameters[0].name
  );

  const selectedParameterInfo = functionInfo.parameters.filter(
    (param) => param.name === selectedParameter
  )[0];

  const argumentButtons = (
    <div>
      {functionInfo.parameters.map((item, i) => (
        <Button
          key={i}
          value={item.name}
          size="sm"
          onClick={() => setSelectedParameter(item.name)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );

  return (
    <div style={{ marginBottom: 70 }}>
      <h2 id={capitalize(functionName + '()' + ' details')}>
        &#128270; <code>{functionName}</code> function parameters
        <a
          style={{ marginLeft: '15px', fontSize: '14px' }}
          href={functionInfo.docUrl}
        >
          &rarr; see full doc
        </a>
      </h2>

      <h3>&rarr; Description</h3>
      <p>{functionInfo.description}</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'baseline',
          gap: 14,
        }}
      >
        <h3 style={{ width: 'auto' }}>&rarr; Arguments</h3>
        {argumentButtons}
      </div>

      <Row>
        <Col md={8}>
          <div style={{ fontSize: 16 }}>
            <p className="little-pill">Description</p>
            <p className="little-text">{selectedParameterInfo.description}</p>
            <p className="little-pill">Type</p>
            <p className="little-text">{selectedParameterInfo.type}</p>
            <p className="little-pill">Code Example</p>
            <div style={{ fontSize: 12, backgroundColor: 'white' }}>
              {selectedParameterInfo.basicUsage}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Link to={'/' + selectedParameterInfo.post}>
            <ChartImage imgName={selectedParameterInfo.img} caption="TODO" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}
