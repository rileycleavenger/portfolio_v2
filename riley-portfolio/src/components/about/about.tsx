import React from 'react';
import './about.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="picture-and-name">
          <img src={require('../../assets/headshot.png')} className="headshot" alt="Riley" />
          <p className="name">Riley Cleavenger</p>
        </div>
        <div className="bio">
          <h1>About Me</h1>
          <p>I'm currently a 4th-year Computer Engineering major at the University of Florida looking to pursue a career in Software Engineering. Personally I enjoy working on full stack web development projects, but my enthusiasm extends to the realms of machine learning, artificial intelligence, and embedded systems, where I am keen on exploring innovative solutions and pushing the boundaries of technology.</p>
          <div className="socials">
            <a className="social-icon" href="https://www.linkedin.com/in/rileycleavenger/" target="_blank">
              <FaLinkedin />
            </a>
            <a className="social-icon" href="https://github.com/rileycleavenger" target="_blank">
              <FaGithub/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;