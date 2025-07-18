import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar =()=>{
    return (
    <nav> 
        <h1>Welcome to Brainy Bites Quiz App</h1>
        <ul>
             <li><Link to ="/">Home</Link> </li>
            <li><Link to ="/About">About</Link> </li>
            <li><Link to ="/Register">Register</Link></li>
            <li><Link to ="/User">User</Link></li>
            <li><Link to ="/Test">Test</Link></li>
            <li><Link to ="/Result">Result</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;