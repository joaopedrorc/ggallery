import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import ImageF0 from '../images/image0.png';
import ImageF1 from '../images/image1.png';
import ImageF2 from '../images/image2.png';
import ImageF3 from '../images/image3.png';
import ImageF4 from '../images/image4.png';
import ImageF5 from '../images/image5.png';
import ConcreteFence from '../images/concreteFence.jpg';
import BrickFence from '../images/brickFence.png';

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Erecting fence" />
      <ContainerBox>
        <p className="p-container text-center">
          The type of fence you choose will not only play a key role in your
          home’s exterior design, but also provide one of the most important
          benefits of all homes, security. A professionally installed fence
          gives every homeowner that true sense of home we all desire
        </p>
      </ContainerBox>
      <Title title="Types of Fences:" />
      <div className="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div className="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div className="row mb-1">
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF0}
                    className="card-img-top"
                    alt="Insulated garden room"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Wood fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF1}
                    className="card-img-top"
                    alt="Erecting fence"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    PVC fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF2}
                    className="card-img-top"
                    alt="Garden storage shed"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Metal fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ConcreteFence}
                    className="card-img-top"
                    alt="Insulated garden room"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Concrete Fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={BrickFence}
                    className="card-img-top"
                    alt="Insulated garden room"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Brick Fences
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerBox>
        <Link className="link-button btn p-2 mb-5" to="/get-a-quote">
          Get a free quote
        </Link>
      </ContainerBox>

      <Title title="Use case scenarios:" />

      <div className="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div className="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div className="row mb-1">
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF3}
                    className="card-img-top"
                    alt="Insulated garden room"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Residential Fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF4}
                    className="card-img-top"
                    alt="Erecting fence"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Industrial Fences
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img
                    src={ImageF5}
                    className="card-img-top"
                    alt="Garden storage shed"
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-center title-box">
                    Rural Fences
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerBox>
        <Link className="link-button btn p-2 mb-5" to="/get-a-quote">
          Get a free quote
        </Link>
      </ContainerBox>

      <Title title="Erecting fence benefits:" />
      <Container>
        <div className="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Shelter</strong>: The elements can wreak havoc on
                    your yard and home. An outdoor privacy fence will protect
                    your garden and backyard from the wind while also providing
                    shade from the sun (depending on the positioning of the
                    fence and your home).
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Decoration</strong>: A well-kept fence instantly
                    adds character to a home. Wooden fences can be stained and
                    painted any color, adding a hint of style to your backyard.
                    Aside from the aesthetic appeal, a fence will improve the
                    cub appeal of your home. You can also expect a 65% return on
                    investment.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Protection</strong>: While the elements can present
                    a real issue, unwanted guests on your property are a much
                    more serious problem. With an outdoor privacy fence, your
                    home is protected from humans or animals entering your
                    property without your permission.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    There are many uses for a fence, including protection,
                    privacy, boundaries for pets and decoration. Outdoor privacy
                    fences also provide an extra layer of seclusion from nosy
                    neighbors.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Noise</strong>: Do you have noisy neighbors? Is
                    there constantly construction going on in your neighborhood?
                    A fence can help that. It acts as a sound barrier, keeping
                    unwanted noise out of your yard, ideal for when you are
                    relaxing outside.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    <strong>Maintenance</strong>: As a homeowner, you already
                    have plenty of chores and home improvement projects that
                    need to be taken care of. With a wooden privacy fence,
                    required maintenance is minimal. A couple coats of varnish
                    will keep untreated wood safe from the elements. For an
                    aluminum fence, loose fasteners can be tightened quickly
                    with little effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
