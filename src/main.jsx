import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Message({text}){
	return <div>{text}</div>
}


const element = <Message text="bla"/>
ReactDOM.createRoot(root).render(element)