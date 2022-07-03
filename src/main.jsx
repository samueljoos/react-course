import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';


function Message(props) {
    const [name, setName] = useState();

    return (
        <div>
        <form>
            <label htmlFor="name">Name</label> {/* in react gebruik je htmlFor in plaats van for */}
            <input
              id="name"
              onChange={(e) => {
                  setName(e.target.value);
              }}
            />
            <br />
            { name ? <>Hello <strong>{name}</strong></> :  'Please type your name '} <br />
        </form>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Message />);
