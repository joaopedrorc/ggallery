import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TelephoneInboundFill } from 'react-bootstrap-icons';
import Logo from '../../assets/logos/Original.png';

function NavBar() {
  return (
    <Styles>
      <Navbar expand="md" className="justify-content-between">
        <Navbar.Brand>
          <div className="d-flex flex-column justify-content-center align-items-center p-2">
            <Link to="/">
              <img
                className="logo"
                src={Logo}
                alt="Logo"
                height={200}
                width={200}
              />
            </Link>
            <h4 className="text-light mt-2">GGallery Painting & Decorating</h4>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          className="bg-white border-0"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end p-2"
        >
          <Nav className="ml-auto mr-3">
            <NavDropdown
              title="SERVICES"
              id="basic-nav-dropdown"
              className="navbar-items"
            >
              <NavDropdown.Item className="navbar-items">
                <Link to="/painting-decorating-general">
                  Painting and decorating
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navbar-items">
                <Link to="/erecting-fence">Erecting fence</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/garden-storage-shed">Garden storage shed</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/garden-house">Garden houses</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              {/* <NavDropdown.Item>
                <Link to="/heating-plumbing">Heating and plumbing</Link>
              </NavDropdown.Item> */}

              {/* <NavDropdown.Item>
                <Link to="/roof-cleaning">Roof cleaning</Link>
              </NavDropdown.Item> */}

              <NavDropdown.Item>
                <Link to="/garden-maintenance">Garden maintenance</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/bathroom-renovation">Bathroom renovation</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/office-cleaning">Commercial office cleaning</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/flooring-tiles-installation">
                  Flooring/tiles Installation
                </Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item>
                <Link to="/window-cleaning">Window cleaning</Link>
              </NavDropdown.Item> */}

              {/* <NavDropdown.Item>
                <Link to="/electrical-services">Eletrical services</Link>
              </NavDropdown.Item> */}
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

          {/* <div className="call-bo"> */}
          <a href="tel:+44 7916 685198" className="button-style btn p-2 ms-4">
            <TelephoneInboundFill color="#FFF" size={22} /> +44 7916 685198
          </a>
          {/* </div> */}
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
