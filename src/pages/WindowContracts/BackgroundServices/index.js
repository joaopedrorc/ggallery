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
              <strong>Contract Services - Window Cleaning</strong>
            </h1>
            <p>
              Some of our services are provided through annual <br /> or
              half-yearly contracts
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
