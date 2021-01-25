import React from 'react';

import { Styles } from './styles';

export default function BackgroundServices() {
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>

        <div className="container">
          <div className=" banner-content">
            <h1>
              <strong>Insulated Garden Room/Office/Studio </strong>
            </h1>
            <p>
              Increase your living space with one of our low maintenance, <br />{' '}
              highly insulated composite garden buildings
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
