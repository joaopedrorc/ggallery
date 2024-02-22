import styled from 'styled-components';

export const Styles = styled.div`
  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: 100%;
    margin: 0 0 24px 0;
  }

  .checkboxGroup {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 20px 0;
  }

  .checkboxGroup input {
    margin: 0 15px;
    height: 30px;
    width: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  form label {
    font-size: 18px;
    margin: 0 0 5px 0;
    color: var(--gray-light);
  }

  form input {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin: 0 0 20px 0;
    border-radius: 8px;
    border: 1px solid var(--gray);
  }

  form select {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin: 0 0 20px 0;
    border-radius: 8px;
    border: 1px solid var(--gray);\
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  }

  form select:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }

  select {
    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  form textarea {
    width: 100%;
    padding: 10px;
    margin: 0 0 20px 0;
    border-radius: 8px;
    border: 1px solid var(--gray);
  }

  form input[type='submit'] {
    width: 100%;
    height: 60px;
    margin: 0 0 20px 0;
    border-radius: 8px;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    font-size: 22px;
    cursor: pointer;
  }

  form input[type='submit']:hover {
    background-color: var(--primary-dark);
  }
`;

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhatsAppButton = styled.a`
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

  cursor: pointer;
  font-size: 22px;

  :hover {
    background-color: #00ab58;
    text-decoration: none;
    color: var(--white);
  }
`;
