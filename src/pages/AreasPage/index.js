import React from 'react';

import { Container } from 'react-bootstrap';

import BackgroudAreas from './BackgroudAreas';
import Title from '../../components/Title';
import UpperFooter from '../../components/UpperFooter';

import { Styles } from './styles';

function AreasPage() {
  return (
    <Styles>
      {' '}
      <BackgroudAreas />
      <Title title="Areas we cover" />
      <Container className="mb-4">
        <h2 className="text-center">
          GGallery Painting and Decoration provides several services to
          commercial and residential customers across Basingstoke and nearby
          areas. Most of our customers are located in the following cities. If
          you are for property/business services in Basingstoke or in any other
          city please contact us to check availability in your area.
        </h2>

        <div className="row mb-4">
          <div className="col-12 col-md-12 col-lg-6 mb-5">
            <div className="list-conteniner">
              <div className="row mb-4">
                <div className="col-6 col-md-6 col-lg-6 mb-3">
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Bramley</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Rotherwick</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Silchester</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Hannington</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>North Waltham</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Odiham</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Steventon</p>
                  </div>
                  <div className="cities-column">
                    <div className="preston-container"></div>
                    <p>Preston Candover</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Mortimer</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Kingsclere</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Bentworth</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Hook</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 mb-3">
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Alton</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Four Marks</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Burghclere</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Crondall</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Fleet</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Bradfield</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Reading</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Farnham</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Bracknell</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Aldershot</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Whitchurch</p>
                  </div>
                  <div className="cities-column">
                    <div className="rounded-bol"></div>
                    <p>Farnborough</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 mb-5">
            <section>
              <div className="row mb-4">
                <div className="col-md-12 container-col">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1FgHCjjUf2QF6PZP6QaU6VL3BJV2WMziF"
                    width="100%"
                    height="446"
                    title="Areas we cover"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
      <UpperFooter />
    </Styles>
  );
}

export default AreasPage;
