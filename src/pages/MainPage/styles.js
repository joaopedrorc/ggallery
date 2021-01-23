import styled from 'styled-components';

export const Styles = styled.div`
  .card-button {
    width: 100%;
    background-color: var(--primary);
    border-radius: 2;

    &:hover {
      background-color: var(--primary-dark);
    }
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
