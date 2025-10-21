import {useEffect, useRef, useState } from 'react';
import './App.css'

// Simple example of useRef to access a DOM element and modify it after 5 seconds

function App() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef(); 
  useEffect(() => {
    setTimeout(() => {
        console.log(divRef.current);
        divRef.current.innerHTML = 10;
      }, 5000);
  }, []);
  return (
    <>
  Hi there your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}


export default App
