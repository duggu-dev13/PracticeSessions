import { useState } from 'react';
import './App.css'

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="My Title" />      
    </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My Title")  

  function updateTitle(){
    setTitle("New title is: " + Math.random());
  }
  
  return (
    <>
      <button onClick={updateTitle}>Click me to change the Header</button>
      <Header title={title} />      
    </>  
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}
export default App
