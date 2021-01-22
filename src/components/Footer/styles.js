import styled from 'styled-components';

export const Styles = styled.div`
  footer {
    background-color: var(--primary);
    width: 100%;
  }
  h2 {
    color: var(--primary);
  }
  a {
    color: var(--white);
    font-weight: 300;
  }

  p {
    font-weight: 300;
  }

  .text-container {
    width: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* margin-bottom: 1rem; */
  }

  .horizontal-line {
    border-color: var(--primary);
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .rights-container {
    background-color: var(--white);
  }
  .rights-container p {
    font-weight: 600;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    /* width: 50%; */
  }

  .icon-box {
    margin-right: 1rem;
  }
`;
