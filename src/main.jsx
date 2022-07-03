import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const firstElement = React.createElement('div', null, 'first element')
const secondElement = React.createElement('div', null, 'second element')

//ReactDOM.createRoot(root).render(firstElement, secondElement) //❌ dit gaat niet werken
