import React from "react";
import ChartImage from "../components/ChartImage";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

// This component wraps a chart image into a column and make it responsive + clickable
export default function ChartImageContainer({ imgName, caption, linkTo }) {
  return (
    <Col xs={12} md={4}>
      <Link to={linkTo}>
        <ChartImage imgName={imgName} caption={caption} />
      </Link>
    </Col>
  );
}
