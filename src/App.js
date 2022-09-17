import React from 'react'
import './App.css'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/navbar/Navbar.jsx'
import Login from './pages/login/Login.jsx'
import CreatePost from './pages/create-post/CreatePost'
function App() {
    // console.log()

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" />
                <Route path="new" element={<CreatePost />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route />
            </Routes>
        </Router>
    )
}

export default App
