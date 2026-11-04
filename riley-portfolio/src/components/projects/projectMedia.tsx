import React from 'react';
import { Project } from '../../types';
import SquadTerminal from './squadTerminal';

const ProjectMedia: React.FC<{ project: Project; eager?: boolean }> = ({ project, eager }) => {
  const { media } = project;
  if (media?.kind === 'image') {
    return <img src={media.src} alt={media.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
  }
  if (media?.kind === 'terminal') return <SquadTerminal />;
  // No screenshot exists for this project, so the tile shows what it's built with.
  return (
    <span className="media-stack" aria-hidden>
      <span>
        {project.stack.map((tech, index) => (
          <React.Fragment key={tech}>
            {index > 0 && ' · '}
            <span className="media-stack-item">{tech}</span>
          </React.Fragment>
        ))}
      </span>
    </span>
  );
};

export default ProjectMedia;
