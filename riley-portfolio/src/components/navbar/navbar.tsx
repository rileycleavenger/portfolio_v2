import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import '../../variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const location = useLocation();

  function convertPathToTitle(path: string) {
    if (path === '/') {
      return 'About Me';
    } else if (path === '/software') {
      return 'Software Projects';
    } else if (path === '/hardware') {
      return 'Hardware Projects';
    } else if (path === '/resume') {
      return 'Resume';
    }
  }

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'navLink active' : 'navLink'}>About Me</Link>
      <Link to="/software" className={location.pathname === '/software' ? 'navLink active' : 'navLink'}>Software Projects</Link>
      <Link to="/hardware" className={location.pathname === '/hardware' ? 'navLink active' : 'navLink'}>Hardware Projects</Link>
      <Link to="/resume" className={location.pathname === '/resume' ? 'navLink active' : 'navLink'}>Resume</Link>
      <div className='dropdownMenu'>
        <FontAwesomeIcon className="menu-button" icon={faBars} onClick={toggleDropdown}/>
        <p className="page-title">{convertPathToTitle(location.pathname)}</p>
        {isOpen && (
        <div className='dropdownContent'>
          <Link to="/" onClick={toggleDropdown} className='menuLink'>About Me</Link>
          <Link to="/software" onClick={toggleDropdown} className='menuLink'>Software Projects</Link>
          <Link to="/hardware" onClick={toggleDropdown} className='menuLink'>Hardware Projects</Link>
          <Link to="/resume" onClick={toggleDropdown} className='menuLink'>Resume</Link>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;