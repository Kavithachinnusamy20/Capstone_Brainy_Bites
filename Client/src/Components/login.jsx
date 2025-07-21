
 import Navbar from './Navbar';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple auth logic (replace with real API if needed)
    if (formData.username === "test" && formData.password === "123456") {
      localStorage.setItem("authenticated", "true"); // basic auth flag
      alert("✅ Login successful!");
      navigate("/Test"); // go to Quiz page
    } else {
      setError("⚠️ Invalid username or password");
    }
  };

  return (
    <div className="form-content-right">
      <h1>Login Form</h1>
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
        <Link to ="/quiz">
        <button className="form-input btn" type="submit">Login</button></Link>
         
      </form>
    </div>
  );
};

export default Login;