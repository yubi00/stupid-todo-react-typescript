import { useState, useEffect } from 'react'
import { State } from '../reducers/todos'

export const useLocalStorage = (data: State, key: string) => {
  const [value, setValue] = useState<State>([])

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem(key) || '{}')
    if (parsedData) {
      setValue(parsedData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data, key])

  return [value, setValue] as const
}
