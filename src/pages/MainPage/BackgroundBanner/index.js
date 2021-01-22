import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { Styles } from './styles';

function BackgroundBanner() {
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>
        <div className="banner-content">
          <h1 class="text-center">
            <strong>Facilities and Property Services</strong>
          </h1>
          <p class="text-center">
            We offer highly qualified and trained professionals to solve any
            problem <br /> in several different sectors
          </p>
        </div>

        <Link className="button-style btn p-2 mt-5" to="/get-a-quote">
          Get a free quote
        </Link>
      </div>
    </Styles>
  );
}

export default BackgroundBanner;
