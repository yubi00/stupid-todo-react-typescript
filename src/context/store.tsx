import React from 'react'
import { State, Actions, initialState } from '../reducers/todos'

type StoreContext = {
  state: State
  dispatch: (action: Actions) => void
}

export const store = React.createContext<StoreContext>({
  state: initialState,
  dispatch: () => {}
})
