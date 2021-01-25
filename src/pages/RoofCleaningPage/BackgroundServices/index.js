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
              <strong>Roof Cleaning Services</strong>
            </h1>
            <p>
              We provide an excellent and trustful service. Catching up <br />{' '}
              with your regular roof maintenance!
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
