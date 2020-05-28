import React from 'react'

import { HASHES } from '../constants'
import { useHash } from '../hooks/useHash'

export function ListFooter({ remaining, completed, onClearCompleted }) {
  const hash = useHash()

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remaining}</strong>
        {` item${~(remaining - 2) ? 's' : ''} left`}
      </span>
      <ul className="filters">
        <li>
          <a className={hash === HASHES.ALL ? 'selected' : ''} href="#/">
            All
          </a>
        </li>
        <li>
          <a
            className={hash === HASHES.ACTIVE ? 'selected' : ''}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={hash === HASHES.COMPLETED ? 'selected' : ''}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      {!!completed && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
