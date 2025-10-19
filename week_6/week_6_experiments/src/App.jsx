import { useState, memo } from 'react';
import './App.css'

function App() {

  const [todos , setTodos] =useState([{
    id: 1,
    title:"Play Games 1",
    desc: "Play the diablo game 1"
  }, {
    id: 2,
    title:"Play Games 2",
    desc: "Play the diablo game 2"
  }, {
    id: 3,
    title:"Play Games 3",
    desc: "Play the diablo game 3"
  }])

  function newTodo() {
    setTodos([...todos, {
        id: todos.length + 1,
        title: "Play Games " + (todos.length + 1), 
        desc: "Play the diablo game " + (todos.length + 1),
      }]
    );
  }
  
  return (
    <>
    <button onClick={newTodo}>Add todo</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc} />)}
    </>
  )
}

function Todo({title, desc}) {
  return (
    <>
    <h1>{title}</h1>
    <h5>{desc}</h5>
    </>
  )
}


export default App
