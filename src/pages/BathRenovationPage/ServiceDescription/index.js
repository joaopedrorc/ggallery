import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import Bath29 from '../../../assets/gallery/gallery-one/bath29.jpeg';
import Bath30 from '../../../assets/gallery/gallery-one/bath30.jpeg';
import Bath31 from '../../../assets/gallery/gallery-one/bath31.jpeg';
import Bath32 from '../../../assets/gallery/gallery-one/bath32.jpeg';
import Bath33 from '../../../assets/gallery/gallery-one/bath33.jpeg';
import Bath34 from '../../../assets/gallery/gallery-one/bath34.jpeg';
import Bath35 from '../../../assets/gallery/gallery-one/bath35.jpeg';

const images = [
  {
    original: Bath29,
    thumbnail: Bath29,
  },
  {
    original: Bath30,
    thumbnail: Bath30,
  },
  {
    original: Bath31,
    thumbnail: Bath31,
  },
  {
    original: Bath32,
    thumbnail: Bath32,
  },
  {
    original: Bath35,
    thumbnail: Bath35,
  },
  {
    original: Bath33,
    thumbnail: Bath33,
  },
  {
    original: Bath34,
    thumbnail: Bath34,
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/bathroomServices/bathroomService0_zd8r8u.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345690/Website%20Images/servicesGallery/bathroomServices/bathroomService0_zd8r8u.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345685/Website%20Images/servicesGallery/bathroomServices/bathroomService03_sfjucu.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345685/Website%20Images/servicesGallery/bathroomServices/bathroomService03_sfjucu.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345689/Website%20Images/servicesGallery/bathroomServices/bathroomService05_pkbsdx.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345689/Website%20Images/servicesGallery/bathroomServices/bathroomService05_pkbsdx.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345682/Website%20Images/servicesGallery/bathroomServices/bathroomService01_cfx94j.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345682/Website%20Images/servicesGallery/bathroomServices/bathroomService01_cfx94j.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345684/Website%20Images/servicesGallery/bathroomServices/bathroomService02_muyzj7.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345684/Website%20Images/servicesGallery/bathroomServices/bathroomService02_muyzj7.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345689/Website%20Images/servicesGallery/bathroomServices/bathroomService04_zy3akt.jpg',
    thumbnail:
      'https://res.cloudinary.com/danansan-property-services/image/upload/v1615345689/Website%20Images/servicesGallery/bathroomServices/bathroomService04_zy3akt.jpg',
  },
];

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Bathroom Renovation" />
      <ContainerBox>
        <p className="text-center p-container">
          If you want a gorgeous and functonal bathroom, your bathroom
          renovation project will require a team of experts.
        </p>
      </ContainerBox>
      <Title title="Our bathroom renovation can include:" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>2021</strong> trending bathroom styles
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Calm and tranquil</strong> oasis’ styles that take
                    notes from hotel spas and beauty parlours with deep soaking
                    tubs and relaxing colour palettes.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Bold dark luxurious</strong> bathrooms boasting the
                    newest in high technology. Other style options you could
                    choose include.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Traditional</strong> – a timeless classic brimming
                    with character and a cozy, homely feel.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Eclectic</strong> – stepping away from conformities,
                    eclectic bathrooms embrace a variety of styles and time
                    periods and really allow your imagination to have fun.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Modern</strong> – Sophisticated and oozing the
                    latest in trends and technology.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Contemporary</strong> – with clean lines and
                    geometric patterns, contemporary bathrooms have a minimalist
                    design. (could be very wrong there!)
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Retro</strong> – get funky and pay homage to the
                    past with pops of colour and interesting baths and vanities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Title title="Bathroom renovation luxury inclusions:" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Bidet</strong> – with heated seats, sensors and
                    different settings, bidet’s are wildly popular.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Bluetooth speakers</strong> – whether you like to
                    sing along in the shower, dance or even take phone calls
                    while scrubbing the day away, bathroom Bluetooth speakers
                    have great sound and some even have coloured lighting.
                    Always make sure that you’re speakers are bathroom safe.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Steam room</strong> – Relax and get the health
                    benefits of a steam room in your very own home.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Niche shelving</strong> – instead of bulky caddies
                    and shelves, niche shelving gives a sleek and polished look.
                    Niches can be installed inside the shower or on the bathroom
                    walls.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Skylight</strong> – why not use the glorious sun and
                    moonlight to light up your dream bathroom? Skylights are
                    energy efficient, allow more wall space and look fantastic.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Mood lighting</strong> – to really tie the bathroom
                    take your lighting one step further with a chandelier or
                    feature lighting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="gallery-container">
        <Title title="Gallery:" />
        <ImageGallery items={images} />
      </div>
      <ContainerBox>
        <Link className="link-button btn p-2" to="/get-a-quote">
          Get a free quote
        </Link>
      </ContainerBox>

      <AllServices />

      <UpperFooter />
    </Styles>
  );
}
