import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;

  .carousel-container {
    width: 70%;
    margin: auto;
    @media (max-width: 767.98px) {
      width: 100%;
    }
  }

  .card-button {
    width: 100%;
    background-color: var(--primary);
    border-radius: 2;

    &:hover {
      background-color: var(--primary-dark);
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
