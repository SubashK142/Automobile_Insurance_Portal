

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import ColorSchemesExample from "./navbar";
import Home from "./pages/home";
import Insurance from "./insurance";
import Policy from "./pages/policy";
import Claim from "./pages/claim";
import YourComponent from "./container";
import store from "./Strore";
import { Provider } from "react-redux";
import Renew from "./pages/renew";
import Profile from "./pages/profile";

function App() {
  return (
  
    
    <Provider store={store}>
    
    <Router>
      <Routes>
      <Route path="/" element={<YourComponent />} />
     
     
      <Route path="/home" element={<Home />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="/renew" element={<Renew />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;

