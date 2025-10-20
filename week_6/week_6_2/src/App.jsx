import { memo, useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

// Its a demo tamplete for custome hooks
function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos').then((response) => {
      setTodos(response.data);
    });
  }, [])

  return todos;
}


function App() {
const todos = useTodo();
  return (
    <>
    {todos}
    </>
  )
}


export default App
