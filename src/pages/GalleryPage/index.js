import React, { useState } from 'react';

import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

import {
  Container,
  Wrapper,
  GalleryContainer,
  WrapperBtn,
  ButtonsWrapper,
  VideoWrapper,
  CustomButton,
  CustomButton2,
} from './styles';

import BackgroundGallery from './BackgroudGallery';
import Title from '../../components/Title';
import UpperFooter from '../../components/UpperFooter';

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
// import Bath14 from '../../assets/gallery/gallery-one/bath14.jpeg';
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
import Bath28 from '../../assets/gallery/gallery-one/bath28.jpeg';
import Bath29 from '../../assets/gallery/gallery-one/bath29.jpeg';
import Bath30 from '../../assets/gallery/gallery-one/bath30.jpeg';
import Bath31 from '../../assets/gallery/gallery-one/bath31.jpeg';
import Bath32 from '../../assets/gallery/gallery-one/bath32.jpeg';
import Bath33 from '../../assets/gallery/gallery-one/bath33.jpeg';
import Bath34 from '../../assets/gallery/gallery-one/bath34.jpeg';
import Bath35 from '../../assets/gallery/gallery-one/bath35.jpeg';

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

// import Fence0 from '../../assets/gallery/gallery-three/fence0.webp';
import Fence01 from '../../assets/gallery/gallery-three/fence01.webp';
import Fence02 from '../../assets/gallery/gallery-three/fence02.webp';
// import Fence03 from '../../assets/gallery/gallery-three/fence02.webp';
import Fence04 from '../../assets/gallery/gallery-three/fence03.webp';
import Fence05 from '../../assets/gallery/gallery-three/fence04.webp';
import Fence06 from '../../assets/gallery/gallery-three/fence05.webp';
// import Fence07 from '../../assets/gallery/gallery-three/fence06.webp';

import Painting0 from '../../assets/gallery/gallery-four/painting0.jpeg';
import Painting01 from '../../assets/gallery/gallery-four/painting01.jpeg';
import Painting02 from '../../assets/gallery/gallery-four/painting02.jpeg';
import Painting03 from '../../assets/gallery/gallery-four/painting03.jpeg';
import Painting04 from '../../assets/gallery/gallery-four/paintingImage4.jpeg';
import Painting05 from '../../assets/gallery/gallery-four/paintingImage5.jpeg';
import Painting06 from '../../assets/gallery/gallery-four/paintingImage6.jpeg';
import Painting07 from '../../assets/gallery/gallery-four/paintingImage7.jpeg';
import Painting08 from '../../assets/gallery/gallery-four/paintingImage8.jpeg';
import Painting09 from '../../assets/gallery/gallery-four/paintingImage9.jpeg';
import Painting10 from '../../assets/gallery/gallery-four/paintingImage10.jpeg';

import SummerHouse01 from '../../assets/masterServices/gardenRoom/summerHouse01.jpeg';
import SummerHouse02 from '../../assets/masterServices/gardenRoom/summerHouse02.jpeg';
import SummerHouse03 from '../../assets/masterServices/gardenRoom/summerHouse03.jpeg';
import SummerHouse04 from '../../assets/masterServices/gardenRoom/summerHouse04.jpeg';
import SummerHouse05 from '../../assets/masterServices/gardenRoom/summerHouse05.jpeg';
import SummerHouse06 from '../../assets/masterServices/gardenRoom/summerHouse06.jpeg';
import SummerHouse07 from '../../assets/masterServices/gardenRoom/summerHouse07.jpeg';
import SummerHouse08 from '../../assets/masterServices/gardenRoom/summerHouse08.jpeg';
import SummerHouse09 from '../../assets/masterServices/gardenRoom/summerHouse09.jpeg';
import SummerHouse10 from '../../assets/masterServices/gardenRoom/summerHouse10.jpeg';
import SummerHouse11 from '../../assets/masterServices/gardenRoom/summerHouse11.jpeg';
import SummerHouse12 from '../../assets/masterServices/gardenRoom/summerHouse12.jpeg';
import SummerHouse13 from '../../assets/masterServices/gardenRoom/summerHouse13.jpeg';
import SummerHouse14 from '../../assets/masterServices/gardenRoom/summerHouse14.jpeg';
import SummerHouse15 from '../../assets/masterServices/gardenRoom/summerHouse15.jpeg';
import SummerHouse16 from '../../assets/masterServices/gardenRoom/summerHouse16.jpeg';
import SummerHouse17 from '../../assets/masterServices/gardenRoom/summerHouse16.jpeg';

import gardenHouse01 from '../../assets/gallery/gallery-five/gardenHouse01.jpeg';
import gardenHouse02 from '../../assets/gallery/gallery-five/gardenHouse02.jpeg';
import gardenHouse04 from '../../assets/gallery/gallery-five/gardenHouse04.jpeg';
import gardenHouse06 from '../../assets/gallery/gallery-five/gardenHouse06.jpeg';
import gardenHouse08 from '../../assets/gallery/gallery-five/gardenHouse08.jpeg';
import gardenHouse12 from '../../assets/gallery/gallery-five/gardenHouse12.jpeg';
import gardenHouse15 from '../../assets/gallery/gallery-five/gardenHouse15.jpeg';
import gardenHouse22 from '../../assets/gallery/gallery-five/gardenHouse22.jpeg';
import gardenHouse23 from '../../assets/gallery/gallery-five/gardenHouse23.jpeg';
import gardenHouse32 from '../../assets/gallery/gallery-five/gardenHouse32.jpeg';
import gardenHouse33 from '../../assets/gallery/gallery-five/gardenHouse33.jpeg';
import gardenHouse34 from '../../assets/gallery/gallery-five/gardenHouse34.jpeg';
import gardenHouse36 from '../../assets/gallery/gallery-five/gardenHouse36.jpeg';
import gardenHouse37 from '../../assets/gallery/gallery-five/gardenHouse37.jpeg';
import gardenHouse38 from '../../assets/gallery/gallery-five/gardenHouse38.jpeg';
import gardenHouse39 from '../../assets/gallery/gallery-five/gardenHouse39.jpeg';
import gardenHouse40 from '../../assets/gallery/gallery-five/gardenHouse40.jpeg';
import gardenHouse41 from '../../assets/gallery/gallery-five/gardenHouse41.jpeg';
import gardenHouse42 from '../../assets/gallery/gallery-five/gardenHouse42.jpeg';

const summerHouseImages = [
  {
    original: SummerHouse01,
    thumbnail: SummerHouse01,
  },
  {
    original: SummerHouse02,
    thumbnail: SummerHouse02,
  },
  {
    original: SummerHouse03,
    thumbnail: SummerHouse03,
  },
  {
    original: SummerHouse04,
    thumbnail: SummerHouse04,
  },
  {
    original: SummerHouse05,
    thumbnail: SummerHouse05,
  },
  {
    original: SummerHouse06,
    thumbnail: SummerHouse06,
  },
  {
    original: SummerHouse07,
    thumbnail: SummerHouse07,
  },
  {
    original: SummerHouse08,
    thumbnail: SummerHouse08,
  },
  {
    original: SummerHouse09,
    thumbnail: SummerHouse09,
  },
  {
    original: SummerHouse10,
    thumbnail: SummerHouse10,
  },
  {
    original: SummerHouse11,
    thumbnail: SummerHouse11,
  },
  {
    original: SummerHouse12,
    thumbnail: SummerHouse12,
  },
  {
    original: SummerHouse13,
    thumbnail: SummerHouse13,
  },
  {
    original: SummerHouse14,
    thumbnail: SummerHouse14,
  },
  {
    original: SummerHouse15,
    thumbnail: SummerHouse15,
  },
  {
    original: SummerHouse16,
    thumbnail: SummerHouse16,
  },
  {
    original: SummerHouse17,
    thumbnail: SummerHouse17,
  },
];

const images0 = [
  {
    original: Bath29,
    thumbnail: Bath29,
  },
  {
    original: Bath30,
    thumbnail: Bath30,
  },
  {
    original: Bath31,
    thumbnail: Bath31,
  },
  {
    original: Bath32,
    thumbnail: Bath32,
  },
  {
    original: Bath35,
    thumbnail: Bath35,
  },
  {
    original: Bath33,
    thumbnail: Bath33,
  },
  {
    original: Bath34,
    thumbnail: Bath34,
  },
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
    original: Bath15,
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
  {
    original: Bath28,
    thumbnail: Bath28,
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
    original: Fence04,
    thumbnail: Fence04,
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
];

const images03 = [
  {
    original: Painting04,
    thumbnail: Painting04,
  },
  {
    original: Painting05,
    thumbnail: Painting05,
  },
  {
    original: Painting06,
    thumbnail: Painting06,
  },
  {
    original: Painting07,
    thumbnail: Painting07,
  },
  {
    original: Painting08,
    thumbnail: Painting08,
  },
  {
    original: Painting09,
    thumbnail: Painting09,
  },
  {
    original: Painting10,
    thumbnail: Painting10,
  },
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

const images04 = [
  {
    original: gardenHouse01,
    thumbnail: gardenHouse01,
  },
  {
    original: gardenHouse02,
    thumbnail: gardenHouse02,
  },
  {
    original: gardenHouse04,
    thumbnail: gardenHouse04,
  },
  {
    original: gardenHouse06,
    thumbnail: gardenHouse06,
  },
  {
    original: gardenHouse08,
    thumbnail: gardenHouse08,
  },
  {
    original: gardenHouse12,
    thumbnail: gardenHouse12,
  },
  {
    original: gardenHouse15,
    thumbnail: gardenHouse15,
  },
  {
    original: gardenHouse22,
    thumbnail: gardenHouse22,
  },
  {
    original: gardenHouse23,
    thumbnail: gardenHouse23,
  },
  {
    original: gardenHouse32,
    thumbnail: gardenHouse32,
  },
  {
    original: gardenHouse33,
    thumbnail: gardenHouse33,
  },
  {
    original: gardenHouse34,
    thumbnail: gardenHouse34,
  },
  {
    original: gardenHouse40,
    thumbnail: gardenHouse40,
  },
  {
    original: gardenHouse39,
    thumbnail: gardenHouse39,
  },
  {
    original: gardenHouse36,
    thumbnail: gardenHouse36,
  },
  {
    original: gardenHouse37,
    thumbnail: gardenHouse37,
  },
  {
    original: gardenHouse38,
    thumbnail: gardenHouse38,
  },
  {
    original: gardenHouse41,
    thumbnail: gardenHouse41,
  },
  {
    original: gardenHouse42,
    thumbnail: gardenHouse42,
  },
];

function GalleryPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeBtn1, setActiveBtn1] = useState(true);
  const [activeBtn2, setActiveBtn2] = useState(false);

  function btn1() {
    setShowVideo(false);
    setActiveBtn1(true);
    setActiveBtn2(false);
  }

  function btn2() {
    setShowVideo(true);
    setActiveBtn1(false);
    setActiveBtn2(true);
  }

  return (
    <>
      <BackgroundGallery />
      <Title title="A collection of images from our services" />

      <Container>
        <Wrapper>
          <GalleryContainer>
            <h2>Garden office and gym house</h2>

            <WrapperBtn>
              <ButtonsWrapper>
                <CustomButton
                  active={activeBtn1}
                  onClick={() => {
                    btn1();
                  }}
                >
                  Images
                </CustomButton>

                <CustomButton2
                  active={activeBtn2}
                  onClick={() => {
                    btn2();
                  }}
                >
                  Videos
                </CustomButton2>
              </ButtonsWrapper>
            </WrapperBtn>

            {showVideo ? (
              <VideoWrapper>
                <ReactPlayer
                  url="https://res.cloudinary.com/danansan-property-services/video/upload/v1649455775/Website%20videos/mobile-movie-transparent_nocxr4.mp4"
                  controls={true}
                  playing={true}
                />
              </VideoWrapper>
            ) : (
              <ImageGallery items={images04} />
            )}
          </GalleryContainer>

          <GalleryContainer>
            <h2>Painting and decoration</h2>
            <ImageGallery items={images03} />
          </GalleryContainer>

          <GalleryContainer>
            <h2>Garden houses</h2>
            <ImageGallery items={summerHouseImages} />
          </GalleryContainer>

          <GalleryContainer>
            <h2>Bathroom renovation</h2>
            <ImageGallery items={images0} />
          </GalleryContainer>

          <GalleryContainer>
            <h2>Wood flooring and tile installation</h2>
            <ImageGallery items={images01} />
          </GalleryContainer>

          <GalleryContainer>
            <h2>Fence erecting</h2>
            <ImageGallery items={images02} />
          </GalleryContainer>
        </Wrapper>
      </Container>

      <UpperFooter />
    </>
  );
}

export default GalleryPage;
