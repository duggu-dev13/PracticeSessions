import { memo, useCallback, useState } from 'react';
import './App.css'

function App() {
  const [count ,setCount] = useState(0);
  
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. or in simple way it will remember the function reference  
  const inputFunction = useCallback(() => {
    console.log("Button Clicked");
  }, [])

  return (
    <>
      <ButtonComponent inputFunction={inputFunction}></ButtonComponent> <br />
      <button onClick={() => {
        setCount(count + 1);
      }}>Counter {count}</button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child rendered");

  return (
    <button onClick={inputFunction}>Click Me</button>
  )
})

export default App
