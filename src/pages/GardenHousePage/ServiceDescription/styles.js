import styled from 'styled-components';

export const Styles = styled.div`
  .p-container {
    font-size: 1.75rem;
    font-weight: 300;

    @media (max-width: 767.98px) {
      font-size: 1.313rem;
      font-weight: 300;
    }

    &:last-child {
      margin-bottom: 2.813rem;
    }
  }

  .list-conteniner {
    width: 100%;

    @media (max-width: 767.98px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .cities-column {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }

  .cities-column p {
    width: 80%;

    font-weight: 300;
    margin: 0;
    text-align: start;
  }

  .rounded-bol {
    width: 19px;
    height: 19px;
    background-color: var(--primary);
    border-radius: 50%;
    margin-right: 15px;
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media (min-width: 950px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      width: 50%;
      height: 800px;

      margin-right: auto;
      margin-left: auto;
    }
  }

  .credit {
    font-size: 0.75rem;
    padding: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 10px;
  }

  .credit a {
    color: #656666;
  }

  .link-button {
    background-color: var(--primary);
    width: 400px;
    margin-bottom: 3rem;
    color: var(--white);

    a {
      color: var(--white);
    }

    &:hover {
      background-color: var(--primary-dark);
      text-decoration: underline;
    }

    @media (max-width: 950px) {
      margin: 2rem 1rem 3rem 1rem;
      width: 300px;
    }
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
