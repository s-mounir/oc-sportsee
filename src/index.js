import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

import './utils/index.css';
import Header from './components/Header';
import LateralBar from './components/LateralBar';
import Home from './pages/Home';
import Error from './pages/Error';

const RectangleTest = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 1024px;
    height: 780px;
    background-color: #d3d3d3;
    z-index: -10;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RectangleTest></RectangleTest>
      <Header />
      <LateralBar />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/profil/" element={<Home />} />
        <Route path="/reglage" element={<Home />} />
        <Route path="/communaute" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);