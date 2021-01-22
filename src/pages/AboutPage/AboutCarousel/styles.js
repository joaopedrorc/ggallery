import styled from 'styled-components';

export const Container = styled.div`
  .card-button {
    width: 100%;
    background-color: var(--primary);
    border-radius: 2;

    &:hover {
      background-color: var(--primary-dark);
    }
  }
  margin-bottom: 3rem;
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
