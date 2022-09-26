import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NavigationBar from './components/navbar/Navbar.jsx'
import React, { useState, useContext } from 'react'

import Register from './pages/register/Register'
import { IsLoggedInContext } from './context/IsLoggedInContext'
import Login from './pages/login/Login.jsx'
import CreatePost from './pages/create-post/CreatePost'
import Home from './pages/Home/Home.jsx'
import Profile from './pages/Profile/Profile'

function App() {
  const [isRendered, setIsRendered] = useState(false)
  const { isLoggedIn } = useContext(IsLoggedInContext)

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} replace />
        <Route path="/login" element={<Login />} replace />
        <Route
          path="/new"
          element={
            isLoggedIn ? (
              <CreatePost isRendered={isRendered} setIsRendered={setIsRendered} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" replace />} />
      </Routes>
      {/* </userDataContext.Provider> */}
    </Router>
  )
}

export default App
