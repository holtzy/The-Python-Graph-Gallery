import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './logoLink.css';

const LogoLink = ({
  imgPath,
  url,
  altText,
  name,
  height,
  width,
  className,
}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    logo: {
      objectFit: 'contain',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      height: height || 'auto',
      width: width || 'auto',
    },
  };

  return (
    <Col xs={6} md={4} lg={2} className={`text-center ${className || ''}`}>
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
