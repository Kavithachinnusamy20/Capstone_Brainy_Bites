import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"

const Navbar =()=>{
    return (
    <nav> 
        <h1>Welcome to Brainy Bites Quiz App</h1>
        <ul>
            <Link to ="/">Home</Link>
            <Link to ="/About">About</Link>
            <Link to ="/Register">Register</Link>
            <Link to ="/User">User</Link>
            <Link to ="/Test">Test</Link>
        </ul>
        </nav>
    );
};

export default Navbar;