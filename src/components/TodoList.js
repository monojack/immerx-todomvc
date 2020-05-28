import React, { useMemo } from 'react'
import { useImmerx } from 'immerx-react'
import { createDraft, finishDraft } from 'immer'

import { Todo } from './Todo'
import { ListFooter } from './ListFooter'

import { HASHES } from '../constants'
import { useHash } from '../hooks/useHash'

const filters = {
  [HASHES.ALL]: t => true,
  [HASHES.ACTIVE]: t => !t.completed,
  [HASHES.COMPLETED]: t => t.completed,
}

export function TodoList() {
  const [todos, produce] = useImmerx('todos')
  const hash = useHash()

  const visibleTodos = useMemo(() => todos.filter(filters[hash]), [hash, todos])
  const remaining = useMemo(() => visibleTodos.filter(t => !t.completed), [
    visibleTodos,
  ])
  const completed = useMemo(() => visibleTodos.filter(t => t.completed), [
    visibleTodos,
  ])

  function onToggleAll() {
    produce(draft =>
      draft.forEach(todo => (todo.completed = !!remaining.length)),
    )
  }

  function onClearCompleted() {
    // // // state replace
    // produce(draft => draft.filter(t => !t.completed))
    // // individual updates
    // let count = 0
    // todos.forEach((todo, i) => {
    //   todo.completed && produce(draft => void draft.splice(i - count++, 1))
    // })
    // reverse splice loop
    produce(draft => {
      let i = draft.length - 1
      while (i >= 0) {
        draft[i].completed && draft.splice(i, 1)
        i -= 1
      }
      // TODO: write an issue about replace/remove patches here
    })
  }

  return todos.length ? (
    <>
      <main className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={onToggleAll}
          checked={!remaining.length}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {visibleTodos.map(todo => (
            <Todo {...{ id: todo._id }} key={todo._id} />
          ))}
        </ul>
      </main>
      <ListFooter
        completed={completed.length}
        remaining={remaining.length}
        onClearCompleted={onClearCompleted}
      />
    </>
  ) : null
}
