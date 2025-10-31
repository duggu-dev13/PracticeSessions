import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'  
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

import './App.css'

function App() {
  
  return (
    <>
      
      
      <BrowserRouter>
       <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {

  const navigate = useNavigate();
  
  return (
    <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing</button>
        
        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  )
}

export default App
