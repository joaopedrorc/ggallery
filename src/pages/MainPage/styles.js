import styled from 'styled-components';

export const Styles = styled.div`
  .link-button {
    background-color: var(--primary);
    width: 100%;
    color: var(--white);

    &:hover {
      background-color: var(--primary-dark);
      text-decoration: underline;
    }
  }

  .card-height {
    height: 19rem;
  }

  .btn-01 {
    margin-bottom: -7.5rem;
  }
  .btn-02 {
    margin-bottom: -3.5rem;
  }
  .btn-03 {
    margin-bottom: -0.625rem;
  }
  .btn-04 {
    margin-bottom: -9.5rem;
  }

  .card-button a {
    color: var(--white);

    &:hover {
      text-decoration: underline;
      background-color: var(--primary-dark);
    }
  }

  .costumer-text {
    color: var(--gray-light);
  }

  .card-deck {
    margin-bottom: 50px;
  }

  .container-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-container {
    overflow: hidden;
    position: relative;
    height: 0;
  }
  .map-container iframe {
    left: 0;
    top: 0;
    height: 600px;
    width: 100%;
    position: absolute;
  }
`;
