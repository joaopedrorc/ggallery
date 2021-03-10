import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, ContainerBox } from './styles';

import ImageGallery from 'react-image-gallery';
import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

const images = [
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/plumbingServices/plumbingService02_ksa5zk.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/plumbingServices/plumbingService02_ksa5zk.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/plumbingServices/plumbingService0_u0zwep.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/plumbingServices/plumbingService0_u0zwep.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/plumbingServices/plumbingService05_tl85um.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/plumbingServices/plumbingService05_tl85um.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/plumbingServices/plumbingService03_schaub.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/plumbingServices/plumbingService03_schaub.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/plumbingServices/plumbingService04_rmvltu.png',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/plumbingServices/plumbingService04_rmvltu.png',
  },
];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Heating and plumbing" />
      <ContainerBox>
        <p className="p-container text-center">
          We can handle anything from blocked pipes to new tub installations
          with superior customer service
        </p>
      </ContainerBox>
      <Title title="Our plumbing services can include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Tubs and Showers:</strong> Whether you want a new
                    tub or shower to freshen up the style of your space or you
                    just need to fix a leak in the shower, a plumber from
                    Danansan Property Services can help.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>24/7 Repair</strong>Plumbing emergencies don’t
                    always happen during business hours, but you can count on us
                    24 hours a day. Our 24/7 repair services mean that we’ll be
                    there anytime you need us.
                  </p>
                </div>
                {/* <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Pipes and Sewers</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>24/7 Repair</p>
                </div> */}
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                {/* <div className="cities-column">
                  <div className="rounded-bol"></div>
                </div> */}
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Sump Pumps:</strong> If your home doesn’t have a
                    sump pump, adding one is a smart investment. Cleaning up the
                    water damage that results from flooding can costs thousands,
                    so protect your home now with a sump pump with
                    commercial-grade power. We can also repair and maintain your
                    current sump pump
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Pipes and Sewers: </strong> the pipes that channel
                    clean water into your home and carry away waste to the sewer
                    are often taken for granted by homeowners—until something
                    goes wrong. When that happens, call on the proven services
                    of Danansan Property Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="title-box">
        <Title title="Our plumbing contractors include repair, installation, and maintenance for:" />
      </div>

      <Container>
        <div className="row mb-4 ">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="p-list">Hot water heaters</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="p-list">Drains</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="p-list">Toilets</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="p-list">Garbage disposals</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="p-list">Sinks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Title title="Heating Solutions" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Furnaces:</strong> repair installation and
                    maintenance
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Boilers:</strong> repair installation and
                    maintenance
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Ductless Heating and Cooling: </strong>repair
                    installation and maintenance
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Heat Pump: </strong>repair installation and
                    maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Title title="Gallery:" />

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
