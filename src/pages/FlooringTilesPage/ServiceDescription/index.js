import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Flooring/tiles instalation" />
      <ContainerBox>
        <p className="p-container text-center">
          Make installing new flooring or tiles a stress-free process by using
          our services
        </p>
      </ContainerBox>
      <Title title="Our flooring/tiles instalation can include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Laminate Floor Installation</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Vinyl Floor Installation</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Hardwood Floor Installation</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Tile Floor/Wall Installation</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="">Carpet removal / installation</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Bathroom wall tiles</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>kitchen wall tiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Title title="How it works:" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Choose Your Carpet: </strong> Browse carpet samples
                    available at your local Lowe’s. Find the perfect choice for
                    your home ahead of your measurement appointment for install.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Schedule Your Measurement: </strong>Schedule an
                    in-home appointment for a professional independent installer
                    to measure your space and assess your flooring needs.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Get Your Quote: </strong> When your measurement is
                    complete, we’ll follow up with a quote. It’ll include
                    product and labor along with financing options to fit your
                    budget. We’ll answer any questions you have.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Have It Installed: </strong>Once the installation is
                    complete, your installer will clean up, review manufacturer
                    care and maintenance instructions with you and ensure you're
                    100% satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ContainerBox>
        <Link className="link-button btn p-2 mb-5" to="/get-a-quote">
          Get a free quote
        </Link>
      </ContainerBox>

      <AllServices />

      <UpperFooter />
    </Styles>
  );
}
