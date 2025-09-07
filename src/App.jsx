import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FleetHighlights from './components/FleetHighlights';
import PaymentPage from './components/PaymentPage';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <BrowserRouter>
      <HeroSection />
      <Routes>
        <Route path="/" element={<FleetHighlights />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
