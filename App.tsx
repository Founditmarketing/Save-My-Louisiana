import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './src/Layout';
import { Home } from './src/pages/Home';
import { WaterInCrosshairs } from './src/pages/WaterInCrosshairs';
import { EnvironmentalDangers } from './src/pages/EnvironmentalDangers';
import { WildlifeThreats } from './src/pages/WildlifeThreats';
import { OversightGaps } from './src/pages/OversightGaps';
import { Donate } from './src/pages/Donate';
import { Contact } from './src/pages/Contact';
import { Mission } from './src/pages/Mission';
import { Documentation } from './src/pages/Documentation';
import { PrivacyPolicy } from './src/pages/PrivacyPolicy';
import { TermsOfService } from './src/pages/TermsOfService';

import { ScrollToTop } from './src/components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="water-in-crosshairs" element={<WaterInCrosshairs />} />
          <Route path="environmental-dangers" element={<EnvironmentalDangers />} />
          <Route path="wildlife-threats" element={<WildlifeThreats />} />
          <Route path="oversight-gaps" element={<OversightGaps />} />
          <Route path="mission" element={<Mission />} />
          <Route path="donate" element={<Donate />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;