import styled from 'styled-components';

export const Styles = styled.div`
  margin-top: 3rem;

  span {
    margin-right: 10px;
  }

  #footer-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }
  #footer-line {
    background-color: var(--white);
    height: 5px;
    width: 88px;
    border-radius: 2px;
  }

  .master-container {
    background-color: var(--primary);
    width: 100%;
  }

  .sentences-box {
    width: 60%;
  }

  .sentence-container {
    display: flex;
    justify-content: start;
    align-items: center;
    /* text-align: center; */

    margin-bottom: 1.5rem;
  }

  .sentence-container p {
    color: var(--white);
    font-size: 1.313rem;
    margin-bottom: 0;
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
