import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './utils/index.css';
import Header from './components/Header';
import LateralBar from './components/LateralBar';
import Home from './pages/Home';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <LateralBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Home />} />
        <Route path="/reglage" element={<Home />} />
        <Route path="/communaute" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);