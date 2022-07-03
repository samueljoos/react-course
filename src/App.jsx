import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <button className='button' style='background-color: red'>Submit</button>  ❌ */}
      <button className='button' style={{backgroundColor: 'red'}}>Submit</button> {/* ✅ */}
    </div>
  )
}

export default App
