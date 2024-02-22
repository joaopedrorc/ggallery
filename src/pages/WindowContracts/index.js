import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';
import BackgroundServices from './BackgroundServices';

import { Container } from 'react-bootstrap';
import Title from '../../components/Title';
import AllServices from '../../components/AllServices';

import Image0 from '../../assets/contractServices/window/window01.jpg';
import Image01 from '../../assets/contractServices/window/window02.jpg';
import Image03 from '../../assets/contractServices/window/window04.jpg';
import Image1 from '../../assets/contractPage/officeCleaning/img1.jpg';
import Image2 from '../../assets/contractPage/officeCleaning/img2.jpg';

const images = [
  {
    original: Image03,
    thumbnail: Image03,
  },
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image0,
    thumbnail: Image0,
  },
  {
    original: Image01,
    thumbnail: Image01,
  },
];

export default function WindowCleaning() {
  return (
    <Styles>
      <BackgroundServices />
      <Title title="Window cleaning" />
      <ContainerBox>
        <p className="p-container text-center">
          ​Professional window cleaning services can improve the look of your
          home or business
        </p>
      </ContainerBox>
      <Title title="Our cleans can include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>External and Internal window cleaning: </strong> In
                    order for a window to look clean, it has to be cleaned both
                    on the inside as well as the outside.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong> Pressurized cleaning: </strong>In order to remove
                    stubborn stains and marks from your window, a professional
                    service will use a high-pressure washing.{' '}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Security and fly screen cleaning: </strong>Dirty fly
                    screens limit fresh air from entering your home, not to
                    mention making it look messy.{' '}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Window track cleaning: </strong>Your windows' tracks
                    will often get clogged making it difficult for your windows
                    to move along these tracks.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Title title="Window cleaning benefits" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Enhanced Business Presentation</strong>
                    Businesses that sell to walk-in customers have to maintain
                    their building or shop environment to offer their customers
                    a pleasant shopping experience.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Clear Inventory Visibility: </strong>
                    Having clean and presentable showcases and windows makes
                    your products more appealing.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Interior And Exterior Cleaning</strong>
                    Window cleaners who offer professional services will always
                    clean the windows from both ends.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Deep Clean: </strong>
                    Many retail outlets that have been conducting business for a
                    long time have scratches and sticky stains on their windows
                    and glass doors. Professional window cleaners offer a deep
                    clean service that removes all such stains and provides a
                    buffed up look to the old glass and windows.
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
