import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Thankyou from './components/Thankyou.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Thankyou />
    </>
  )
}

export default App
