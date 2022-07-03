import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';

const root = ReactDOM.createRoot(document.getElementById('root'));

let state = {
    count: 0,
    username: 'anoniempje',
}

function setState(newState) {
    state = Object.assign({}, state, newState)
    render()
}

function render() {
    root.render(
        <div></div>
    )
}

render()