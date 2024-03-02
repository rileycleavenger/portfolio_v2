import React from 'react';
import './resume.css';

const Resume: React.FC = () => {
  return (
      <div className="resume-holder">
        <iframe className="pdf-frame" src="https://drive.google.com/file/d/1zj9shp5bOfmfcqH_2FKUf1GOJ8NnYYxS/preview" allow="autoplay"></iframe>
      </div>
  );
};

export default Resume;