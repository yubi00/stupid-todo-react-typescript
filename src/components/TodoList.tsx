import React, { useContext, useRef } from 'react'
import { store } from '../context/store'
import { Todo } from './Todo'

interface Props {}

export const TodoList = (props: Props) => {
  const { state: todos, dispatch } = useContext(store)
  const markAllRef = useRef<HTMLInputElement>(null)

  const markAllComplete = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (markAllRef.current && markAllRef.current.checked) {
      dispatch({ type: 'MARK_ALL_COMPLETED' })
    } else {
      dispatch({ type: 'MARK_ALL_INCOMPLETED' })
    }
  }

  const deleteAll = () => {
    if (markAllRef.current && markAllRef.current.checked) {
      dispatch({ type: 'DELETE_ALL' })
      markAllRef.current.checked = false
    }
  }

  return (
    <div className='todos'>
      <h2>
        <span>
          {todos.length > 0 && (
            <input
              type='checkbox'
              name='markallcomplete'
              ref={markAllRef}
              onChange={markAllComplete}
            />
          )}
        </span>
        List of Todos
        {markAllRef.current && markAllRef.current.checked && (
          <button className='delete-all' onClick={deleteAll}>
            Delete all
          </button>
        )}
      </h2>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} index={i} />
      ))}
    </div>
  )
}
