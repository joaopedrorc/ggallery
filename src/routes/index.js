import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import MainPage from '../pages/MainPage';
import ContractPage from '../pages/ContractPage';
import AreasPage from '../pages/AreasPage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import GetAQuotePage from '../pages/GetAQuotePage';
import GardenRoomPage from '../pages/GardenRoomPage';
import FencePage from '../pages/FencePage';
import GardenStoragePage from '../pages/GardenStoragePage';
import BathRenovationPage from '../pages/BathRenovationPage';
import RoofCleaningPage from '../pages/RoofCleaningPage';
import PaintingDecorationPage from '../pages/PaintingDecorationPage';
import FlooringTilesPage from '../pages/FlooringTilesPage';
import EletricalPage from '../pages/EletricalPage';
import HeatingPlumbingPage from '../pages/HeatingPlumbingPage';
import WindowCleaning from '../pages/WindowContrats';
import OfficeCleaning from '../pages/OfficeContracts';
import GardenMaintenance from '../pages/GardenContracts';
import NotFound from '../pages/NotFound';
import LayoutDefault from '../pages/_layout';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route layout={LayoutDefault} exact path="/" component={MainPage} />
        <Route
          layout={LayoutDefault}
          exact
          path="/contracts"
          component={ContractPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/areas"
          component={AreasPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/about"
          component={AboutPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/gallery"
          component={GalleryPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/get-a-quote"
          component={GetAQuotePage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/insulated-garden-room"
          component={GardenRoomPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/erecting-fence"
          component={FencePage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/garden-storage-shed"
          component={GardenStoragePage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/bathroom-renovation"
          component={BathRenovationPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/roof-cleaning"
          component={RoofCleaningPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/painting-decoration"
          component={PaintingDecorationPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/flooring-tiles-instalation"
          component={FlooringTilesPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/eletical-services"
          component={EletricalPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/heating-plumbing"
          component={HeatingPlumbingPage}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/window-cleaning"
          component={WindowCleaning}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/office-cleaning"
          component={OfficeCleaning}
        />
        <Route
          layout={LayoutDefault}
          exact
          path="/garden-maintenance"
          component={GardenMaintenance}
        />

        <Route layout={LayoutDefault} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}