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
              <strong>Electrical Services</strong>
            </h1>
            <p>
              We offer trustfull professionals to ensure the safety
              <br /> of your home and family
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
