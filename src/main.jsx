import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';

function Message({username, text, commentCount}) {
    const countLabel = commentCount.length ? commentCount : 'no'
    return <div> 
        {username}: {text} has {countLabel} comments
    </div>
}

const element = <Message username="ioioio" text="Hello world" commentCount={10}/>
ReactDOM.createRoot(root).render(element)