import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--black);
  }
  hr {
    background-color: var(--black);
    height: 5px;
    width: 88px;
    border-radius: 2px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
`;
