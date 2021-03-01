import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Button } from 'react-bootstrap';
import Title from '../../../components/Title';

import { Container } from './styles';

import Service02 from '../../../assets/generalServices/service02.png';
import Service04 from '../../../assets/generalServices/service04.png';
import Service07 from '../../../assets/generalServices/service07.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function AboutCarousel() {
  return (
    <Container>
      <Title title="Contract needed services" />
      <div className="carousel-container">
        <Carousel width="700" breakPoints={breakPoints}>
          <div className="card shadow border-0 mb-4">
            <div className="position-relative">
              <img
                src={Service02}
                className="card-img-top"
                alt="Garden maintenance"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Garden maintenance</h5>

              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>

          <div className="card shadow border-0 mb-4">
            <div className="position-relative">
              <img
                src={Service04}
                className="card-img-top"
                alt="Commercial office cleaning"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Commercial office cleaning</h5>
              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>

          <div className="card shadow border-0 mb-4">
            <div className="position-relative">
              <img
                src={Service07}
                className="card-img-top"
                alt="Window cleaning"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Window cleaning</h5>
              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}

export default AboutCarousel;
