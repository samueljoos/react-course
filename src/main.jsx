import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// React.createElement(type, props, children)
const element = React.createElement('div',{id:'root-div'}, "hello world")
ReactDOM.createRoot(root).render(element)
