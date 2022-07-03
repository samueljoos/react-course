import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
    const [show, setShow] = useState(false);
    
    const ref = useRef();
    
    useEffect(() => {     
        // met ref.currrent haal je het div html element op.
        gsap.to(ref.current, {
            duration: 1,
            opacity: show ? 1: 0,
            rotate: show ? 180: 0,
        })// met gsap kunnen we er een animatie aan vast hangen
    }, [show]);
    return (
        <>
        <label>
            <input
            type="checkbox"
            checked={show}
            onChange={e => setShow(e.target.checked)}
            />
            {' '}show child
        </label>
        <div
            ref={ref}
            style={{
                padding: 10,
                margin: 10,
                height: 30,
                width: 30,
                border: 'solid',
            }}
        >
        
        </div>
        </>
    )
}
export default App
    