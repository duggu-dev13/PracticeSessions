import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'  ;
import { lazy, Suspense } from 'react';
import './App.css';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));
// lazy loading will load the component only when it is needed. This is small way to optimisation in react websites.

function App() {
  
  return (
    <>
      <BrowserRouter>
       <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback="...Loading"><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback="...Loading"><Dashboard /></Suspense>} />
          {/* used suspense to wrap lazy loaded components to show fallback content while the component is being loaded. */}
          
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
