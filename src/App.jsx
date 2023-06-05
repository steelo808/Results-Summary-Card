import { useState } from 'react'
import './styles.css'
import Results from "./components/results"
import Summary from "./components/Summary"

function App() {
  return (
    <div className='container'>
    <div className ="card">
    <Results />
    <Summary />
    </div>
    </div>
  )
}

export default App
