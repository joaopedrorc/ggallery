import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes/index';
import ReactGA from 'react-ga';
import LayoutDefault from './pages/_layout';

ReactGA.initialize('UA-189951997-1');

function App() {
  return (
    <>
      <AppRoutes />

      <GlobalStyles />
    </>
  );
}
export default App;
