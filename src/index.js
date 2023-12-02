import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

import './utils/index.css';
import Header from './components/Header';
import LateralBar from './components/LateralBar';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <LateralBar />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/profil/" element={<Home />} />
        <Route path="/reglage" element={<Home />} />
        <Route path="/communaute" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);