import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import SwProjects from './components/swProjects/swProjects';
import HwProjects from './components/hwProjects/hwProjects';
import Resume from './components/resume/resume';
import './App.css';
import './variables.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/software" element={<SwProjects />} />
          <Route path="/hardware" element={<HwProjects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
};

export default App;