import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';

import Title from '../../../components/Title';

import { Container } from './styles';

import Service0 from '../../../assets/masterServices/service0.png';
import Service01 from '../../../assets/masterServices/service01.png';
import Service02 from '../../../assets/masterServices/service02.png';
import Service03 from '../../../assets/masterServices/service03.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

function AboutCarousel() {
  return (
    <Container>
      <Title title="We are masters at" />
      <div className="app">
        <Carousel breakPoints={breakPoints}>
          <div className="card shadow border-0">
            <div className="position-relative">
              <img
                src={Service0}
                className="card-img-top"
                alt="Insulated garden room"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">
                Insulated garden room office/studio
              </h5>
              <p className="card-text">
                Increase your living space with one of our low maintenance,
                highly insulated garden buildings.
              </p>
              <Link className="link-button btn " to="/summer-house">
                Learn more
              </Link>
            </div>
          </div>

          <div className="card shadow border-0">
            <div className="position-relative">
              <img
                src={Service03}
                className="card-img-top"
                alt="Bathroom renovation"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Bathroom renovation</h5>
              <p className="card-text mb-4">
                If you want a gorgeous and functonal bathroom, your bathroom
                renovation project will require a team of experts.
              </p>
              <Link className="link-button btn" to="/bathroom-renovation">
                Learn more
              </Link>
            </div>
          </div>

          <div className="card shadow border-0">
            <div className="position-relative">
              <img
                src={Service01}
                className="card-img-top"
                alt="Erecting fence"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Erecting fence</h5>
              <p className="card-text mb-4">
                The type of fence you choose will not only play a key role in
                your home’s exterior design, but also provide one of the most
                important benefits of all homes, security.
              </p>
              <Link className="link-button btn " to="/erecting-fence">
                Learn more
              </Link>
            </div>
          </div>

          <div className="card shadow border-0">
            <div className="position-relative">
              <img
                src={Service02}
                className="card-img-top"
                alt="Garden storage shed"
              />
            </div>
            <div className="card-body p-3">
              <h5 className="card-title mb-3">Garden storage shed</h5>
              <p className="card-text mb-4">
                Whether you want to build a shed to store tools and bikes or a
                summer house to extend your living space, installation is key to
                ensuring your building will stand the test of time.
              </p>
              <Link className="link-button btn " to="/garden-storage-shed">
                Learn more
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}

export default AboutCarousel;
