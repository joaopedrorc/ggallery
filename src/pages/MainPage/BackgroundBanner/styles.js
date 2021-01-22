import styled from 'styled-components';

import mainPageBanner from '../../../assets/banners/mainPageBanner.jpg';

export const Styles = styled.div`
  p {
    font-size: 1.313rem;
    font-weight: 300;
  }

  .background-banner {
    background-image: url(${mainPageBanner});
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
    align-items: center;

    position: absolute;
    z-index: 2;
  }
  /* 
  button {
    z-index: 2;

    width: 300px;
    margin-bottom: -18.75rem;

    &:hover a {
      color: var(--black);
    }
  } */

  .button-style {
    border: 1px solid var(--white);
    color: var(--white);
    font-size: 21px;
    width: 300px;
    margin-bottom: -18.75rem;

    z-index: 2;

    &:hover {
      background: var(--white);
      color: var(--black);
      text-decoration: underline;
    }
  }
`;
