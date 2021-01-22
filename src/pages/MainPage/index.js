import React, { useEffect, useState } from 'react';

import { Styles } from './styles';

import { Button } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

import Title from '../../components/Title';
import About from '../../components/About';
import AllServices from '../../components/AllServices';
import QuoteForm from '../../components/QuoteForm';
import BackgroundBanner from './BackgroundBanner';

import Service0 from '../../assets/masterServices/service0.png';
import Service01 from '../../assets/masterServices/service01.png';
import Service02 from '../../assets/masterServices/service02.png';
import Service03 from '../../assets/masterServices/service03.png';

function MainPage() {
  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = (e) => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMobile = useMediaQuery('(min-width: 767.98px)');
  return (
    <Styles>
      <BackgroundBanner />

      <Title title="Our services" />

      <div class="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div class="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div class="row mb-1">
            <div class="col-12 col-md-12 col-lg-3 mb-5">
              <div class="card shadow border-0">
                <div class="position-relative">
                  <img src={Service0} class="card-img-top" alt="..." />
                </div>
                <div class="card-body p-3">
                  <h5 class="card-title mb-3">
                    Insulated garden room office/studio
                  </h5>
                  <p class="card-text">
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button
                    className="card-button"
                    variant="primary"
                    type="submit"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3 mb-5">
              <div class="card shadow border-0">
                <div class="position-relative">
                  <img src={Service01} class="card-img-top" alt="..." />
                </div>
                <div class="card-body p-3">
                  <h5 class="card-title mb-3">Erecting fence</h5>
                  <p class="card-text mb-4">
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button
                    className="card-button"
                    variant="primary"
                    type="submit"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3 mb-5">
              <div class="card shadow border-0">
                <div class="position-relative">
                  <img src={Service02} class="card-img-top" alt="..." />
                </div>
                <div class="card-body p-3">
                  <h5 class="card-title mb-3">Garden storage shed</h5>
                  <p class="card-text mb-4">
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button
                    className="card-button"
                    variant="primary"
                    type="submit"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3 mb-5">
              <div class="card shadow border-0">
                <div class="position-relative">
                  <img src={Service03} class="card-img-top" alt="..." />
                </div>
                <div class="card-body p-3">
                  <h5 class="card-title mb-3">Bathroom renovation</h5>
                  <p class="card-text mb-4">
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button
                    className="card-button"
                    variant="primary"
                    type="submit"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <a href="./all.html" class="btn btn-orange-outline ps-4 pe-4">
                Visualizar todos
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      <About />

      <AllServices />

      <Title title="Trusted by our customers" />

      <div class="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div class="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div class="row pt-3 pt-md-3 pt-lg-3">
            <div class="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div class="card border-0 shadow p-2">
                <div class="card-body">
                  <div class="w-100 mb-3">
                    <h4 class="fs-5">Painting, gardening and cleaning</h4>
                    <p class="mb-1 costumer-text">Customer in Basingstoke</p>

                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                  </div>
                  <p>“I found them very good, everything was fine.”</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div class="card border-0 shadow p-2">
                <div class="card-body">
                  <div class="w-100 mb-3">
                    <h4 class="fs-5">Painting and decoration</h4>
                    <p class="mb-1 costumer-text">Customer in Milton Keynes</p>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                  </div>
                  <p>“They are very good and very driven.”</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div class="card border-0 shadow p-2">
                <div class="card-body">
                  <div class="w-100 mb-3">
                    <h4 class="fs-5">Painting and erecting fence</h4>
                    <p class="mb-1 costumer-text">Customer in Basingstoke</p>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span class="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                  </div>
                  <p>“They are very good I would recomend them.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />

      <Title title="Where to find us" />

      <section>
        <div className="row mb-4">
          <div className="col-md-12 container-col">
            <div
              id="map-container-google-1"
              class="z-depth-1-half map-container mb-4"
              style={{ height: '500px', width: isMobile ? '80%' : '100%' }}
            >
              <iframe
                src="https://www.google.com/maps/d/embed?mid=19md64tYtjm5rpR-gJ61wv1O2up78n8iv"
                title="Danansan Property Services"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm />
    </Styles>
  );
}

export default MainPage;
