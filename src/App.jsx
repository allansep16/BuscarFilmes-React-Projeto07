import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuscaDeFilmes from './Components/BuscarFilmes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BuscaDeFilmes/>
    </>
  )
}

export default App
