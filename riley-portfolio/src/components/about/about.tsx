import React from 'react';
import './about.css';
import { FaJsSquare, FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaNodeJs, FaLinkedin } from 'react-icons/fa';
import { DiJavascript1, DiFirebase, DiRust, DiVisualstudio } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiMysql, SiExpress, SiFlask, SiVercel, SiMicrosoftazure, SiRaspberrypi, SiJirasoftware } from 'react-icons/si';
import { BiLogoTypescript, BiLogoGoLang  } from "react-icons/bi";

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
      <div className="icons-container">
      <div className="scrolling-icons">
        <FaJsSquare className="moving-icon"/>
        <FaPython className="moving-icon"/>
        <FaReact className="moving-icon"/>
        <FaAngular className="moving-icon"/>
        <FaHtml5 className="moving-icon"/>
        <FaCss3Alt className="moving-icon"/>
        <FaGithub className="moving-icon"/>
        <FaJava className="moving-icon"/>
        <FaNodeJs className="moving-icon"/>
        <DiJavascript1 className="moving-icon"/>
        <BiLogoTypescript className="moving-icon"/>
        <DiFirebase className="moving-icon"/>
        <DiRust className="moving-icon"/>
        <DiVisualstudio className="moving-icon"/>
        <SiMicrosoftazure  className="moving-icon"/>
        <SiCplusplus className="moving-icon"/>
        <SiCsharp className="moving-icon"/>
        <BiLogoGoLang className="moving-icon"/>
        <SiMysql className="moving-icon"/>
        <SiExpress className="moving-icon"/>
        <SiFlask className="moving-icon"/>
        <SiVercel className="moving-icon"/>
        <SiRaspberrypi className="moving-icon"/>
        <SiJirasoftware className="moving-icon"/>
      </div>
      </div>
    </div>
  );
};

export default About;