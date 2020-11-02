import React, { useContext, useRef } from 'react'
import { store } from '../context/store'
import { ITodo } from '../reducers/todos'

interface Props {
  todo: ITodo
  index: number
}

export const Todo = ({ todo, index }: Props) => {
  const { dispatch } = useContext(store)
  const checkboxRef = useRef<HTMLInputElement | null>(null)

  const handleCompletedTodo = (index: number): void => {
    if (checkboxRef.current) {
      dispatch({ type: 'MARK_COMPLETED', payload: index })
    }
  }

  return (
    <div className='todo'>
      <input
        type='checkbox'
        className='completed-todo'
        ref={checkboxRef}
        onChange={() => handleCompletedTodo(index)}
        checked={todo.completed ? true : false}
      />
      <p
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.title}
      </p>
      <button onClick={() => dispatch({ type: 'REMOVE', payload: index })}>
        &times;
      </button>
    </div>
  )
}
