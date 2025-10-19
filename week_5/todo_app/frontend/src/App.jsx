import { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:3000/todos')
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);  
      });
    }, 5000)
  } , []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
