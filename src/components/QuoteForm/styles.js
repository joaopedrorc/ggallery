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
  .whatsapp-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 59px;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 25px;
    background-color: #00E676;
    color: var(--white);

    h3 {
      margin-right: 10px;
    }
  }

  .container {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
