import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';
import { Container, Button } from 'react-bootstrap';

import Tools from '../../assets/footerIcons/underConstruction.png';
import Privacy from '../../assets/footerIcons/Privacy.png';
import About from '../../assets/footerIcons/About.png';
import Upgrade from '../../assets/footerIcons/Upgrade.png';
import FooterLogo from '../../assets/logos/Original.svg';

import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from 'react-bootstrap-icons';

function Footer() {
  return (
    <Styles>
      <hr className="horizontal-line" />
      <Container>
        <div className="row">
          <div className="col col-md-12 col-lg-6 mb-5">
            <img src={FooterLogo} alt="Logo" />
          </div>

          <div class="col col-md-12 col-lg-6 mb-5">
            <h2 class="text-center">Follw us </h2>
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
                      alt="..."
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
                        alt="..."
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
                          alt="..."
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
                          alt="..."
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
          <div class="col col-md-12 col-lg-6">
            <div>
              <Button>
                <Link to="/areas">
                  <Instagram width="50" height="50" />
                </Link>
              </Button>

              <Facebook width="50" height="50" />
              <Linkedin width="50" height="50" />
              <Twitter width="50" height="50" />
              <Youtube width="50" height="50" />
            </div>
          </div>
        </div>
      </Container>
      <footer class="w-100">
        <Container className=" pt-5 pt-lg-5 pb-lg-3">
          <div class="row">
            <div class="col-12 col-md-3 col-lg-4 mb-3 mb-md-0 mb-lg-0">
              <h4 class="fs-4 fw-bold  mb-2 mb-md-4 mb-lg-4 text-white">
                Menu
              </h4>
              <p class="mb-0">
                <Link to="/contracts">Contracts</Link>
              </p>
              <div class="dropdown">
                <a
                  class=" dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Services
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <p class="mb-0">
                <Link to="/areas">Areas</Link>
              </p>
              <p class="mb-0">
                <Link to="/about">About us</Link>
              </p>
              <p class="mb-0">
                <Link to="/gallery">Gallery</Link>
              </p>
              <p class="mb-0">
                <Link to="/get-a-quote">Get a free quote</Link>
              </p>
            </div>
            <div class="col-12 col-md-3 col-lg-4 pe-lg-0 ps-lg-5 mb-3 mb-md-0 mb-lg-0">
              <h4 class="fs-4 fw-bold mb-2 mb-md-4 mb-lg-4 text-white">
                Main cities
              </h4>
              <p class="mb-0 text-white">basingstoke</p>
              <p class="mb-0 text-white">Bramley</p>
              <p class="mb-0 text-white">Rotherwick</p>
              <p class="mb-0 text-white">Silchester</p>
              <p class="mb-0 text-white">Hannington</p>
            </div>
            <div class="col-12 col-md-3 col-lg-4 mb-3 mb-md-0 mb-lg-0">
              <h4 class="fs-4 fw-bold mb-2 mb-md-4 mb-lg-4 text-white">
                Contact information:
              </h4>
              <p class="mb-0 text-white">Basingstoke</p>
              <p class="mb-0 text-white mb-4">
                5 Thames Ct, Basingstoke RG21 4DP, <br />
                United Kingdom
              </p>
              <p class="mb-0 text-white">+44 7414 765278 | +44 0751 4505765</p>
              <p class="mb-0 text-white">dpserviceltd@gmail.com</p>
            </div>
          </div>
        </Container>
        <div class="w-100 rights-container d-flex justify-content-center align-items-center">
          <p class="m-0 text-black">&copy; 2021 Copyright: danansanps.com</p>
        </div>
      </footer>
    </Styles>
  );
}

export default Footer;
