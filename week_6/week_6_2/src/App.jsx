import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  let count = useMemo(() => { 
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);
  return (
    <>
      <input onChange={(e)=> {
        setinputValue(e.target.value)
      }} placeholder='Find the sum from 1 to n'/>
      <h4>The sum from 1 to {inputValue} is {count}</h4>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Counter ({counter})</button>
    </>
  )
}


export default App
