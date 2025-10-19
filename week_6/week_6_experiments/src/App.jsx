import { useState, memo } from 'react';
import './App.css'

function App() {
  return (
    <>
      <CardWrappper>
        <Texts />
        <Texts />
      </CardWrappper>

      <CardWrappper>
        <Texts />
        <Texts />
        <Texts />
        <Texts />
      </CardWrappper>

      {/* <CardWrappper innerCommpoenent={<TextComponent1 />} /> */}
    </>
  )
}

function CardWrappper({children}){
  console.log(children)
  return (
    <div style={{border: '1px solid black', padding: '20px', margin: '20px'}}>
      {children}
    </div>
  )
}

function Texts(){
  return (
    <>
      <h3>Hii there</h3>
    </>
  )
}

// function TextComponent() {
//   return (
//     <>
//       <h1>hi there</h1>
//     </>
//   )
// }

// function TextComponent1() {
//   return (
//     <>
//       <h1>hi there hi therererere</h1>
//     </>
//   )
// }


export default App
