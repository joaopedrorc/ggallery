import styled from 'styled-components';

export const Styles = styled.div`
  h2 {
    font-size: 1.688rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  li {
    text-align: left;
    list-style-type: none;
    margin-bottom: 1rem;

    font-size: 1.5rem;
    font-weight: 300;

    @media (max-width: 767.98px) {
      font-size: 1.313rem;
      font-weight: 300;
    }

    &:last-child {
      margin-bottom: 2rem;
    }
  }
  svg {
    margin-right: 1rem;
  }

  .li-container {
    width: 59.333%;
  }

  .p-container {
    width: 59.333%;
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

  .container-box {
    @media (max-width: 767.98px) {
      margin-left: 1rem;
    }
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    margin-left: 2rem;
  }
`;
