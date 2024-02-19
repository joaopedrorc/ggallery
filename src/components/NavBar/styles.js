import styled from 'styled-components';

export const Styles = styled.div`
  .navbar {
    background: var(--black);
    padding: 10px 25px;
  }

  .navbar-items {
    z-index: 9;
  }

  .button-style {
    border: 1px solid var(--white);
    color: var(--white);
    font-size: 18px;

    &:hover {
      background: var(--white);
      color: var(--black);
      text-decoration: underline;
    }

    svg:hover {
      fill: var(--black);
    }
  }

  nav .nav-item .nav-link a {
    color: var(--white);
    font-weight: 300;
    font-size: 14px;

    &:hover {
      color: #ddd;
      text-decoration: underline;
    }
  }

  .navbar-brand a {
    color: var(--white);
    font-weight: 700;
    font-size: 1.4rem;

    &:hover {
      color: #ddd;
      text-decoration: none;
    }
  }

  .navbar-light .navbar-nav .nav-link {
    color: var(--white);
    font-weight: 300;
    font-size: 14px;

    &:hover {
      color: #ddd;
      text-decoration: underline;
    }
  }

  .dropdown-menu .dropdown-item a {
    color: #515254;

    &:hover {
      text-decoration: none;
    }

    &:active {
      color: var(--white);
    }
  }

  .text-size {
    font-size: 14px;
  }
`;
