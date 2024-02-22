import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ContractPage from '../pages/ContractPage';
import AreasPage from '../pages/AreasPage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import GetAQuotePage from '../pages/GetAQuotePage';
import GardenHousePage from '../pages/GardenHousePage';
import FencePage from '../pages/FencePage';
import GardenStoragePage from '../pages/GardenStoragePage';
import BathRenovationPage from '../pages/BathRenovationPage';
import RoofCleaningPage from '../pages/RoofCleaningPage';
import PaintingDecorationPage from '../pages/PaintingDecorationPage';
import PaintingGeneralAds from '../pages/PaintingGeneralAds';
import PaintingCommercialAds from '../pages/PaintingCommercialAds';
import FlooringTilesPage from '../pages/FlooringTilesPage';
import HeatingPlumbingPage from '../pages/HeatingPlumbingPage';
import WindowCleaning from '../pages/WindowContracts';
import OfficeCleaning from '../pages/OfficeContracts';
import GardenMaintenance from '../pages/GardenContracts';
import NotFound from '../pages/NotFound';
import LayoutDefault from '../pages/_layout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/contracts" element={<ContractPage />} />
          <Route exact path="/areas" element={<AreasPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/get-a-quote" element={<GetAQuotePage />} />
          <Route exact path="/garden-house" element={<GardenHousePage />} />
          <Route exact path="/erecting-fence" element={<FencePage />} />
          <Route
            exact
            path="/garden-storage-shed"
            element={<GardenStoragePage />}
          />
          <Route
            exact
            path="/bathroom-renovation"
            element={<BathRenovationPage />}
          />
          <Route exact path="/roof-cleaning" element={<RoofCleaningPage />} />
          <Route
            exact
            path="/painting-decorating"
            element={<PaintingDecorationPage />}
          />
          <Route
            exact
            path="/painting-decorating-general"
            element={<PaintingGeneralAds />}
          />
          <Route
            exact
            path="/painting-decoration-commercial"
            element={<PaintingCommercialAds />}
          />
          <Route
            exact
            path="/flooring-tiles-installation"
            element={<FlooringTilesPage />}
          />
          <Route
            exact
            path="/heating-plumbing"
            element={<HeatingPlumbingPage />}
          />
          <Route exact path="/window-cleaning" element={<WindowCleaning />} />
          <Route exact path="/office-cleaning" element={<OfficeCleaning />} />
          <Route
            exact
            path="/garden-maintenance"
            element={<GardenMaintenance />}
          />

          <Route element={<NotFound />} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
}
