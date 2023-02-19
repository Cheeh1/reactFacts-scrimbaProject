import { useState } from 'react'
import Navbar from './components/navbar'
import Section from './components/Section'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
      setDarkMode(darkMode => !darkMode)
    }

  return (
  <>
    <div className='container'>
     < Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
     />
     < Section 
      darkMode={darkMode}
     />
    </div>
  </>
  )
}

export default App
