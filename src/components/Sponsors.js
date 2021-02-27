import React from "react";
import "./sponsors.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SponsorImage from "../components/SponsorImage"
import Spacing from "./Spacing";
import { Link } from "gatsby";

// Component that display a banner with the gallery sponsors
export default function Sponsor() {
  return (
    <>
      <div className="greySection">
        <Container>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Link to=''>
                <SponsorImage imgName="data_society_logo" caption={"Data Society"} />
              </Link>
            </Col>
            <Col xs={6} md={3}>
              <SponsorImage imgName="datacamp_logo" caption={"Datacamp"} />
            </Col>
            <Col xs={6} md={3}>
              <SponsorImage imgName="datamatic" caption={"Data Society"} />
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
      <Spacing />
    </>
  );

}
