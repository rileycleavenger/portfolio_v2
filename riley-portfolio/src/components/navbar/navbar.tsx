import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hw_projects">Hardware Projects</Link></li>
        <li><Link to="/sw_projects">Software Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;