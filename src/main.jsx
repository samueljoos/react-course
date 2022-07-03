import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PropTypes from 'prop-types';

function Message({text}) {
    return <div>{text}</div>
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

// Message.propTypes = {
//     text: (props, propName, componentName) => {
//         if(typeof props[propName] !== 'string') {
//             return new Error(`${propName} in ${componentName} must be a string`)
//         }
//     }
// }


const element = <Message text="bla"/>
ReactDOM.createRoot(root).render(element)