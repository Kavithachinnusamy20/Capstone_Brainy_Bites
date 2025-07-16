import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
    <nav> 
        <h1>Navy</h1>
        <ul>
            <Link to ="/">Home</Link>
            <Link to ="/About">About</Link>
            <Link to ="/Register">Register</Link>
            <Link to ="/Login">Login</Link>
            <Link to ="/Test">Test</Link>
        </ul>
        </nav>
    );
};

export default Navbar;