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
      <Title title="Eletrical Services" />
      <ContainerBox>
        <p className="p-container text-center">
          Danasan Property Services delivers comprehensive electrical services
          for homes and businesses
        </p>
      </ContainerBox>
      <Title title="Our eletrical services can include:" />
      <Container>
        <div class="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Outlet Installation</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Child Proof Outlets</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Wiring Upgrades</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Circuit Breaker Replacements</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p> Bathroom and Kitchen Lighting</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Emergency Electrician</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Electrical Repairs</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Electrical Panel Upgrades</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Electrical Panel Repair</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p> Light Dimmers and Timers</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p className="">
                    Home Generator Installation and Maintenance
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Exhaust Fan Installation</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Exhaust Fan Repair</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Commercial Generators iInstallation</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Lighting Repair</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Ballast Replacement</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Bulb Replacement</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Landscape Lighting</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Holiday Lighting</p>
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
