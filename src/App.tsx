import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { WaterInCrosshairs } from './pages/WaterInCrosshairs';
import { EnvironmentalDangers } from './pages/EnvironmentalDangers';
import { OversightGaps } from './pages/OversightGaps';
import { FollowTheMoney } from './pages/FollowTheMoney';
import { Donate } from './pages/Donate';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Documentation } from './pages/Documentation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { PropertyRights } from './pages/PropertyRights';
import { Calendar } from './pages/Calendar';
import { LegalAction } from './pages/LegalAction';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { NewsUpdates } from './pages/NewsUpdates';
import { NewsArticle } from './pages/NewsArticle';

import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsUpdates />} />
          <Route path="news/:id" element={<NewsArticle />} />
          <Route path="water-in-crosshairs" element={<WaterInCrosshairs />} />
          <Route path="environmental-dangers" element={<EnvironmentalDangers />} />
          <Route path="oversight-gaps" element={<OversightGaps />} />
          <Route path="follow-the-money" element={<FollowTheMoney />} />
          <Route path="about" element={<About />} />
          <Route path="donate" element={<Donate />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="property-rights" element={<PropertyRights />} />
          <Route path="legal-action" element={<LegalAction />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;