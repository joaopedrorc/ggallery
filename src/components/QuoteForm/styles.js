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
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
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

export const WhappButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhappButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 250px;
  height: 60px;
  padding: 10px;

  margin-bottom: 50px;
  border-radius: 8px;
  background-color: #00db71;
  color: var(--white);

  /* box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.77); */
  cursor: pointer;
  font-size: 22px;

  :hover {
    background-color: #00ab58;
  }
`;
