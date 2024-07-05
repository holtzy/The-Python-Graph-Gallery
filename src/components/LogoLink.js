import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const LogoLink = ({ imgPath, url, altText, name }) => {
  const [hover, setHover] = useState(false);

  const styles = {
    logo: {
      objectFit: 'contain',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: hover ? 'scale(1.1)' : 'scale(1)',
    },
  };

  return (
    <Col xs={6} md={4} lg={2} className="text-center">
      <Link to={url} style={{ textDecoration: 'none' }}>
        <Image
          src={imgPath}
          alt={altText}
          fluid
          style={styles.logo}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <div style={{ fontSize: 16, color: 'black', marginTop: 8 }}>{name}</div>
      </Link>
    </Col>
  );
};

export default LogoLink;
