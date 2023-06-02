import { useState } from 'react'
import './styles.css'
import Results from "./components/results"
import Summary from "./components/Summary"

function App() {
  return (
    <div className='container'>
    <Results />
    <Summary />
    </div>
  )
}

export default App
