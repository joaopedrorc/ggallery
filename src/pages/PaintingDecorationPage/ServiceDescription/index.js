import React from 'react';
import { Link } from 'react-router-dom';

// import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

// import Painting0 from '../../../assets/gallery/gallery-four/painting0.jpeg';
// import Painting01 from '../../../assets/gallery/gallery-four/painting01.jpeg';
// import Painting02 from '../../../assets/gallery/gallery-four/painting02.jpeg';
// import Painting03 from '../../../assets/gallery/gallery-four/painting03.jpeg';

// const images = [
//   {
//     original: Painting0,
//     thumbnail: Painting0,
//   },
//   {
//     original: Painting01,
//     thumbnail: Painting01,
//   },
//   {
//     original: Painting02,
//     thumbnail: Painting02,
//   },
//   {
//     original: Painting03,
//     thumbnail: Painting03,
//   },
// ];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Painting and decoration" />
      <ContainerBox>
        <p className="p-container text-center">
          When you choose a professional painting service like Danansan Property
          Services you are making a wise choice
        </p>
      </ContainerBox>
      <Title title="Our painting and decoration services can include:" />
      <Container>
        <div className="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>House painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Exterior painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol justify-content-center"></div>
                  <p>Internal painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Drywall repair</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Fence painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Basement painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Brick painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Deck painting</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p className="">Door painting</p>
                </div>
                <div className="cities-column justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Garage painting</p>
                </div>
                <div className="cities-column  justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Gabinet painting</p>
                </div>
                <div className="cities-column  justify-content-center">
                  <div className="rounded-bol"></div>
                  <p>Wallpaper installation and removal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Title title="Gallery:" />

      <div className="gallery-container">
        <ImageGallery items={images} />
      </div> */}
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
