import { useState } from 'preact/hooks'
import { Routes } from './routes'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes />
    </>
  )
}
