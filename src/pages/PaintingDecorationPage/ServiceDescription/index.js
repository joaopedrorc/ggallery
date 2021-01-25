import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import Painting0 from '../../../assets/gallery/gallery-four/painting0.jpeg';
import Painting01 from '../../../assets/gallery/gallery-four/painting01.jpeg';
import Painting02 from '../../../assets/gallery/gallery-four/painting02.jpeg';
import Painting03 from '../../../assets/gallery/gallery-four/painting03.jpeg';

const images = [
  {
    original: Painting0,
    thumbnail: Painting0,
  },
  {
    original: Painting01,
    thumbnail: Painting01,
  },
  {
    original: Painting02,
    thumbnail: Painting02,
  },
  {
    original: Painting03,
    thumbnail: Painting03,
  },
];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Painting and decoration" />
      <ContainerBox>
        <p className="p-container">
          Providing a clean office environment is a key component of a modern,
          effective organisation.
        </p>
      </ContainerBox>
      <Title title="Our painting and decorationcan include:" />
      <ContainerBox>
        <div class="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Dusting/polishing surfaces</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Sanitising handles, buttons and phones</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Polishing floors</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Emptying bins and replace bin bags</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Staff washrooms and WCs</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Cleaning air conditioning vents</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Floors - swept, hoovered and/or mopped</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Cleaning cafeterias, staff rooms and kitchens</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p className="">Dusting/polishing surfaces</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Vacuuming carpets</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>High-quality Commercial Cleaning Services</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Daily office cleaning for many types of offices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
      <Title title="Painting and decoration benefits:" />
      <Container>
        <div class="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A typical office keyboard can carry up to 7,500 bacteria at
                    any given time.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Increased focus: In a clean working environment, you are
                    less likely to be distracted by cluttered objects, and that
                    a greater level of concentration leads to more and better
                    work being done.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Less stress: A cluttered desk can result in you trying to
                    focus on too many things at once, which lowers your stress
                    threshold.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    The average employee loses nine working days a year to
                    sickness, some of which may be attributed to a lack of
                    workplace hygiene.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Viruses such as the flu can linger on unclean surfaces such
                    as work desks or electronic equipment for 24 hours.{' '}
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    60% of absences from work illnesses are contracted from
                    dirty equipment in the office such as e-coli, staph and
                    bacteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="gallery-container">
        {/* <h2>Bathroom renovation</h2> */}
        <ImageGallery items={images} />
      </div>
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
