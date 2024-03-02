import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Link to="/" className='navLink'>About Me</Link>
      <Link to="/software" className='navLink'>Software Projects</Link>
      <Link to="/hardware" className='navLink'>Hardware Projects</Link>
      <Link to="/resume" className='navLink'>Resume</Link>
      <div className='dropdownMenu'>
        <FontAwesomeIcon className="menu-button" icon={faBars} onClick={toggleDropdown}/>
        {isOpen && (
        <div className='dropdownContent'>
          <Link to="/" className='menuLink'>About Me</Link>
          <Link to="/software" className='menuLink'>Software Projects</Link>
          <Link to="/hardware" className='menuLink'>Hardware Projects</Link>
          <Link to="/resume" className='menuLink'>Resume</Link>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;