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
          Danansan provides cleaning services to commercial and domestic
          customers across Basingstoke and nearby areas. Most of our customers
          are located in the following cities. If you are for property/business
          services in basingstoke or in any other city please contact us to
          check availability in your area.
        </h2>

        <div class="row mb-4">
          <div class="col-12 col-md-12 col-lg-6 mb-5">
            <div className="list-conteniner">
              <div class="row mb-4">
                <div class="col-6 col-md-6 col-lg-6 mb-3">
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
                </div>
                <div class="col-6 col-md-6 col-lg-6 mb-3">
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
                    <div className="rounded-bol"></div>
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
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 mb-5">
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
