import React, { useContext, useRef } from 'react'
import { store } from '../context/store'

interface Props {}

export const AddTodo = (props: Props) => {
  const { dispatch } = useContext(store)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (inputRef.current) {
      dispatch({ type: 'ADD', payload: inputRef.current.value })
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} />
        <button className='btn__add' type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}
