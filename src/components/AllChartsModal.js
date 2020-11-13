import "./allChartsModal.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import { Link } from "gatsby";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import { chartTypesInfo } from "../util/sectionDescriptions";
import SectionLogo from "./SectionLogo";
import { fullUrlToInternalLink } from "../util/utils";

export default function AllChartsModal({ show, handleClose }) {
  const logoList = chartTypesInfo.map((chart, i) => {
    return (
      <Col id={i} xs={1} md={1}>
        <Link to={fullUrlToInternalLink(chart.pythonURL)}>
          <SectionLogo chartType={chart.logo} />
        </Link>
      </Col>
    );
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
      className="allFamiliesModal"
    >
      <Button className="closeModalButton" onClick={handleClose}>
        X
      </Button>
      <Modal.Body >

        <Row>{logoList}</Row>
      </Modal.Body>
    </Modal>
  );
}
