import React, { useReducer, useEffect } from 'react'
import { todoReducer, initialState } from '../reducers/todos'
import { store } from '../context/store'
import '../App.css'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'
import { useLocalStorage } from '../hooks/useLocalStorage'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [todos] = useLocalStorage(state, 'todos')

  useEffect(() => {
    dispatch({ type: 'LOAD_TODOS', payload: todos })
  }, [todos])

  return (
    <store.Provider value={{ state, dispatch }}>
      <div className='App'>
        <h1>Just A Stupid TodoApp</h1>
        <AddTodo />
        <TodoList />
      </div>
    </store.Provider>
  )
}

export default App
