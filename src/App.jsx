import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <button className='button button—small' style={{
          backgroundColor: 'red' 
      }}>Submit</button>
      <button className='button button—medium' style={{
          backgroundColor: 'blue' 
      }}>Submit</button>
      <button className='button button—large' style={{
          backgroundColor: 'green'
      }}>Submit</button>
    </div>
  )
}

export default App
