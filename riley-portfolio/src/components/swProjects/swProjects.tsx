import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Project } from '../../types';
import './swProjects.css';
import { gatorPathTrackerImage, mealDealzImage } from '../../assets';
import { FaJsSquare, FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaNodeJs, FaLinkedin } from 'react-icons/fa';
import { DiRust, DiVisualstudio, DiLinux } from 'react-icons/di';
import { SiCplusplus, SiCsharp, SiMysql, SiFlask, SiVercel, SiMicrosoftazure, SiRaspberrypi, SiJirasoftware, SiFirebase, SiJupyter, SiPandas, SiNumpy, SiDocker, SiSelenium , SiGooglecloud, SiC } from 'react-icons/si';
import { BiLogoTypescript, BiLogoGoLang, BiLogoUnity  } from "react-icons/bi";
import { IoHardwareChipSharp } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";

const SwProjects: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<Array<boolean>>([]);

  // const with all projects
  const projects: Project[] = [
    {
      name: 'Gator Path Tracker',
      imagePath: gatorPathTrackerImage,
      description: 'GatorPathTracker is an all-in-one scheduling planning application built for University of Florida students. This application uses a custom API made with Selenium, Docker, Flask, and Google Cloud to return the most updated course data. The application also offers ratings webscraped from a variety of popular course rating websites, as well as ratings determined through NLP done on discussion regarding specific courses. The webapp itself was developed within the Angular framework and is hosted through Firebase.',
      link: 'https://gatorpathtracker.com',
      technologiesUsed: ['Angular', 'TypeScript', 'HTML/CSS', 'Python', 'Realtime JSON Database', 'Firebase', 'Selenium', 'Docker', 'Flask', 'Google Cloud', 'ChatGPT API'],
    },
    {
      name: 'MealDealz',
      imagePath: '/../../assets/mealdealz.png',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'The Modern Jukebox',
      imagePath: '/../../assets/modernjukebox.png',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'Web Driver Docker Container',
      imagePath: '',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'Memory Manager',
      imagePath: '',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'Userspace Filesystem',
      imagePath: '',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'The Good Eats',
      imagePath: '',
      description: '',
      link: '',
      technologiesUsed: [],
    },
    {
      name: 'Huffman Tree Encoder',
      imagePath: '',
      description: '',
      link: '',
      technologiesUsed: [],
    },
  ];

  const handleClick = (index: number) => {
    let newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  }

  function getTechnologyIcon(technology: string) {
    switch (technology) {
      case 'C':
        return <SiC className='tech-icon' onClick={() => window.open('https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170', '_blank')} />;
      case 'C++':
        return <SiCplusplus className="tech-icon" onClick={() => window.open('https://www.cplusplus.com/doc/tutorial/', '_blank')} />;
      case 'C#':
        return <SiCsharp className="tech-icon" onClick={() => window.open('https://docs.microsoft.com/en-us/dotnet/csharp/', '_blank')} />;
      case 'Java':
        return <FaJava className="tech-icon" onClick={() => window.open('https://docs.oracle.com/en/java/', '_blank')} />;
      case 'Rust':
        return <DiRust className="tech-icon" onClick={() => window.open('https://www.rust-lang.org/learn', '_blank')} />;
      case 'Python':
        return <FaPython className="tech-icon" onClick={() => window.open('https://www.python.org/doc/', '_blank')} />;
      case 'Go':
        return <BiLogoGoLang className="tech-icon" onClick={() => window.open('https://golang.org/doc/', '_blank')} />;
      case 'JavaScript':
        return <FaJsSquare className="tech-icon" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')} />;
      case 'TypeScript':
        return <BiLogoTypescript className="tech-icon" onClick={() => window.open('https://www.typescriptlang.org/docs/', '_blank')} />;
      case 'HTML':
        return <FaHtml5 className="tech-icon" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')} />;
      case 'CSS':
        return <FaCss3Alt className="tech-icon" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')} />;
      case 'React':
        return <FaReact className="tech-icon" onClick={() => window.open('https://reactjs.org/', '_blank')} />;
      case 'Angular':
        return <FaAngular className="tech-icon" onClick={() => window.open('https://angular.io/docs', '_blank')} />;
      case 'MySQL':
        return <SiMysql className="tech-icon" onClick={() => window.open('https://dev.mysql.com/doc/', '_blank')} />;
      case 'Docker':
        return <SiDocker className="tech-icon" onClick={() => window.open('https://docs.docker.com/', '_blank')} />;
      case 'Node.js':
        return <FaNodeJs className="tech-icon" onClick={() => window.open('https://nodejs.org/en/docs/', '_blank')} />;
      case 'Google Cloud':
        return <SiGooglecloud className="tech-icon" onClick={() => window.open('https://cloud.google.com/docs', '_blank')} />;
      case 'Firebase':
        return <SiFirebase className="tech-icon" onClick={() => window.open('https://firebase.google.com/docs', '_blank')} />;
      case 'Azure':
        return <SiMicrosoftazure className="tech-icon" onClick={() => window.open('https://docs.microsoft.com/en-us/azure/?product=featured', '_blank')} />;
      case 'Vercel':
        return <SiVercel className="tech-icon" onClick={() => window.open('https://vercel.com/docs', '_blank')} />;
      case 'Flask':
        return <SiFlask className="tech-icon" onClick={() => window.open('https://flask.palletsprojects.com/en/2.0.x/', '_blank')} />;
      case 'Jupyter':
        return <SiJupyter className="tech-icon" onClick={() => window.open('https://jupyter.org/documentation', '_blank')} />;
      case 'Pandas':
        return <SiPandas className="tech-icon" onClick={() => window.open('https://pandas.pydata.org/docs/', '_blank')} />;
      case 'NumPy':
        return <SiNumpy className="tech-icon" onClick={() => window.open('https://numpy.org/doc/', '_blank')} />;
      case 'Selenium':
        return <SiSelenium className="tech-icon" onClick={() => window.open('https://www.selenium.dev/documentation/en/', '_blank')} />;
      case 'Raspberry Pi':
        return <SiRaspberrypi className="tech-icon" onClick={() => window.open('https://www.raspberrypi.org/documentation/', '_blank')} />;
      case 'Linux':
        return <DiLinux className="tech-icon" onClick={() => window.open('https://www.linux.org/pages/download/', '_blank')} />;
      case 'Unity':
        return <BiLogoUnity className="tech-icon" onClick={() => window.open('https://docs.unity3d.com/Manual/index.html', '_blank')} />;
      case 'Quartus Prime':
        return <IoHardwareChipSharp className="tech-icon" onClick={() => window.open('https://www.intel.com/content/www/us/en/products/details/fpga/development-tools/quartus-prime.html', '_blank')} />;
      case 'Altium Designer':
        return <GiProcessor className="tech-icon" onClick={() => window.open('https://www.altium.com/altium-designer', '_blank')} />;
      case 'GitHub':
        return <FaGithub className="tech-icon" onClick={() => window.open('https://github.com/', '_blank')} />;
      case 'Visual Studio Code':
        return <DiVisualstudio className="tech-icon" onClick={() => window.open('https://code.visualstudio.com/docs', '_blank')} />;
      case 'Jira':
        return <SiJirasoftware className="tech-icon" onClick={() => window.open('https://www.atlassian.com/software/jira/guides', '_blank')} />;
      // Add more cases as needed
      default:
        return null;
    }
  }

  return (
    <div className="swProjects">
      {projects.map((project, index) => (
        <ReactCardFlip isFlipped={isFlipped[index] || false} flipDirection="horizontal" key={index}>
          <div title="click to flip" className="card-front" onClick={() => handleClick(index)}>
            <div className="card-front-top">
              <a title="click to visit the project" href={project.link} target="_blank">{project.name}</a>
              <img src={project.imagePath} />
            </div>
            <div className="tech-icon-wrapper">{project.technologiesUsed.map(getTechnologyIcon)}</div>
          </div>
          <div className="card-back" onClick={() => handleClick(index)}>
            <p className="description-text">{project.description}</p>
            <div className="tech-icon-wrapper">{project.technologiesUsed.map(getTechnologyIcon)}</div>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default SwProjects;