import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

const images = [
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShed0_wgugkr.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShed0_wgugkr.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShes03_x1hnbe.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShes03_x1hnbe.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShed0_wgugkr.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShed0_wgugkr.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShes02_dchxp5.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615426799/Website%20Images/servicesGallery/gardenShed/gardenShes02_dchxp5.jpg',
  },
];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Garden storage shed installation service" />
      <ContainerBox>
        <p className="p-container text-center">
          Whether you want to build a shed to store tools and bikes or a summer
          house to extend your living space, installation is key to ensuring
          your building will stand the test of time.
        </p>
      </ContainerBox>
      <Title title="Our garden storage shed installation can service include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>How and where to purchase the best garden storage shed</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>How to prepare for installation</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Aftercare support information</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>

                  <p>
                    The installation team will move the building from the
                    delivery location into the installation position.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    The team will build and install your new building safely and
                    to the highest standard.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>What to expect on the day of installation</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Once you have made your purchase, Danansan Property Services
                    will be in touch to arrange delivery and installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Title title="Garden storage shed benefits:" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A shed can add room back to your crowded garage and/or
                    basement.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A shed protects your tools and outdoor equipment from the
                    elements.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>A shed can serve as a professional studio or office.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>A shed is a nice way to accent your yard.</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>A shed can offer some shade on a hot summer day.</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A shed, if properly equipped, can serve as a small
                    guesthouse or accessory dwelling unit.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A shed can serve as a dog house–seasonally or all
                    year-round.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A shed can be a great playhouse for children (or grown-ups).
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Some sheds are portable (portable storage buildings), so you
                    can take yours with you if you move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Title title="Gallery" />
      <div className="gallery-container">
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
