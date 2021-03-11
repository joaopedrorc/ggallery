import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';
import BackgroundServices from './BackgroundServices';
import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../components/Title';
import AllServices from '../../components/AllServices';

import Garden from '../../assets/contractServices/garden/garden02.jpg';
import Garden1 from '../../assets/contractServices/garden/garden03.jpg';
import Garden2 from '../../assets/contractServices/garden/garden07.jpg';

const images = [
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345677/Website%20Images/servicesGallery/gardenServices/gardenService05_yidakr.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345677/Website%20Images/servicesGallery/gardenServices/gardenService05_yidakr.jpg',
  },
  {
    original: Garden,
    thumbnail: Garden,
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345673/Website%20Images/servicesGallery/gardenServices/gardenService01_xisurq.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345673/Website%20Images/servicesGallery/gardenServices/gardenService01_xisurq.jpg',
  },

  {
    original: Garden1,
    thumbnail: Garden1,
  },
  {
    original: Garden2,
    thumbnail: Garden2,
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345677/Website%20Images/servicesGallery/gardenServices/gardenService0_kdingc.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345677/Website%20Images/servicesGallery/gardenServices/gardenService0_kdingc.jpg',
  },
];

export default function GardenMaintenance() {
  return (
    <Styles>
      <BackgroundServices />
      <Title title="Garden maintenance" />
      <ContainerBox>
        <p className="p-container">
          Providing a clean office environment is a key component of a modern,
          effective organisation.
        </p>
      </ContainerBox>
      <Title title="Our maintenance can include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Lawn mowing: </strong>Lawns can grow fast,
                    especially when there’s been recent rain so you may consider
                    a regular lawn mowing service.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Weeding :</strong>A weed is any plant growing where
                    it’s not wanted and often in competition with other
                    surrounding plants.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Pruning: </strong>Pruning or cutting away overgrown
                    or dead branches from trees, plants, and bushes is a great
                    way to encourage growth in your garden and keep it looking
                    tidy throughout all seasons.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Fertilising: </strong>Fertilising your lawn and
                    garden can keep your plants and grass looking green and
                    lively all year round.{' '}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Mulching: </strong>Covering soil with mulch helps
                    conserve moisture below and improves the health of soil,
                    leading to stronger plants, foliage, and flowers.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Landscaping: </strong>Consider thorough landscape
                    design to make the most of your outdoor space, installing
                    water features or outdoor artwork, and planting trees in a
                    visually pleasing and functional way.{' '}
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
    </Styles>
  );
}
