import React, { useState } from 'react'
import { useImmerx } from 'immerx-react'
import { v4 as uuid } from 'uuid'
import { isEnterKey } from '../common/isEnterKey'

export function Header() {
  const [, update] = useImmerx()
  const [value, setValue] = useState('')

  function onSubmit() {
    update(
      draft =>
        void draft.todos.push({
          _id: uuid(),
          label: value,
          completed: false,
        }),
    )
    setValue('')
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onKeyUp={e => isEnterKey(e) && onSubmit()}
      />
    </header>
  )
}
