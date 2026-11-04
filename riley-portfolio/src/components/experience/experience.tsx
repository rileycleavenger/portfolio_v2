import React from 'react';
import { certifications, education, experience } from '../../data/experience';
import './experience.css';

interface Line {
  detail: string;
  dates: string;
}

const Entry: React.FC<{ title: string; lines: Line[] }> = ({ title, lines }) => (
  <li className="entry">
    <h3 className="entry-title">{title}</h3>
    {lines.map((line) => (
      <div key={line.detail} className="entry-line">
        <span className="entry-detail">{line.detail}</span>
        <span className="entry-dates">{line.dates}</span>
      </div>
    ))}
  </li>
);

const Experience: React.FC = () => (
  <main className="page experience">
    <h1 className="sr-only">Experience</h1>

    <h2 className="list-heading">Education</h2>
    <ul>
      {education.map((school) => (
        <Entry
          key={school.school}
          title={school.school}
          lines={[{ detail: school.degree, dates: `${school.start} – ${school.end}` }]}
        />
      ))}
    </ul>

    <h2 className="list-heading">Certification</h2>
    <ul>
      {certifications.map((cert) => (
        <Entry key={cert.name} title={cert.name} lines={[{ detail: cert.issuer, dates: cert.issued }]} />
      ))}
    </ul>

    <h2 className="list-heading">Experience</h2>
    <ul>
      {experience.map((job) => (
        <Entry
          key={job.company}
          title={job.company}
          lines={job.roles.map((role) => ({ detail: role.title, dates: `${role.start} – ${role.end}` }))}
        />
      ))}
    </ul>
  </main>
);

export default Experience;
