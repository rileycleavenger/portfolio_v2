import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { headshotImage } from '../../assets';
import { GITHUB_URL, LINKEDIN_URL } from '../../data/links';
import './about.css';

const links = [
  { label: 'GitHub', href: GITHUB_URL, icon: FiGithub },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: FiLinkedin },
];

const About: React.FC = () => (
  <main className="about">
    <img className="about-photo" src={headshotImage} alt="Riley Cleavenger" width={176} height={176} />
    <h1 className="about-name">Riley Cleavenger</h1>
    <p className="about-title">Software Engineer II at Capital One</p>
    <p className="about-bio">
      M.S. Computer Science student at Georgia Tech, specializing in AI. I build games, developer tools, and
      machine-learning systems.
    </p>
    <ul className="about-links">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon aria-hidden />
            {label}
          </a>
        </li>
      ))}
    </ul>
  </main>
);

export default About;
