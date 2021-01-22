import React from 'react';

import ImageGallery from 'react-image-gallery';

import Bath0 from '../../assets/gallery/gallery-one/bath0.webp';
import Bath01 from '../../assets/gallery/gallery-one/bath01.webp';
import Bath02 from '../../assets/gallery/gallery-one/bath02.webp';
import Bath03 from '../../assets/gallery/gallery-one/bath03.webp';
import Bath04 from '../../assets/gallery/gallery-one/bath04.webp';
import Bath05 from '../../assets/gallery/gallery-one/bath05.webp';
import Bath06 from '../../assets/gallery/gallery-one/bath06.webp';
import Bath07 from '../../assets/gallery/gallery-one/bath07.webp';
import Bath08 from '../../assets/gallery/gallery-one/bath08.webp';
import Bath09 from '../../assets/gallery/gallery-one/bath09.webp';
import Bath10 from '../../assets/gallery/gallery-one/bath10.webp';
import Bath11 from '../../assets/gallery/gallery-one/bath11.webp';
import Bath12 from '../../assets/gallery/gallery-one/bath12.jpeg';
import Bath13 from '../../assets/gallery/gallery-one/bath13.jpeg';
import Bath14 from '../../assets/gallery/gallery-one/bath14.jpeg';
import Bath15 from '../../assets/gallery/gallery-one/bath15.jpeg';
import Bath16 from '../../assets/gallery/gallery-one/bath16.jpeg';
import Bath17 from '../../assets/gallery/gallery-one/bath17.jpeg';
import Bath18 from '../../assets/gallery/gallery-one/bath18.jpeg';
import Bath19 from '../../assets/gallery/gallery-one/bath19.jpeg';
import Bath20 from '../../assets/gallery/gallery-one/bath20.jpeg';
import Bath21 from '../../assets/gallery/gallery-one/bath21.jpeg';
import Bath22 from '../../assets/gallery/gallery-one/bath22.jpeg';
import Bath23 from '../../assets/gallery/gallery-one/bath23.webp';
import Bath24 from '../../assets/gallery/gallery-one/bath24.webp';
import Bath25 from '../../assets/gallery/gallery-one/bath25.webp';
import Bath26 from '../../assets/gallery/gallery-one/bath26.webp';
import Bath27 from '../../assets/gallery/gallery-one/bath27.webp';

import Floor0 from '../../assets/gallery/gallery-two/floor0.webp';
import Floor01 from '../../assets/gallery/gallery-two/floor01.webp';
import Floor02 from '../../assets/gallery/gallery-two/floor02.webp';
import Floor03 from '../../assets/gallery/gallery-two/floor03.webp';
import Floor04 from '../../assets/gallery/gallery-two/floor04.webp';
import Floor05 from '../../assets/gallery/gallery-two/floor05.jpeg';
import Floor06 from '../../assets/gallery/gallery-two/floor06.jpeg';
import Floor07 from '../../assets/gallery/gallery-two/floor07.jpeg';
import Floor08 from '../../assets/gallery/gallery-two/floor08.jpeg';
import Floor09 from '../../assets/gallery/gallery-two/floor09.jpeg';
import Floor10 from '../../assets/gallery/gallery-two/floor10.jpeg';
import Floor11 from '../../assets/gallery/gallery-two/floor11.jpeg';
import Floor12 from '../../assets/gallery/gallery-two/floor12.jpeg';
import Floor13 from '../../assets/gallery/gallery-two/floor13.jpeg';

import Fence0 from '../../assets/gallery/gallery-three/fence0.webp';
import Fence01 from '../../assets/gallery/gallery-three/fence01.webp';
import Fence02 from '../../assets/gallery/gallery-three/fence02.webp';
import Fence03 from '../../assets/gallery/gallery-three/fence02.webp';
import Fence04 from '../../assets/gallery/gallery-three/fence03.webp';
import Fence05 from '../../assets/gallery/gallery-three/fence04.webp';
import Fence06 from '../../assets/gallery/gallery-three/fence05.webp';
import Fence07 from '../../assets/gallery/gallery-three/fence06.webp';

import Painting0 from '../../assets/gallery/gallery-four/painting0.jpeg';
import Painting01 from '../../assets/gallery/gallery-four/painting01.jpeg';
import Painting02 from '../../assets/gallery/gallery-four/painting02.jpeg';
import Painting03 from '../../assets/gallery/gallery-four/painting03.jpeg';

import { Styles } from './styles';

import BackgroundGallery from './BackgroudGallery';
import Title from '../../components/Title';
import UpperFooter from '../../components/UpperFooter';

const images0 = [
  {
    original: Bath24,
    thumbnail: Bath24,
  },
  {
    original: Bath23,
    thumbnail: Bath23,
  },
  {
    original: Bath25,
    thumbnail: Bath25,
  },
  {
    original: Bath26,
    thumbnail: Bath26,
  },
  {
    original: Bath27,
    thumbnail: Bath27,
  },
  {
    original: Bath01,
    thumbnail: Bath01,
  },
  {
    original: Bath02,
    thumbnail: Bath02,
  },
  {
    original: Bath03,
    thumbnail: Bath03,
  },
  {
    original: Bath04,
    thumbnail: Bath04,
  },
  {
    original: Bath05,
    thumbnail: Bath05,
  },
  {
    original: Bath0,
    thumbnail: Bath0,
  },
  {
    original: Bath06,
    thumbnail: Bath06,
  },
  {
    original: Bath07,
    thumbnail: Bath07,
  },
  {
    original: Bath08,
    thumbnail: Bath08,
  },
  {
    original: Bath09,
    thumbnail: Bath09,
  },
  {
    original: Bath10,
    thumbnail: Bath10,
  },
  {
    original: Bath11,
    thumbnail: Bath11,
  },
  {
    original: Bath12,
    thumbnail: Bath12,
  },
  {
    original: Bath13,
    thumbnail: Bath13,
  },
  {
    original: Bath14,
    thumbnail: Bath15,
  },
  {
    original: Bath16,
    thumbnail: Bath16,
  },
  {
    original: Bath17,
    thumbnail: Bath17,
  },
  {
    original: Bath17,
    thumbnail: Bath17,
  },
  {
    original: Bath01,
    thumbnail: Bath01,
  },
  {
    original: Bath18,
    thumbnail: Bath18,
  },
  {
    original: Bath19,
    thumbnail: Bath19,
  },
  {
    original: Bath20,
    thumbnail: Bath20,
  },
  {
    original: Bath21,
    thumbnail: Bath21,
  },
  {
    original: Bath22,
    thumbnail: Bath22,
  },
];

const images01 = [
  {
    original: Floor0,
    thumbnail: Floor0,
  },
  {
    original: Floor01,
    thumbnail: Floor01,
  },
  {
    original: Floor02,
    thumbnail: Floor02,
  },
  {
    original: Floor03,
    thumbnail: Floor03,
  },
  {
    original: Floor04,
    thumbnail: Floor04,
  },
  {
    original: Floor05,
    thumbnail: Floor05,
  },
  {
    original: Floor0,
    thumbnail: Floor0,
  },
  {
    original: Floor06,
    thumbnail: Floor06,
  },
  {
    original: Floor07,
    thumbnail: Floor07,
  },
  {
    original: Floor08,
    thumbnail: Floor08,
  },
  {
    original: Floor09,
    thumbnail: Floor09,
  },
  {
    original: Floor10,
    thumbnail: Floor10,
  },
  {
    original: Floor11,
    thumbnail: Floor11,
  },
  {
    original: Floor12,
    thumbnail: Floor12,
  },
  {
    original: Floor13,
    thumbnail: Floor13,
  },
];

const images02 = [
  {
    original: Fence02,
    thumbnail: Fence02,
  },
  {
    original: Fence03,
    thumbnail: Fence03,
  },
  {
    original: Fence04,
    thumbnail: Fence04,
  },
  {
    original: Fence0,
    thumbnail: Fence0,
  },
  {
    original: Fence01,
    thumbnail: Fence01,
  },
  {
    original: Fence05,
    thumbnail: Fence05,
  },
  {
    original: Fence06,
    thumbnail: Fence06,
  },
  {
    original: Fence07,
    thumbnail: Fence07,
  },
];

const images03 = [
  {
    original: Painting0,
    thumbnail: Painting0,
  },
  {
    original: Painting01,
    thumbnail: Painting01,
  },
  {
    original: Painting02,
    thumbnail: Painting02,
  },
  {
    original: Painting03,
    thumbnail: Painting03,
  },
];

function GalleryPage() {
  return (
    <Styles>
      <BackgroundGallery />
      <Title title="A collection of images from our services" />

      <div className="gallery-box">
        <div className="gallery-container">
          <h2>Bathroom renovation</h2>
          <ImageGallery items={images0} />
        </div>

        <div className="gallery-container">
          <h2>Wood flooring and tile installation</h2>
          <ImageGallery items={images01} />
        </div>

        <div className="gallery-container">
          <h2>Fence erecting</h2>
          <ImageGallery items={images02} />
        </div>

        <div className="gallery-container">
          <h2>Painting and decoration</h2>
          <ImageGallery items={images03} />
        </div>
      </div>

      <UpperFooter />
    </Styles>
  );
}

export default GalleryPage;
