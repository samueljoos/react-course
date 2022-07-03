import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(
    <div>
      <h1>this part doesnt change</h1>
      <strong>{new Date().toLocaleTimeString()}</strong>
    </div>
  )

}
setInterval(tick, 1000);
tick();