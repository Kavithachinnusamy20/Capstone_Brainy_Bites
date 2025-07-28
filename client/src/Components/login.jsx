
import Navbar from './Navbar';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
const BASE_URL =  `${import.meta.env.VITE_BASE_URL}`
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (formData.username != null &&  formData.password != null) {
      try {
        const username = formData.username;
        const password = formData.password;
        
        const response = await fetch(`${BASE_URL}/auth/register?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
          method: 'GET'
        });
        
        const data = await response.json();
        console.log('data :', data)

        if (!response.ok) {
          setError(` Validation failed: ${data.error || 'Unknown error'} `);
          console.error(`Validation failed: ${data.error || 'Unknown error'}`);
        } else {
          console.log('Validation result:', data.msg || 'Login successful');
          navigate("/Quiz")
          
        }
        if (response.ok) {
        window.alert(" login successful! Welcome to Brainy Bites.");
        setValues({ username: "", password: ""});
      } else {
        window.alert(` login failed: ${data.error || "Something went wrong"}`);
      }



      } catch (error) {
        setError(" Validation request failed: ", error);
        console.error('Validation request failed:', error);
      }
      
    }
    
  };
  
  return (
    <div className="form-content-right">
    <h2>Login Form</h2>
    <form className="form" onSubmit={handleLogin}>
    <div className="form-inputs">
    <label>Username</label>
    <input
    type="text"
    name="username"
    value={formData.username}
    onChange={handleChange}
    className="form-input"
    placeholder="Enter your username"
    />
    </div>
    <div className="form-inputs">
    <label>Password</label>
    <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    className="form-input"
    placeholder="Enter your password"
    />
    </div>
    {error && <p>{error}</p>}
    <button className="form-input btn" type="submit">Login</button>
    
    </form>
    </div>
  );
};

export default Login;