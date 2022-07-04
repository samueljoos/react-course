import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import './App.css'

const fetcher = (...props) => fetch(...props).then(res => res.json());

function App() {
    const [q, setQ] = useState('');
    
    const {data, error} =  useSWR(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`, fetcher)

    return (
        <>
            <input
                type="text"
                onChange={e => setQ(e.target.value)}
            />
            
            {
                data?.map(item => (
                    <div key={item.place_id}>
                        <h1>{item.display_name}</h1>
                    </div>
                ))
            }
        </>
    )
}
export default App
    