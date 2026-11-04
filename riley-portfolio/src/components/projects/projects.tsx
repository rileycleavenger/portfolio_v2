import React, { useState } from 'react';
import { filters, projects } from '../../data/projects';
import { Project, Tag } from '../../types';
import ProjectDialog from './projectDialog';
import ProjectMedia from './projectMedia';
import './projects.css';

type Filter = Tag | 'all' | 'other';

const options: { id: Filter; label: string }[] = [{ id: 'all', label: 'All' }, ...filters, { id: 'other', label: 'Other' }];

const matches = (project: Project, filter: Filter) => {
  if (filter === 'all') return true;
  if (filter === 'other') return project.tags.length === 0;
  return project.tags.includes(filter);
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = projects.filter((project) => matches(project, filter));

  return (
    <main className="page projects">
      <h1 className="sr-only">Projects</h1>
      <div className="filters" role="group" aria-label="Filter projects">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="filter"
            aria-pressed={filter === option.id}
            onClick={() => setFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <ul className="project-grid">
        {visible.map((project) => (
          <li key={project.name} className="project-card">
            <div className="card-media">
              <ProjectMedia project={project} />
            </div>
            <div className="card-caption">
              <h2 className="card-name">
                <button type="button" className="card-button" aria-haspopup="dialog" onClick={() => setSelected(project)}>
                  {project.name}
                </button>
              </h2>
              <span className="card-year">{project.year}</span>
            </div>
          </li>
        ))}
      </ul>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Projects;
