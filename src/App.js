import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/navbar/Navbar.jsx'
import React, { useState } from 'react'

import Register from './pages/register/Register'
import Login from './pages/login/Login.jsx'
import CreatePost from './pages/create-post/CreatePost'
import Home from './pages/Home/Home.jsx'
import Profile from './pages/Profile/Profile'

function App() {
  const [isRendered, setIsRendered] = useState(false)
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} replace />
        <Route path="/login" element={<Login />} replace />
        <Route path="/new" element={<CreatePost isRendered={isRendered} setIsRendered={setIsRendered} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
