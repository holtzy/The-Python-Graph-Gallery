import "./topNavbar.css";

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AllChartsModal from "./AllChartsModal";

export default function TopNavbar() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="container" expand="lg" fixed="top">
        <Navbar.Brand href="/">&larr; Python Graph Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={handleShow}>Chart types</Nav.Link>
            <NavDropdown title="Quick" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Matplotlib</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Seaborn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pandas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">All</Nav.Link>
            <Nav.Link href="#link">Quick</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">
              <svg
                width="15"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AllChartsModal show={show} handleClose={handleClose} />
    </>
  );
}
