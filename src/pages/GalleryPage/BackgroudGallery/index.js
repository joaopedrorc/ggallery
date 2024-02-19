import React from 'react';

import { Styles } from './styles';

function BackgroudGallery() {
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>GGallery's Gallery</h1>
        </div>
      </div>
    </Styles>
  );
}

export default BackgroudGallery;
