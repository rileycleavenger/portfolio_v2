import React from 'react';
import './resume.css';

const Resume: React.FC = () => {
  return (
      <div className="resume-holder">
        <iframe className="pdf-frame" src="https://drive.google.com/file/d/17ZHmmTGhK2wNZsoe-3zaryvZ9_7hiaBF/preview" allow="autoplay"></iframe>
      </div>
  );
};

export default Resume;