import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={function () {
        setCount(count += 1)
      }}>
        count is {count}
      </button>
    </div>
  )
}

export default App
