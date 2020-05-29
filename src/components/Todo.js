import React, { useState, useRef, useEffect, useMemo } from 'react'
import { useImmerx } from '@immerx/react'
import { isEnterKey } from '../common/isEnterKey'
import { isEscapeKey } from '../common/isEscapeKey'

export function Todo({ id }) {
  const lens = useMemo(
    () => ({
      get: state => state.todos.find(t => t._id === id),
      set: (state, childState) => {
        const idx = state.todos.findIndex(t => t._id === id)

        if (childState === null) {
          state.todos.splice(idx, 1)
        } else {
          Object.assign(state.todos[idx], childState)
        }
      },
    }),
    [id],
  )

  const [todo, update] = useImmerx(lens)
  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState(todo.label)
  const inputRef = useRef(null)

  const onToggle = () =>
    update(draft => void (draft.completed = !draft.completed))
  const onChange = ({ target: { value } }) => setValue(value)
  const onSubmit = () => update(draft => void (draft.label = value))
  const onRemove = () => update(draft => null)
  const onKeyUp = e => {
    if (isEnterKey(e)) {
      setEditable(false)
      onSubmit()
    } else if (isEscapeKey(e)) {
      setEditable(false)
      setValue(todo.label)
    }
  }

  useEffect(() => {
    if (editable) {
      inputRef.current?.select()
    }
  }, [editable])

  return (
    <li
      data-id={todo._id}
      className={[
        todo.completed ? 'completed' : '',
        editable ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={onToggle}
          checked={todo.completed}
        />
        <label onDoubleClick={() => setEditable(true)}>{todo.label}</label>
        <button className="destroy" onClick={onRemove} />
      </div>
      <input
        ref={inputRef}
        className="edit"
        onBlur={() => setEditable(false)}
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={value}
      />
    </li>
  )
}
