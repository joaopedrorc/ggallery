import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TelephoneInboundFill } from 'react-bootstrap-icons';
import Logo from '../../assets/logos/White.svg';

function NavBar() {
  return (
    <Styles>
      <Navbar expand="md">
        <Navbar.Brand>
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
            {/* <Nav.Item>
              <Nav.Link>
                <Link to="/contracts">CONTRACTS</Link>
              </Nav.Link>
            </Nav.Item> */}

            <NavDropdown
              title="SERVICES"
              id="basic-nav-dropdown"
              className="navbar-items"
            >
              <NavDropdown.Item className="navbar-items">
                <Link to="/painting-decorating-general">Painting and decorating</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navbar-items">
                <Link to="/erecting-fence">Erecting fence</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/garden-storage-shed">Garden storage shed</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/summer-house">
                  Summer houses
                </Link>
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
              <Link to="/bathroom-renovation">
                Bathroom renovation
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/office-cleaning">Commercial office cleaning</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/flooring-tiles-installation">
                  Flooring/tiles Installation
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/window-cleaning">Window cleaning</Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item>
                <Link to="/eletical-services">Eletrical services</Link>
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
          <a href="tel:+44 7305 082737" className="button-style btn p-2 mr-3">
            <TelephoneInboundFill color='#FFF' size={22} /> +44 7305 082737
          </a>
          {/* </div> */}
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
