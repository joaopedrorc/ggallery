import styled from 'styled-components';

export const Styles = styled.div`
  p {
    color: var(--white);
    margin-top: 1rem;
  }

  button {
    background-color: var(--primary);
    border: none;
    border-radius: 0;
    margin-bottom: 1rem;

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  button a {
    color: var(--white);
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  hr {
    border: 1px solid var(--white);
    background-color: var(--white);
    height: 5px;
    width: 88px;
    border-radius: 2px;
  }

  .title-container {
    width: 100%;
    height: 220px;
    background-color: var(--black);

    @media (max-width: 550px) {
      width: 100%;
      height: 260px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;
  margin-bottom: 2rem;
`;
