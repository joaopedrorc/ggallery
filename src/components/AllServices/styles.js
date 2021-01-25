import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    margin-bottom: 2rem;
    color: var(--white);
    padding: 2rem;
  }

  .card-container {
    background-color: var(--primary);
    width: 100%;

    @media (max-width: 950px) {
      background-color: var(--primary);
      width: 100%;
    }
  }

  .card-button {
    width: 100%;
    color: var(--primary);
    background-color: var(--white);
    border-radius: 0;
    padding: 0.625rem;
    border: none;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--primary-dark);
      color: var(--white);
      text-decoration: underline;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
