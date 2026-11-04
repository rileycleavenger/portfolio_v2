import React from 'react';
import './squadTerminal.css';

// claude-squad is a terminal app with no screenshots, so its card shows the
// TUI from the repo's README rebuilt as live text instead of an image.
const agents = [
  { name: 'Architect', working: true },
  { name: 'Engineer', working: true },
  { name: 'Product', working: false },
  { name: 'Marketing', working: false },
];

const messages = [
  { time: '14:02', from: 'you', text: 'Team, build a REST API for the todo service' },
  { time: '14:02', from: 'architect', text: 'Fastify + Postgres. Engineer takes the handlers, I’ll land the schema. Design in docs/design.md.' },
  { time: '14:03', from: 'engineer', text: '⚙ Write src/routes/todos.ts', tool: true },
  { time: '14:04', from: 'product', text: 'Acceptance criteria are in docs/requirements.md.' },
];

const SquadTerminal: React.FC = () => (
  <div
    className="terminal"
    role="img"
    aria-label="claude-squad in a terminal: architect, engineer, and product agents coordinating in a shared groupchat"
  >
    <div className="terminal-title">claude-squad ─ my-project</div>
    <div className="terminal-tabs">
      <span className="is-active">#groupchat</span>
      {agents.map((agent) => (
        <span key={agent.name}>
          {agent.name} <i className={agent.working ? 'is-working' : undefined}>{agent.working ? '●' : '○'}</i>
        </span>
      ))}
    </div>
    <ol className="terminal-log">
      {messages.map((message, index) => (
        <li key={index}>
          <span className="terminal-time">{message.time}</span>
          <span className={`terminal-from from-${message.from}`}>{message.from}</span>
          <span className={message.tool ? 'terminal-tool' : undefined}>{message.text}</span>
        </li>
      ))}
    </ol>
    <div className="terminal-input">
      #groupchat &gt; <span className="terminal-cursor" />
    </div>
    <div className="terminal-status">
      <span>architect:working</span>
      <span>engineer:working</span>
      <span>product:idle</span>
      <span className="terminal-cost">$1.84 · ^K stop · ^C quit</span>
    </div>
  </div>
);

export default SquadTerminal;
