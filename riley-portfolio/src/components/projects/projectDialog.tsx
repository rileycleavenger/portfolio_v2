import React, { useEffect, useRef } from 'react';
import { FiArrowUpRight, FiLock, FiX } from 'react-icons/fi';
import { tagLabel } from '../../data/projects';
import { Project } from '../../types';
import ProjectMedia from './projectMedia';

const ProjectDialog: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      // jsdom has no showModal; fall back to the attribute so tests can see the content.
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      // A click that lands on the dialog element itself is a click on the backdrop.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <button type="button" className="dialog-close" aria-label="Close" onClick={onClose}>
            <FiX aria-hidden />
          </button>
          {project.media && (
            <div className="dialog-media">
              <ProjectMedia project={project} eager />
            </div>
          )}
          <div className="dialog-body">
            <h2 id="project-dialog-title" className="dialog-title">
              {project.name}
            </h2>
            <p className="dialog-meta">
              {[project.year, ...project.tags.map(tagLabel)].join(' · ')}
            </p>
            <p className="dialog-summary">{project.summary}</p>
            <p className="dialog-description">{project.description}</p>
            <p className="dialog-stack">{project.stack.join(' · ')}</p>
            <div className="dialog-links">
              {project.links.length === 0 ? (
                <span className="dialog-private">
                  <FiLock aria-hidden />
                  Private repo
                </span>
              ) : (
                project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <FiArrowUpRight aria-hidden />
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectDialog;
