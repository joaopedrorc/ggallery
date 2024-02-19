import styled from 'styled-components';

export const Styles = styled.div`
  footer {
    background-color: var(--primary);
    width: 100%;
  }

  h2 {
    color: var(--primary);
  }

  p {
    font-weight: 300;
  }

  .social-box {
    margin-top: -2rem;

    @media (max-width: 767.98px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .button-box {
    margin-right: 1rem;

    border: none;
    background-color: var(--white);

    @media (max-width: 767.98px) {
      margin-bottom: 2rem;
    }
  }

  .link-box {
    color: var(--white);
    font-weight: 300;
  }

  .dropdown-box button {
    border: none;
    background-color: transparent;
    font-weight: 300;

    padding: 0;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      background: none;
      background-color: transparent;
      border: none;
    }
  }

  .dropdown-item a {
    color: var(--black);
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
    border-color: var(--black);
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
