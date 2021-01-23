import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';

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

export default function WindowCleaning() {
  return (
    <Styles>
      <Title title="Window cleaning" />
      <ContainerBox>
        <p className="p-container">
          Providing a clean office environment is a key component of a modern,
          effective organisation.
        </p>

        <p className="p-container">
          Cleanliness is of paramount importance to a company's brand persona
          and client perception. It also has a major role to play for employee
          health and wellbeing and can directly influence productivity through
          the prevention of absences from work.
        </p>

        <p className="p-container">
          From reception area, offices, meeting rooms, washrooms to kitchens we
          will tailor your office cleans to your exact requirements including
          frequency, depth of clean, time of clean.
        </p>
      </ContainerBox>
      <Title title="Our cleans can include:" />
      <ContainerBox>
        <div class="row mb-4">
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
        </div>
      </ContainerBox>
      <Title title="Window cleaning benefits" />
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
    </Styles>
  );
}
