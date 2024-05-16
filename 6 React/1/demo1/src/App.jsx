import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="max-w-screen-xl mx-auto">
      <div className="container mx-auto flex justify-evenly py-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    </>
  )
}

export default App
