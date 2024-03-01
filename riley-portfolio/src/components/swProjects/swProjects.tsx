import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Project } from '../../types';
import './swProjects.css';
import { gatorPathTrackerImage, mealDealzImage, modernJukeboxImage, huffmanTreeEncoderImage, goodEatsImage, webDriverDockerImage, userspaceFilesystemImage } from '../../assets';
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
      technologiesUsed: ['Angular', 'TypeScript', 'Python', 'Realtime JSON Database', 'Firebase', 'Selenium', 'Docker', 'Flask', 'Google Cloud', 'ChatGPT API'],
    },
    {
      name: 'The Modern Jukebox',
      imagePath: modernJukeboxImage,
      description: 'The Modern Jukebox was developed to solve a common problem when hanging out with friends or coworkers, that only one person has access to change the music. The solution is a Raspberry Pi controlled by a React webapp. This application allows one user to “Create a Session” by signing into Spotify, then other users to “Join a Session” to queue songs to the device. Users joining the session don’t need a Spotify login, effectively allowing anyone with the session ID to queue songs and control the playback.',
      link: 'https://the-modern-jukebox-react-app.vercel.app/',
      technologiesUsed: ['React', 'TypeScript', 'Node.js', 'Python', 'C++', 'Raspberry Pi', 'Spotify API', 'Vercel'],
    },
    {
      name: 'MealDealz',
      imagePath: mealDealzImage,
      description: 'For this webapp I collaborated on a team using agile workflow to deploy an app that streamlines cooking and grocery shopping. Specifically, I developed a custom RESTful API in Golang which concurrently performs basic computation as well as utilizes essential HTTP methods to interface with a Microsoft Azure-hosted SQL server and database. I also wrote Python scripts to scrape weekly grocery sales from various chain grocery store websites, then store the gathered data in a SQL server.',
      link: 'https://github.com/TylerMetz/Saucier720',
      technologiesUsed: ['Angular', 'TypeScript', 'Go', 'Python', 'MySQL', 'Azure', 'Selenium'],
    },
    {
      name: 'Web Driver Docker',
      imagePath: webDriverDockerImage,
      description: 'I created this for developers looking to use Selenium\'s web driver to web scrape within a Docker. It is very useful for automating web scraping tasks using an external scheduler. The example provided in app.py allows for HTTP GET requests to be made to <insert docker url>/<insert website to scrape url> and returns a text file with the desired page\'s source code. Ideally this setup will just serve as an example for anyone looking to utlize Selenium and Docker in their webscraping processes.',
      link: 'https://github.com/rileycleavenger/SeleniumWebScraper-Docker',
      technologiesUsed: ['Python', 'Docker', 'Selenium', 'Flask'],
    },
    {
      name: 'Userspace Filesystem',
      imagePath: userspaceFilesystemImage,
      description:  'For this project I developed a library to read and write to WAD files, then implement a userspace daemon, then test it by mounting and unmounting directories. For the libWad library I implemented several functions with the purpose of being able to treat a WAD file as an actual file directory system. I implemented three basic data structures to keep track of the files in the Wad file, a n-ary tree, a map to keep track of each node\'s filepath, then a map to keep track of folder end nodes.',
      link: '',
      technologiesUsed: ['C++', 'C', 'Linux'],
    },
    {
      name: 'The Good Eats',
      imagePath: goodEatsImage,
      description: 'This program was developed to encourage support of local restaurants, and to stay away from chains. It pulls from a data set of 700,000 restaurants in the US and returns only non-chain restaurants in your area based on either latitude/longitude or state/country. This was implemented using both a hashmap and hashset, and the runtimes can be displayed in the program as well to compare performance.',
      link: 'https://github.com/rileycleavenger/TheGoodEats',
      technologiesUsed: ['C++'],
    },
    {
      name: 'Huffman Tree Encoder',
      imagePath: huffmanTreeEncoderImage,
      description: 'I developed this class to compress txt files using the Huffman tree encoding algorithm through the implementation of a priority queue. The conversion of a txt file to a string occurs in the main.cpp file. The huffman tree class itself compresses a string which is passed through the constructor. I decided to develop the class around a string input for potential outside use and optimization beyond just txt files. Furthermore, it acts as a better proof of concept for the algorithm itself.',
      link: 'https://github.com/rileycleavenger/Huffman-Tree-Encoder',
      technologiesUsed: ['C++'],
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
              {project.link ? (
                <a title="click to visit the project" href={project.link} target="_blank">
                  {project.name}
                </a>
              ) : (
                <a onClick={() => alert("This is a private project, there is no available link or repository available.")}>{project.name}</a>
              )}
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