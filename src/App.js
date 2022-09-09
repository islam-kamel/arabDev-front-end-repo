import React, { useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar.jsx";
function App() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    console.log(number);
  });
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<Register />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
