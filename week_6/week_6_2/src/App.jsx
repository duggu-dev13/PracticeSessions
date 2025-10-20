import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
// Base app for fetching todos from API using axios
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//       .then(function(response) {
//         setTodos(response.data)
//       })
//   }, [])

//   return (
//     <>
//       {todos.map((todo => 
//         <Todo key={todo.id} completed={todo.completed} title={todo.title} ></Todo>
//       ))} 
//     </>
//   )
// }

// function Todo({completed, title}) {
//   return(<>
//       <h3>{title}</h3>
//       <p>{completed.toString()}</p>
//     </>
//   )

// App for fetching todos from API providing id specifically.
  // return(
  //   <>
  //   <Todo id={5}></Todo>
  //   </>
  // )
  // function Todo({id}){
  
  //   const [todo, setTodo] = useState([])
    
  //   useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
  //     .then(function(response) {
  //       setTodo(response.data);
  //     })
  //   }, [])
  
  //   return(
  //   <>
  //     <h3>{todo.userId}</h3>
  //     <h3>{todo.title}</h3>
  //   </>
  //   )
  // }

// App for fetching todos from API providing id specifically through buttons.
  const [Todoid, setId] = useState(1);
  return(
    <>
    <button style={{padding: "10px", margin: "10px"}} onClick={function() {setId(1)}}>1</button>
    <button style={{padding: "10px", margin: "10px"}} onClick={function() {setId(2)}}>2</button>
    <button style={{padding: "10px", margin: "10px"}} onClick={function() {setId(3)}}>3</button>
    <Todo id={Todoid}></Todo>
    </>
  )
  
}

function Todo({id}){
  const [todo, setTodo] = useState([])
  
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
    .then(function(response) {
      setTodo(response.data);
    })
  }, [id])

  return(
  <>
    <h3>{todo.userId}</h3>
    <h3>{todo.title}</h3>
  </>
  )
}


export default App
