import React from 'react';

export default function SingleQuestion({ id, info, title, expanded, onToggle }) {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          onClick={onToggle}
          className="btn"
        >
          {expanded ? '-' : '+'}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  );
}
