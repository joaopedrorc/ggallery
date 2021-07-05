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
              <strong>Your painter & decorator in Basingstoke</strong>
            </h1>
            <p>
              We offer excellent painting and decorating that vary from interior <br />
              simple painting to an entire exterior home painting
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
