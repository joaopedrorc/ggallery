import styled from 'styled-components';

export const Styles = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 300;

    margin-bottom: 2rem;
    /* margin-left: 1rem; */
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
    width: 79.333%;
  }

  /* .sentence-right {
    margin-right: 300px;
  } */

  .call-button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    height: 45px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
`;
