import React, { useEffect, useState, createContext } from 'react'
import './App.css'
import Register from 'pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/navbar/Navbar.jsx'
import Login from './pages/login/Login.jsx'
import CreatePost from './pages/create-post/CreatePost'
import Home from './Home/Home.js'
//  import Addpost from './pages/home-posts/HomePost'
import Profile from './pages/Profile/Profile'

export const savedPostsContext = createContext()

function App() {
    const [isRenderd, setIsRendered] = useState(false)

    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('savedPosts'))) {
            setSavedPosts(JSON.parse(localStorage.getItem('savedPosts')))
        }
    }, [])

    useEffect(() => {
        if (isRenderd) {
            localStorage.setItem('savedPosts', JSON.stringify(savedPosts))
        } else {
            setIsRendered(true)
        }
    }, [savedPosts])
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <savedPostsContext.Provider
                            value={{ savedPosts, setSavedPosts }}
                        >
                            <Home />
                        </savedPostsContext.Provider>
                    }
                />
                <Route
                    path="new"
                    element={
                        <CreatePost
                            isRenderd={isRenderd}
                            setIsRendered={setIsRendered}
                        />
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />

                <Route />
            </Routes>
        </Router>
    )
}

export default App
