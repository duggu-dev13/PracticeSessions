import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'  ;
import Landing from './components/Landing';
import './App.css';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
// lazy loading will load the component only when it is needed. This is small way to optimisation in react websites.

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
