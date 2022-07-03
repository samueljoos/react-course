import { useState } from 'react'
import './App.css'

function Button(props) {
    return <button className='button' {...props}>Submit</button>
}

function App() {
    return <>
        <Button className='button—small'  style={{ backgroundColor: 'red' }} />
        <Button className='button—medium'  style={{ backgroundColor: 'blue' }} />
        <Button className='button—large'  style={{ backgroundColor: 'green' }} />
    </>
}

export default App
