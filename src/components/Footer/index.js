import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';
import { Container, DropdownButton, Dropdown } from 'react-bootstrap';

import Tools from '../../assets/footerIcons/underConstruction.png';
import Privacy from '../../assets/footerIcons/Privacy.png';
import About from '../../assets/footerIcons/About.png';
import Upgrade from '../../assets/footerIcons/Upgrade.png';
import FooterLogo from '../../assets/logos/Original.svg';

import { Instagram, Facebook, Twitter, Youtube } from 'react-bootstrap-icons';

function Footer() {
  return (
    <Styles>
      <hr className="horizontal-line" />
      <Container>
        <div className="row">
          <div className="col col-md-12 col-lg-6 mb-5">
            <img src={FooterLogo} alt="Logo" />
          </div>

          <div className="col col-md-12 col-lg-6 mb-5">
            <h2 className="text-center">Follw us </h2>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 col-md-12 col-lg-6 mb-3">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <div className="justify-content-center text-align-center">
                  <div className="icon-box">
                    <img
                      src={Tools}
                      alt="Garden Storage Shed"
                      width="55"
                      height="54.52"
                      className="center"
                    />
                    <p className="text-container">Garden Storage Shed</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <div className="justify-content-center text-align-center">
                    <div className="icon-box">
                      <img
                        src={Privacy}
                        alt="Erecting fence"
                        width="55"
                        height="54.52"
                        className="center"
                      />
                      <p className="text-container">Erecting fence</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <div className="justify-content-center text-align-center ">
                      <div className="icon-box">
                        <img
                          src={About}
                          alt="Insulated Garden Room/Office/Studio"
                          width="55"
                          height="54.52"
                          className="center"
                        />
                        <p className="text-container">
                          Insulated Garden Room/Office/Studio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <div className="justify-content-center text-align-center">
                      <div className="icon-box">
                        <img
                          src={Upgrade}
                          alt="Bathroom renovation"
                          width="55"
                          height="54.52"
                          className="center"
                        />
                        <p className="text-container">Bathroom renovation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-12 col-lg-6 align-self-center">
            <div className="mb-3 mb-md-3 text-center social-box">
              <a
                className="button-box  "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram color="#000" width="50" height="50" />
              </a>

              <a
                className="button-box "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="#000" width="50" height="50" />
              </a>

              <a
                className="button-box "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter color="#000" width="50" height="50" />
              </a>

              <a
                className="button-box "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube color="#000" width="50" height="50" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <footer className="w-100">
        <Container className=" pt-5 pt-lg-5 pb-lg-3">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-4 mb-3 mb-md-0 mb-lg-0">
              <h4 className="fs-4 fw-bold  mb-2 mb-md-4 mb-lg-4 text-white">
                Menu
              </h4>
              <p className="mb-0">
                <Link className="link-box" to="/contracts">
                  Contracts
                </Link>
              </p>
              <DropdownButton
                className="dropdown-box"
                drop="up"
                id="dropdown-basic-button"
                title="Services"
              >
                <Dropdown.Item>
                  <Link to="/bathroom-renovation">Bathroom renovation</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/erecting-fence">Erecting fence</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/garden-storage-shed">Garden storage shed</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/insulated-garden-room">
                    Insulated garden room/office/studio
                  </Link>
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item>
                  <Link to="/heating-plumbing">Heating and plumbing</Link>
                </Dropdown.Item>

                {/* <Dropdown.Item>
                  <Link to="/roof-cleaning">Roof cleaning</Link>
                </Dropdown.Item> */}

                <Dropdown.Item>
                  <Link to="/garden-maintenance">Garden maintenance</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/painting-decoration">Painting and decoration</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/office-cleaning">Commercial office cleaning</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/flooring-tiles-instalation">
                    Flooring/tiles Installation
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/window-cleaning">Window cleaning</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/eletical-services">Eletrical services</Link>
                </Dropdown.Item>
              </DropdownButton>
              <p className="mb-0 ">
                <Link className="link-box" to="/areas">
                  Areas
                </Link>
              </p>
              <p className="mb-0">
                <Link className="link-box" to="/about">
                  About us
                </Link>
              </p>
              <p className="mb-0">
                <Link className="link-box" to="/gallery">
                  Gallery
                </Link>
              </p>
              <p className="mb-0">
                <Link className="link-box" to="/get-a-quote">
                  Get a free quote
                </Link>
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-4 pe-lg-0 ps-lg-5 mb-3 mb-md-0 mb-lg-0">
              <h4 className="fs-4 fw-bold mb-2 mb-md-4 mb-lg-4 text-white">
                Main cities
              </h4>
              <p className="mb-0 text-white">Basingstoke</p>
              <p className="mb-0 text-white">Bramley</p>
              <p className="mb-0 text-white">Rotherwick</p>
              <p className="mb-0 text-white">Silchester</p>
              <p className="mb-0 text-white">Hannington</p>
            </div>
            <div className="col-12 col-md-3 col-lg-4 mb-3 mb-md-0 mb-lg-0">
              <h4 className="fs-4 fw-bold mb-2 mb-md-4 mb-lg-4 text-white">
                Contact information:
              </h4>
              <p className="mb-0 text-white">Basingstoke</p>
              <p className="mb-0 text-white mb-4">
                5 Thames Ct, Basingstoke RG21 4DP, <br />
                United Kingdom.
              </p>
              <p className="text-white mt-0">Hours: 9:00am as 17:00pm</p>
              <a href="tel:+44 7414 765278" className="mb-0 text-white">
                +44 7414 765278 |
              </a>
              <a href="tel:+44 751 4505765" className="mb-0 text-white">
                +44 7514 505765
              </a>

              <br />
              <a
                href="mailto: andre@danansanps.com"
                className="mb-0 text-white"
              >
                andre@danansanps.com
              </a>
            </div>
          </div>
        </Container>
        <div className="w-100 rights-container d-flex justify-content-center align-items-center">
          <p className="m-0 text-black">
            &copy; 2021 Copyright: Danansan Propery Services
          </p>
        </div>
      </footer>
    </Styles>
  );
}

export default Footer;
