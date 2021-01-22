import styled from 'styled-components';
import AreasBanner from '../../../assets/banners/AreasBanner.jpg';

export const Styles = styled.div`
  .background-banner {
    background-image: url(${AreasBanner});
    height: 500px;
    background-size: cover;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.47;
  }

  .banner-content {
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    position: absolute;
    z-index: 2;
  }

  h1 {
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
