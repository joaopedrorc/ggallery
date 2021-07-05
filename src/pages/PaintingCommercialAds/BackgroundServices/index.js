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
              <strong>Your commercial painter in Basingstoke</strong>
            </h1>
            <p>
              We offer excellent painting team capable of several painting services to<br />
              whole building refurbishments.
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
