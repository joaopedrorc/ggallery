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
              <strong>Painting and Decorating</strong>
            </h1>
            <p>
              We offer excellent painting and decoration that vary from a <br />
              simple painting to a room decoration.
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
