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
              <strong>Heating and Plumbing Services</strong>
            </h1>
            <p>
              We offer a highly qualified and trained professional team to{' '}
              <br /> support you with any type of problems
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
