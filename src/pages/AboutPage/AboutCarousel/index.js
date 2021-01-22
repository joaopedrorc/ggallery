import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Button } from 'react-bootstrap';
import Title from '../../../components/Title';

import { Container } from './styles';

import Service0 from '../../../assets/masterServices/service0.png';
import Service01 from '../../../assets/masterServices/service01.png';
import Service02 from '../../../assets/masterServices/service02.png';
import Service03 from '../../../assets/masterServices/service03.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function AboutCarousel() {
  return (
    <Container>
      <Title title="We are masters at" />
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div class="card shadow border-0">
            <div class="position-relative">
              <img src={Service0} class="card-img-top" alt="..." />
            </div>
            <div class="card-body p-3">
              <h5 class="card-title mb-3">
                Insulated garden room office/studio
              </h5>
              <p class="card-text">
                Our post construction cleaning service is a specialist division
                that provides the full range of cleaning services.
              </p>
              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>

          <div class="card shadow border-0">
            <div class="position-relative">
              <img src={Service01} class="card-img-top" alt="..." />
            </div>
            <div class="card-body p-3">
              <h5 class="card-title mb-3">Erecting fence</h5>
              <p class="card-text mb-4">
                Our post construction cleaning service is a specialist division
                that provides the full range of cleaning services.
              </p>
              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>

          <div class="card shadow border-0">
            <div class="position-relative">
              <img src={Service02} class="card-img-top" alt="..." />
            </div>
            <div class="card-body p-3">
              <h5 class="card-title mb-3">Garden storage shed</h5>
              <p class="card-text mb-4">
                Our post construction cleaning service is a specialist division
                that provides the full range of cleaning services.
              </p>
              <Button className="card-button" variant="primary" type="submit">
                Learn more
              </Button>
            </div>
          </div>

          <div class="card shadow border-0">
            <div class="position-relative">
              <img src={Service03} class="card-img-top" alt="..." />
            </div>
            <div class="card-body p-3">
              <h5 class="card-title mb-3">Bathroom renovation</h5>
              <p class="card-text mb-4">
                Our post construction cleaning service is a specialist division
                that provides the full range of cleaning services.
              </p>
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
