import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    overflow-x: hidden;  
  }

  :root {
    --white: #fff;
    --black: #000;
    --primary: #CA2B16;
    --primary-dark: #EB5A47;
    --secondary: #A1AEC0;
    --gold: #FFD700;
    --green: #37A761;
    --gray:#A1AEC0;
    --gray-light: #656666;
  }
`;
