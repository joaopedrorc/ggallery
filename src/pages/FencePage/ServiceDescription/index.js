import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import Image0 from '../../../assets/contractPage/officeCleaning/img0.jpg';
import Image1 from '../../../assets/contractPage/officeCleaning/img1.jpg';
import Image2 from '../../../assets/contractPage/officeCleaning/img2.jpg';
import Image4 from '../../../assets/contractPage/officeCleaning/img4.jpg';
import Image5 from '../../../assets/contractPage/officeCleaning/img5.jpg';
import Image6 from '../../../assets/contractPage/officeCleaning/img6.jpg';
import Image7 from '../../../assets/contractPage/officeCleaning/img7.jpg';
import Image8 from '../../../assets/contractPage/officeCleaning/img8.jpg';
import Image9 from '../../../assets/contractPage/officeCleaning/img9.jpg';
import Image11 from '../../../assets/contractPage/officeCleaning/img11.jpg';
import Image14 from '../../../assets/contractPage/officeCleaning/img14.jpg';
import Image15 from '../../../assets/contractPage/officeCleaning/img15.jpg';
import Image16 from '../../../assets/contractPage/officeCleaning/img16.jpg';

import ImageF0 from '../images/image0.png';
import ImageF1 from '../images/image1.png';
import ImageF2 from '../images/image2.png';
import ImageF3 from '../images/image3.png';
import ImageF4 from '../images/image4.png';
import ImageF5 from '../images/image5.png';

const images = [
  {
    original: Image0,
    thumbnail: Image0,
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
    original: Image4,
    thumbnail: Image4,
  },
  {
    original: Image5,
    thumbnail: Image5,
  },
  {
    original: Image6,
    thumbnail: Image6,
  },
  {
    original: Image7,
    thumbnail: Image7,
  },
  {
    original: Image8,
    thumbnail: Image8,
  },
  {
    original: Image9,
    thumbnail: Image9,
  },
  {
    original: Image11,
    thumbnail: Image11,
  },
  {
    original: Image14,
    thumbnail: Image14,
  },
  {
    original: Image15,
    thumbnail: Image15,
  },
  {
    original: Image16,
    thumbnail: Image16,
  },
];

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
      <Title title="We offer 3 different fence materials:" />
      {/* <ContainerBox> */}
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
                  {/* <Button className="card-button">
                      <Link to="/insulated-garden-room">Learn more</Link>
                    </Button> */}
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
                  {/* <Button className="card-button">
                      <Link to="/erecting-fence">Learn more</Link>
                    </Button> */}
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
                  {/* <Button className="card-button">
                      <Link to="/garden-storage-shed">Learn more</Link>
                    </Button> */}
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
      {/* <div class="row mb-4">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Dusting/polishing surfaces</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Sanitising handles, buttons and phones</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Polishing floors</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Emptying bins and replace bin bags</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Staff washrooms and WCs</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Cleaning air conditioning vents</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Floors - swept, hoovered and/or mopped</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Cleaning cafeterias, staff rooms and kitchens</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p className="">Dusting/polishing surfaces</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Vacuuming carpets</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>High-quality Commercial Cleaning Services</p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>Daily office cleaning for many types of offices</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </ContainerBox> */}

      <Title title="For 3 different use case scenarios:" />

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
                  {/* <Button className="card-button">
                      <Link to="/insulated-garden-room">Learn more</Link>
                    </Button> */}
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
                  {/* <Button className="card-button">
                      <Link to="/erecting-fence">Learn more</Link>
                    </Button> */}
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
                  {/* <Button className="card-button">
                      <Link to="/garden-storage-shed">Learn more</Link>
                    </Button> */}
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
        <div class="row mb-4 container-box">
          <div className="list-conteniner">
            <div className="row mb-4">
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    A typical office keyboard can carry up to 7,500 bacteria at
                    any given time.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Increased focus: In a clean working environment, you are
                    less likely to be distracted by cluttered objects, and that
                    a greater level of concentration leads to more and better
                    work being done.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Less stress: A cluttered desk can result in you trying to
                    focus on too many things at once, which lowers your stress
                    threshold.
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    The average employee loses nine working days a year to
                    sickness, some of which may be attributed to a lack of
                    workplace hygiene.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    Viruses such as the flu can linger on unclean surfaces such
                    as work desks or electronic equipment for 24 hours.{' '}
                  </p>
                </div>
                <div className="cities-column">
                  <div className="rounded-bol"></div>
                  <p>
                    60% of absences from work illnesses are contracted from
                    dirty equipment in the office such as e-coli, staph and
                    bacteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="gallery-container">
        {/* <h2>Bathroom renovation</h2> */}
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
