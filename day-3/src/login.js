import React, { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';


function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setname] = useState('');
  const [vehicle, setvehicle] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };

 ;
 

  
  

  return (
    <div className="container">
      <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
        <h1>Login</h1>
        <form >
          
          <label for="username">Username:</label>
          <input className="margin1" type="text" id="username" placeholder="enter your name" name="username" required/>
          <label for="username">Vechile No:</label>
          <input className="margin1"type="text" id="username" placeholder="enter your vechile n"name="username" required/>
          <button type="submit">Login</button>
          </form>
          
        <p>
          Don't have an account?{" "}
          <Link to="/signup"  id="signup-link" >
            New User
          </Link>
        </p>
      </div>
      
    </div>
  );
}

export default Login;
