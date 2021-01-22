import React from 'react';

import { Styles, Container } from './styles';

import { Button } from 'react-bootstrap';

import Service01 from '../../assets/generalServices/service01.png';
import Service02 from '../../assets/generalServices/service02.png';
import Service03 from '../../assets/generalServices/service03.png';
import Service04 from '../../assets/generalServices/service04.png';
import Service06 from '../../assets/generalServices/service06.png';
import Service07 from '../../assets/generalServices/service07.png';
import Service08 from '../../assets/generalServices/service08.png';
import Service10 from '../../assets/generalServices/service10.png';

function AllServices() {
  return (
    <Styles>
      <Container className="mb-4">
        <h1 className="text-center">See more services options</h1>

        <div class="w-100 pb-5 pt-lg-2 pb-lg-5">
          <div class="container pt-2 pb-2 pt-lg-2 pb-lg-0">
            <div class="row mb-4">
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service01} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Roof cleaning{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service02} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Garden maintenance{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service03} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Painting and decoration{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service04} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Commercial office cleaning{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service06} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Flooring/tiles Installation
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service07} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Window cleaning{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-6 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img src={Service08} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Eletrical services{' '}
                    </Button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-6 mb-5">
                <div class="card shadow border-0">
                  <div class="position-relative">
                    <img
                      src={Service10}
                      height="303.58"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card-body p-0">
                    <Button className="card-button" variant="primary">
                      Heating and plumbing
                    </Button>
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
