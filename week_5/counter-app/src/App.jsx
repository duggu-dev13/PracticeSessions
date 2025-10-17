import { useState } from 'react'

function App(){
  
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Workout at 6 AM",
    completed: false 
  }, {
    title: "Go to College",
    description: "At 9 AM",
    completed: false
  }, {
    title: "Go to College",
    description: "At 9 AM",
    completed: false
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "New Todo",
      description: "This is a new todo",
    }]);
  }
  
  return ( 
    <div>
      <button onClick={addTodo}>Add random todo</button>
      {
        todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )  
}


function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App
