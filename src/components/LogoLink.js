import React from 'react';
import { Link } from 'gatsby';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const LogoLink = ({ imgPath, url, altText, name }) => (
  <Col xs={6} md={4} lg={2} className="text-center">
    <Link to={url}>
      <Image
        src={imgPath}
        alt={altText}
        fluid
        style={{
          width: '220px',
          height: '220px',
          objectFit: 'contain',
        }}
      />
      <h3>{name}</h3>
    </Link>
  </Col>
);

export default LogoLink;
