import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 3rem;

  .app {
    @media (min-width: 767.98px) {
      width: 70%;
      margin: auto;
    }
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-button {
    width: 100%;
    background-color: var(--primary);
    border-radius: 2;

    &:hover {
      background-color: var(--primary-dark);
    }
  }
  .link-button {
    background-color: var(--primary);
    width: 100%;
    color: var(--white);

    &:hover {
      background-color: var(--primary-dark);
      text-decoration: underline;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
