import styled from 'styled-components';

export const Styles = styled.div`
  .button-container {
    position: relative;
    /* max-width: 800px; */
    /* height: 200vh; for scrolling demo */
    /* margin: 0 auto;
    border: 1px solid black; */
  }

  .button-wrapper {
    position: absolute;
    right: 35px; /* button width plus margin */
    top: 30%; /* or whatever you need */
  }

  .btn-color {
    background-color: var(--primary);
    width: 150px;
    position: fixed;
    left: 3%;
    bottom: 10px;
    z-index: 3;
    color: var(--white);

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  .icon {
    margin-right: -10px;
  }
`;
