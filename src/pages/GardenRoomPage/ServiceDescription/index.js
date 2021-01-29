import React from 'react';
import { Link } from 'react-router-dom';

// import ImageGallery from 'react-image-gallery';

import { Styles, ContainerBox } from './styles';

import { Container } from 'react-bootstrap';
import Title from '../../../components/Title';
import AllServices from '../../../components/AllServices';
import UpperFooter from '../../../components/UpperFooter';

import Image0 from '../../../assets/masterServices/gardenRoom/shed0.jpg';
import Image01 from '../../../assets/masterServices/gardenRoom/shed01.jpg';
import Image02 from '../../../assets/masterServices/gardenRoom/shed02.jpg';
import Image03 from '../../../assets/masterServices/gardenRoom/shed03.jpg';
import Image04 from '../../../assets/masterServices/gardenRoom/shed04.jpg';
import Image05 from '../../../assets/masterServices/gardenRoom/shed05.jpg';
import Image06 from '../../../assets/masterServices/gardenRoom/shed06.jpg';
import Image08 from '../../../assets/masterServices/gardenRoom/shed08.jpg';
import Image09 from '../../../assets/masterServices/gardenRoom/shed09.jpg';

export default function ServiceDescription() {
  return (
    <Styles>
      <Title title="Insulated garden room office/studio" />
      <ContainerBox>
        <p className="p-container text-center">
          Increase your living space with one of our low maintenance, highly
          insulated garden buildings.
        </p>
      </ContainerBox>
      <Title title="How would you use yours?" />
      <Container>
        <div class="w-100 pb-5 pt-lg-2 pb-lg-5 ">
          <div class="container pt-2 pb-2 pt-lg-2 pb-lg-0">
            <div class="row mb-4">
              <div class="col-12 col-md-12 col-lg-4 mb-5">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">She Shed</h5>
                  </div>
                  <img
                    src={Image0}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    A quiet place for mum enjoy a minutes of calm <br />
                    <p className="credit">
                      Photo credit:{' '}
                      <a href="https://redirect.viglink.com/?format=go&jsonp=vglnk_161188455103513&key=035385aa205e0d504e148c27f8aa731f&libId=kkhlktte01013v6i000DLq98p85858f8m&loc=https%3A%2F%2Fmymodernmet.com%2Fshe-sheds%2F&v=1&out=http%3A%2F%2Fboligmagasinet.dk%2Fsommerhus%2Fet-skont-mini-sommerhus-pa-39-kvadratmeter&title=Stylish%20%22She%20Sheds%22%20Are%20the%20Relaxing%20Women%E2%80%99s%20Version%20of%20Man%20Caves&txt=Tia%20Borg%20Smidt">
                        Tia Borg Smidt
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">
                      Quiet Retreat
                    </h5>
                  </div>
                  <img
                    src={Image01}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    A peaceful place to relax and enjoy a quiet moment
                    <p className="credit">
                      Photo credit:{' '}
                      <a href="https://redirect.viglink.com/?format=go&jsonp=vglnk_161188468585015&key=035385aa205e0d504e148c27f8aa731f&libId=kkhlktte01013v6i000DLq98p85858f8m&loc=https%3A%2F%2Fmymodernmet.com%2Fshe-sheds%2F&v=1&out=http%3A%2F%2Fkenjo.se%2F&title=Stylish%20%22She%20Sheds%22%20Are%20the%20Relaxing%20Women%E2%80%99s%20Version%20of%20Man%20Caves&txt=KENJO">
                        KENJO
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">Home Office</h5>
                  </div>
                  <img
                    src={Image02}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    Be close to home, family and productive. Be safe{' '}
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">Gymnasium</h5>
                  </div>
                  <img
                    src={Image03}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    Bring your workout to the privacy of your home
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">
                      Garden Studio
                    </h5>
                  </div>
                  <img
                    src={Image04}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    A garden room to be used as a studio, bussines meetings or a
                    beauty parlour
                    <p className="credit">
                      Photo credit:{' '}
                      <a href="https://redirect.viglink.com/?format=go&jsonp=vglnk_161188477634418&key=035385aa205e0d504e148c27f8aa731f&libId=kkhlktte01013v6i000DLq98p85858f8m&loc=https%3A%2F%2Fmymodernmet.com%2Fshe-sheds%2F&v=1&out=http%3A%2F%2Fwww.detailcollective.com%2Fblog%2Foutside-spaces-backyard-room&title=Stylish%20%22She%20Sheds%22%20Are%20the%20Relaxing%20Women%E2%80%99s%20Version%20of%20Man%20Caves&txt=Detail%20Collective">
                        Detail Collective
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">Man Cave</h5>
                  </div>
                  <img
                    src={Image05}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    A tool shed with an internal partition for store everything
                    you need
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">Party Room</h5>
                  </div>
                  <img
                    src={Image06}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    A outdoor place to chill
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">
                      Extra Single or Double Room
                    </h5>
                  </div>
                  <img
                    src={Image09}
                    class="card-img-top"
                    alt="Extra Single or Double Room"
                  />
                  <div class="card-footer text-muted">
                    Did you ever wanted that extra room but without renovation
                    headaches ?
                    <p className="credit">
                      Photo credit:{' '}
                      <a href="https://redirect.viglink.com/?format=go&jsonp=vglnk_161188497468520&key=035385aa205e0d504e148c27f8aa731f&libId=kkhlktte01013v6i000DLq98p85858f8m&loc=https%3A%2F%2Fmymodernmet.com%2Fshe-sheds%2F&v=1&out=http%3A%2F%2Fwww.gardenista.com%2Fposts%2Foutbuilding-of-the-week-a-study-in-black-by-la-designer-alexandra-angle&title=Stylish%20%22She%20Sheds%22%20Are%20the%20Relaxing%20Women%E2%80%99s%20Version%20of%20Man%20Caves&txt=Gardenista">
                        Gardenista
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center p-0 pb-0">
                      Hot Tub Zone
                    </h5>
                  </div>
                  <img
                    src={Image08}
                    class="card-img-top"
                    alt="Garden maintenance"
                  />
                  <div class="card-footer text-muted">
                    Is there a better way to relax ?
                  </div>
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
