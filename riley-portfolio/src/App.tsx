import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import SwProjects from './components/swProjects/swProjects';
import HwProjects from './components/hwProjects/hwProjects';
import Resume from './components/resume/resume';
import ContactMe from './components/contactMe/contactMe';
import './App.css';
import './variables.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<SwProjects />} />
          <Route path="/hardware" element={<HwProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;