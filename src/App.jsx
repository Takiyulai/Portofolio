import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SEO from './components/SEO';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <SEO />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;