import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { ToastContainer, } from 'react-toastify';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<h1>Tasks</h1>} />
          <Route path="/add-task" element={<h1>add-task</h1>} />
          <Route path="/tasks/:id" element={<h1>update task</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
