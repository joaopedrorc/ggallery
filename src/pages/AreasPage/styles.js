import styled from 'styled-components';

export const Styles = styled.div`
  h2 {
    font-size: 1.313rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .preston-container {
    width: 19px;
    height: 19px;
    background-color: var(--primary);
    border-radius: 50%;
    margin-right: 15px;
    @media (max-width: 767.98px) {
      width: 19px;
      height: 19px;
      background-color: var(--primary);
      border-radius: 50%;
      margin-right: 9px;
    }
  }

  .cities-column {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }

  .cities-column p {
    font-weight: 300;
    margin: 0;
  }

  .rounded-bol {
    width: 19px;
    height: 19px;
    background-color: var(--primary);
    border-radius: 50%;
    margin-right: 15px;
  }

  .map-container {
    height: 100%;
  }

  .list-conteniner {
    @media (max-width: 767.98px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
