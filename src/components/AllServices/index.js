import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, Container } from './styles';

import Service01 from '../../assets/masterServices/service01.png';
import Service02 from '../../assets/generalServices/service02.png';
import Service03 from '../../assets/generalServices/service03.png';
import Service04 from '../../assets/generalServices/cleaning0.png';
import Service06 from '../../assets/generalServices/service06.png';
import Service07 from '../../assets/generalServices/service07.png';
import Service08 from '../../assets/generalServices/service08.png';
import Service10 from '../../assets/generalServices/service10.png';

function AllServices() {
  return (
    <Styles>
      <Container>
        <div className="card-container">
          <h1 className="text-center">See more services options</h1>

          <div class="w-100 pb-5 pt-lg-2 pb-lg-5 ">
            <div class="container pt-2 pb-2 pt-lg-2 pb-lg-0">
              <div class="row mb-4">
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/erecting-fence">
                        <img
                          src={Service01}
                          class="card-img-top"
                          alt="Erecting fence"
                          height="430"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link to="/erecting-fence" className="btn card-button">
                        Erecting fence
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/garden-maintenance">
                        <img
                          src={Service02}
                          class="card-img-top"
                          alt="Garden maintenance"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link
                        to="/garden-maintenance"
                        className="btn card-button"
                      >
                        Garden maintenance{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/office-cleaning">
                        <img
                          src={Service03}
                          class="card-img-top"
                          alt="Painting and decoration"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link
                        to="/painting-decoration"
                        className="btn card-button"
                      >
                        Painting and decoration{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/contracts">
                        <img
                          src={Service04}
                          class="card-img-top"
                          alt="Commercial office cleaning"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link to="/office-cleaning" className="btn card-button">
                        Commercial office cleaning{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/flooring-tiles-instalation">
                        <img
                          src={Service06}
                          class="card-img-top"
                          alt="Flooring and tiles Installation"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link
                        to="/flooring-tiles-instalation"
                        className="btn card-button"
                      >
                        Flooring/tiles Installation
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/window-cleaning">
                        <img
                          src={Service07}
                          class="card-img-top"
                          alt="Window cleaning"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link to="/window-cleaning" className="btn card-button">
                        Window cleaning{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/eletical-services">
                        <img
                          src={Service08}
                          class="card-img-top"
                          alt="Eletrical services"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link to="/eletical-services" className="btn card-button">
                        Eletrical services{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6 mb-5">
                  <div class="card shadow border-0">
                    <div class="position-relative">
                      <Link to="/heating-plumbing">
                        <img
                          src={Service10}
                          height="303.58"
                          class="card-img-top"
                          alt="Heating and plumbing"
                        />
                      </Link>
                    </div>
                    <div class="card-body p-0">
                      <Link to="/heating-plumbing" className="btn card-button">
                        Heating and plumbing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
}

export default AllServices;
