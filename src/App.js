import React from "react";
import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<Register />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
