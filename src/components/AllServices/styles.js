import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    margin-bottom: 2rem;
  }

  .card-button {
    width: 100%;
    background-color: var(--primary);
    border-radius: 0;
    padding: 0.625rem;
    border: none;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--primary-dark);
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
