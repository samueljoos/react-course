import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
    const [q, setQ] = useState('');
    const [data, setData] = useState([]);
    
    const fetchData = useCallback(async (q) => {
        if(q.length) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`);
            const d = await response.json();
            setData(d);
        }
    },[])

    useEffect(() => {
        fetchData(q);
    }, [q])

    return (
        <>
            <input
                type="text"
                onChange={e => setQ(e.target.value)}
            />
            
            {
                data.map(item => (
                    <div key={item.place_id}>
                        <h1>{item.display_name}</h1>
                    </div>
                ))
            }
        </>
    )
}
export default App
    