import { useContext, useState } from 'react';
import { CountContext } from './context';
import './App.css';

function App() {
  const [count, setCount] = useState(0)   
  return (
    <>
    {/* Wrap context that wants to use the teleported value inside the Provide. */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  return (
    <>
      <CountRender /> <br/>
      <Buttons setCount={setCount}></Buttons>
    </>
  )
}

function CountRender() {
  const count = useContext(CountContext);
  return (
    <>
      {count}
    </>
  )
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={() => {
        setCount(count + 1)
      }}>Count +</button>
      
      <button onClick={() => {
        setCount(count - 1)
      }}>Count -</button>
    </>
  )
}

export default App
