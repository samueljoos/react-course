import { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [name, setName] = useState(window.localStorage.getItem('name') || '');

    useEffect(() => {    // deze functie word aangeroepen bij iedere render van het component
        window.localStorage.setItem('name', name);
    })

    return (
    <div>
        <label htmlFor='name'>Name</label>
        <input value={name} id="name" type="text" onChange={() => {
            setName(event.target.value);
        }} />
        <div>Hi <strong>{name}</strong>!</div>
    </div>
    )
}

export default App
