import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

import { Button, Container } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

import Title from '../../components/Title';
import About from '../../components/About';
import AllServices from '../../components/AllServices';
import QuoteForm from '../../components/QuoteForm';
import BackgroundBanner from './BackgroundBanner';
import Player from '../../components/Player';
import BgSong from '../../assets/song/bgSong.mp3';

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

      <Container className="text-center">
        <Player url={BgSong} />
      </Container>

      <div className="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div className="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div className="row mb-1">
            <div className="col-12 col-md-12 col-lg-3 mb-5">
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
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button className="card-button">
                    <Link to="/insulated-garden-room">Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 mb-5">
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
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button className="card-button">
                    <Link to="/erecting-fence">Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 mb-5">
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
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button className="card-button">
                    <Link to="/garden-storage-shed">Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 mb-5">
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
                    Our post construction cleaning service is a specialist
                    division that provides the full range of cleaning services.
                  </p>
                  <Button className="card-button">
                    <Link to="/bathroom-renovation">Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />

      <AllServices />

      <div className="mt-5">
        <Title title="Trusted by our customers" />
      </div>

      <div className="w-100 pb-5 pt-lg-2 pb-lg-5">
        <div className="container pt-2 pb-2 pt-lg-2 pb-lg-0">
          <div className="row pt-3 pt-md-3 pt-lg-3">
            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card border-0 shadow p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Painting, gardening and cleaning</h4>
                    <p className="mb-1 costumer-text">
                      Customer in Basingstoke
                    </p>

                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                  </div>
                  <p>“I found them very good, everything was fine.”</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card border-0 shadow p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Painting and decoration</h4>
                    <p className="mb-1 costumer-text">
                      Customer in Milton Keynes
                    </p>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                  </div>
                  <p>“They are very good and very driven.”</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card border-0 shadow p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Painting and erecting fence</h4>
                    <p className="mb-1 costumer-text">
                      Customer in Basingstoke
                    </p>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
                      <StarFill color="#FFAE2B" size={20} />
                    </span>
                    <span className="star">
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
