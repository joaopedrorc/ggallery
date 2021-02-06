import styled from 'styled-components';

export const Styles = styled.div`
  button {
    width: 180px;
    background-color: var(--primary);

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  input {
    border-color: var(--black);
  }

  select {
    border-color: var(--black);
  }

  textarea {
    border-color: var(--black);
  }
  .container {
    margin-bottom: 48px;
  }
  .container-col {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-size {
    max-width: 550px;
  }

  .check-container {
    height: 25px;
  }

  .success-message {
    width: 100%;
    padding: 10px;
    background-color: green;
    color: white;
  }

  .error-message {
    width: 100%;
    padding: 10px;
    background-color: red;
    color: white;
  }
`;
