export interface Role {
  title: string;
  start: string;
  end: string;
}

export interface Job {
  company: string;
  roles: Role[];
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
}

export interface School {
  school: string;
  degree: string;
  start: string;
  end: string;
}

// Titles and dates only; the details live on LinkedIn. Newest first.
export const experience: Job[] = [
  {
    company: 'Capital One',
    roles: [
      { title: 'Software Engineer II', start: 'Feb 2026', end: 'Present' },
      { title: 'Software Engineer I', start: 'Feb 2025', end: 'Feb 2026' },
    ],
  },
  {
    company: 'Intel',
    roles: [{ title: 'Software Engineering Intern', start: 'May 2024', end: 'Aug 2024' }],
  },
  {
    company: 'Texas Instruments',
    roles: [{ title: 'Software Engineering Intern', start: 'May 2023', end: 'Aug 2023' }],
  },
  {
    company: 'GE Appliances',
    roles: [{ title: 'Technology Engineering Co-op', start: 'Jan 2022', end: 'May 2022' }],
  },
  {
    company: 'Quality Labor Management',
    roles: [{ title: 'IT Help Desk Analyst', start: 'Aug 2017', end: 'Aug 2020' }],
  },
];

export const education: School[] = [
  {
    school: 'Georgia Tech',
    degree: 'M.S. Computer Science, Artificial Intelligence',
    start: '2025',
    end: '2027',
  },
  {
    school: 'University of Florida',
    degree: 'B.S. Computer Engineering',
    start: '2020',
    end: '2024',
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    issued: '2025',
  },
];
