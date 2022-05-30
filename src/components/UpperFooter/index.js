/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, Container } from './styles';

import { Button } from 'react-bootstrap';

function UpperFooter() {
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      send_to: 'AW-430100064/dC3zCOe72sEDEOCci80B',
      event_callback: callback,
    });
    return false;
  }

  return (
    <Styles>
      <div className="title-container">
        <Container>
          <h1 className="text-center">Would you like more information ?</h1>
          <hr />
          <p className="text-center">
            {' '}
            Get in touch with one of our specialists and ask your questions.
          </p>
          <Button
            type="button"
            className="mr-3"
            onClick={() => gtag_report_conversion}
          >
            <Link to="/get-a-quote">Get a free quote</Link>
          </Button>
        </Container>
      </div>
    </Styles>
  );
}

export default UpperFooter;
