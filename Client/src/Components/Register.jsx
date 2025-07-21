import React from 'react';
import "../styles/register.css"
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';
import Login from './login'
 import { Link } from "react-router-dom";

const Register = () => {
    const {username} = useParams();
    const { handleChange, values, handleSubmit,errors } = useForm();
    
    return (
        
        <div className ="form-content-right">      
        {/* <div class="username-box">Username: {username}</div> */}
        <h1>Signin & Signup Form</h1>
        <form className="form" onSubmit={handleSubmit} >
        <div className="form-inputs">
        <label htmlFor="username" className='form-label'>
        Username
        </label>
        <input 
        type="text"
        id ="username"
        name ="username"
        className ="form-input"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className="form-inputs">
        <label htmlFor="email" className='form-label'>
        Email
        </label>
        <input 
        type="text"
        id="email"
        name ="email"
        className ="fprm-input"
        placeholder="Enter your email"
        value ={values.email}
        onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        </div>
        
        <div className="form-inputs">
        <label htmlFor="password" className='form-label'>
        password
        </label>
        <input 
        type="password"
        id="password"
        name ="password"
        className ="form-input"
        placeholder="Enter your password"
        value ={values.password}
        onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        </div>
        
        
        <div className="form-inputs">
        <label htmlFor="password2" className='form-label'>
        Confirm password
        </ label>
        <input 
        type="password"
        id="password2"
        name ="password2"
        className ="form-input"
        placeholder="Enter your confirm password"
        value ={values.password2}
        onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
        <button className ="form-input btn" type ="submit">Signup </button>
        <span className="form-input-login">
        <p>Already have an account?</p>Login&nbsp;
        <Link to="/Login">here</Link>  
        </span>
        </form>
        </div>
    )
}

export default Register;