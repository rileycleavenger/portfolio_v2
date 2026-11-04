import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { RESUME_URL } from '../../data/links';
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
      <a className="nav-link" href={RESUME_URL} target="_blank" rel="noreferrer">
        Resume
        <FiArrowUpRight aria-hidden />
      </a>
    </nav>
  </header>
);

export default Navbar;
