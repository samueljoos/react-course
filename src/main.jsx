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
    <div>
      <h1>likes: {state.count}</h1>
      <div>
        <button onClick={() =>setState({count: state.count + 1})}>+1</button>
      </div>
      <strong>Hi {state.username} at {new Date().toLocaleTimeString()}</strong>
      <div>
        <input type="text" placeholder='username' onBlur={(event) =>setState({username: event.target.value})} />
      </div>
    </div>
  )
}

render()