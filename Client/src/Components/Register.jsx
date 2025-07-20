 import { useState } from 'react';
import React from 'react'
  import Navbar from './Navbar'
  import axios from "axios";
import {Link} from "react-router-dom"

  
 const Register =() =>{

     const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

     const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/register',{name,email,password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    
    return (
        <div className="signup-container">
        <div className="signup-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name"><strong>Name</strong></label>
        <input
        type="text"
        placeholder="Enter Name"
        autoComplete="off"
        name="name"
        className="form-input"
        onChange ={(e)=>setName(e.target.value)}
        />
        </div>
        
        <div className="form-group">
        <label htmlFor="email"><strong>Email</strong></label>
        <input
        type="email"
        placeholder="Enter Email"
        autoComplete="off"
        name="email"
        className="form-input"
        onChange ={(e)=>setEmail(e.target.value)}
        />
        </div>
        
        <div className="form-group">
        <label htmlFor="password"><strong>Password</strong></label>
        <input
        type="password"
        placeholder="Enter Password"
        autoComplete="off"
        name="password"
        className="form-input"
        onChange ={(e)=>setPassword(e.target.value)}
        />
        </div>
        
        <button type="submit" className="form-button">
        Register
        </button>
        
        <p className="login-text">Already Have an Account?</p>
        <Link to="/login" type="button" className="login-button">
        Login
        </Link>
        </form>
        </div>
        </div>
    );
 }
 export default Register