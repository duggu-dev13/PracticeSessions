import { useContext, useState } from 'react';
import { CountContext } from './context';
import './App.css';

function App() {
  const [count, setCount] = useState(0)   

  const contextProps = {
    count, 
    setCount
  }
  
  return (
    <>
    {/* Wrap context that wants to use the teleported value inside the Provide. */}
      <CountContext.Provider value={contextProps}>
        <Count></Count>
      </CountContext.Provider>
    </>
  )
}

function Count() {
  const setCount = useContext(CountContext);
  return (
    <>
      <CountRender /> <br/>
      <Buttons setCount={setCount}></Buttons>
    </>
  )
}

function CountRender() {
  const {count} = useContext(CountContext);
  return (
    <>
      {count}
    </>
  )
}

function Buttons() {
  const {count, setCount} = useContext(CountContext);
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
