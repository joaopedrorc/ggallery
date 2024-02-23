import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';
import Form from '../../../components/QuoteForm';

// import Painting04 from '../../../assets/gallery/gallery-four/paintingImage4.jpeg';
// import Painting05 from '../../../assets/gallery/gallery-four/paintingImage5.jpeg';
// import Painting06 from '../../../assets/gallery/gallery-four/paintingImage6.jpeg';
// import Painting07 from '../../../assets/gallery/gallery-four/paintingImage7.jpeg';
// import Painting08 from '../../../assets/gallery/gallery-four/paintingImage8.jpeg';
// import Painting09 from '../../../assets/gallery/gallery-four/paintingImage9.jpeg';
// import Painting10 from '../../../assets/gallery/gallery-four/paintingImage10.jpeg';

const images = [
  // {
  //   original: 'Painting04',
  //   thumbnail: 'Painting04',
  // },
  // {
  //   original: 'Painting05',
  //   thumbnail: 'Painting05',
  // },
  // {
  //   original: 'Painting06',
  //   thumbnail: 'Painting06',
  // },
  // {
  //   original: 'Painting07',
  //   thumbnail: 'Painting07',
  // },
  // {
  //   original: 'Painting08',
  //   thumbnail: 'Painting08',
  // },
  // {
  //   original: 'Painting09',
  //   thumbnail: 'Painting09',
  // },
  // {
  //   original: 'Painting10',
  //   thumbnail: 'Painting10',
  // },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/paintingServices/paintingService04_jptrfk.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345691/Website%20Images/servicesGallery/paintingServices/paintingService04_jptrfk.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615424592/Website%20Images/servicesGallery/paintingServices/paintingService_ohkcej.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615424592/Website%20Images/servicesGallery/paintingServices/paintingService_ohkcej.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345693/Website%20Images/servicesGallery/paintingServices/paintingServices05_zz0upq.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345693/Website%20Images/servicesGallery/paintingServices/paintingServices05_zz0upq.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/paintingServices/paintingService03_bqgzbe.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/paintingServices/paintingService03_bqgzbe.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615424592/Website%20Images/servicesGallery/paintingServices/paintingService05_rpl8k2.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615424592/Website%20Images/servicesGallery/paintingServices/paintingService05_rpl8k2.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/paintingServices/paintingservice02_jijypz.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345692/Website%20Images/servicesGallery/paintingServices/paintingservice02_jijypz.jpg',
  },
];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Painting and decorating" />
      <ContainerBox>
        <p className="p-container text-center">
          When you choose a professional painting service like GGallery Painting
          and Decoration you are making a wise choice
        </p>
      </ContainerBox>
      <Title title="Our painting and decorating services can include:" />
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

      <Form />

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
