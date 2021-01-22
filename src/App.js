import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import MainPage from './pages/MainPage';
import ContractPage from './pages/ContractPage';
import AreasPage from './pages/AreasPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import GetAQuotePage from './pages/GetAQuotePage';
import NotFound from './pages/NotFound';

// import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <Layout> */}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/contracts" component={ContractPage} />
          <Route exact path="/areas" component={AreasPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/get-a-quote" component={GetAQuotePage} />
          <Route component={NotFound} />
          {/* <Route exact path="/Services" component={MainPage} /> */}
        </Switch>
        {/* </Layout> */}
        <Footer />
      </Router>

      <GlobalStyles />
    </>
  );
}
export default App;
