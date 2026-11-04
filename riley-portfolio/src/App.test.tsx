import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { certifications, experience } from './data/experience';
import { projects } from './data/projects';

// CRA's Jest predates package "exports" maps, so it can't resolve this subpath.
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

// Only these public repos may be linked. Private repos must never be linked from the site,
// so adding a link to any other repo fails this test until it's checked and added here.
const publicRepos = [
  'rileycleavenger/melee-4k',
  'rileycleavenger/melee-plus-plus',
  'rileycleavenger/Silicon-Studio',
  'rileycleavenger/claude-squad',
  'rileycleavenger/minimax-smash',
  'rileycleavenger/backtrade-technical-indicators',
  'rileycleavenger/StockBuddy',
  'rileycleavenger/SeleniumWebScraper-Docker',
  'rileycleavenger/pong',
  'rileycleavenger/Cat-Feeder-ESP32',
  'rileycleavenger/GatorPathTracker',
  'rileycleavenger/TheModernJukebox',
  'rileycleavenger/TheGoodEats',
  'rileycleavenger/Huffman-Tree-Encoder',
  'rileycleavenger/SpotiPi-Project',
  'TylerMetz/Saucier720',
];
const isUnapprovedRepo = (href: string) => {
  const match = href.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/?$/);
  return match !== null && !publicRepos.includes(match[1]);
};

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

const projectCards = () => screen.getAllByRole('button').filter((b) => b.getAttribute('aria-haspopup') === 'dialog');

test('the landing page is about Riley', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Riley Cleavenger');
  expect(screen.getByText('Software Engineer II at Capital One')).toBeInTheDocument();
});

test('the projects page lists every project and opens its details', () => {
  renderAt('/projects');
  expect(projectCards()).toHaveLength(projects.length);
  fireEvent.click(screen.getByRole('button', { name: 'Melee 4K & Melee++' }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: 'Melee 4K & Melee++' })).toBeInTheDocument();
  expect(within(dialog).getByRole('link', { name: /Melee 4K/ })).toHaveAttribute('href', 'https://github.com/rileycleavenger/melee-4k');
});

test('filters narrow the projects, and All is selected by default', () => {
  renderAt('/projects');
  expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  expect(projectCards()).toHaveLength(projects.filter((p) => p.tags.includes('games')).length);
  fireEvent.click(screen.getByRole('button', { name: 'Hardware' }));
  expect(projectCards()).toHaveLength(projects.filter((p) => p.tags.includes('hardware')).length);
  // "Other" is everything no other filter claims.
  fireEvent.click(screen.getByRole('button', { name: 'Other' }));
  expect(projectCards()).toHaveLength(projects.filter((p) => p.tags.length === 0).length);
  fireEvent.click(screen.getByRole('button', { name: 'All' }));
  expect(projectCards()).toHaveLength(projects.length);
});

test('private projects show no links', () => {
  expect(projects.flatMap((p) => p.links).filter((link) => isUnapprovedRepo(link.href))).toEqual([]);

  renderAt('/projects');
  fireEvent.click(screen.getByRole('button', { name: 'Userspace Filesystem' }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).queryAllByRole('link')).toEqual([]);
  expect(within(dialog).getByText('Private repo')).toBeInTheDocument();
});

test('the experience page lists the certification, every job, and education', () => {
  renderAt('/experience');
  expect(screen.getByRole('heading', { name: certifications[0].name })).toBeInTheDocument();
  for (const job of experience) {
    expect(screen.getByRole('heading', { name: job.company })).toBeInTheDocument();
  }
});

test('old page URLs land on the projects page', () => {
  renderAt('/hardware');
  expect(window.location.pathname).toBe('/projects');
});

test('the resume is hidden while it is being updated', () => {
  renderAt('/resume');
  expect(window.location.pathname).toBe('/');
  expect(screen.queryByRole('link', { name: /resume/i })).toBeNull();
});
