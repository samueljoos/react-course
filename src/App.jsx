import { useEffect, useState } from 'react';
import './App.css'

function Greeting() {
    const [name, setName] = useState(() => window.localStorage.getItem('name') || '');

    useEffect(() => {
        console.log('useEffect update'); // Dit wijzigt nu enkel indien name veranderd
        window.localStorage.setItem('name', name);
    }, [name])

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

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <Greeting/>
        </div>
    )
}

export default App
