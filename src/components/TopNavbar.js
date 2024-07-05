import './topNavbar.css';

import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import AllChartsModal from './AllChartsModal';
import {
  Matplotlib,
  Seaborn,
  Plotly,
  Pandas,
  Plotnine,
} from '../components/MiscellaneousLogos';
import { Button } from 'react-bootstrap';
import SubscribeModal from './SubscribeModal';

export default function TopNavbar() {
  const [show, setShow] = React.useState(false);

  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = React.useState(false);

  return (
    <Container>
      <Navbar className="container nav" expand="lg" fixed="top">
        <Navbar.Brand href="/">&larr; Graph Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link onClick={() => setShow(true)}>Chart types</Nav.Link>

          <NavDropdown title="Tools" id="nav-dropdown-tools">
            <NavDropdown.Item className="menuItemMain" href="/matplotlib">
              Matplotlib
              <span className="menuItemLogo">
                <Matplotlib />
              </span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Axis">Axis</NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Title">Title</NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Legend">
              Legend
            </NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Subplot">
              Subplot
            </NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Annotation">
              Annotation
            </NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Font">Font</NavDropdown.Item>
            <NavDropdown.Item href="/matplotlib#Theme">Theme</NavDropdown.Item>
            <NavDropdown.Item href="/color-palette-finder">
              Color
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="menuItemMain" href="/seaborn">
              Seaborn
              <span className="menuItemLogo">
                <Seaborn />
              </span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/seaborn#Title">Title</NavDropdown.Item>
            <NavDropdown.Item href="/seaborn#Axis">Axis</NavDropdown.Item>
            <NavDropdown.Item href="/seaborn#Theme">Theme</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="menuItemMain" href="/plotly">
              Plotly
              <span className="menuItemLogo">
                <Plotly />
              </span>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="menuItemMain" href="/pandas">
              Pandas
              <span className="menuItemLogo">
                <Pandas />
              </span>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="menuItemMain" href="/plotnine">
              Plotnine
              <span className="menuItemLogo">
                <Plotnine />
              </span>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="menuItemMain"
              href="/color-palette-finder"
            >
              Color Palette Finder
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/all-charts">All</Nav.Link>

          <Nav.Link href="/best-python-chart-examples">Best</Nav.Link>

          <Nav.Link href="/best-dataviz-packages">Libs</Nav.Link>

          <NavDropdown title="Related" id="nav-dropdown-related">
            <NavDropdown.Item
              className="menuItemMain"
              href="https://www.data-to-viz.com"
            >
              Data To Viz
            </NavDropdown.Item>
            <NavDropdown.Item
              className="menuItemMain"
              href="https://www.dataviz-inspiration.com"
            >
              Dataviz Inspiration
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="menuItemMain"
              href="https://www.r-graph-gallery.com"
            >
              <code>R</code> Graph Gallery
            </NavDropdown.Item>
            <NavDropdown.Item
              className="menuItemMain"
              href="https://www.d3-graph-gallery.com"
            >
              <code>D3.js</code> Graph Gallery
            </NavDropdown.Item>
            <NavDropdown.Item
              className="menuItemMain"
              href="https://www.react-graph-gallery.com"
            >
              <code>React</code> Graph Gallery
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/about">About</Nav.Link>

          <Button
            size="sm"
            style={{ borderWidth: 1, marginLeft: 10 }}
            onClick={() => setIsSubscribeModalOpen(true)}
          >
            Subscribe
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <AllChartsModal show={show} handleClose={() => setShow(false)} />
      <SubscribeModal
        show={isSubscribeModalOpen}
        handleClose={() => setIsSubscribeModalOpen(false)}
      />
    </Container>
  );
}
