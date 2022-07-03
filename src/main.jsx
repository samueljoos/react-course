import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const listData = [
  {id:'item-1', title: 'hello1', description: 'world1'},
  {id:'item-2', title: 'hello2', description: 'world2'},
  {id:'item-3', title: 'hello3', description: 'world3'},
  {id:'item-4', title: 'hello4', description: 'world4'},
]

function App() {
  const [list, setList] = useState(listData);

  function removeItem(item) {
    setList(l => l.filter(i => i.id !== item.id));
  }

  function updateItem(item) {
    setList(l => l.map(i => i.id === item.id ? item : i));
  }

  return (
    <>
      { list.map((item) => (
        <article>
          <h2>{item.title}</h2>
          <textarea onChange={(e)=> updateItem({...item, description:e.target.value})}>{item.description}</textarea>
          <button onClick={(e)=> removeItem(item)}>remove</button>
        </article>
      ))}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
