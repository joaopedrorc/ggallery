import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import MainPage from './pages/MainPage';
import ContractPage from './pages/ContractPage';
import AreasPage from './pages/AreasPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import GetAQuotePage from './pages/GetAQuotePage';
import GardenRoomPage from './pages/GardenRoomPage';
import FencePage from './pages/FencePage';
import GardenStoragePage from './pages/GardenStoragePage';
import BathRenovationPage from './pages/BathRenovationPage';
import RoofCleaningPage from './pages/RoofCleaningPage';
import PaintingDecorationPage from './pages/PaintingDecorationPage';
import FlooringTilesPage from './pages/FlooringTilesPage';
import EletricalPage from './pages/EletricalPage';
import HeatingPlumbingPage from './pages/HeatingPlumbingPage';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/contracts" component={ContractPage} />
          <Route exact path="/areas" component={AreasPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/get-a-quote" component={GetAQuotePage} />
          <Route
            exact
            path="/insulated-garden-room"
            component={GardenRoomPage}
          />
          <Route exact path="/erecting-fence" component={FencePage} />
          <Route
            exact
            path="/garden-storage-shed"
            component={GardenStoragePage}
          />
          <Route
            exact
            path="/bathroom-renovation"
            component={BathRenovationPage}
          />
          <Route exact path="/roof-cleaning" component={RoofCleaningPage} />
          <Route
            exact
            path="/painting-decoration"
            component={PaintingDecorationPage}
          />
          <Route
            exact
            path="/flooring-tiles-instalation"
            component={FlooringTilesPage}
          />
          <Route exact path="/eletical-services" component={EletricalPage} />
          <Route
            exact
            path="/heating-plumbing"
            component={HeatingPlumbingPage}
          />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}
export default App;
