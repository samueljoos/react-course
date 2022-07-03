import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';

const test = true ? "true" : "false" // ✅
const element = <div>{ true ? "true" : "false" }</div>; // ✅

// const test = if(true) { "true" }  else { "false" } // ❌
// <div>{ if(true) { "true" }  else { "false" } }</div> // ❌

ReactDOM.createRoot(root).render(element)