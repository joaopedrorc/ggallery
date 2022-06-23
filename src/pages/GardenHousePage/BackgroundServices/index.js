/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

export default function BackgroundServices() {
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      send_to: 'AW-430100064/EdZZCOG72sEDEOCci80B',
      event_callback: callback,
    });
    return false;
  }
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>

        <div className="container">
          <div className="banner-content">
            <h1>
              <strong>Custom Garden Houses</strong>
            </h1>
            <p>
              Increase your living space with one of our low maintenance <br />{' '}
              and custom build garden house
            </p>
            <button
              className="button-style btn p-2 mt-5"
              onClick={() => gtag_report_conversion}
            >
              <Link to="/get-a-quote">Get a free quote</Link>
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
}
