import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ChartImage from './ChartImage';

import './functionExploration.css';
import CodeChunk from './CodeChunk';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FunctionExploration({ funDetails }) {
  const [selectedParameter, setSelectedParameter] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(0);

  if (!funDetails) {
    return null;
  }

  const selectedParameterInfo = funDetails.parameters[selectedParameter];
  const selectedOptInfo = selectedParameterInfo.options?.[selectedOpt];

  const argumentButtons = (
    <div>
      {funDetails.parameters.map((item, i) => (
        <Button
          key={i}
          value={item.name}
          size="sm"
          onClick={() => setSelectedParameter(i)}
          className={selectedParameter === i ? 'isButtonSelected' : ''}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );

  return (
    <div style={{ marginBottom: 70 }}>
      <h2 id={capitalize(funDetails.name + ' details')}>
        &#128270; <code>{funDetails.name}</code> function parameters
        <a
          style={{ marginLeft: '15px', fontSize: '14px' }}
          href={funDetails.docUrl}
        >
          &rarr; see full doc
        </a>
      </h2>

      <h3>&rarr; Description</h3>
      <p>{funDetails.description}</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'baseline',
          gap: 14,
        }}
      >
        <h3 style={{ width: 'auto', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
          &rarr; Arguments
        </h3>
        {argumentButtons}
      </div>

      <Row>
        <Col md={8}>
          <div style={{ fontSize: 16 }}>
            <p className="argumentSectionTitle">Description</p>
            <p className="little-text">{selectedParameterInfo.description}</p>

            <p className="argumentSectionTitle">
              Possible values &rarr; {'  '}
              <span className="parameterTypePill">
                {selectedParameterInfo.type}
              </span>
            </p>
            <p className="little-text">{selectedParameterInfo.howToUse}</p>
            {selectedParameterInfo.options && (
              <>
                <div
                  style={{ display: 'flex', gap: 2, alignItems: 'baseline' }}
                >
                  {selectedParameterInfo.options.map((opt, i) => {
                    return (
                      <Button
                        size="sm"
                        className={i === selectedOpt ? 'isButtonSelected' : ''}
                        onClick={() => setSelectedOpt(i)}
                      >
                        {opt.name}
                      </Button>
                    );
                  })}
                </div>
                <p>{selectedParameterInfo.options[selectedOpt].explanation}</p>
              </>
            )}

            <p className="argumentSectionTitle">Code Example</p>
            <div style={{ backgroundColor: 'white' }}>
              <CodeChunk hasWhiteBackground>
                {selectedParameterInfo.options
                  ? selectedParameterInfo.basicUsage.replace(
                      'paramgoeshere',
                      selectedParameterInfo.options[selectedOpt].name
                    )
                  : selectedParameterInfo.basicUsage}
              </CodeChunk>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <br />
          <Link to={'/' + selectedParameterInfo.post}>
            <ChartImage
              imgName={selectedOptInfo?.img || selectedParameterInfo.img}
              caption={'More about the ' + funDetails.name + ' function.'}
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
}
