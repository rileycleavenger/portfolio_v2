import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Project } from '../../types';
import './swProjects.css';
import { gatorPathTrackerImage, mealDealzImage } from '../../assets';

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

  return (
    <div className="swProjects">
      {projects.map((project, index) => (
        <ReactCardFlip isFlipped={isFlipped[index] || false} flipDirection="horizontal" key={index}>
          <div className="card-front" onClick={() => handleClick(index)}>
            <a href={project.link}>{project.name}</a>
            <img src={project.imagePath} />
          </div>
          <div className="card-back" onClick={() => handleClick(index)}>
            <p>{project.description}</p>
            <p>Technologies Used: {project.technologiesUsed.join(', ')}</p>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default SwProjects;