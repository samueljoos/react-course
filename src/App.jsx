import { useEffect, useState } from 'react';
import './App.css'

function useLocalStorage(key, defaultValue='') {
    const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state])

    return [state, setState]
}

function Greeting() {
    const [name, setName] = useLocalStorage('name');
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
