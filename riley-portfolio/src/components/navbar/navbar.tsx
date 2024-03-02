import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../variables.css';

const Navbar: React.FC = () => {
  return (
    <nav>
        <Link to="/" className='navLink'>About Me</Link>
        <Link to="/hardware" className='navLink'>Hardware Projects</Link>
        <Link to="/software" className='navLink'>Software Projects</Link>
        <Link to="/resume" className='navLink'>Resume</Link>
    </nav>
  );
};

export default Navbar;