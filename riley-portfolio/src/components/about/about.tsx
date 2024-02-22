import React from 'react';
import './about.css';
import { FaJsSquare, FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaNodeJs, FaLinkedin } from 'react-icons/fa';
import { DiJavascript1, DiRust, DiVisualstudio, DiLinux } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiMysql, SiFlask, SiVercel, SiMicrosoftazure, SiRaspberrypi, SiJirasoftware, SiFirebase, SiJupyter, SiPandas, SiNumpy, SiDocker, SiSelenium , SiGooglecloud } from 'react-icons/si';
import { BiLogoTypescript, BiLogoGoLang  } from "react-icons/bi";

const About: React.FC = () => {

  const navigate = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  }

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
          <div className='icons'>
            <FaJsSquare className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
            <FaPython className="moving-icon" onClick={() => navigate('https://www.python.org/doc/')} />
            <FaReact className="moving-icon" onClick={() => navigate('https://reactjs.org/')} />
            <FaAngular className="moving-icon" onClick={() => navigate('https://angular.io/docs')} />
            <FaHtml5 className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/HTML')} />
            <FaCss3Alt className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/CSS')} />
            <FaGithub className="moving-icon" onClick={() => navigate('https://github.com/')} />
            <FaJava className="moving-icon" onClick={() => navigate('https://docs.oracle.com/en/java/')} />
            <FaNodeJs className="moving-icon" onClick={() => navigate('https://nodejs.org/en/docs/')} />
            <DiJavascript1 className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
            <BiLogoTypescript className="moving-icon" onClick={() => navigate('https://www.typescriptlang.org/docs/')} />
            <SiFirebase className="moving-icon" onClick={() => navigate('https://firebase.google.com/docs')} />
            <DiRust className="moving-icon" onClick={() => navigate('https://www.rust-lang.org/learn')} />
            <DiVisualstudio className="moving-icon" onClick={() => navigate('https://code.visualstudio.com/docs')} />
            <SiMicrosoftazure className="moving-icon" onClick={() => navigate('https://docs.microsoft.com/en-us/azure/?product=featured')} />
            <SiCplusplus className="moving-icon" onClick={() => navigate('https://www.cplusplus.com/doc/tutorial/')} />
            <SiCsharp className="moving-icon" onClick={() => navigate('https://docs.microsoft.com/en-us/dotnet/csharp/')} />
            <BiLogoGoLang className="moving-icon" onClick={() => navigate('https://golang.org/doc/')} />
            <SiMysql className="moving-icon" onClick={() => navigate('https://dev.mysql.com/doc/')} />
            <SiFlask className="moving-icon" onClick={() => navigate('https://flask.palletsprojects.com/en/2.0.x/')} />
            <SiVercel className="moving-icon" onClick={() => navigate('https://vercel.com/docs')} />
            <SiRaspberrypi className="moving-icon" onClick={() => navigate('https://www.raspberrypi.org/documentation/')} />
            <SiJirasoftware className="moving-icon" onClick={() => navigate('https://www.atlassian.com/software/jira/guides')} />
            <DiLinux className="moving-icon" onClick={() => navigate('https://www.linux.org/pages/download/')} />
            <SiJupyter className="moving-icon" onClick={() => navigate('https://jupyter.org/documentation')} />
            <SiPandas className="moving-icon" onClick={() => navigate('https://pandas.pydata.org/docs/')} />
            <SiNumpy className="moving-icon" onClick={() => navigate('https://numpy.org/doc/')} />
            <SiDocker className="moving-icon" onClick={() => navigate('https://docs.docker.com/')} />
            <SiSelenium className="moving-icon" onClick={() => navigate('https://www.selenium.dev/documentation/en/')} />
            <SiGooglecloud className="moving-icon" onClick={() => navigate('https://cloud.google.com/docs')} />
          </div>
          <div className='icons'>
            <FaJsSquare className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
            <FaPython className="moving-icon" onClick={() => navigate('https://www.python.org/doc/')} />
            <FaReact className="moving-icon" onClick={() => navigate('https://reactjs.org/')} />
            <FaAngular className="moving-icon" onClick={() => navigate('https://angular.io/docs')} />
            <FaHtml5 className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/HTML')} />
            <FaCss3Alt className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/CSS')} />
            <FaGithub className="moving-icon" onClick={() => navigate('https://github.com/')} />
            <FaJava className="moving-icon" onClick={() => navigate('https://docs.oracle.com/en/java/')} />
            <FaNodeJs className="moving-icon" onClick={() => navigate('https://nodejs.org/en/docs/')} />
            <DiJavascript1 className="moving-icon" onClick={() => navigate('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
            <BiLogoTypescript className="moving-icon" onClick={() => navigate('https://www.typescriptlang.org/docs/')} />
            <SiFirebase className="moving-icon" onClick={() => navigate('https://firebase.google.com/docs')} />
            <DiRust className="moving-icon" onClick={() => navigate('https://www.rust-lang.org/learn')} />
            <DiVisualstudio className="moving-icon" onClick={() => navigate('https://code.visualstudio.com/docs')} />
            <SiMicrosoftazure className="moving-icon" onClick={() => navigate('https://docs.microsoft.com/en-us/azure/?product=featured')} />
            <SiCplusplus className="moving-icon" onClick={() => navigate('https://www.cplusplus.com/doc/tutorial/')} />
            <SiCsharp className="moving-icon" onClick={() => navigate('https://docs.microsoft.com/en-us/dotnet/csharp/')} />
            <BiLogoGoLang className="moving-icon" onClick={() => navigate('https://golang.org/doc/')} />
            <SiMysql className="moving-icon" onClick={() => navigate('https://dev.mysql.com/doc/')} />
            <SiFlask className="moving-icon" onClick={() => navigate('https://flask.palletsprojects.com/en/2.0.x/')} />
            <SiVercel className="moving-icon" onClick={() => navigate('https://vercel.com/docs')} />
            <SiRaspberrypi className="moving-icon" onClick={() => navigate('https://www.raspberrypi.org/documentation/')} />
            <SiJirasoftware className="moving-icon" onClick={() => navigate('https://www.atlassian.com/software/jira/guides')} />
            <DiLinux className="moving-icon" onClick={() => navigate('https://www.linux.org/pages/download/')} />
            <SiJupyter className="moving-icon" onClick={() => navigate('https://jupyter.org/documentation')} />
            <SiPandas className="moving-icon" onClick={() => navigate('https://pandas.pydata.org/docs/')} />
            <SiNumpy className="moving-icon" onClick={() => navigate('https://numpy.org/doc/')} />
            <SiDocker className="moving-icon" onClick={() => navigate('https://docs.docker.com/')} />
            <SiSelenium className="moving-icon" onClick={() => navigate('https://www.selenium.dev/documentation/en/')} />
            <SiGooglecloud className="moving-icon" onClick={() => navigate('https://cloud.google.com/docs')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;