

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;

