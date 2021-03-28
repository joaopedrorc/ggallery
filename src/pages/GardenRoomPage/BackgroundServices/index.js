import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

export default function BackgroundServices() {
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>

        <div className="container">
          <div className="banner-content">
            <h1>
              <strong>Insulated Garden Room/Office/Studio </strong>
            </h1>
            <p>
              Increase your living space with one of our low maintenance <br />{' '}
              highly insulated composite garden buildings
            </p>
            <Link className="button-style btn p-2 mt-5" to="/get-a-quote">
              Get a free quote
            </Link>
          </div>
        </div>
      </div>
    </Styles>
  );
}
