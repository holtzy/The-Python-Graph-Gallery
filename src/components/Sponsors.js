import React from "react";
import "./sponsors.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BannerImage from "../components/BannerImage"
import Spacing from "./Spacing";

// Component that displays a banner with the gallery sponsors
export default function Sponsor() {
  return (
    <>
      <div className="sponsorsBanner">
        <Container>
          <Row>
            <Col md={3}>
              <a
                href="https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data"
                onClick="trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;">
                <BannerImage imgName="data-vis-ad" caption={"Dataquest"} />
              </a>
            </Col>
            <Col md={3}>
              <a
                href="https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650" title="Datacamp"
                onClick="trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;">
                <BannerImage imgName="datacamp" caption={"Datacamp"} />
              </a>
            </Col>
            <Col md={3}>
              <a
                href="https://365datascience.pxf.io/qRPNb" title="365DataScience"
                onClick="trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;">
                <BannerImage imgName="365_data_science" caption={"365 Data Science"} />
              </a>
            </Col>
            <Col md={3}>
              <a
                href="https://gumroad.com/a/280032371/uTxEFw" title="StackAbuse"
                onClick="trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;">
                <BannerImage imgName="stackabuse" caption={"Stack Abuse book"} />
              </a>
            </Col>
          </Row>
          {/* <div className='sponsorsLink'>
            <Link to='/about#Sponsoring'>Wish to support the gallery?</Link>
          </div> */}
        </Container>
      </div>
      <Spacing />
    </>
  );

}


