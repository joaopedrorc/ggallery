import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import Bath0 from '../../../assets/gallery/gallery-one/bath01.webp';
import Bath01 from '../../../assets/gallery/gallery-one/bath01.webp';
import Bath02 from '../../../assets/gallery/gallery-one/bath02.webp';
import Bath03 from '../../../assets/gallery/gallery-one/bath03.webp';
import Bath04 from '../../../assets/gallery/gallery-one/bath04.webp';
import Bath05 from '../../../assets/gallery/gallery-one/bath05.webp';
import Bath06 from '../../../assets/gallery/gallery-one/bath06.webp';
import Bath07 from '../../../assets/gallery/gallery-one/bath07.webp';
import Bath08 from '../../../assets/gallery/gallery-one/bath08.webp';
import Bath09 from '../../../assets/gallery/gallery-one/bath09.webp';
import Bath10 from '../../../assets/gallery/gallery-one/bath10.webp';
import Bath11 from '../../../assets/gallery/gallery-one/bath11.webp';
import Bath12 from '../../../assets/gallery/gallery-one/bath12.jpeg';
import Bath13 from '../../../assets/gallery/gallery-one/bath13.jpeg';
import Bath14 from '../../../assets/gallery/gallery-one/bath14.jpeg';
import Bath15 from '../../../assets/gallery/gallery-one/bath15.jpeg';
import Bath16 from '../../../assets/gallery/gallery-one/bath16.jpeg';
import Bath17 from '../../../assets/gallery/gallery-one/bath17.jpeg';
import Bath18 from '../../../assets/gallery/gallery-one/bath18.jpeg';
import Bath19 from '../../../assets/gallery/gallery-one/bath19.jpeg';
import Bath20 from '../../../assets/gallery/gallery-one/bath20.jpeg';
import Bath21 from '../../../assets/gallery/gallery-one/bath21.jpeg';
import Bath22 from '../../../assets/gallery/gallery-one/bath22.jpeg';
import Bath23 from '../../../assets/gallery/gallery-one/bath23.webp';
import Bath24 from '../../../assets/gallery/gallery-one/bath24.webp';
import Bath25 from '../../../assets/gallery/gallery-one/bath25.webp';
import Bath26 from '../../../assets/gallery/gallery-one/bath26.webp';
import Bath27 from '../../../assets/gallery/gallery-one/bath27.webp';

const images = [
  {
    original: Bath24,
    thumbnail: Bath24,
  },
  {
    original: Bath23,
    thumbnail: Bath23,
  },
  {
    original: Bath25,
    thumbnail: Bath25,
  },
  {
    original: Bath26,
    thumbnail: Bath26,
  },
  {
    original: Bath27,
    thumbnail: Bath27,
  },
  {
    original: Bath01,
    thumbnail: Bath01,
  },
  {
    original: Bath02,
    thumbnail: Bath02,
  },
  {
    original: Bath03,
    thumbnail: Bath03,
  },
  {
    original: Bath04,
    thumbnail: Bath04,
  },
  {
    original: Bath05,
    thumbnail: Bath05,
  },
  {
    original: Bath0,
    thumbnail: Bath0,
  },
  {
    original: Bath06,
    thumbnail: Bath06,
  },
  {
    original: Bath07,
    thumbnail: Bath07,
  },
  {
    original: Bath08,
    thumbnail: Bath08,
  },
  {
    original: Bath09,
    thumbnail: Bath09,
  },
  {
    original: Bath10,
    thumbnail: Bath10,
  },
  {
    original: Bath11,
    thumbnail: Bath11,
  },
  {
    original: Bath12,
    thumbnail: Bath12,
  },
  {
    original: Bath13,
    thumbnail: Bath13,
  },
  {
    original: Bath14,
    thumbnail: Bath15,
  },
  {
    original: Bath16,
    thumbnail: Bath16,
  },
  {
    original: Bath17,
    thumbnail: Bath17,
  },
  {
    original: Bath17,
    thumbnail: Bath17,
  },
  {
    original: Bath01,
    thumbnail: Bath01,
  },
  {
    original: Bath18,
    thumbnail: Bath18,
  },
  {
    original: Bath19,
    thumbnail: Bath19,
  },
  {
    original: Bath20,
    thumbnail: Bath20,
  },
  {
    original: Bath21,
    thumbnail: Bath21,
  },
  {
    original: Bath22,
    thumbnail: Bath22,
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
        <Title title="Our gallery:" />
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
