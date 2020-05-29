import React from 'react'
import { render } from 'react-dom'
import { create } from '@immerx/react'
import { createDevToolsMiddleware } from '@immerx/devtools'

import { App } from './components/App'

const devToolsMiddleware = createDevToolsMiddleware()
create(
  {
    todos: [
      {
        _id: '4ecca858-67f8-491e-94cc-48b262061819',
        label: 'Taste JavaScript',
        completed: true,
      },
      {
        _id: '3c4a086e-2151-4b54-acb2-13044ea553c1',
        label: 'Buy a unicorn',
        completed: false,
      },
    ],
  },
  [devToolsMiddleware],
)

render(<App />, document.getElementById('root'))
