export type Actions =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: number }
  | { type: 'MARK_COMPLETED'; payload: number }
  | { type: 'MARK_ALL_COMPLETED' }
  | { type: 'MARK_ALL_INCOMPLETED' }
  | { type: 'DELETE_ALL' }
  | { type: 'LOAD_TODOS'; payload: State }

export interface ITodo {
  title: string
  completed: boolean
}

export type State = ITodo[]

export const initialState: State = []

export const todoReducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.payload
    case 'ADD':
      return [...state, { title: action.payload, completed: false }]
    case 'REMOVE':
      return state.filter((_, i) => i !== action.payload)
    case 'MARK_COMPLETED':
      return state.map((todo, i) => {
        if (i === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case 'MARK_ALL_COMPLETED':
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    case 'MARK_ALL_INCOMPLETED':
      return state.map((todo) => {
        return { ...todo, completed: false }
      })
    case 'DELETE_ALL':
      return initialState
    default:
      return state
  }
}
