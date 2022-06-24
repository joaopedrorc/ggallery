import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes/index';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-189951997-1');

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}
export default App;
