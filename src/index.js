import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'immerx-react'

import './devtools'
import './reset.scss'

import { App } from './components/App'

const state$ = createStore({
  todos: [
    {
      _id: '4ecca858-67f8-491e-94cc-48b262061819',
      label: 'Taste JavaScript',
      completed: false,
    },
    {
      _id: '3c4a086e-2151-4b54-acb2-13044ea553c1',
      label: 'Buy a unicorn',
      completed: false,
    },
  ],
})
window.__state$__ = state$
;(state$ => {
  // enable devtools

  const hook = window.__IMMER_DEVTOOLS_HOOK__
  hook && (hook.enabled = true)

  state$.subscribe({
    next: (...args) => {
      hook.emit(args)
    },
  })
})(state$)

render(<App />, document.getElementById('root'))
