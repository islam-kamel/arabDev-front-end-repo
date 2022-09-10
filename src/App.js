import React from "react";
import "./App.css";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar.jsx";
import Login from "./pages/login/Login.jsx";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
