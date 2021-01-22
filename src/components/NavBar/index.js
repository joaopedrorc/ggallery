import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../../assets/logos/White.svg';

function NavBar() {
  return (
    <Styles>
      <Navbar expand="md">
        <Navbar.Brand className="">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          className="bg-white border-0"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-3">
            <Nav.Item>
              <Nav.Link>
                <Link to="/contracts">CONTRACTS</Link>
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/contracts">Bathroom renovation</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="#">Erecting fence</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="#">Garden storage shed</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="#">Insulated garden room/office/studio</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                <Link to="/">Heating and plumbing</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Roof cleaning</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Garden maintenance</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Painting and decoration</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Commercial office cleaning</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Flooring/tiles Installation</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Window cleaning</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Eletrical services</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/">Plumbing services</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link>
                <Link to="/areas">AREAS</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/about">ABOUT US</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/gallery">GALLERY</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Link className="button-style btn p-2 mr-3" to="/get-a-quote">
            GET A QUOTE
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
