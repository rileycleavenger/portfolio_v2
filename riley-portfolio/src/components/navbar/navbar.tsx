import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const pages = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
];

const Navbar: React.FC = () => (
  <header className="site-header">
    <nav className="site-nav" aria-label="Primary">
      {pages.map((page) => (
        <NavLink
          key={page.to}
          to={page.to}
          end
          className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
        >
          {page.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Navbar;
